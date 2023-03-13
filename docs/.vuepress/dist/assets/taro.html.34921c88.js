import{_ as d,r as a,o as r,c as t,a as i,b as e,d as s,e as l}from"./app.5805b0e6.js";const v={},c=s(`<h1 id="taro-\u6846\u67B6\u5F00\u53D1\u5C0F\u7A0B\u5E8F\u73AF\u5883\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#taro-\u6846\u67B6\u5F00\u53D1\u5C0F\u7A0B\u5E8F\u73AF\u5883\u914D\u7F6E" aria-hidden="true">#</a> Taro \u6846\u67B6\u5F00\u53D1\u5C0F\u7A0B\u5E8F\u73AF\u5883\u914D\u7F6E</h1><p><b>1. \u73AF\u5883\u914D\u7F6E\uFF1A</b></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>    # \u4F7F\u7528 npm \u5B89\u88C5 CLI
    $ npm install -g @tarojs/cli
    # OR \u4F7F\u7528 yarn \u5B89\u88C5 CLI
    $ yarn global add @tarojs/cli
    # OR \u5B89\u88C5\u4E86 cnpm\uFF0C\u4F7F\u7528 cnpm \u5B89\u88C5 CLI
    $ cnpm install -g @tarojs/cli

    \u5B89\u88C5\u540E\u6267\u884C taro -v \u67E5\u770B\u662F\u5426\u6210\u529F
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),o={href:"https://taro-docs.jd.com/taro/docs/GETTING-STARTED",target:"_blank",rel:"noopener noreferrer"},m=l("\u8BE6\u60C5\u89C1Taro\u5B98\u7F51"),u=s(`<p><b>2. \u521B\u5EFATaro\u9879\u76EE\uFF1A</b></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u5982\u679C\u5B89\u88C5\u8FC7\u7A0B\u51FA\u73B0sass\u76F8\u5173\u7684\u5B89\u88C5\u9519\u8BEF\uFF0C\u8BF7\u5728\u5B89\u88C5mirror-config-china\u540E\u91CD\u8BD5\u3002
$ npm install -g mirror-config-china

\u4F7F\u7528\u547D\u4EE4\u521B\u5EFA\u6A21\u677F\u9879\u76EE
taro init myApp

\u4E4B\u540E\u4F1A\u6709\u9879\u76EE\u914D\u7F6E\u9009\u62E9\u63D0\u793A\uFF0C\u6839\u636E\u81EA\u5DF1\u9879\u76EE\u7684\u9700\u6C42\u9009\u62E9\u5C31\u53EF\u4EE5
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">\u63D0\u793A</p><p><b>\u5EFA\u8BAE\uFF1A</b> \u672C\u5730\u73AF\u5883\u5B89\u88C5<b> yarn\u3001cnpm\u3001npm</b>\u8FD9\u4E09\u79CD\u5305\u7BA1\u7406\u5DE5\u5177\u3002<br> \u5B98\u65B9\u63D0\u793A\uFF1ATaro\u5B89\u88C5\u4F7F\u7528\u7684\u5DE5\u5177\u6309\u7167 <b> yarn&gt;cnpm&gt;npm</b> \u987A\u5E8F\u8FDB\u884C\u68C0\u6D4B\u3002<br> \u800C\u76F4\u63A5\u4F7F\u7528npm\u4E0B\u8F7D\u4F9D\u8D56\u6216\u63D2\u4EF6\u4F1A\u9047\u5230\u95EE\u9898\u3002</p></div><p><b>3. Taro\u9879\u76EE\u8FD0\u884C\uFF1A </b></p><p><img src="https://i.loli.net/2020/05/24/DuaA41BHCsUp7E3.png" alt="\u5FAE\u4FE1\u56FE\u7247_20200524194022.png"></p><p>\u4E0A\u56FE\u662F\u5DF2\u7ECF\u53EF\u4EE5\u8FD0\u884C\u7684Taro\u9879\u76EE\uFF0C\u53EF\u4EE5\u770B\u5230\u5B83\u7684package.json\u6709\u6BD4\u8F83\u591A\u7684\u6267\u884C\u547D\u4EE4\u3002\u8FD9\u662F\u56E0\u4E3A\u76EE\u524D\u5F53\u524Dtaro\u7684\u7248\u672C\uFF08V2.2.6\uFF09\u7684\u5B98\u65B9\u5DF2\u7ECF\u652F\u6301\u6784\u5EFA\u4EE5\u4E0B\u4E5D\u79CD\u7684\u5C0F\u7A0B\u5E8F</p><p><img src="https://i.loli.net/2020/05/24/xqaeRFVbAotXzDI.png" alt="\u5FAE\u4FE1\u56FE\u7247_20200524194450.png"></p><p><b>4. \u5F00\u53D1\u5DE5\u5177\u4E0B\u8F7D\uFF1A </b></p><p>Taro \u9700\u8981\u8FD0\u884C\u4E0D\u540C\u7684\u547D\u4EE4\uFF0C\u5C06 Taro \u4EE3\u7801\u7F16\u8BD1\u6210\u4E0D\u540C\u7AEF\u7684\u4EE3\u7801\uFF0C\u7136\u540E\u5728\u5BF9\u5E94\u7684\u5F00\u53D1\u5DE5\u5177\u4E2D\u67E5\u770B\u6548\u679C\u3002<br>\u8FD9\u91CC\u6211\u4EEC\u9009\u62E9\u5176\u4E2D\u7684\u4E24\u79CD\uFF1A</p>`,9),b={href:"https://developers.weixin.qq.com/miniprogram/dev/devtools/download.html",target:"_blank",rel:"noopener noreferrer"},p=l("\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F\u5F00\u53D1\u5DE5\u5177"),g={href:"https://microapp.bytedance.com/dev/cn/mini-app/develop/developer-instrument/developer-instrument-update-and-download",target:"_blank",rel:"noopener noreferrer"},h=l("\u5934\u6761\u5C0F\u7A0B\u5E8F\u5F00\u53D1\u5DE5\u5177"),f=s(`<p><b>5. \u63D2\u4EF6\u4F7F\u7528\uFF1A </b></p><p>\u8FD9\u91CC\u4F7F\u7528\u7684\u662Flist-view\u63D2\u4EF6\uFF0C\u63D0\u4F9B\u4E86\u4E0B\u62C9\u5237\u65B0\uFF0C\u4E0A\u62C9\u52A0\u8F7D\u7B49\u529F\u80FD \u5B89\u88C5\u5B8C\u4F9D\u8D56\u540E\uFF0C\u5728\u9879\u76EE\u4E2D\u4F7F\u7528\u63D2\u4EF6\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>import Taro, { Component, Config } from &#39;@tarojs/taro&#39;
import { View, Text, Image } from &#39;@tarojs/components&#39;
import ListView, { LazyBlock } from &quot;taro-listview&quot;;
import &#39;./index.scss&#39;

const blankList = [
    {
        author: {},
        title: &quot;this is a example&quot;
    },
    {
        author: {},
        title: &quot;this is a example&quot;
    },
    {
        author: {},
        title: &quot;this is a example&quot;
    },
    {
        author: {},
        title: &quot;this is a example&quot;
    }
];

let pageIndex = 1;

export default class Index extends Component {

    state = {
        isLoaded: false,
        error: false,
        hasMore: true,
        isEmpty: false,
        list: blankList
    };


    getData = async (pIndex = pageIndex) =&gt; {
        if (pIndex === 1) this.setState({ isLoaded: false });
        const {
            data: { data }
        } = await Taro.request({
            url: &quot;https://cnodejs.org/api/v1/topics&quot;,
            data: {
                limit: 10,
                page: pIndex
            }
        });
        console.log({ data });
        return { list: data, hasMore: true, isLoaded: pIndex === 1 };
    };

    componentDidMount() {
        this.refList.fetchInit();
    }

    pullDownRefresh = async () =&gt; {
        pageIndex = 1;
        const res = await this.getData(1);
        this.setState(res);
    };

    onScrollToLower = async fn =&gt; {
        const { list } = this.state;
        const { list: newList, hasMore } = await this.getData(++pageIndex);
        this.setState({
            list: list.concat(newList),
            hasMore
        });
        fn();
    };

    refList = {};

    insRef = node =&gt; {
        this.refList = node;
    };

    config: Config = {
        navigationBarTitleText: &#39;\u9996\u9875&#39;
    }

    render() {
        const { isLoaded, error, hasMore, isEmpty, list } = this.state;
        return (
            &lt;View className=&quot;skeleton lazy-view&quot;&gt;
                &lt;ListView
                    lazy
                    ref={node =&gt; this.insRef(node)}
                    isLoaded={isLoaded}
                    isError={error}
                    hasMore={hasMore}
                    style={{ height: &quot;100vh&quot; }}
                    isEmpty={isEmpty}
                    onPullDownRefresh={this.pullDownRefresh}
                    onScrollToLower={this.onScrollToLower}
                    lazyStorage=&#39;lazyView&#39;
                &gt;
                    {list.map((item, index) =&gt; {
                        return (
                            &lt;View className=&quot;item skeleton-bg&quot; &gt;
                                {/* &lt;LazyBlock current={index} className=&quot;avatar&quot;&gt; */}
                                &lt;Image
                                    className=&quot;avatar skeleton-radius&quot;
                                    src={item.author.avatar_url}
                                /&gt;
                                {/* &lt;/LazyBlock&gt; */}
                                &lt;View className=&quot;title skeleton-rect&quot;&gt;{item.title}&lt;/View&gt;
                            &lt;/View&gt;
                        );
                    })}
                &lt;/ListView&gt;
            &lt;/View&gt;
        );
    }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u73B0\u5728\u6211\u4EEC\u4EE5\u5FAE\u4FE1\u4E3A\u4F8B\uFF0C\u9884\u89C8\u4E00\u4E0B\u6548\u679C\uFF1A\uFF1A</p><p><img src="https://i.loli.net/2020/05/24/kH3slXfrUItFaSM.gif" alt="1590322082789.gif"></p>`,5);function x(_,q){const n=a("ExternalLinkIcon");return r(),t("div",null,[c,i("p",null,[i("a",o,[m,e(n)])]),u,i("p",null,[i("a",b,[p,e(n)])]),i("p",null,[i("a",g,[h,e(n)])]),f])}var L=d(v,[["render",x],["__file","taro.html.vue"]]);export{L as default};
