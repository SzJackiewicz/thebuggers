import { performRequest, PerformRequestParams } from '@/lib/datocms'

const PAGE_CONTENT_QUERY = `
query MyQuery {
  allGroups {
    path {
      href
      bgcolor
      id
      initials
      name
    }
    module {
      id
      modulecontent
      modulename
      url
    }
  }
}
  `
export interface GroupData {
  teamname: string
  module: {
    id: string
    modulecontent: string
    modulename: string
    url: string
  }[]
  path: Path
}
interface Path {
  href: string
  bgcolor: string
  id: string
  initials: string
  name: string
}

interface Data {
  allGroups: GroupData[]
}

function getPageRequest(isEnabled: boolean): PerformRequestParams {
  return {
    query: PAGE_CONTENT_QUERY,
    includeDrafts: isEnabled,
    variables: {},
    revalidate: 0,
  }
}

export async function getGroups(): Promise<GroupData[]> {
  try {
    const pageRequest = getPageRequest(false)
    const data = await performRequest<Data>(pageRequest)
    return data.allGroups
  } catch (error) {
    console.error('Error fetching navigation data:', error)
    return []
  }
}
