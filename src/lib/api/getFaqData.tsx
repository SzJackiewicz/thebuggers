import { performRequest, PerformRequestParams } from '@/lib/datocms'
const PAGE_CONTENT_QUERY = `
query MyQuery {
    allFaqsections {
      faqsection {
        questions {
          answer {
            value
          }
          question
        }
      }
    }
  }
`

export interface FAQ {
  url: string
}

interface ChildrenChildren {
  type: string
  value: string
}

interface Children {
  type: string
  children: ChildrenChildren[]
}

interface AnswearDocument {
  type: string
  children: Children[]
}

interface AnswearValue {
  schema: string
  document: AnswearDocument
}

interface Answear {
  value: AnswearValue
}

interface Question {
  answer: Answear
  question: string
}

interface FAQSection {
  questions: Question[]
}

interface FAQSections {
  faqsection: FAQSection
}

interface Data {
  allFaqsections: FAQSections[]
}

function getPageRequest(isEnabled: boolean): PerformRequestParams {
  return {
    query: PAGE_CONTENT_QUERY,
    includeDrafts: isEnabled,
    variables: {},
  }
}

export async function getFaqData(): Promise<Data | undefined> {
  try {
    const pageRequest = getPageRequest(false)
    const data = await performRequest<Data>(pageRequest)
    console.log(data)
    return data
  } catch (error) {
    console.error('Error fetching navigation data:', error)
    return undefined
  }
}
