import { performRequest, PerformRequestParams } from '@/lib/datocms'

const PAGE_CONTENT_QUERY = `
query GetTeamByUser {
  team {
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
  team: TeamData
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

    const team = data.team

    return team
  } catch (error) {
    console.error('Error fetching navigation data:', error)
    return undefined
  }
}
