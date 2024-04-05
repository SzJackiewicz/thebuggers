import { CalendarIcon, ChartPieIcon, DocumentDuplicateIcon, FolderIcon, HomeIcon, UsersIcon } from '@heroicons/react/24/outline'

export const navigationLinks = [
  { name: 'Strona główna', href: '/', icon: HomeIcon, current: true },
  { name: 'Zespół', href: '/team', icon: UsersIcon, current: false },
  { name: 'HR-App', href: '/hrapp', icon: FolderIcon, current: false },
  { name: 'Onboarding', href: '/onboarding', icon: CalendarIcon, current: false },
  { name: 'Dokumenty', href: '/documents', icon: DocumentDuplicateIcon, current: false },
  { name: 'Menadżer', href: '/manager', icon: ChartPieIcon, current: false },
]
