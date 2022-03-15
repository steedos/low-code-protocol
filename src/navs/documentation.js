import { createPageList } from '@/utils/createPageList'

const pages = createPageList(
  require.context(`../pages/docs/?meta=title,shortTitle,published`, false, /\.mdx$/),
  'docs'
)

export const documentationNav = {
  '快速向导': [
    pages['overview'],
    pages['plugin'],
    pages['datasource'],
    pages['metadata'],
    pages['designer'],
    pages['permissions'],
    pages['automation'],
    pages['code'],
    pages['package'],
    pages['devops'],
    pages['standard-objects'],
  ],
  '软件包开发': [
    pages['objectql'],
    pages['trigger'],
    pages['services'],
    pages['page'],
    pages['cron'],
    pages['event'],
  ],
  '元数据': [
    pages['metadata-object'],
    pages['metadata-field-type'],
    pages['formular'],
    pages['metadata-ui'],
    pages['metadata-permissions'],
    pages['metadata-automation'],
  ],
  'API': [
    pages['api-metadata'],
    pages['api-records'],
  ],
  // '可视化工具': [
  //   pages['designer-object'],
  //   pages['designer-page'],
  //   pages['designer-code'],
  //   pages['designer-formular'],
  //   pages['designer-process'],
  //   pages['designer-flows'],
  // ],
  'DevOps': [
    pages['sync-cli'],
    pages['sync-vscode'],
  ],
  '核心微服务': [
    pages['service-package'],
    pages['service-metadata'],
    pages['service-records'],
    pages['service-jobs'],
  ],
  '扩展插件': [
    pages['plugin-amis'],
    pages['plugin-stimulsoft'],
    pages['plugin-node-red'],
  ],
  // '平台微服务': [
  //   pages['service-message'],
  //   pages['service-logging'],
  //   pages['service-tracing'],
  //   pages['service-metrics'],
  //   pages['service-auditing'],
  // ],
  // '用户界面': [
  //   pages['ui-login'],
  //   pages['ui-record-view'],
  //   pages['ui-list-view'],
  //   pages['ui-amis'],
  // ],
}
