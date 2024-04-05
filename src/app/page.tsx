import { getHomePageData } from '@/lib/api/getHomePageData'
import { Home1 } from '@/components/Home/Home-1'
import { Home2 } from '@/components/Home/Home-2'
import { Home3 } from '@/components/Home/Home-3'

export default async function Home() {
  // TODO:
  const locale = 'pl_PL'
  const data = await getHomePageData(locale)
  const section = data?.page.sections[0]
  if (!section) return

  const feature = section.feature

  const chooseComponent = (name: string) => {
    switch (name) {
      case 'card':
        return Home1(feature, section)
      case 'grid':
        return Home2(feature, section)
      case 'with_product':
        return Home3(feature, section)
      default:
        return Home1(feature, section)
    }
  }

  const ChosenComponent = chooseComponent(section.displayOption)

  return <div>{ChosenComponent}</div>
}
