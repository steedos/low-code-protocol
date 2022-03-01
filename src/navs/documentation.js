import { createPageList } from '@/utils/createPageList'

const pages = createPageList(
  require.context(`../pages/docs/?meta=title,shortTitle,published`, false, /\.mdx$/),
  'docs'
)

export const documentationNav = {
  'Getting Started': [
    {
      title: 'Overview',
      href: '/docs/overview',
      match: /^\/docs\/overview/,
    },
    // pages['editor-setup'],
  ],
}
