## 1.项目私用这个平台的参考仓库
[nginx-proxy-manager-zh中文相关仓库参考](https://github.com/nyhxiaoning/nginx-proxy-manager-zh.git)



## 2.记录搭建的相关汇总内容快速开始
[nginxproxyManager](https://nginxproxymanager.com/guide/#quick-setup)

### 1.配置相关docker-compose.yml配置文件
~~~
version: '3.8'
services:
  app:
    image: 'jc21/nginx-proxy-manager:latest'
    restart: unless-stopped
    ports:
      - '80:80'
      - '81:81'
      - '443:443'
    volumes:
      - ./data:/data
      - ./letsencrypt:/etc/letsencrypt

~~~



### 2.配置docker-compose up -d
启动后，根据端口访问81

账号密码：
~~~
Email:    admin@example.com
Password: changeme

~~~

### 3.配置后，使用配置相关的nginx内容
[nginxProxyManager](https://nginxproxymanager.com/setup/#using-mysql-mariadb-database)