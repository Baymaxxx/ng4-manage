## 项目笔记

### 开发过程遇到的问题

#### build的问题
    > ng build –prod --aot 报错: Error: ENOENT: no such file or directory,
    > 原因: 可能由于使用的是CNPM导至缺失文件造成的（不确定）
    > 解决方法:再多加个参数 ng build –prod –no-extract-license --aot 