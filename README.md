# Enterprise Low-Code DevOps Platform Protocol

企业级低代码DevOps平台协议

本协议以 [Salesforce Developer Experience (DX)](https://developer.salesforce.com/developer-centers/developer-experience) 为⭕原型，设计企业低代码平台的基础规范。

本协议与开发语言无关，任何公司可以基于此协议设计低代码平台的开发规范。

## 元数据

`软件包`使用`元数据`描述数据模型、字段、列表视图、权限、工作流规则、验证规则、设置项等要素。`元数据`可以使用可视化工具修改，最终输出为配置文件。`低代码解释引擎`负责加载、合并元数据。

参考 [Salesforce Metadata Types](https://developer.salesforce.com/docs/atlas.en-us.api_meta.meta/api_meta/meta_types_list.htm)

## 公式

`公式`是一种更简化版本的`微代码`，由系统管理员或者是业务人员编写，实现公式字段计算以及系统中的各种规则判断。

参考：[Salesforce Formula](https://help.salesforce.com/s/articleView?id=customize_formuladef.htm&type=5&language=en_US)

## 微代码

软件包使用`微代码`实现后端数据相关业务逻辑开发，主要包括控制类、触发器。不同软件包中的控制类和触发器中的`微代码`必须集中加载到统一的环境中运行，以便实现数据库事务。因此`微代码`中可以调用低代码平台中的固定方法，不能引用第三方软件包。

参考：[Salesforce Apex](https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/apex_intro_what_is_apex.htm)

## 函数

`软件包`通过自定义`函数`的方式实现复杂业务需求的开发。数据库事务在`函数`内部自行处理。`函数`可以发布为API。`函数`中可以引用第三方软件包，理论上可以实现任意功能。

参考：[Salesforce Functions](https://developer.salesforce.com/docs/platform/functions/overview)

## 微页面

需要支持使用代码形式编写自定义控件，或是直接开发自定义前端页面。微页面中需要支持快捷调用平台的基础控件，包括并不限于列表视图、记录详情视图、图表、报表。

参考：[Salesforce Lightning](https://developer.salesforce.com/docs/atlas.en-us.lightning.meta/lightning/intro_lightning.htm)

## ObjectSQL

低代码平台通过定义driver的方式实现对不同数据库的支持。本协议约定一种跨数据库的语法，用于查询和修改记录。以便`低代码应用`可以方便的切换数据库。

## 软件包

`软件包`是低代码平台产出的最小单位，由元数据、代码段、微服务组成。`可视化设计工具`负责可视化设计元数据并以配置文件形式输出。`低代码解释引擎`负责加载、合并`软件包`中的`元数据`，生成`低代码应用`。

本协议约定软件包的目录结构、版本号、软件包依赖等规则；约定软件包的发布、安装与升级规范；约定软件包仓库的规范。

参考：[Salesforce 2GP Managed Packages](https://developer.salesforce.com/docs/atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_dev2gp_comparison.htm)

## 标准对象

标准对象定义低代码平台元数据的存储格式，包括对象、字段、权限、报表、流程等；以及企业软件必须的基础数据：组织、人员、角色等。

参考：[Salesforce Standard Objects](https://developer.salesforce.com/docs/atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_list.htm)

## 元数据 API

`低代码解释引擎`负责加载所有`软件包`，并合并其中的`元数据`。并提供统一的API，包括`元数据`的查询与更新；批量上传与下载。

参考： [Salesforce Metadata API](https://developer.salesforce.com/docs/atlas.en-us.api_meta.meta/api_meta/meta_intro.htm)

## 记录 API

`记录 API` 负责访问数据库进行增删改查处理。企业低代码平台在访问数据库之前需要进行权限处理，并运行`微代码`。

参考：[Salesforce Records API](https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/using_resources_working_with_records.htm)

## 可视化设计工具

`可视化设计工具`提供更友好的界面，方便创建和修改元数据。可视化工具设计的结果最终输出为元数据。可视化设计工具包括并不限于：模型设计、报表设计、流程设计、仪表盘设计、页面布局设计。

## 低代码解释引擎

`低代码解释引擎`运行负责加载和运行软件包。需要支持同时加载多个软件包，并对其中的元数据进行合并处理。

## 低代码应用

`低代码应用`是低代码平台的最终呈现结果，低代码应用配置文件组成，因此可以灵活的修改。

参考： [Salesforce CRM](https://www.salesforce.com/crm/)
