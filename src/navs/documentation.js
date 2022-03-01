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
    pages['formular'],
    pages['automation'],
    pages['trigger'],
    pages['services'],
    pages['page'],
    pages['standard-objects'],
    pages['sync'],
    pages['designer'],
  ],
  '元数据': [
    pages['metadata-object'],
    pages['metadata-permissions'],
    pages['metadata-ui'],
    pages['metadata-automation'],
    pages['metadata-bpm'],
    pages['metadata-report'],
  ],
  '内核微服务': [
    pages['service-package'],
    pages['service-metadata'],
    pages['service-records'],
  ],
  '扩展微服务': [
    pages['service-bpm'],
    pages['service-amis'],
    pages['service-report'],
    pages['service-node-red'],
  ],
  'API': [
    pages['api-metadata'],
    pages['api-records'],
  ],
  '可视化设计工具': [
    pages['designer-object'],
    pages['designer-amis'],
    pages['designer-formular'],
    pages['designer-code'],
    pages['designer-bpm'],
    pages['designer-report'],
    pages['designer-process'],
    pages['designer-flows'],
  ],
  '元数据同步工具': [
    pages['sync-cli'],
    pages['sync-vscode'],
  ],
  '用户界面': [
    pages['ui-login'],
    pages['ui-record-view'],
    pages['ui-list-view'],
    pages['ui-amis'],
  ],
}
