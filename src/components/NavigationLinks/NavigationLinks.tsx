import { classNames } from '@/utils/styleUtils'
import { usePathname } from 'next/navigation'
import { MenuItem } from '@/lib/api/getNavigationData'
import { getIconComponent } from '@/utils/getIconComponents'

type Props = {
  navigation: MenuItem[]
}

const NavigationLinks = ({ navigation }: Props) => {
  const pathname = usePathname()
  const pathnameMain = pathname.split('/')[1] || ''
  return (
    <ul
      role='list'
      className='-mx-2 space-y-1'
    >
      {navigation.map((item: MenuItem) => (
        <li key={item.menuname}>
          <a
            href={`/${item.slug}`}
            className={classNames(
              pathnameMain === item.slug.substring(0) ? 'bg-gray-800 text-white' : 'text-gray-400 hover:text-white hover:bg-gray-800',
              'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold'
            )}
          >
            {getIconComponent(item.icon, 'shrink-0')}
            {item.menuname}
          </a>
        </li>
      ))}
    </ul>
  )
}

export default NavigationLinks
