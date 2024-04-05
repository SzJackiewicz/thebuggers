import { performRequest, PerformRequestParams } from '@/lib/datocms'

const PAGE_CONTENT_QUERY = `
query MyQuery {
  layout {
    menu {
      ... on MenuItemRecord {
        id
        title
      }
    }
  }
}
  `

interface Menu {
  id: string
  title: string
}

interface Data {
  layout: {
    menu: Menu[]
  }
}

function getPageRequest(isEnabled: boolean): PerformRequestParams {
  return {
    query: PAGE_CONTENT_QUERY,
    includeDrafts: isEnabled,
    variables: {},
    revalidate: 0,
  }
}

export async function getNavigationData() {
  try {
    const pageRequest = getPageRequest(false)
    const data = await performRequest<Data>(pageRequest)

    return data.layout.menu
  } catch (error) {
    console.error('Error fetching navigation data:', error)
    return []
  }
}
