import { performRequest, PerformRequestParams } from '@/lib/datocms'

const PAGE_CONTENT_QUERY = `
query test($testId: ItemId!) {
    test(filter: {id: {eq: $testId}}) {
      name
      questions {
        ... on CodequestionRecord {
          id
          pytanie
          code {
            value
          }
          _modelApiKey
        }
        ... on ImagequestionRecord {
          id
          question
          _modelApiKey
          image {
            url
          }
        }
        ... on MultiplechoiceRecord {
          id
          question {
            value
          }
          _modelApiKey
        }
        ... on OpenquestionRecord {
          id
          question
          _modelApiKey
        }
        ... on TruefalseRecord {
          id
          question
          _modelApiKey
        }
      }
    }
  }
  `

export interface TestData {
  name: string
  questions: Question[]
  testtime: string
}

export interface Question {
  [key: string]: any
}

interface Data {
  test: TestData
}

function getPageRequest(isEnabled: boolean, testId: string): PerformRequestParams {
  return {
    query: PAGE_CONTENT_QUERY,
    includeDrafts: isEnabled,
    variables: {
      testId: testId,
    },
    revalidate: 0,
  }
}

export async function getTestById(id: string): Promise<TestData | undefined> {
  try {
    const pageRequest = getPageRequest(false, id)
    const data = await performRequest<Data>(pageRequest)

    const test = data?.test

    return test
  } catch (error) {
    console.error('Error fetching test:', error)
    return undefined
  }
}
