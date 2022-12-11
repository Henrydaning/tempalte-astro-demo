import{_ as i,r as n,o as a,c as d,a as e,b as r,d as l,e as t}from"./app.10c769de.js";const h={},c=l(`<h2 id="ssh\u547D\u4EE4\u884C\u7684\u5B66\u4E60" tabindex="-1"><a class="header-anchor" href="#ssh\u547D\u4EE4\u884C\u7684\u5B66\u4E60" aria-hidden="true">#</a> ssh\u547D\u4EE4\u884C\u7684\u5B66\u4E60\uFF1A</h2><h3 id="\u89E3\u538B\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u89E3\u538B\u6587\u4EF6" aria-hidden="true">#</a> \u89E3\u538B\u6587\u4EF6</h3><h3 id="\u79FB\u52A8\u4F4D\u7F6E\u7684\u4F4D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u79FB\u52A8\u4F4D\u7F6E\u7684\u4F4D\u7F6E" aria-hidden="true">#</a> \u79FB\u52A8\u4F4D\u7F6E\u7684\u4F4D\u7F6E</h3><h3 id="\u91CD\u547D\u540D\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u91CD\u547D\u540D\u6587\u4EF6" aria-hidden="true">#</a> \u91CD\u547D\u540D\u6587\u4EF6</h3><h3 id="\u5728\u7EBF\u5B66\u4E60ssh\u547D\u4EE4\u7F51\u7AD9-\u627E\u51FA10\u4E2A\u5E38\u7528\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#\u5728\u7EBF\u5B66\u4E60ssh\u547D\u4EE4\u7F51\u7AD9-\u627E\u51FA10\u4E2A\u5E38\u7528\u547D\u4EE4" aria-hidden="true">#</a> \u5728\u7EBF\u5B66\u4E60ssh\u547D\u4EE4\u7F51\u7AD9\uFF1A\u627E\u51FA10\u4E2A\u5E38\u7528\u547D\u4EE4</h3><h2 id="_3-ssh\u547D\u4EE4\u884C\u4F20\u8F93\u6587\u4EF6\u5230\u8FDC\u7A0B\u670D\u52A1\u5668" tabindex="-1"><a class="header-anchor" href="#_3-ssh\u547D\u4EE4\u884C\u4F20\u8F93\u6587\u4EF6\u5230\u8FDC\u7A0B\u670D\u52A1\u5668" aria-hidden="true">#</a> 3.SSH\u547D\u4EE4\u884C\u4F20\u8F93\u6587\u4EF6\u5230\u8FDC\u7A0B\u670D\u52A1\u5668</h2><p>Ubuntu\u64CD\u4F5C\u7CFB\u7EDF</p><p>SCP\u547D\u4EE4 \u4F7F\u7528\u65B9\u5F0F\u5982\u4E0B\uFF1A</p><h3 id="_0\u3001\u63D0\u4EA4\u76F8\u5173\u7684\u670D\u52A1\u5668\u5199\u5165\u6587\u4EF6\u6743\u9650" tabindex="-1"><a class="header-anchor" href="#_0\u3001\u63D0\u4EA4\u76F8\u5173\u7684\u670D\u52A1\u5668\u5199\u5165\u6587\u4EF6\u6743\u9650" aria-hidden="true">#</a> 0\u3001\u63D0\u4EA4\u76F8\u5173\u7684\u670D\u52A1\u5668\u5199\u5165\u6587\u4EF6\u6743\u9650</h3><p>chmod 777 /usr/local/redis</p><h3 id="_1\u3001\u4E0A\u4F20\u672C\u5730\u6587\u4EF6\u5230\u8FDC\u7A0B\u670D\u52A1\u5668" tabindex="-1"><a class="header-anchor" href="#_1\u3001\u4E0A\u4F20\u672C\u5730\u6587\u4EF6\u5230\u8FDC\u7A0B\u670D\u52A1\u5668" aria-hidden="true">#</a> 1\u3001\u4E0A\u4F20\u672C\u5730\u6587\u4EF6\u5230\u8FDC\u7A0B\u670D\u52A1\u5668</h3><p>scp /var/www/test.php root@192.168.0.101:/var/www/ \u628A\u672C\u673A/var/www/\u76EE\u5F55\u4E0B\u7684test.php\u6587\u4EF6\u4E0A\u4F20\u5230192.168.0.101\u8FD9\u53F0\u670D\u52A1\u5668\u4E0A\u7684/var/www/\u76EE\u5F55\u4E2D</p><h3 id="_2\u3001\u4ECE\u670D\u52A1\u5668\u4E0A\u4E0B\u8F7D\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#_2\u3001\u4ECE\u670D\u52A1\u5668\u4E0A\u4E0B\u8F7D\u6587\u4EF6" aria-hidden="true">#</a> 2\u3001\u4ECE\u670D\u52A1\u5668\u4E0A\u4E0B\u8F7D\u6587\u4EF6</h3><p>scp root@192.168.0.101:/var/www/test.txt /var/www/local_dir\uFF08\u672C\u5730\u76EE\u5F55\uFF09 \u628A192.168.0.101\u4E0A\u7684/var/www/test.txt \u7684\u6587\u4EF6\u4E0B\u8F7D\u5230/var/www/local_dir\uFF08\u672C\u5730\u76EE\u5F55\uFF09</p><h3 id="_3\u3001\u4ECE\u670D\u52A1\u5668\u4E0B\u8F7D\u6574\u4E2A\u76EE\u5F55" tabindex="-1"><a class="header-anchor" href="#_3\u3001\u4ECE\u670D\u52A1\u5668\u4E0B\u8F7D\u6574\u4E2A\u76EE\u5F55" aria-hidden="true">#</a> 3\u3001\u4ECE\u670D\u52A1\u5668\u4E0B\u8F7D\u6574\u4E2A\u76EE\u5F55</h3><p>scp -r root@192.168.0.101:/var/www/test /var/www/</p><h3 id="_4\u3001\u4E0A\u4F20\u76EE\u5F55\u5230\u670D\u52A1\u5668" tabindex="-1"><a class="header-anchor" href="#_4\u3001\u4E0A\u4F20\u76EE\u5F55\u5230\u670D\u52A1\u5668" aria-hidden="true">#</a> 4\u3001\u4E0A\u4F20\u76EE\u5F55\u5230\u670D\u52A1\u5668</h3><p>scp -r test root@192.168.0.101:/var/www/ \u628A\u5F53\u524D\u76EE\u5F55\u4E0B\u7684test\u76EE\u5F55\u4E0A\u4F20\u5230\u670D\u52A1\u5668\u7684/var/www/ \u76EE\u5F55</p><h2 id="_4-\u4E8C\u3001linux\u751F\u6210ssh\u8BC1\u4E66" tabindex="-1"><a class="header-anchor" href="#_4-\u4E8C\u3001linux\u751F\u6210ssh\u8BC1\u4E66" aria-hidden="true">#</a> 4.\u4E8C\u3001Linux\u751F\u6210ssh\u8BC1\u4E66</h2><h3 id="_0\u3001ssh\u514D\u5BC6\u767B\u5F55-\u5B89\u88C5\u4E00\u4E2Aopenssh-server" tabindex="-1"><a class="header-anchor" href="#_0\u3001ssh\u514D\u5BC6\u767B\u5F55-\u5B89\u88C5\u4E00\u4E2Aopenssh-server" aria-hidden="true">#</a> 0\u3001ssh\u514D\u5BC6\u767B\u5F55\uFF1A\u5B89\u88C5\u4E00\u4E2Aopenssh-server</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u67E5\u770Bssh\u670D\u52A1\u662F\u5426\u542F\u52A8
\u67E5\u770BSSH\u670D\u52A1\u662F\u5426\u5B89\u88C5\u6216\u542F\u52A8\u7684\u65B9\u6CD5\uFF1Asudo ps -e |grep ssh
\u67E5\u770BSSH\u7684\u7248\u672C\uFF1Assh -V
SSH \u670D\u52A1\u5668\u7684\u5B89\u88C5\uFF1Asudo apt-get install openssh-server
SSH \u5BA2\u6237\u7AEF\u7684\u5B89\u88C5\uFF1Asudo apt-get install openssh-client
\u542F\u52A8SSH\u670D\u52A1\uFF1Asudo service ssh start\u6216\u8005sudo service ssh restart
\u5173\u95EDSSH\u670D\u52A1\uFF1Aservice ssh start\u6216service sshd stop

\u6CE8\u610F\u5230\u5173\u95EDSSH\u540E\uFF0Cssh-agent\u4ECD\u7136\u5B58\u5728\u3002\u4ED6\u662Fssh\u4EE3\u7406\u7A0B\u5E8F\uFF0C\u7528\u4E8E\u65B9\u4FBF\u7BA1\u7406\u79C1\u94A5\u3002
ssh-agent\u4E3B\u8981\u4F7F\u7528\u5728\u5982\u4E0B\u4E24\u4E2A\u573A\u666F\uFF1A
1.\u4F7F\u7528\u4E0D\u540C\u7684\u5BC6\u94A5\u8FDE\u63A5\u4E0D\u540C\u4E3B\u673A\uFF0C\u6BCF\u6B21\u8FDE\u63A5\u90FD\u8981\u6307\u5B9A\u79C1\u94A5;
2.\u5F53\u79C1\u94A5\u8BBE\u7F6E\u4E86\u5BC6\u7801\uFF0C\u6BCF\u6B21\u4F7F\u7528\u8BA4\u8BC1\u65F6\u90FD\u9700\u8981\u8F93\u5165\u5BC6\u7801\uFF0C\u975E\u5E38\u9EBB\u70E6\u3002

SSH\u8FDC\u7A0B\u8BBF\u95EE\u51FA\u73B0Permission denied(publickey,password)\u89E3\u51B3\u65B9\u6CD5
\u5728\u8FD9\u91CC\u63D2\u5165\u56FE\u7247\u63CF\u8FF0
\u2003\u5728\u786E\u4FDDssh\u670D\u52A1\u5DF2\u5F00\u542F\u3001\u7BA1\u7406\u5458\u5BC6\u7801\u6B63\u786E\u3001IP\u5730\u5740\u6B63\u786E\u3001\u7F51\u7EDC\u901A\u7545\u540E\uFF0C\u53D1\u73B0\u6211\u7684ubuntu\u91CC\u5E76\u6CA1\u6709\u521B\u5EFAuser3\u7528\u6237\uFF0C\u6240\u4EE5\u7528\u6237\u540D\u3001\u7528\u6237\u5BC6\u7801\u80AF\u5B9A\u4E0D\u5BF9\uFF0C\u6539\u6210\u865A\u62DF\u673A\u7BA1\u7406\u5458\u7684\u7528\u6237\u540D\u5C31\u884C\u4E86\uFF1B\u6216\u8005\u4F60\u4E5F\u53EF\u4EE5\u5C1D\u8BD5\u5728ubuntu\u91CC\u6DFB\u52A0\u4E00\u4E2Auser3\u7528\u6237\u3002

\u6DFB\u52A0\u7528\u6237
1.sudo useradd \u7528\u6237\u540D -m \uFF0C\u5176\u4E2D\uFF0Dm\uFF1A\u81EA\u52A8\u5EFA\u7ACB\u7528\u6237\u7684\u767B\u5165\u76EE\u5F55\u3002
2.\u67E5\u770B\u6240\u6709\u7528\u6237\uFF1Als /home/
3.\u4E3A\u521B\u5EFA\u7528\u6237\u8BBE\u7F6E\u5BC6\u7801\uFF1A sudo passwd \u7528\u6237\u540D
4.\u4E00\u5B9A\u8981\u8BB0\u4F4F\u5BC6\u7801\uFF0C\u4E0D\u7136\u53EA\u80FD\u5220\u9664\u8BE5\u7528\u6237\u4E86

\u5220\u9664\u7528\u6237
sudo userdel  \u7528\u6237\u540D
\u70B9\u51FB\u9605\u8BFB\u5168\u6587 

sudo apt install openssh-server


\u63A5\u7740



</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5\u3001\u5F00\u542Fssh\u548C\u67E5\u770B\u662Fssh\u5426\u5F00\u542F" tabindex="-1"><a class="header-anchor" href="#_5\u3001\u5F00\u542Fssh\u548C\u67E5\u770B\u662Fssh\u5426\u5F00\u542F" aria-hidden="true">#</a> 5\u3001\u5F00\u542Fssh\u548C\u67E5\u770B\u662Fssh\u5426\u5F00\u542F</h2><p>[root@VM_0_6_centos ~]# netstat -anp|grep :22 tcp 0 0 0.0.0.0:22 0.0.0.0:*<br> tcp 0 36 172.16.0.6:22 211.161.248.60:22447 [root@VM_0_6_centos ~]# service sshd start Redirecting to /bin/systemctl start sshd.service</p><h3 id="_1-\u67E5\u770B\u662F\u5426\u6709\u751F\u6210\u7684\u8BC1\u4E66" tabindex="-1"><a class="header-anchor" href="#_1-\u67E5\u770B\u662F\u5426\u6709\u751F\u6210\u7684\u8BC1\u4E66" aria-hidden="true">#</a> (1)\u67E5\u770B\u662F\u5426\u6709\u751F\u6210\u7684\u8BC1\u4E66</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>[root@VM_0_6_centos .ssh]# cd  /root/.ssh
[root@VM_0_6_centos .ssh]# ls
[root@VM_0_6_centos .ssh]#
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-\u751F\u6210\u8BC1\u4E66-ssh-keygen-t-rsa" tabindex="-1"><a class="header-anchor" href="#_2-\u751F\u6210\u8BC1\u4E66-ssh-keygen-t-rsa" aria-hidden="true">#</a> (2)\u751F\u6210\u8BC1\u4E66 ssh-keygen -t rsa</h3><p>\u90AE\u7BB1\u53EF\u4EE5\u4E0D\u662F\u771F\u5B9E\u7684\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>[root@VM_0_6_centos .ssh]# ssh-keygen -t rsa -C &quot;zhengja@dist.com&quot;
Generating public/private rsa key pair.
Enter file in which to save the key (/root/.ssh/id_rsa): 
Enter passphrase (empty for no passphrase): 
Enter same passphrase again: 
Your identification has been saved in /root/.ssh/id_rsa.
Your public key has been saved in /root/.ssh/id_rsa.pub.
The key fingerprint is:
SHA256:ANbGYlsumXjZ3GzsgkCen80YNwl5Y1/U4zGgDcgaVIA zhengja@dist.com
The key&#39;s randomart image is:
+---[RSA 2048]----+
|   o=B....oo     |
|  E.*.@  +. =    |
| o + ^.B.... +   |
|  = X B.*   .    |
|   + X +S        |
|    = + .        |
|       .         |
|                 |
|                 |
+----[SHA256]-----+
[root@VM_0_6_centos .ssh]# ls
id_rsa  id_rsa.pub
[root@VM_0_6_centos .ssh]#

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-\u8BC1\u4E66\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#_3-\u8BC1\u4E66\u4F7F\u7528" aria-hidden="true">#</a> (3)\u8BC1\u4E66\u4F7F\u7528</h3><p>\u53EF\u4EE5\u914D\u7F6Egitlab\u3001github\u3001\u5176\u5B83\u673A\u5668\u4E0A\u7B49\u3002</p><p>\u4F8B\u5982\uFF1A\u914D\u7F6Egitlab \u83B7\u53D6\u516C\u94A5\uFF08id_rsa.pub\uFF09\u5185\u5BB9</p><p>[root@VM_0_6_centos .ssh]# vim id_rsa.pub</p><h2 id="_6-\u5207\u6362\u5230root\u8D26\u53F7-\u4FEE\u6539root\u5BC6\u7801" tabindex="-1"><a class="header-anchor" href="#_6-\u5207\u6362\u5230root\u8D26\u53F7-\u4FEE\u6539root\u5BC6\u7801" aria-hidden="true">#</a> 6.\u5207\u6362\u5230root\u8D26\u53F7\uFF0C\u4FEE\u6539root\u5BC6\u7801</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>sudo -i

\u8F93\u5165passwd\u540E\uFF0C\u53EF\u4EE5\u4FEE\u6539
\u4E00\u822Croot\u7684\u79D8\u5BC6\u8BBE\u7F6E\u4E00\u81F4\uFF0C\u907F\u514D\u603B\u5FD8\u8BB0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_7-ssh\u7684\u6559\u7A0B\u5B66\u4E60\u6C47\u603B" tabindex="-1"><a class="header-anchor" href="#_7-ssh\u7684\u6559\u7A0B\u5B66\u4E60\u6C47\u603B" aria-hidden="true">#</a> 7.ssh\u7684\u6559\u7A0B\u5B66\u4E60\u6C47\u603B</h2>`,35),v={href:"https://wangdoc.com/ssh/basic",target:"_blank",rel:"noopener noreferrer"},o=t("ssh\u6559\u7A0B\u8BB0\u5F55");function u(b,m){const s=n("ExternalLinkIcon");return a(),d("div",null,[c,e("p",null,[e("a",v,[o,r(s)])])])}var p=i(h,[["render",u],["__file","021ssh\u547D\u4EE4\u5B66\u4E60\u8BB0\u5F55.html.vue"]]);export{p as default};
