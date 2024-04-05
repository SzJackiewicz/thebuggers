import { performRequest, PerformRequestParams } from '@/lib/datocms'

const PAGE_CONTENT_QUERY = `
query GetTeamByUser {
  allTeams(filter: {teamname: {eq: "Ecommerce + Interfaces"}, teammenmber: {}}) {
    manager {
      managermember {
        teammembername
        teammemberposition
        teammemberimg {
          url
        }
      }
    }
    teammenmber {
      teammembername
      teammemberimg {
        url
      }
      teammemberposition
    }
    teamname
  }
}
  `
export interface TeamData {
  teamname: string
  manager: {
    managermember: TeamMemberData
  }
  teammenmber: TeamMemberData[]
}
interface TeamMemberData {
  teammembername: string
  teammemberposition: string
  teammemberimg: {
    url: string
  }
}

interface Data {
  allTeams: TeamData[]
}

function getPageRequest(isEnabled: boolean): PerformRequestParams {
  return {
    query: PAGE_CONTENT_QUERY,
    includeDrafts: isEnabled,
    variables: {},
    revalidate: 0,
  }
}

export async function getTeamData(): Promise<TeamData | undefined> {
  try {
    const pageRequest = getPageRequest(false)
    const data = await performRequest<Data>(pageRequest)
    console.log(data)
    return data.allTeams[0]
  } catch (error) {
    console.error('Error fetching navigation data:', error)
    return undefined
  }
}
