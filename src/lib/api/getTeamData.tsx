import { performRequest, PerformRequestParams } from '@/lib/datocms'

const PAGE_CONTENT_QUERY = `
query GetTeamByUser ($teamName: String!) {
  allTeams(filter: {teamname: {eq: $teamName}, teammenmber: {}}) {
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

function getPageRequest(isEnabled: boolean, teamName: string): PerformRequestParams {
  return {
    query: PAGE_CONTENT_QUERY,
    includeDrafts: isEnabled,
    variables: {
      "teamName": teamName
    },
    revalidate: 0,
  }
}

export async function getTeamData(teamName: string): Promise<TeamData | undefined> {
  try {
    const pageRequest = getPageRequest(false, teamName)
    const data = await performRequest<Data>(pageRequest)
    return data.allTeams[0]
  } catch (error) {
    console.error('Error fetching navigation data:', error)
    return undefined
  }
}
