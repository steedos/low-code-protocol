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
    pages['datasource'],
    pages['designer'],
    pages['automation'],
    pages['code'],
    pages['devops'],
    pages['standard-objects'],
  ],
  '元数据': [
    pages['metadata-object'],
    pages['metadata-field-type'],
    pages['formular'],
    pages['metadata-ui'],
    pages['metadata-permissions'],
    pages['metadata-automation'],
    pages['metadata-bpm'],
    pages['metadata-report'],
  ],
  'API': [
    pages['api-metadata'],
    pages['api-records'],
  ],
  '可视化开发': [
    pages['designer-object'],
    pages['designer-formular'],
    pages['designer-code'],
    pages['designer-amis'],
    pages['designer-bpm'],
    pages['designer-report'],
    pages['designer-process'],
    pages['designer-flows'],
  ],
  '软件包开发': [
    pages['objectql'],
    pages['trigger'],
    pages['services'],
    pages['event'],
    pages['page'],
  ],
  'DevOps': [
    pages['sync-cli'],
    pages['sync-vscode'],
  ],
  '平台微服务': [
    pages['service-message'],
    pages['service-logging'],
    pages['service-tracing'],
    pages['service-metrics'],
    pages['service-auditing'],
  ],
  '核心微服务': [
    pages['service-package'],
    pages['service-metadata'],
    pages['service-records'],
  ],
  '应用微服务': [
    pages['service-bpm'],
    pages['service-amis'],
    pages['service-report'],
    pages['service-node-red'],
  ],
  '用户界面': [
    pages['ui-login'],
    pages['ui-record-view'],
    pages['ui-list-view'],
    pages['ui-amis'],
  ],
}
