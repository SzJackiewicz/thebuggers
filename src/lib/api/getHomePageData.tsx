import { performRequest, PerformRequestParams } from '@/lib/datocms'
import * as HeroIcons from '@heroicons/react/24/outline'

const PAGE_CONTENT_QUERY = `
query getHomePage ($locale: SiteLocale){
  page(locale: $locale,filter: {id: {eq: "DixkwF4VRR-ogq2oz2mLgw"}}) {
    id
    sections {
      ... on FeatureListSectionRecord {
        id
        displayOption
        featuresHeader
        feature {
          slug
          featureTitle
          featureDescription
          iconname
          slug
        }
      }
    }
  }
}
  `
export interface Feature {
  featureTitle: string
  featureDescription: string
  iconname: keyof typeof HeroIcons
  slug: string
}

export interface Section {
  id: string
  displayOption: string
  featuresHeader: string
  feature: Feature[]
}

interface Page {
  id: string
  sections: Section[]
}

interface Data {
  page: Page
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

export async function getHomePageData(locale: string = 'pl_PL'): Promise<Data | undefined> {
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
