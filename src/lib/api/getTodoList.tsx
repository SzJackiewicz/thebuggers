import { performRequest, PerformRequestParams } from '@/lib/datocms'
const PAGE_CONTENT_QUERY = `
query getHomePage{
        allTodos {
          todo
        }
      }
    
  `

interface ToDo {
  todo: string
}

interface Data {
  allTodos: ToDo[]
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

export async function getToDoData(locale: string = 'pl_PL'): Promise<Data | undefined> {
  try {
    const pageRequest = getPageRequest(false, locale)
    const data = await performRequest<Data>(pageRequest)
    return data
  } catch (error) {
    console.error('Error fetching navigation data:', error)
    return undefined
  }
}
