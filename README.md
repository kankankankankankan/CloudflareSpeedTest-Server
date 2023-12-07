# CloudflareSpeedTest-Server
使用 CloudFlare Workers 搭建专属CloudflareSpeedTest优选测速地址


食用方法:
1. 进入CF官网 - Workers & Pages 中新建应用 - 创建Workers 粘贴cloudflare_worker.js文件代码;
2. 保存后返回进入Tiggers你可以增加自定义域名或者路由均可以实现,自定义配置完成后可以直接使用
3. 如果你使用的路由URL模式 写法如下: 
   举例 api.abc.com 可以增加 /speed/* 配置最终为 api.abc.com/speed/*
   Zoneq区域选择你的域名
   如果你配置的不是/speed,需要再次进入代码中3行将`"/speed/"`改为你指定的一致即可!
4. 使用./CloudflareST -url https://api.abc.com/speed/ 或者 ./CloudflareST -url https://test.abc.com/ 即可测速!