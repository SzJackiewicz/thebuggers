import { Tools } from '@/content/Tools'
import Unleash from '../content/unleash.mdx'
import Vitals from '../content/vitals.mdx'
import { Devs } from '@/content/Devs'

export const tabsGroup = {
  AUTOMATIC_TESTER: [],
  FRONTEND: [
    {
      value: 'apps',
      label: 'Devs 4 Devs',
      content: <Devs />,
    },
    {
      value: 'unleash',
      label: 'Unleash',
      content: <Unleash />,
    },
    {
      value: 'vitals',
      label: 'Web Vitals',
      content: <Vitals />,
    },
    {
      value: 'config',
      label: 'Narzędzia',
      content: <Tools />,
    },
  ],
}
