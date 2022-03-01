import { createPageList } from '@/utils/createPageList'

const pages = createPageList(
  require.context(`../pages/docs/?meta=title,shortTitle,published`, false, /\.mdx$/),
  'docs'
)

export const documentationNav = {
  '快速向导': [
    pages['overview'],
    pages['metadata'],
    pages['code'],
    pages['package'],
    pages['standard-objects'],
    pages['sync'],
    pages['designer'],
    pages['services'],
  ],
  '服务': [
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
