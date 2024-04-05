import { performRequest, PerformRequestParams } from '@/lib/datocms'

const PAGE_CONTENT_QUERY = `
query MyQuery {
  thebugger {
    logo {
      url
    }
    favicon {
      url
    }
  }
}
  `
export interface Logo {
  url: string
}

export interface Settings {
  logo: Logo,
  favicon: {
    url: string
  }
}

interface Data {
  thebugger: Settings
}

function getPageRequest(isEnabled: boolean): PerformRequestParams {
  return {
    query: PAGE_CONTENT_QUERY,
    includeDrafts: isEnabled,
    variables: {},
    revalidate: 0,
  }
}

export async function getSettings(): Promise<Settings>{
  try {
    const pageRequest = getPageRequest(false)
    const data = await performRequest<Data>(pageRequest)

    return data.thebugger
  } catch (error) {
    console.error('Error fetching navigation data:', error)
    // TODO
    // @ts-ignore
    return {}
  }
}
