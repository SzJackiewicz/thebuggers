import { performRequest, PerformRequestParams } from '@/lib/datocms'
import * as HeroIcons from '@heroicons/react/24/outline'
import { useStore } from '@/hooks/useStore'

const PAGE_CONTENT_QUERY = `
query GetMenu ($locale: SiteLocale) {
  allMenus {
    menuitems(locale: $locale) {
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

export interface MenuItem {
  menuname: string
  slug: string
  icon: keyof typeof HeroIcons
}
export interface Menu {
  menuitems: MenuItem[]
  user: { username: string }
}

interface Data {
  allMenus: Menu[]
}

function getPageRequest(isEnabled: boolean, locale: string = 'pl_PL'): PerformRequestParams {
  return {
    query: PAGE_CONTENT_QUERY,
    includeDrafts: isEnabled,
    variables: {
      locale: locale,
    },
    revalidate: 0,
  }
}

export async function getNavigationData(username: string = '', locale: string = 'pl_PL'): Promise<MenuItem[]> {
  try {
    const pageRequest = getPageRequest(false, locale)
    const data = await performRequest<Data>(pageRequest)

    const allMenu = data.allMenus

    return allMenu.filter((item) => item.user.username === username).flatMap((item) => item.menuitems)
  } catch (error) {
    console.error('Error fetching navigation data:', error)
    return []
  }
}
