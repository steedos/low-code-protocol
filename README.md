# Enterprise Low-Code Platform Protocol

企业低代码平台元数据规范与交互协议。

本协议以 [Salesforce Developer Experience (DX)](https://developer.salesforce.com/developer-centers/developer-experience) 为⭕原型，设计企业低代码平台的基础规范。

## 元数据

软件包使用元数据描述数据模型、字段、列表视图、权限、工作流规则、验证规则、设置项等要素。元数据可以使用可视化工具修改，最终输出为配置文件。低代码平台解释引擎负责加载、合并元数据。

参考 [Salesforce Metadata Types](https://developer.salesforce.com/docs/atlas.en-us.api_meta.meta/api_meta/meta_types_list.htm)

## 元数据 API

低代码解释引擎负责加载所有软件包，并合并其中的元数据。并提供统一的API，包括元数据的查询与更新；元数据批量上传与下载。

参考： [Salesforce Metadata API](https://developer.salesforce.com/docs/atlas.en-us.api_meta.meta/api_meta/meta_intro.htm)

## 微代码

软件包使用`微代码`实现后端数据相关业务逻辑开发，主要包括控制类、触发器。不同软件包中的控制类和触发器中的`微代码`必须集中加载到统一的环境中运行，以便实现数据库事务。因此`微代码`中可以调用低代码平台中的固定方法，不能引用第三方软件包。

参考：[Salesforce Apex](https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/apex_intro_what_is_apex.htm)

## 函数

软件包通过自定义`函数`的方式实现复杂业务需求的开发。函数中的数据库事务在`函数`内部自行处理。`函数`可以发布为API。`函数`中可以引用第三方软件包，理论上可以实现任意功能。

参考：[Salesforce Functions](https://developer.salesforce.com/docs/platform/functions/overview)


## 软件包

软件包是低代码平台产出的最小单位，由元数据、代码段、微服务组成。低代码平台设计引擎负责可视化设计软件包并以源码形式输出。低代码平台解释引擎负责加载软件包并运行。

本协议约定软件包的目录结构、版本号、软件包依赖等规则；约定软件包的发布、安装与升级规范；约定软件包仓库的规范。

参考：[Salesforce 2GP Managed Packages](https://developer.salesforce.com/docs/atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_dev2gp_comparison.htm)

## 低代码设计引擎

低代码设计引擎由各种可视化工具组成。可视化工具设计的结果最终输出为元数据。

## 低代码解释引擎

低代码解释运行负责加载和运行软件包。

## 记录 API

记录 API 负责访问数据库进行增删改查处理。企业低代码平台在访问数据库之前需要进行权限处理，并运行`微代码`。
