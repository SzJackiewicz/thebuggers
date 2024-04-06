import { performRequest, PerformRequestParams } from '@/lib/datocms'

const PAGE_CONTENT_QUERY = `
query GetAllTests {
    allTests {
      id
      questions {
        ... on CodequestionRecord {
          id
          answear
        }
        ... on MultiplechoiceRecord {
          id
          answear
        }
        ... on OpenquestionRecord {
          id
          answer
        }
        ... on TruefalseRecord {
          id
          answear
        }
      }
    }
  }
  `

export interface TestWithAnswer {
  id: string
  questions: QuestionAnswer[]
}

interface QuestionAnswer {
  id: string
  answer: string
}

interface Data {
  allTests: TestWithAnswer[]
}

function getPageRequest(isEnabled: boolean): PerformRequestParams {
  return {
    query: PAGE_CONTENT_QUERY,
    includeDrafts: isEnabled,
    variables: {},
    revalidate: 0,
  }
}

export async function getAllTests(): Promise<TestWithAnswer[] | undefined> {
  try {
    const pageRequest = getPageRequest(false)
    const data = await performRequest<Data>(pageRequest)

    const tests = data?.allTests

    return tests
  } catch (error) {
    console.error('Error fetching test:', error)
    return undefined
  }
}
