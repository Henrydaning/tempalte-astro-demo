



## CDN突然失效,jenkins部署后，不嗯给你使用
- 阿里云：问题

阿里云强制更新机制。
但是排查后，发现只有最老的代码提交，没有最新的记录。那么是不是jenkins的问题

- jenkins问题
jenkins问题内容记录，是不是shell脚本的问题。

~~~
rm -rf .git

JENKINS_DIR="$JENKINS_HOME/workspace/$JOB_NAME/"

ossutil rm -rf oss://online-persist-files/webcdn/*    这一步是关键。
ossutil cp -rf $JENKINS_DIR oss://online-persist-files/webcdn/
ossutil rm -rf oss://online-persist-files/webcdn/ossutil_output/

这里的ossutil是服务器的内容。

地址已经在服务器上面，这里的地址需要将cdn上面的文件内容删除之后，然后重新再次复制。
具体原因不知道：增加了上面的删除一行老的，才生效。

~~~



