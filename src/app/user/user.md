#### 用户验证的流程

 * 存储要访问的URL
 * 根据本地的已登录标识判断是否此用户已经登录，如果已登录就直接放行
 * 如果未登录导航到登录页面 用户填写用户名和密码进行登录
系统根据用户名查找用户表中是否存在此用户，如果不存在此用户，返回错误
 * 如果存在对比填写的密码和存储的密码是否一致，如果不一致，返回错误
 * 如果一致，存储此用户的已登录标识到本地
 * 导航到原本要访问的URL即第一步中存储的URL，删掉本地存储的URL
#### 需要实现

 * UserService：用于通过用户名查找用户并返回用户
 * AuthService：用于认证用户，其中需要利用UserService的方法
 * AuthGuard：路由拦截器，用于拦截到路由后通过AuthService来知道此用户是否有权限访问该路由，根据结果导航到不同路径。

 > 为什么我们不把UserService和AuthService合并呢？这是因为UserService是用于对用户的操作的，不光认证流程需要用到它，我们未来要实现的一系列功能都要用到它，比如注册用户，后台用户管理，以及主页要显示用户名称等。