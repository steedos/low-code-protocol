import { createPageList } from '@/utils/createPageList'

const pages = createPageList(
  require.context(`../pages/docs/?meta=title,shortTitle,published`, false, /\.mdx$/),
  'docs'
)

export const documentationNav = {
  '快速向导': [
    pages['overview'],
    pages['package'],
    pages['metadata'],
    pages['code'],
    pages['services'],
    pages['standard-objects'],
    pages['sync'],
    pages['designer'],
  ],
  '内核微服务': [
    pages['service-package'],
    pages['service-metadata'],
    pages['service-records'],
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
