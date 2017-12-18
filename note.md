## 项目笔记

#### 1.新建项目
##### ng 命令行初始化项目
	> cnpm install -g @angular/cli@latest
	> ng new xx --routing --style=scss --prefix=xx
##### 安装bootstarp
	> cnpm install @ng-bootstrap/ng-bootstrap bootstrap@next --save　　安装ng-bootstrap和bootstrap
#### 2.angular 路由
##### 路由守卫使用
    ng g guard guards/login
    app-routing引入
    app-module providers 引入

### 开发过程遇到的问题

#### build的问题
    > ng build –prod --aot 报错: Error: ENOENT: no such file or directory,
    > 原因: 可能由于使用的是CNPM导至缺失文件造成的（不确定）
    > 解决方法:再多加个参数 ng build –prod –no-extract-license --aot 

#### ERROR in Metadata version mismatch for module X found version 4, expected 3, resolving symbol
    > module X的版本问题
    > 解决方法:(https://stackoverflow.com/questions/47534610/error-in-metadata-version-mismatch-for-module-x-found-version-4-expected-3-res/47534611#47534611)