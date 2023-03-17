<template><div><nav class="table-of-contents"><ul><li><RouterLink to="#_1-贝塞尔曲线实现展示">1.贝塞尔曲线实现展示</RouterLink></li><li><RouterLink to="#_2-实例化一只鸭子的开局动画">2.实例化一只鸭子的开局动画</RouterLink></li></ul></nav>
<h2 id="_1-贝塞尔曲线实现展示" tabindex="-1"><a class="header-anchor" href="#_1-贝塞尔曲线实现展示" aria-hidden="true">#</a> 1.贝塞尔曲线实现展示</h2>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>&lt;!DOCTYPE html>
&lt;html>
&lt;head>
    &lt;meta charset="utf-8">
    &lt;title>前端使用贝塞尔曲线实现移动曲线动画&lt;/title>
    &lt;style>
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
    &lt;/style>
&lt;/head>

&lt;body>
    &lt;!-- 垂直运动 -->
    &lt;div class="wraper">
        &lt;!-- 水平运动 -->
        &lt;div class="item">
            &lt;img src="./images/ball.jpg" style="width:50px;" />
        &lt;/div>
    &lt;/div>

&lt;/body>

&lt;/html>


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-实例化一只鸭子的开局动画" tabindex="-1"><a class="header-anchor" href="#_2-实例化一只鸭子的开局动画" aria-hidden="true">#</a> 2.实例化一只鸭子的开局动画</h2>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>animation 属性是 animation-name、animation-duration、animation-timing-function、animation-delay、animation-iteration-count、animation-direction、animation-fill-mode、animation-play-state 几个属性的简写形式，通过 animation 属性可以同时定义上述的多个属性，语法格式如下：
animation: box 2s linear 0s infinite alternate;

&lt;!DOCTYPE html>
&lt;html>
&lt;head>
    &lt;style>
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


    &lt;/style>
&lt;/head>
&lt;body>
    &lt;div>&lt;/div>
&lt;/body>
&lt;/html>     






</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>
