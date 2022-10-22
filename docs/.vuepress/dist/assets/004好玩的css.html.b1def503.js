import{_ as d,r as a,o as v,c as t,a as i,b as e,w as l,d as r,e as s}from"./app.2c91957f.js";const m={},c={class:"table-of-contents"},u=s("1.\u8D1D\u585E\u5C14\u66F2\u7EBF\u5B9E\u73B0\u5C55\u793A"),b=s("2.\u5B9E\u4F8B\u5316\u4E00\u53EA\u9E2D\u5B50\u7684\u5F00\u5C40\u52A8\u753B"),o=r(`<h2 id="_1-\u8D1D\u585E\u5C14\u66F2\u7EBF\u5B9E\u73B0\u5C55\u793A" tabindex="-1"><a class="header-anchor" href="#_1-\u8D1D\u585E\u5C14\u66F2\u7EBF\u5B9E\u73B0\u5C55\u793A" aria-hidden="true">#</a> 1.\u8D1D\u585E\u5C14\u66F2\u7EBF\u5B9E\u73B0\u5C55\u793A</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
    &lt;meta charset=&quot;utf-8&quot;&gt;
    &lt;title&gt;\u524D\u7AEF\u4F7F\u7528\u8D1D\u585E\u5C14\u66F2\u7EBF\u5B9E\u73B0\u79FB\u52A8\u66F2\u7EBF\u52A8\u753B&lt;/title&gt;
    &lt;style&gt;
        :root {
            --main: 200px;
        }

        .item {
            position: absolute;
            left: 20px;
            top: 50px;
            border-radius: 50%;
            width: var(--mian);
            height: var(--mian);
            background-color: #0a0;
        }

        .wraper {
            animation: ver-animation 2s .5s 2;
            animation-timing-function: cubic-bezier(.06, .46, 0, 1.04);
        }

        .wraper .item {
            animation: hor-animation 2s linear .5s 2;
        }

        @keyframes hor-animation {
            0% {
                transform: translateX(0px);
            }

            100% {
                transform: translateX(400px);
            }
        }

        @keyframes ver-animation {
            0% {
                transform: translateY(0px);
            }

            100% {
                transform: translateY(400px);
            }
        }
    &lt;/style&gt;
&lt;/head&gt;

&lt;body&gt;
    &lt;!-- \u5782\u76F4\u8FD0\u52A8 --&gt;
    &lt;div class=&quot;wraper&quot;&gt;
        &lt;!-- \u6C34\u5E73\u8FD0\u52A8 --&gt;
        &lt;div class=&quot;item&quot;&gt;
            &lt;img src=&quot;./images/ball.jpg&quot; style=&quot;width:50px;&quot; /&gt;
        &lt;/div&gt;
    &lt;/div&gt;

&lt;/body&gt;

&lt;/html&gt;


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-\u5B9E\u4F8B\u5316\u4E00\u53EA\u9E2D\u5B50\u7684\u5F00\u5C40\u52A8\u753B" tabindex="-1"><a class="header-anchor" href="#_2-\u5B9E\u4F8B\u5316\u4E00\u53EA\u9E2D\u5B50\u7684\u5F00\u5C40\u52A8\u753B" aria-hidden="true">#</a> 2.\u5B9E\u4F8B\u5316\u4E00\u53EA\u9E2D\u5B50\u7684\u5F00\u5C40\u52A8\u753B</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>animation \u5C5E\u6027\u662F animation-name\u3001animation-duration\u3001animation-timing-function\u3001animation-delay\u3001animation-iteration-count\u3001animation-direction\u3001animation-fill-mode\u3001animation-play-state \u51E0\u4E2A\u5C5E\u6027\u7684\u7B80\u5199\u5F62\u5F0F\uFF0C\u901A\u8FC7 animation \u5C5E\u6027\u53EF\u4EE5\u540C\u65F6\u5B9A\u4E49\u4E0A\u8FF0\u7684\u591A\u4E2A\u5C5E\u6027\uFF0C\u8BED\u6CD5\u683C\u5F0F\u5982\u4E0B\uFF1A
animation: box 2s linear 0s infinite alternate;

&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
    &lt;style&gt;
@keyframes ball {
    0% {
        left: 0;
        top: 0;
    }
    25% {
        left: 350px;
        top: 0;
    }
    50% {
        left: 350px;
        top: 200px;
    }
    75% {
        left: 0;
        top: 200px;
    }
    100% {
        left: 0;
        top: 0;
    }
}
div {
    position: relative;
    border: 3px solid black;
    border-radius: 50%;
    width: 100px;
    height: 100px;
    animation-name: ball;
    animation-duration: 2s;
}


    &lt;/style&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;div&gt;&lt;/div&gt;
&lt;/body&gt;
&lt;/html&gt;     






</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4);function g(h,p){const n=a("RouterLink");return v(),t("div",null,[i("nav",c,[i("ul",null,[i("li",null,[e(n,{to:"#_1-\u8D1D\u585E\u5C14\u66F2\u7EBF\u5B9E\u73B0\u5C55\u793A"},{default:l(()=>[u]),_:1})]),i("li",null,[e(n,{to:"#_2-\u5B9E\u4F8B\u5316\u4E00\u53EA\u9E2D\u5B50\u7684\u5F00\u5C40\u52A8\u753B"},{default:l(()=>[b]),_:1})])])]),o])}var x=d(m,[["render",g],["__file","004\u597D\u73A9\u7684css.html.vue"]]);export{x as default};
