import { performRequest, PerformRequestParams } from '@/lib/datocms'
import * as HeroIcons from '@heroicons/react/24/outline';

const PAGE_CONTENT_QUERY = `
query GetMenuByUser {
  allMenus {
    menuitems {
      menuname
      slug
      icon
    }
    user {
      username
    }
  }
}
  `

export const iconMap = {
  CalendarIcon: HeroIcons.CalendarIcon,
  ChartPieIcon: HeroIcons.ChartPieIcon,
  DocumentDuplicateIcon: HeroIcons.DocumentDuplicateIcon,
  FolderIcon: HeroIcons.FolderIcon,
  HomeIcon: HeroIcons.HomeIcon,
  UsersIcon: HeroIcons.UsersIcon,
  MapIcon: HeroIcons.MapIcon
}

export interface MenuItem {
  menuname: string
  slug: string
  icon: keyof typeof HeroIcons;
}
export interface Menu {
  menuitems: MenuItem[]
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

    return allMenu.filter(item => item.user.username === username).flatMap(item => item.menuitems)
  } catch (error) {
    console.error('Error fetching navigation data:', error)
    return []
  }
}
