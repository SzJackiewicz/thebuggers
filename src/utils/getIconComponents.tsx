import { classNames } from '@/utils/styleUtils'
import { usePathname } from 'next/navigation'
import * as HeroIcons from '@heroicons/react/24/outline'

export const iconMap = {
  CalendarIcon: HeroIcons.CalendarIcon,
  ChartPieIcon: HeroIcons.ChartPieIcon,
  DocumentDuplicateIcon: HeroIcons.DocumentDuplicateIcon,
  FolderIcon: HeroIcons.FolderIcon,
  HomeIcon: HeroIcons.HomeIcon,
  UsersIcon: HeroIcons.UsersIcon,
  MapIcon: HeroIcons.MapIcon,
  ChatBubbleBottomCenterTextIcon: HeroIcons.ChatBubbleBottomCenterTextIcon,
  ChevronDoubleRight: HeroIcons.ChevronDoubleRightIcon,
  QuestionMarkCircle: HeroIcons.QuestionMarkCircleIcon,
  BuildingOfficeIcon: HeroIcons.BuildingOfficeIcon,
}

export function getIconComponent(iconName: keyof typeof HeroIcons, className?: string): JSX.Element | null {
  // @ts-ignore
  if (iconMap[iconName]) {
    // @ts-ignore
    const IconComponent = iconMap[iconName]
    return (
      <IconComponent
        className={`h-6 w-6 ${className}`}
        aria-hidden='true'
        color='white'
      />
    )
  } else {
    return null
  }
}
