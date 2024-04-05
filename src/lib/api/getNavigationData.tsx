import { performRequest, PerformRequestParams } from '@/lib/datocms'

const PAGE_CONTENT_QUERY = `
query GetMenuByUser {
  allMenus {
    menuitems {
      menuname
    }
    user {
      username
    }
  }
}
  `
export interface MenuItem {
  menuname: string
}
interface Menu {
  menuitems: {menuname: string}
  user: {username: string}
}

interface Data {
  allMenus: Menu[]
}

function getPageRequest(isEnabled: boolean): PerformRequestParams {
  return {
    query: PAGE_CONTENT_QUERY,
    includeDrafts: isEnabled,
    variables: {},
    revalidate: 0,
  }
}

export async function getNavigationData(username: string = ""): Promise<MenuItem[]>{
  try {
    const pageRequest = getPageRequest(false)
    const data = await performRequest<Data>(pageRequest)

    const allMenu = data.allMenus

    return allMenu.filter(item => item.user.username === username).map(item => item.menuitems);
  } catch (error) {
    console.error('Error fetching navigation data:', error)
    return []
  }
}
