import { performRequest, PerformRequestParams } from '@/lib/datocms'
const PAGE_CONTENT_QUERY = `
query getHomePage{
  allDocuments {
    document {
      filename
    }
    documentname
    ducumenturl
    bgcolor
  }
}
  `

export interface Document {
  filename: string
}

interface DocumentObject {
  documentname: string
  document: Document | null
  ducumenturl: string
  bgcolor: string
}

interface Data {
  allDocuments: DocumentObject[]
}

function getPageRequest(isEnabled: boolean, locale: string = 'pl_PL'): PerformRequestParams {
  return {
    query: PAGE_CONTENT_QUERY,
    includeDrafts: isEnabled,
    variables: {
      locale: locale,
    },
  }
}

export async function getDocumentsData(locale: string = 'pl_PL'): Promise<Data | undefined> {
  try {
    const pageRequest = getPageRequest(false, locale)
    const data = await performRequest<Data>(pageRequest)
    console.log(data)
    return data
  } catch (error) {
    console.error('Error fetching navigation data:', error)
    return undefined
  }
}
