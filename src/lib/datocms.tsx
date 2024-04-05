type ApiResponse = {
  data: object
}

type ApiFetchParams = {
  body: string
  includeDrafts?: boolean
  excludeInvalid?: boolean
  visualEditingBaseUrl?: string | null
  revalidate?: number
}

export type PerformRequestParams = {
  query: string
  variables?: { [key: string]: unknown }
  includeDrafts?: boolean
  excludeInvalid?: boolean
  visualEditingBaseUrl?: string | null
  revalidate?: number
}

const apiFetch =
  async ({
    body,
    includeDrafts = false,
    excludeInvalid = false,
    visualEditingBaseUrl = null,
    revalidate,
  }: ApiFetchParams): Promise<ApiResponse> => {

    const headers: { [key: string]: string } = {
      Authorization: `Bearer ${process.env.NEXT_DATOCMS_API_TOKEN}`,
      ...(includeDrafts ? { 'X-Include-Drafts': 'true' } : {}),
      ...(excludeInvalid ? { 'X-Exclude-Invalid': 'true' } : {}),
      ...(visualEditingBaseUrl
        ? {
            'X-Visual-Editing': 'vercel-v1',
            'X-Base-Editing-Url': visualEditingBaseUrl,
          }
        : {}),
      ...(process.env.NEXT_DATOCMS_ENVIRONMENT ? { 'X-Environment': process.env.NEXT_DATOCMS_ENVIRONMENT } : {}),
    }

    const init = {
      method: 'POST',
      headers,
      body,
      ...(revalidate && { next: { revalidate } }),
    }

    const response = await fetch('https://graphql.datocms.com/', init)

    const responseBody = await response.json()
    if (!response.ok) {
      throw new Error(`${response.status} ${response.statusText}: ${JSON.stringify(responseBody)}`)
    }

    return responseBody
  }


export async function performRequest<T>({
  query,
  variables = {},
  includeDrafts = false,
  excludeInvalid = false,
  visualEditingBaseUrl,
  revalidate,
}: PerformRequestParams): Promise<T> {
  const { data } = await apiFetch({
    body: JSON.stringify({ query, variables, revalidate }),
    includeDrafts,
    excludeInvalid,
    visualEditingBaseUrl,
    revalidate,
  })

  return data as T
}
