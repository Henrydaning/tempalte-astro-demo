## 1.mongo常见报错
### （1）mongoose连接运行报错Warning: current Server Discovery and Monitoring engine is deprecated
连接mongo数据库的时候，选项添加{ useUnifiedTopology: true }即可。
await mongodb.MongoClient.connect(dbUrl, { useNewUrlParser: true, useUnifiedTopology: true });







