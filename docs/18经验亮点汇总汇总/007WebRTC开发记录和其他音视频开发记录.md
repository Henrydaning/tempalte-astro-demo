## WebRTC 和 websocket 比较

| 参数对比 | WebRTC                                             | WebSocket                                       |
| -------- | -------------------------------------------------- | ----------------------------------------------- |
| 用途     | WebRTC 允许两个浏览器之间的全双工通信              | WebSocket 允许浏览器和 Web 服务器进行全双工通信 |
| 协议     | UDP                                                | TCP                                             |
| 流量路径 | 直接谅解，不会经过第三方服务器，去中心化的架构模型 | 需要经过服务器                                  |
| 实时性   | 延迟低                                             | 延迟高                                          |
|          |                                                    |                                                 |

## 1.pcm 转码开发。
PCM音频实时播放：音频字节数组（16/8位）转为PCM ArrayBuffer流
demo案例地址：
实时pcm转码播放，浏览器实现
[仓库地址](https://gitee.com/zkwq/lernaProjectStudy/tree/master/packages/alarm-pcm-record-https-device)

## 2.WebRTC 开发。

### WebRTC 是 real time communications,实时通信方案。

广义上，音视频实时通信，不仅仅包含音视频，还包括图片和文本，文件等。在线教育，在线医疗，智能硬件，摄像头监控等。

无论终端运行环境是浏览器、桌面应用、移动设备（Android 或 iOS）还是 IoT 设备，只要 IP 连接可到达且符合 WebRTC 规范就可以互通。

### （2）WebRTC 的开发目的：

WebRTC 的最终目的主要是让 Web 开发者能够基于浏览器轻易快捷开发出丰富的实时多媒体应用，
而无需下载安装任何插件，Web 开发者也无需关注多媒体的数字信号处理过程，只需编写简单的 JavaScript 程序即可实现。

### （3）Web API 层表示的是 WebRTC 开放给应用层开发人员的 API

API 可分成 Media Stream API、 RTCPeerConnection、Peer-to-peer Data API 三类：




## 4.浏览器调用硬件需要用file协议或是https协议。









## 拓展RTMP和WebRTC开发对比
![RTMP和WebSocket比较](./WebRTC%E5%92%8CRTMP.png)