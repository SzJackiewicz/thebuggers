import { CalendarIcon, ChartPieIcon, DocumentDuplicateIcon, FolderIcon, HomeIcon, UsersIcon } from '@heroicons/react/24/outline'

export const navigationLinks = [
  { name: 'Strona główna', href: '/', icon: HomeIcon },
  { name: 'Zespół', href: '/team', icon: UsersIcon },
  { name: 'HR-App', href: '/hrapp', icon: FolderIcon },
  { name: 'Onboarding', href: '/onboarding', icon: CalendarIcon },
  { name: 'Dokumenty', href: '/documents', icon: DocumentDuplicateIcon },
  { name: 'Menadżer', href: '/manager', icon: ChartPieIcon },
]
