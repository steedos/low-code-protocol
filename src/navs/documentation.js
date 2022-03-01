import { createPageList } from '@/utils/createPageList'

const pages = createPageList(
  require.context(`../pages/docs/?meta=title,shortTitle,published`, false, /\.mdx$/),
  'docs'
)

export const documentationNav = {
  '低代码协议': [
    {
      title: '概览',
      href: '/docs/overview',
      match: /^\/docs\/overview/,
    },
    pages['metadata'],
  ],
  'API': [
    pages['api-metadata'],
    pages['api-records'],
  ],
  'UI': [
    pages['ui-record-view'],
    pages['ui-list-view'],
  ],
}
