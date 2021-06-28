'use strict';

module.exports = {
  types: [
    {value: 'feat',        name: 'feat:           新功能（feature）'},
    {value: 'fix',         name: 'fix:            修复bug'},
    {value: 'docs',        name: 'docs:           文档变更、文档注释'},
    {value: 'style',       name: 'style:          不影响代码内容的修改（格式修改，比如空格、分号、缩进等）'},
    {value: 'refactor',    name: 'refactor:       重构（即不是新增功能，也不是修改bug的代码变动）'},
    {value: 'improvement', name: 'improvement:    对当前功能的改进'},
    {value: 'perf',        name: 'perf:           提高性能的代码修改'},
    {value: 'test',        name: 'test:           添加测试或修正现有的测试'},
    {value: 'chore',       name: 'chore:          构建过程或辅助工具的变动'},
    {value: 'ci',          name: 'ci:             CI配置文件和脚本的改动'},
    {value: 'revert',      name: 'revert:         回滚先前提交'},
    {value: 'delete',      name: 'delete:         删除（代码、文档等）'}
  ],
  // override the messages, defaults are as follows
  messages: {
    type: '请选择提交类型:',
    // 不需要跳过即可
    scope: '请输入文件修改范围(可选):',
    // used if allowCustomScopes is true
    customScope: '请输入修改范围(可选):',
    subject: '请简要描述提交(必填):',
    // 不需要跳过即可
    body: '请输入详细描述(可选):',
    // breaking: 'List any BREAKING CHANGES (optional):\n',
    // 不需要跳过即可
    footer: '请输入要关闭的issue:',
    confirmCommit: '确认将以上信息提交？(y/n/e/h)'
  },
  allowCustomScopes: false,
//   allowBreakingChanges: ['feat', 'fix'],
  skipQuestions: ['scope', 'body', 'footer'], //
  // limit subject length, commitlint默认是72
  subjectLimit: 50
};