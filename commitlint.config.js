module.exports = {
    extends: ['@commitlint/config-conventional'],
    rules: {
      // type 类型定义
      'type-enum': [2, 'always', [
        "feat", // 新功能（feature）
        "fix", // 修复bug
        "docs", // 文档变更、文档注释
        "style", // 不影响代码内容的修改（格式修改，比如空格、分号、缩进等）
        "refactor", // 重构（即不是新增功能，也不是修改bug的代码变动）
        "improvement", // 对当前功能的改进
        "perf", // 提高性能的代码修改
        "test", // 添加测试或修正现有的测试
        "chore", // 构建过程或辅助工具的变动
        "ci", // CI配置文件和脚本的改动
        "revert", // 回滚先前提交
        "delete", // 删除（代码、文档等）
      ]],
      // subject 大小写不做校验
      // 自动部署的BUILD ROBOT的commit信息大写，以作区别
      'subject-case': [0],
      'subject-max-length': [2, 'always', 50]
    }
  };