import{_ as e,o as i,c as n,d as a}from"./app.dc3baf66.js";const d={},s=a(`<p>[toc]</p><h2 id="\u4E00\u4E9B\u5E38\u89C1\u4F7F\u7528\u4E60\u60EF" tabindex="-1"><a class="header-anchor" href="#\u4E00\u4E9B\u5E38\u89C1\u4F7F\u7528\u4E60\u60EF" aria-hidden="true">#</a> \u4E00\u4E9B\u5E38\u89C1\u4F7F\u7528\u4E60\u60EF</h2><h3 id="\u7EC4\u4EF6\u7684\u5F00\u53D1\u5FC5\u987B\u4F7F\u7528\u5927\u9A7C\u5CF0\u547D\u540D" tabindex="-1"><a class="header-anchor" href="#\u7EC4\u4EF6\u7684\u5F00\u53D1\u5FC5\u987B\u4F7F\u7528\u5927\u9A7C\u5CF0\u547D\u540D" aria-hidden="true">#</a> \u7EC4\u4EF6\u7684\u5F00\u53D1\u5FC5\u987B\u4F7F\u7528\u5927\u9A7C\u5CF0\u547D\u540D</h3><h3 id="jsx-\u4F7F\u7528\u8BF4\u660E\u4E60\u60EF" tabindex="-1"><a class="header-anchor" href="#jsx-\u4F7F\u7528\u8BF4\u660E\u4E60\u60EF" aria-hidden="true">#</a> jsx \u4F7F\u7528\u8BF4\u660E\u4E60\u60EF</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u6CE8\u610F\u4E8B\u9879\uFF1A
1\u3001JSX\u7684\u8BED\u6CD5\u5F88\u4E25\u683C \u6240\u6709\u7684\u6807\u7B7E\u5FC5\u987B\u95ED\u5408
&lt;hr/&gt;\u4E0D\u80FD\u5199\u6210&lt;hr&gt;

2\u3001JSX\u91C7\u7528\u7684\u662FJS\u7684\u6CE8\u91CA\u65B9\u5F0F \u5F62\u5982/* */ \u6216 //
\u4E14\u7531\u4E8E\u662FJSX\u8BED\u6CD5 \u9700\u5199\u5728\u82B1\u62EC\u53F7\u5185\u90E8 \u50CF\u8FD9\u6837\uFF1A

{/*\u6211\u662F\u6CE8\u91CA*/}
1
\u6216

{
	// \u6211\u662F\u6CE8\u91CA
}

3\u3001\u5728\u4E3AJSX\u8BED\u6CD5\u7684\u5143\u7D20\u6DFB\u52A0\u7C7B\u540D(class)\u7684\u65F6\u5019
\u7528className\u6765\u66FF\u4EE3class
\u7528htmlFor\u6765\u66FF\u4EE3for
class\u548Cfor\u662FJS\u4E2D\u7684\u5173\u952E\u5B57 \u4E3A\u4E86\u9632\u6B62\u6B67\u4E49 \u5728JSX\u4E2D\u5FC5\u987B\u6362\u4E2A\u5173\u952E\u5B57

4\u3001\u5728JSX\u8BED\u6CD5\u4E2D \u521B\u5EFADOM\u7684\u65F6\u5019 \u6240\u6709\u8282\u70B9\u5FC5\u987B\u6709\u552F\u4E00\u7684\u6839\u5143\u7D20\u8FDB\u884C\u5305\u88F9
\u5C31\u50CFVue\u7684&lt;template&gt;\u91CC\u9762\u4E00\u6837 \u5FC5\u987B\u6709\u552F\u4E00\u7684\u6839\u5143\u7D20\u8FDB\u884C\u5305\u88F9 \u4E0D\u80FD\u6709\u591A\u4E2A\u5E73\u7EA7\u7684\u6839\u5143\u7D20
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="classname" tabindex="-1"><a class="header-anchor" href="#classname" aria-hidden="true">#</a> className</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>1.jsx\u4E2D\u7684\u4F7F\u7528\u89C4\u8303\uFF0C\u4E00\u4E2Ajsx\u6700\u597D\u7528\u5C0F\u62EC\u53F7\u62EC\u8D77\u6765\uFF0C\u907F\u514D\u81EA\u52A8\u5206\u53F7
- jsx\u7684\u8BED\u6CD5\u66F4\u4F73\u63A5\u8FD1js\u800C\u4E0D\u662Fhtml,\u6240\u4EE5reactDOM\u4F7F\u7528\u5C0F\u9A7C\u5CF0\u547D\u540D\u5B9A\u4E49\u5C5E\u6027\u3002jsx\u4E2Dclass\u53D8\u6210\u4E86className
- class\u662F\u5173\u952E\u5B57\uFF0C\u5728react\u4E2D\u4F7F\u7528\u4E0D\u65B9\u4FBF
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u6240\u6709-react-\u7EC4\u4EF6\u90FD\u5FC5\u987B\u50CF\u7EAF\u51FD\u6570\u4E00\u6837\u4FDD\u62A4\u5B83\u4EEC\u7684-props-\u4E0D\u88AB\u66F4\u6539\u3002" tabindex="-1"><a class="header-anchor" href="#\u6240\u6709-react-\u7EC4\u4EF6\u90FD\u5FC5\u987B\u50CF\u7EAF\u51FD\u6570\u4E00\u6837\u4FDD\u62A4\u5B83\u4EEC\u7684-props-\u4E0D\u88AB\u66F4\u6539\u3002" aria-hidden="true">#</a> \u6240\u6709 React \u7EC4\u4EF6\u90FD\u5FC5\u987B\u50CF\u7EAF\u51FD\u6570\u4E00\u6837\u4FDD\u62A4\u5B83\u4EEC\u7684 props \u4E0D\u88AB\u66F4\u6539\u3002</h3><h3 id="jsx-\u4E2D\u5199\u6CE8\u91CA-\u62EC\u8D77\u6765" tabindex="-1"><a class="header-anchor" href="#jsx-\u4E2D\u5199\u6CE8\u91CA-\u62EC\u8D77\u6765" aria-hidden="true">#</a> jsx \u4E2D\u5199\u6CE8\u91CA\uFF1A{}\u62EC\u8D77\u6765</h3><h3 id="jsx-\u4E2D\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u540D\u79F0\u5FC5\u987B\u4EE5\u5927\u5199\u5B57\u6BCD\u5F00\u5934\u3002" tabindex="-1"><a class="header-anchor" href="#jsx-\u4E2D\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u540D\u79F0\u5FC5\u987B\u4EE5\u5927\u5199\u5B57\u6BCD\u5F00\u5934\u3002" aria-hidden="true">#</a> jsx \u4E2D\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u540D\u79F0\u5FC5\u987B\u4EE5\u5927\u5199\u5B57\u6BCD\u5F00\u5934\u3002</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>React \u4F1A\u5C06\u4EE5\u5C0F\u5199\u5B57\u6BCD\u5F00\u5934\u7684\u7EC4\u4EF6\u89C6\u4E3A\u539F\u751F DOM \u6807\u7B7E\u3002\u4F8B\u5982\uFF0C&lt;div /&gt; \u4EE3\u8868 HTML \u7684 div \u6807\u7B7E\uFF0C\u800C &lt;Welcome /&gt; \u5219\u4EE3\u8868\u4E00\u4E2A\u7EC4\u4EF6\uFF0C\u5E76\u4E14\u9700\u5728\u4F5C\u7528\u57DF\u5185\u4F7F\u7528 Welcome\u3002
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="reactdom-\u6E32\u67D3\u524D-\u9ED8\u8BA4\u5C06\u8F93\u5165\u6240\u6709\u7684\u5185\u5BB9\u8FDB\u884C\u8F6C\u4E49\u3002" tabindex="-1"><a class="header-anchor" href="#reactdom-\u6E32\u67D3\u524D-\u9ED8\u8BA4\u5C06\u8F93\u5165\u6240\u6709\u7684\u5185\u5BB9\u8FDB\u884C\u8F6C\u4E49\u3002" aria-hidden="true">#</a> ReactDom \u6E32\u67D3\u524D\uFF0C\u9ED8\u8BA4\u5C06\u8F93\u5165\u6240\u6709\u7684\u5185\u5BB9\u8FDB\u884C\u8F6C\u4E49\u3002</h3><p>\u907F\u514D\u4E86 xss \u653B\u51FB\u3002</p><h3 id="\u907F\u514D\u5C06-props-\u7684\u503C\u590D\u5236\u7ED9-state-\u8FD9\u662F\u4E00\u4E2A\u5E38\u89C1\u7684\u9519\u8BEF" tabindex="-1"><a class="header-anchor" href="#\u907F\u514D\u5C06-props-\u7684\u503C\u590D\u5236\u7ED9-state-\u8FD9\u662F\u4E00\u4E2A\u5E38\u89C1\u7684\u9519\u8BEF" aria-hidden="true">#</a> \u907F\u514D\u5C06 props \u7684\u503C\u590D\u5236\u7ED9 state\uFF01\u8FD9\u662F\u4E00\u4E2A\u5E38\u89C1\u7684\u9519\u8BEF\uFF1A</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>constructor(props) {
 super(props);
 // \u4E0D\u8981\u8FD9\u6837\u505A
 this.state = { color: props.color };
}
\u5982\u6B64\u505A\u6BEB\u65E0\u5FC5\u8981\uFF08\u4F60\u53EF\u4EE5\u76F4\u63A5\u4F7F\u7528 this.props.color\uFF09\uFF0C\u540C\u65F6\u8FD8\u4EA7\u751F\u4E86 bug\uFF08\u66F4\u65B0 prop \u4E2D\u7684 color \u65F6\uFF0C\u5E76\u4E0D\u4F1A\u5F71\u54CD state\uFF09\u3002

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="componentdidupdate-\u5FC5\u987B\u6CE8\u610F\u5B83\u5FC5\u987B\u88AB\u5305\u88F9\u5728\u4E00\u4E2A\u6761\u4EF6\u8BED\u53E5\u91CC" tabindex="-1"><a class="header-anchor" href="#componentdidupdate-\u5FC5\u987B\u6CE8\u610F\u5B83\u5FC5\u987B\u88AB\u5305\u88F9\u5728\u4E00\u4E2A\u6761\u4EF6\u8BED\u53E5\u91CC" aria-hidden="true">#</a> componentDidUpdate()\u5FC5\u987B\u6CE8\u610F\u5B83\u5FC5\u987B\u88AB\u5305\u88F9\u5728\u4E00\u4E2A\u6761\u4EF6\u8BED\u53E5\u91CC</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>componentDidUpdate(prevProps) {
  // \u5178\u578B\u7528\u6CD5\uFF08\u4E0D\u8981\u5FD8\u8BB0\u6BD4\u8F83 props\uFF09\uFF1A
  if (this.props.userID !== prevProps.userID) {
    this.fetchData(this.props.userID);
  }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u4E00\u822C-react-\u6784\u5EFA\u7684\u5E94\u7528\u901A\u5E38\u53EA\u6709\u5355\u4E00\u7684\u6839-dom-\u8282\u70B9\u3002" tabindex="-1"><a class="header-anchor" href="#\u4E00\u822C-react-\u6784\u5EFA\u7684\u5E94\u7528\u901A\u5E38\u53EA\u6709\u5355\u4E00\u7684\u6839-dom-\u8282\u70B9\u3002" aria-hidden="true">#</a> \u4E00\u822C React \u6784\u5EFA\u7684\u5E94\u7528\u901A\u5E38\u53EA\u6709\u5355\u4E00\u7684\u6839 DOM \u8282\u70B9\u3002</h3><p>\u4F46\u662F\u5982\u679C\u5C06 React \u96C6\u6210\u5230\u4E00\u4E2A\u5DF2\u7ECF\u5B58\u5728\u7684\u5E94\u7528\uFF0C\u90A3\u4E48\u53EF\u4EE5\u5728\u5E94\u7528\u4E2D\u5305\u542B\u591A\u4E2A\u6839 DOM 2.jsx \u4E2D\u7684\u901A\u8FC7\u5F15\u53F7\u5C06\u5C5E\u6027\u503C\u8F6C\u4E3A\u5B57\u7B26\u4E32\u5B57\u9762\u91CF\uFF0C</p><h2 id="_1-jsx-\u8F6C\u6362\u4F7F\u7528\u7279\u5B9A\u5C5E\u6027\u503C" tabindex="-1"><a class="header-anchor" href="#_1-jsx-\u8F6C\u6362\u4F7F\u7528\u7279\u5B9A\u5C5E\u6027\u503C" aria-hidden="true">#</a> 1.jsx \u8F6C\u6362\u4F7F\u7528\u7279\u5B9A\u5C5E\u6027\u503C</h2><p>\u65B9\u6CD5 1\uFF1A\u4F7F\u7528\u5F15\u53F7 \u65B9\u6CD5 2\uFF1A\u4F7F\u7528{}</p><h1 id="\u7B2C\u4E09\u7AE0-\u5143\u7D20\u6E32\u67D3" tabindex="-1"><a class="header-anchor" href="#\u7B2C\u4E09\u7AE0-\u5143\u7D20\u6E32\u67D3" aria-hidden="true">#</a> \u7B2C\u4E09\u7AE0\uFF1A\u5143\u7D20\u6E32\u67D3</h1><h2 id="_1-\u66F4\u65B0\u5DF2\u7ECF\u6E32\u67D3\u7684\u5143\u7D20" tabindex="-1"><a class="header-anchor" href="#_1-\u66F4\u65B0\u5DF2\u7ECF\u6E32\u67D3\u7684\u5143\u7D20" aria-hidden="true">#</a> 1.\u66F4\u65B0\u5DF2\u7ECF\u6E32\u67D3\u7684\u5143\u7D20</h2><p>React \u5143\u7D20\u662F\u4E0D\u53EF\u53D8\u5BF9\u8C61\uFF0C\u4E00\u822C\u521B\u5EFA\uFF0C\u4E0D\u53EF\u4EE5\u66F4\u6539\u5B83\u7684\u5C5E\u6027\u6216\u662F\u5B50\u5143\u7D20\uFF0C\u5B83\u4EE3\u8868\u4E86\u67D0\u4E00\u4E2A\u7279\u5B9A\u65F6\u523B\u7684 UI.</p><h2 id="_2-react-\u53EA\u66F4\u65B0\u5B83\u9700\u8981\u66F4\u65B0\u7684\u90E8\u5206" tabindex="-1"><a class="header-anchor" href="#_2-react-\u53EA\u66F4\u65B0\u5B83\u9700\u8981\u66F4\u65B0\u7684\u90E8\u5206" aria-hidden="true">#</a> 2.React \u53EA\u66F4\u65B0\u5B83\u9700\u8981\u66F4\u65B0\u7684\u90E8\u5206</h2><h1 id="\u7B2C\u56DB\u7AE0-\u7EC4\u4EF6\u548C-pops" tabindex="-1"><a class="header-anchor" href="#\u7B2C\u56DB\u7AE0-\u7EC4\u4EF6\u548C-pops" aria-hidden="true">#</a> \u7B2C\u56DB\u7AE0\uFF1A\u7EC4\u4EF6\u548C Pops</h1><p>\u7EC4\u4EF6\u6982\u5FF5\u4E0A\uFF0C\u7C7B\u4F3C\u4E8E js \u51FD\u6570\uFF0C\u63A5\u53D7\u4EFB\u610F\u7684\u5165\u53C2\uFF0C\u8FD4\u56DE\u7528\u4E8E\u63CF\u8FF0\u9875\u9762\u5C55\u793A\u5185\u5BB9\u7684 React \u5143\u7D20\u3002</p><h2 id="\u51FD\u6570\u7EC4\u4EF6\u548C-class-\u7EC4\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u51FD\u6570\u7EC4\u4EF6\u548C-class-\u7EC4\u4EF6" aria-hidden="true">#</a> \u51FD\u6570\u7EC4\u4EF6\u548C class \u7EC4\u4EF6</h2><h3 id="js-\u51FD\u6570\u5B9A\u4E49\u4E00\u4E2A\u51FD\u6570\u7EC4\u4EF6" tabindex="-1"><a class="header-anchor" href="#js-\u51FD\u6570\u5B9A\u4E49\u4E00\u4E2A\u51FD\u6570\u7EC4\u4EF6" aria-hidden="true">#</a> js \u51FD\u6570\u5B9A\u4E49\u4E00\u4E2A\u51FD\u6570\u7EC4\u4EF6</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>function  welcome(props){
    return &lt;h1&gt;hello{props.name}&lt;/h1&gt;
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="class-\u7EC4\u4EF6" tabindex="-1"><a class="header-anchor" href="#class-\u7EC4\u4EF6" aria-hidden="true">#</a> class \u7EC4\u4EF6</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>class  Welcome extends React.Component{
    render(){
        return &lt;h1&gt;hello{this.props.name}&lt;/h1&gt;
    }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u6E32\u67D3\u7EC4\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u6E32\u67D3\u7EC4\u4EF6" aria-hidden="true">#</a> \u6E32\u67D3\u7EC4\u4EF6</h2><p>\u5F53 React \u5143\u7D20\u6E32\u67D3\u7528\u6237\u81EA\u5B9A\u4E49\u7684\u7EC4\u4EF6\u65F6\u5019\uFF0C\u4F1A\u5C06 jsx \u6240\u63A5\u6536\u7684\u5C5E\u6027\u4EE5\u53CA\u5B50\u7EC4\u4EF6 children \u8F6C\u6362\u4E3A\u5355\u4E2A\u5BF9\u8C61\u4F20\u9012\u7ED9\u7EC4\u4EF6\uFF0C\u8FD9\u4E2A\u5BF9\u8C61\u79F0\u4E3A props</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u4E0A\u9762\u5B9A\u4E49\u597D\u7684\u51FD\u6570\uFF08class\u7EC4\u4EF6\uFF09\u7EC4\u4EF6\uFF0C\u4F7F\u7528
const element = (&lt;Welcome  name=&quot;daning&quot; /&gt;)
ReactDOM.render(
    element,
    docuement.getElementById(&#39;root&#39;)
)

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="props-\u7684\u53EA\u8BFB\u6027" tabindex="-1"><a class="header-anchor" href="#props-\u7684\u53EA\u8BFB\u6027" aria-hidden="true">#</a> props \u7684\u53EA\u8BFB\u6027</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u7EC4\u4EF6\u4E0D\u80FD\u4FEE\u6539\u81EA\u8EAB\u7684 props.
\u7EAF\u51FD\u6570\uFF0C\u8F93\u5165\u7684\u5185\u5BB9\u548C\u8F93\u51FA\u7684\u5185\u5BB9\u552F\u4E00\u786E\u5B9A\uFF0C\u4E0D\u4F1A\u8F93\u5165\u76F8\u540C\u8F93\u51FA\u4E0D\u540C\u3002\u4E0B\u9762\u4FEE\u6539\u4E86\u5165\u53C2\u3002
function withdraw(account, amount) {
account.total -= amount;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_5-state-\u548C\u751F\u547D\u5468\u671F" tabindex="-1"><a class="header-anchor" href="#_5-state-\u548C\u751F\u547D\u5468\u671F" aria-hidden="true">#</a> 5.state \u548C\u751F\u547D\u5468\u671F</h1><h2 id="\u7EC4\u4EF6\u7684\u751F\u547D\u5468\u671F" tabindex="-1"><a class="header-anchor" href="#\u7EC4\u4EF6\u7684\u751F\u547D\u5468\u671F" aria-hidden="true">#</a> \u7EC4\u4EF6\u7684\u751F\u547D\u5468\u671F</h2><p>\u7EC4\u4EF6\u7684\u751F\u547D\u5468\u671F\u3002</p><h3 id="\u5F53\u7EC4\u4EF6\u5B9E\u4F8B\u88AB\u521B\u5EFA\u5E76\u63D2\u5165-dom-\u4E2D\u65F6-\u5176\u751F\u547D\u5468\u671F\u8C03\u7528\u987A\u5E8F\u5982\u4E0B" tabindex="-1"><a class="header-anchor" href="#\u5F53\u7EC4\u4EF6\u5B9E\u4F8B\u88AB\u521B\u5EFA\u5E76\u63D2\u5165-dom-\u4E2D\u65F6-\u5176\u751F\u547D\u5468\u671F\u8C03\u7528\u987A\u5E8F\u5982\u4E0B" aria-hidden="true">#</a> \u5F53\u7EC4\u4EF6\u5B9E\u4F8B\u88AB\u521B\u5EFA\u5E76\u63D2\u5165 DOM \u4E2D\u65F6\uFF0C\u5176\u751F\u547D\u5468\u671F\u8C03\u7528\u987A\u5E8F\u5982\u4E0B\uFF1A</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>1.constructor()
    \uFF081\uFF09\u901A\u8FC7\u7ED9 this.state \u8D4B\u503C\u5BF9\u8C61\u6765\u521D\u59CB\u5316\u5185\u90E8 state\u3002
    \uFF082\uFF09\u4E3A\u4E8B\u4EF6\u5904\u7406\u51FD\u6570\u7ED1\u5B9A\u5B9E\u4F8B
2.static getDerivedStateFromProps()\uFF08\u5B83\u5E94\u8FD4\u56DE\u4E00\u4E2A\u5BF9\u8C61\u6765\u66F4\u65B0 state\uFF0C\u5982\u679C\u8FD4\u56DE null \u5219\u4E0D\u66F4\u65B0\u4EFB\u4F55\u5185\u5BB9\u3002\uFF09
3.render()
4.componentDidMount()
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u7EC4\u4EF6\u66F4\u65B0\u65F6-\u8C03\u7528\u987A\u5E8F" tabindex="-1"><a class="header-anchor" href="#\u7EC4\u4EF6\u66F4\u65B0\u65F6-\u8C03\u7528\u987A\u5E8F" aria-hidden="true">#</a> \u7EC4\u4EF6\u66F4\u65B0\u65F6\uFF0C\u8C03\u7528\u987A\u5E8F</h3><p>\u5F53\u7EC4\u4EF6\u7684 props \u6216 state \u53D1\u751F\u53D8\u5316\u65F6\u4F1A\u89E6\u53D1\u66F4\u65B0\u3002\u7EC4\u4EF6\u66F4\u65B0\u7684\u751F\u547D\u5468\u671F\u8C03\u7528\u987A\u5E8F\u5982\u4E0B\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>1.static getDerivedStateFromProps()
2.shouldComponentUpdate()
3.render()
4.getSnapshotBeforeUpdate()
5.componentDidUpdate()
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="\u5F53\u7136\u8FD9\u4E9B\u6240\u6709\u7684\u90FD\u662F\u624B\u52A8\u7684\u8C03\u7528-\u548C-vue-\u4E00\u6837-\u5982\u679C\u53EA\u662F\u786E\u4FDD\u4E00\u4E9B\u5355\u4E00\u7684\u529F\u80FD-\u53EF\u4EE5\u8C03\u7528\u5FC5\u8981\u7684" tabindex="-1"><a class="header-anchor" href="#\u5F53\u7136\u8FD9\u4E9B\u6240\u6709\u7684\u90FD\u662F\u624B\u52A8\u7684\u8C03\u7528-\u548C-vue-\u4E00\u6837-\u5982\u679C\u53EA\u662F\u786E\u4FDD\u4E00\u4E9B\u5355\u4E00\u7684\u529F\u80FD-\u53EF\u4EE5\u8C03\u7528\u5FC5\u8981\u7684" aria-hidden="true">#</a> \u5F53\u7136\u8FD9\u4E9B\u6240\u6709\u7684\u90FD\u662F\u624B\u52A8\u7684\u8C03\u7528\uFF08\u548C vue \u4E00\u6837\uFF0C\u5982\u679C\u53EA\u662F\u786E\u4FDD\u4E00\u4E9B\u5355\u4E00\u7684\u529F\u80FD\uFF0C\u53EF\u4EE5\u8C03\u7528\u5FC5\u8981\u7684\uFF09</h4><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\uFF081\uFF09\u5982\u679C\u4F60\u9700\u8981\u6267\u884C\u526F\u4F5C\u7528\uFF08\u4F8B\u5982\uFF0C\u6570\u636E\u63D0\u53D6\u6216\u52A8\u753B\uFF09\u4EE5\u54CD\u5E94 props \u4E2D\u7684\u66F4\u6539\uFF0C\u8BF7\u6539\u7528 componentDidUpdate\u3002
componentDidUpdate() \u4F1A\u5728\u66F4\u65B0\u540E\u4F1A\u88AB\u7ACB\u5373\u8C03\u7528

\uFF082\uFF09componentDidMount() \u4F1A\u5728\u7EC4\u4EF6\u6302\u8F7D\u540E\uFF08\u63D2\u5165 DOM \u6811\u4E2D\uFF09\u7ACB\u5373\u8C03\u7528

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="\u91CD\u590D\u8C03\u7528\u76F8\u540C\u7684\u503C-\u6709\u4E00\u4E2A\u7C7B\u4F3C-vue-\u7684\u8BA1\u7B97\u5C5E\u6027-memoization-\u5E2E\u52A9\u51FD\u6570\u6765\u963B\u6B62\u975E\u5FC5\u8981\u7684\u8FC7\u6EE4" tabindex="-1"><a class="header-anchor" href="#\u91CD\u590D\u8C03\u7528\u76F8\u540C\u7684\u503C-\u6709\u4E00\u4E2A\u7C7B\u4F3C-vue-\u7684\u8BA1\u7B97\u5C5E\u6027-memoization-\u5E2E\u52A9\u51FD\u6570\u6765\u963B\u6B62\u975E\u5FC5\u8981\u7684\u8FC7\u6EE4" aria-hidden="true">#</a> \u91CD\u590D\u8C03\u7528\u76F8\u540C\u7684\u503C\uFF0C\u6709\u4E00\u4E2A\u7C7B\u4F3C vue \u7684\u8BA1\u7B97\u5C5E\u6027\uFF0C memoization \u5E2E\u52A9\u51FD\u6570\u6765\u963B\u6B62\u975E\u5FC5\u8981\u7684\u8FC7\u6EE4\uFF1A</h4><p>\u7F13\u5B58\u4E0A\u4E00\u6B21\u7684\u503C\u3002</p><h3 id="\u7EC4\u4EF6\u5378\u8F7D\u8C03\u7528\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u7EC4\u4EF6\u5378\u8F7D\u8C03\u7528\u65B9\u6CD5" aria-hidden="true">#</a> \u7EC4\u4EF6\u5378\u8F7D\u8C03\u7528\u65B9\u6CD5</h3><p>\u5F53\u7EC4\u4EF6\u4ECE DOM \u4E2D\u79FB\u9664\u65F6\u4F1A\u8C03\u7528\u5982\u4E0B\u65B9\u6CD5\uFF1A</p><p>componentWillUnmount()</p><h3 id="\u9519\u8BEF\u5904\u7406" tabindex="-1"><a class="header-anchor" href="#\u9519\u8BEF\u5904\u7406" aria-hidden="true">#</a> \u9519\u8BEF\u5904\u7406</h3><p>\u5F53\u6E32\u67D3\u8FC7\u7A0B\uFF0C\u751F\u547D\u5468\u671F\uFF0C\u6216\u5B50\u7EC4\u4EF6\u7684\u6784\u9020\u51FD\u6570\u4E2D\u629B\u51FA\u9519\u8BEF\u65F6\uFF0C\u4F1A\u8C03\u7528\u5982\u4E0B\u65B9\u6CD5\uFF1A</p><p>static getDerivedStateFromError() componentDidCatch()</p><h3 id="\u603B\u7684\u6765\u8BF4-react-\u5206\u4E3A\u4E24\u5927\u9636\u6BB5-render-\u9636\u6BB5\u548C-commit-\u9636\u6BB5-\u5E38\u7528\u5982\u4E0B" tabindex="-1"><a class="header-anchor" href="#\u603B\u7684\u6765\u8BF4-react-\u5206\u4E3A\u4E24\u5927\u9636\u6BB5-render-\u9636\u6BB5\u548C-commit-\u9636\u6BB5-\u5E38\u7528\u5982\u4E0B" aria-hidden="true">#</a> \u603B\u7684\u6765\u8BF4 React \u5206\u4E3A\u4E24\u5927\u9636\u6BB5\uFF1Arender \u9636\u6BB5\u548C commit \u9636\u6BB5\uFF08\u5E38\u7528\u5982\u4E0B\uFF09</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u6302\u8F7D\u65F6\u5019\uFF0Cconstructor-&gt;render-&gt;(\u66F4\u65B0 DOM \u548C refs)componentDidMount
\u66F4\u65B0\u65F6\u5019\uFF0Crender-&gt;(\u66F4\u65B0 DOM \u548C refs)componentDidMount
\u5378\u8F7D\u65F6\u5019\uFF0CcomponentWillUnmount
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u51FD\u6570\u7EC4\u4EF6\u8F6C\u6362\u4E3A-class-\u7EC4\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u51FD\u6570\u7EC4\u4EF6\u8F6C\u6362\u4E3A-class-\u7EC4\u4EF6" aria-hidden="true">#</a> \u51FD\u6570\u7EC4\u4EF6\u8F6C\u6362\u4E3A class \u7EC4\u4EF6</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u7B2C\u4E00\u6B65\uFF0C\u521B\u5EFA\u4E00\u4E2A\u540C\u540D\u7684ES6\u7684class,\u5E76\u4E14\u7EE7\u627F\u4E8EReact.Component
\u7B2C\u4E8C\u6B65\uFF0C\u6DFB\u52A0\u4E00\u4E2A\u7A7A\u7684render\u65B9\u6CD5
\u7B2C\u4E09\u6B65\uFF0C\u5C06\u51FD\u6570\u4F53\u79FB\u52A8\u5230render()\u5185\u90E8\u3002
\u7B2C\u56DB\u6B65\uFF0C\u5C06render\u4E2D\u4F7F\u7528this.props\u66FF\u6362props.
\u7B2C\u4E94\u6B65\uFF0C\u5220\u9664\u5269\u4F59\u7684\u7A7A\u51FD\u6570\u7684\u58F0\u660E\u3002
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u5411-class-\u4E2D\u6DFB\u52A0\u5C40\u90E8\u7684-state" tabindex="-1"><a class="header-anchor" href="#\u5411-class-\u4E2D\u6DFB\u52A0\u5C40\u90E8\u7684-state" aria-hidden="true">#</a> \u5411 class \u4E2D\u6DFB\u52A0\u5C40\u90E8\u7684 state</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u5982\u4F55\u5C06date\u4ECEprops\u79FB\u52A8\u5230state\u4E2D
\u7B2C\u4E00\u6B65\uFF0C\u901A\u8FC7render\u65B9\u6CD5\u4E2D\u7684this.props.date\u66FF\u6362\u6210this.state.date
\u7B2C\u4E8C\u6B65\uFF0C\u589E\u52A0class\u7684\u6784\u9020\u51FD\u6570\uFF0C\u7136\u540E\u5728\u8BE5\u51FD\u6570\u4E2D\u4E3Athis.state\u8D4B\u503C\u521D\u59CB\u503C
constructor(props){
    super(props)
    this.state = {date:new Date()}
}
\u7B2C\u4E09\u6B65\uFF0C\u79FB\u9664\u539F\u51FD\u6570\u7EC4\u4EF6\u4E2D\u7684date\u5C5E\u6027\u3002
ReactDOM.render(
  &lt;Clock /&gt;,
  document.getElementById(&#39;root&#39;)
);

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u5C06\u751F\u547D\u5468\u671F\u65B9\u6CD5\u6DFB\u52A0\u5230-class" tabindex="-1"><a class="header-anchor" href="#\u5C06\u751F\u547D\u5468\u671F\u65B9\u6CD5\u6DFB\u52A0\u5230-class" aria-hidden="true">#</a> \u5C06\u751F\u547D\u5468\u671F\u65B9\u6CD5\u6DFB\u52A0\u5230 class</h3><p>\u5C06\u4E0A\u9762\u58F0\u660E\u5468\u671F\u51FD\u6570\u5199\u5165 class \u4E2D\u5373\u53EF\u3002</p><h2 id="\u6B63\u786E\u7684\u4F7F\u7528-state" tabindex="-1"><a class="header-anchor" href="#\u6B63\u786E\u7684\u4F7F\u7528-state" aria-hidden="true">#</a> \u6B63\u786E\u7684\u4F7F\u7528 State</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>1.\u4E0D\u8981\u76F4\u63A5\u4FEE\u6539State,\u4F7F\u7528setState\u51FD\u6570
// Wrong
this.state.comment = &#39;Hello&#39;;
this.setState({
    comment:&#39;12&#39;
})
2.State\u7684\u66F4\u65B0\u53EF\u80FD\u662F\u5F02\u6B65\u7684
\u51FA\u4E8E\u6027\u80FD\u8003\u8651\uFF0CReact\u53EF\u80FD\u4F1A\u628A\u591A\u4E2AsetState\u5F53\u6210\u4E00\u4E2A\u8C03\u7528\u3002
\u5982\u679C\u662F\u591A\u4E2A\u5BF9\u8C61\uFF0C\u90A3\u4E48\u65E0\u6CD5\u63A7\u5236\u66F4\u65B0\u72B6\u6001\u3002
setState\u63A5\u6536\u4E00\u4E2A\u51FD\u6570\uFF0C\u800C\u4E0D\u662F\u4E00\u4E2A\u5BF9\u8C61\u3002\u51FD\u6570\u4F7F\u7528state\u4F5C\u4E3A\u53C2\u6570\uFF0C\u7B2C\u4E8C\u4E2A\u53C2\u6570props.
// Correct
this.setState((state, props) =&gt; ({
  counter: state.counter + props.increment
}));
\u4F7F\u7528\u51FD\u6570\uFF0C\u4FDD\u8BC1\u8FD9\u4E2A\u662F\u4E00\u4E2A\u5355\u4F8B\u6A21\u5F0F\u3002
vue\u4E2D\u4E3A\u4EC0\u4E48data\u662F\u4E00\u4E2A\u51FD\u6570\u3002
\u5C06data\u5C01\u88C5\u6210\u51FD\u6570\u540E\uFF0C\u5728\u5B9E\u4F8B\u5316\u7EC4\u4EF6\u7684\u65F6\u5019\uFF0C\u6211\u4EEC\u53EA\u662F\u8C03\u7528\u4E86data\u51FD\u6570\u751F\u6210\u7684\u6570\u636E\u526F\u672C\uFF0C\u907F\u514D\u4E86\u6570\u636E\u6C61\u67D3\u3002
3.State\u7684\u66F4\u65B0\u4F1A\u88AB\u5408\u5E76\u3002

4.\u6570\u636E\u662F\u5411\u4E0B\u6D41\u52A8\u7684\u3002
\u4E3A\u4EC0\u4E48\u6210\u4E3Astate\u662F\u5C40\u90E8\u7684\u6216\u662F\u5C01\u88C5\u7684\u539F\u56E0\u3002
\u56E0\u4E3A\u4E0D\u8BBA\u662F\u7236\u7EC4\u4EF6\u8FD8\u662F\u5B50\u7EC4\u4EF6\u90FD\u65E0\u6CD5\u77E5\u9053\u67D0\u4E00\u4E2A\u7EC4\u4EF6\u5185\u90E8\u662F\u6709\u72B6\u6001\u8FD8\u662F\u65E0\u72B6\u6001\uFF0C\u5E76\u4E14\u4ED6\u4EEC\u4E0D\u5173\u5FC3\u4ED6\u4EEC\u662F\u51FD\u6570\u8FD8\u662Fclass\u7EC4\u4EF6\u3002
\u9664\u4E86\u62E5\u6709\u5E76\u4E14\u8BBE\u7F6E\u4ED6\u7684\u7EC4\u4EF6\uFF0C\u5176\u4ED6\u7EC4\u4EF6\u65E0\u6CD5\u8BBF\u95EE\u3002

&lt;FormattedDate date={this.state.date} /&gt;
\u8FD9\u91CCFormattedDate\u7EC4\u4EF6\u4F1A\u5728props\u4E2D\u63A5\u53D7\u53C2\u6570date,\u4F46\u662F\u7EC4\u4EF6\u672C\u8EAB\u65E0\u6CD5\u77E5\u9053\u4ED6\u662F\u6765\u81EAClock\u7684state,\u8FD8\u662FClock\u7684props,\u6216\u662F\u624B\u52A8\u8F93\u5165\u3002

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="\u7B2C\u516D\u7AE0-react-\u4E8B\u4EF6\u5904\u7406" tabindex="-1"><a class="header-anchor" href="#\u7B2C\u516D\u7AE0-react-\u4E8B\u4EF6\u5904\u7406" aria-hidden="true">#</a> \u7B2C\u516D\u7AE0\uFF1AReact \u4E8B\u4EF6\u5904\u7406</h1><h2 id="\u4E8B\u4EF6\u5904\u7406\u7684\u8BED\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u4E8B\u4EF6\u5904\u7406\u7684\u8BED\u6CD5" aria-hidden="true">#</a> \u4E8B\u4EF6\u5904\u7406\u7684\u8BED\u6CD5</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>1.React\u4E8B\u4EF6\u547D\u540D\u4F7F\u7528\u5C0F\u9A7C\u5CF0\u547D\u540D\uFF0C\u800C\u4E0D\u662F\u7EAF\u5C0F\u5199\u539F\u751F\u65B9\u5F0F
2.JSX\u8BED\u6CD5\u4E2D\u9700\u8981\u4F20\u5165\u4E00\u4E2A\u51FD\u6570\u4F5C\u4E3A\u4E8B\u4EF6\u5904\u7406\u51FD\u6570\uFF0C\u800C\u4E0D\u662F\u4E00\u4E2A\u5B57\u7B26\u4E32\u3002
3.\u4F60\u4E0D\u80FD\u901A\u8FC7return false\u963B\u6B62\u9ED8\u8BA4\u884C\u4E3A\uFF0C\u5FC5\u987B\u663E\u5F0F\u8C03\u7528preventDefault,
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u5411\u4E8B\u4EF6\u5904\u7406\u7A0B\u5E8F\u4F20\u9012\u53C2\u6570" tabindex="-1"><a class="header-anchor" href="#\u5411\u4E8B\u4EF6\u5904\u7406\u7A0B\u5E8F\u4F20\u9012\u53C2\u6570" aria-hidden="true">#</a> \u5411\u4E8B\u4EF6\u5904\u7406\u7A0B\u5E8F\u4F20\u9012\u53C2\u6570</h2><p>\u65B9\u6CD5 1\uFF1A\u7BAD\u5934\u51FD\u6570\u5B9E\u73B0\u4F20\u9012\uFF0C\u56E0\u4E3A\u5982\u679C\u662F\u7BAD\u5934\u51FD\u6570\uFF0C\u4E8B\u4EF6\u7684\u5BF9\u8C61\u5FC5\u987B\u901A\u8FC7\u663E\u5F0F\u7684\u65B9\u6CD5\u8FDB\u884C\u4F20\u9012</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&lt;button onClick={(e) =&gt; this.deleteRow(id, e)}&gt;Delete Row&lt;/button&gt;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u65B9\u6CD5 2\uFF1Abingd \u4F20\u9012\u53C2\u6570\uFF0C\u7B26\u5408\u6211\u4EEC\u7684\u5E38\u8BC6\u8BA4\u77E5</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>bind \u7684\u65B9\u5F0F\uFF0C\u4E8B\u4EF6\u5BF9\u8C61\u4EE5\u53CA\u66F4\u591A\u7684\u53C2\u6570\u5C06\u4F1A\u88AB\u9690\u5F0F\u7684\u8FDB\u884C\u4F20\u9012\u3002
&lt;button onClick={this.deleteRow.bind(this, id)}&gt;Delete Row&lt;/button&gt;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="\u7B2C\u4E03\u7AE0-\u6761\u4EF6\u6E32\u67D3" tabindex="-1"><a class="header-anchor" href="#\u7B2C\u4E03\u7AE0-\u6761\u4EF6\u6E32\u67D3" aria-hidden="true">#</a> \u7B2C\u4E03\u7AE0\uFF1A\u6761\u4EF6\u6E32\u67D3</h1><h2 id="true-expression-\u603B\u662F\u4F1A\u8FD4\u56DE-expression\u3002" tabindex="-1"><a class="header-anchor" href="#true-expression-\u603B\u662F\u4F1A\u8FD4\u56DE-expression\u3002" aria-hidden="true">#</a> true &amp;&amp; expression \u603B\u662F\u4F1A\u8FD4\u56DE expression\u3002</h2><p>\u56E0\u4E3A\u5728 JavaScript \u4E2D\uFF0Ctrue &amp;&amp; expression \u603B\u662F\u4F1A\u8FD4\u56DE expression, \u800C false &amp;&amp; expression \u603B\u662F\u4F1A\u8FD4\u56DE false\u3002</p><h2 id="\u963B\u6B62\u7EC4\u4EF6\u6E32\u67D3" tabindex="-1"><a class="header-anchor" href="#\u963B\u6B62\u7EC4\u4EF6\u6E32\u67D3" aria-hidden="true">#</a> \u963B\u6B62\u7EC4\u4EF6\u6E32\u67D3</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u8BA9 render \u65B9\u6CD5\u76F4\u63A5\u8FD4\u56DE null\uFF0C\u800C\u4E0D\u8FDB\u884C\u4EFB\u4F55\u6E32\u67D3\u3002

\`\`\`
function WarningBanner(props) {
  if (!props.warn) {
    return null;
  }

  return (
    &lt;div className=&quot;warning&quot;&gt;
      Warning!
    &lt;/div&gt;
  );
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="\u7B2C\u516B\u7AE0-\u5217\u8868-key" tabindex="-1"><a class="header-anchor" href="#\u7B2C\u516B\u7AE0-\u5217\u8868-key" aria-hidden="true">#</a> \u7B2C\u516B\u7AE0\uFF1A\u5217\u8868 &amp; Key</h1><h2 id="key-\u5E2E\u52A9-react-\u8BC6\u522B\u54EA\u4E9B\u5143\u7D20\u6539\u53D8\u4E86-\u6BD4\u5982\u88AB\u6DFB\u52A0\u6216\u5220\u9664\u3002\u56E0\u6B64\u4F60\u5E94\u5F53\u7ED9\u6570\u7EC4\u4E2D\u7684\u6BCF\u4E00\u4E2A\u5143\u7D20\u8D4B\u4E88\u4E00\u4E2A\u786E\u5B9A\u7684\u6807\u8BC6\u3002" tabindex="-1"><a class="header-anchor" href="#key-\u5E2E\u52A9-react-\u8BC6\u522B\u54EA\u4E9B\u5143\u7D20\u6539\u53D8\u4E86-\u6BD4\u5982\u88AB\u6DFB\u52A0\u6216\u5220\u9664\u3002\u56E0\u6B64\u4F60\u5E94\u5F53\u7ED9\u6570\u7EC4\u4E2D\u7684\u6BCF\u4E00\u4E2A\u5143\u7D20\u8D4B\u4E88\u4E00\u4E2A\u786E\u5B9A\u7684\u6807\u8BC6\u3002" aria-hidden="true">#</a> key \u5E2E\u52A9 React \u8BC6\u522B\u54EA\u4E9B\u5143\u7D20\u6539\u53D8\u4E86\uFF0C\u6BD4\u5982\u88AB\u6DFB\u52A0\u6216\u5220\u9664\u3002\u56E0\u6B64\u4F60\u5E94\u5F53\u7ED9\u6570\u7EC4\u4E2D\u7684\u6BCF\u4E00\u4E2A\u5143\u7D20\u8D4B\u4E88\u4E00\u4E2A\u786E\u5B9A\u7684\u6807\u8BC6\u3002</h2><p>\u5F53\u5143\u7D20\u6CA1\u6709\u786E\u5B9A id \u7684\u65F6\u5019\uFF0C\u4E07\u4E0D\u5F97\u5DF2\u4F60\u53EF\u4EE5\u4F7F\u7528\u5143\u7D20\u7D22\u5F15 index \u4F5C\u4E3A key\u3002 \u5982\u679C\u5217\u8868\u9879\u76EE\u7684\u987A\u5E8F\u53EF\u80FD\u4F1A\u53D8\u5316\uFF0C\u6211\u4EEC\u4E0D\u5EFA\u8BAE\u4F7F\u7528\u7D22\u5F15\u6765\u7528\u4F5C key \u503C\u3002</p><h2 id="\u7528-key-\u63D0\u53D6\u7EC4\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u7528-key-\u63D0\u53D6\u7EC4\u4EF6" aria-hidden="true">#</a> \u7528 key \u63D0\u53D6\u7EC4\u4EF6</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u5143\u7D20\u7684 key \u53EA\u6709\u653E\u5728\u5C31\u8FD1\u7684\u6570\u7EC4\u4E0A\u4E0B\u6587\u4E2D\u624D\u6709\u610F\u4E49\u3002

\u9519\u8BEF\u6848\u4F8B


function ListItem(props) {
  const value = props.value;
  return (
    // \u9519\u8BEF\uFF01\u4F60\u4E0D\u9700\u8981\u5728\u8FD9\u91CC\u6307\u5B9A key\uFF1A
    &lt;li key={value.toString()}&gt;
      {value}
    &lt;/li&gt;
  );
}

function NumberList(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((number) =&gt;
    // \u9519\u8BEF\uFF01\u5143\u7D20\u7684 key \u5E94\u8BE5\u5728\u8FD9\u91CC\u6307\u5B9A\uFF1A
    &lt;ListItem value={number} /&gt;
  );
  return (
    &lt;ul&gt;
      {listItems}
    &lt;/ul&gt;
  );
}

const numbers = [1, 2, 3, 4, 5];



\u6B63\u786E\u65B9\u6CD5

function ListItem(props) {
  // \u6B63\u786E\uFF01\u8FD9\u91CC\u4E0D\u9700\u8981\u6307\u5B9A key\uFF1A
  return &lt;li&gt;{props.value}&lt;/li&gt;;
}

function NumberList(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((number) =&gt;
    // \u6B63\u786E\uFF01key \u5E94\u8BE5\u5728\u6570\u7EC4\u7684\u4E0A\u4E0B\u6587\u4E2D\u88AB\u6307\u5B9A
    &lt;ListItem key={number.toString()}              value={number} /&gt;

  );
  return (
    &lt;ul&gt;
      {listItems}
    &lt;/ul&gt;
  );
}



\u4E00\u4E2A\u597D\u7684\u7ECF\u9A8C\u6CD5\u5219\u662F\uFF1A\u5728 map() \u65B9\u6CD5\u4E2D\u7684\u5143\u7D20\u9700\u8981\u8BBE\u7F6E key \u5C5E\u6027\u3002
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="key-\u53EA\u662F\u5728\u5144\u5F1F\u8282\u70B9\u4E4B\u95F4\u5FC5\u987B\u552F\u4E00" tabindex="-1"><a class="header-anchor" href="#key-\u53EA\u662F\u5728\u5144\u5F1F\u8282\u70B9\u4E4B\u95F4\u5FC5\u987B\u552F\u4E00" aria-hidden="true">#</a> key \u53EA\u662F\u5728\u5144\u5F1F\u8282\u70B9\u4E4B\u95F4\u5FC5\u987B\u552F\u4E00</h2><p>\u6570\u7EC4\u5143\u7D20\u4E2D\u4F7F\u7528\u7684 key \u5728\u5176\u5144\u5F1F\u8282\u70B9\u4E4B\u95F4\u5E94\u8BE5\u662F\u72EC\u4E00\u65E0\u4E8C\u7684\u3002\u7136\u800C\uFF0C\u5B83\u4EEC\u4E0D\u9700\u8981\u662F\u5168\u5C40\u552F\u4E00\u7684\u3002\u5F53\u6211\u4EEC\u751F\u6210\u4E24\u4E2A\u4E0D\u540C\u7684\u6570\u7EC4\u65F6\uFF0C\u6211\u4EEC\u53EF\u4EE5\u4F7F\u7528\u76F8\u540C\u7684 key \u503C\uFF1A</p><h2 id="key-\u4F1A\u4F20\u9012\u4FE1\u606F\u7ED9-react-\u4F46\u4E0D\u4F1A\u4F20\u9012\u7ED9\u4F60\u7684\u7EC4\u4EF6\u3002\u5982\u679C\u4F60\u7684\u7EC4\u4EF6\u4E2D\u9700\u8981\u4F7F\u7528-key-\u5C5E\u6027\u7684\u503C-\u8BF7\u7528\u5176\u4ED6\u5C5E\u6027\u540D\u663E\u5F0F\u4F20\u9012\u8FD9\u4E2A\u503C" tabindex="-1"><a class="header-anchor" href="#key-\u4F1A\u4F20\u9012\u4FE1\u606F\u7ED9-react-\u4F46\u4E0D\u4F1A\u4F20\u9012\u7ED9\u4F60\u7684\u7EC4\u4EF6\u3002\u5982\u679C\u4F60\u7684\u7EC4\u4EF6\u4E2D\u9700\u8981\u4F7F\u7528-key-\u5C5E\u6027\u7684\u503C-\u8BF7\u7528\u5176\u4ED6\u5C5E\u6027\u540D\u663E\u5F0F\u4F20\u9012\u8FD9\u4E2A\u503C" aria-hidden="true">#</a> key \u4F1A\u4F20\u9012\u4FE1\u606F\u7ED9 React \uFF0C\u4F46\u4E0D\u4F1A\u4F20\u9012\u7ED9\u4F60\u7684\u7EC4\u4EF6\u3002\u5982\u679C\u4F60\u7684\u7EC4\u4EF6\u4E2D\u9700\u8981\u4F7F\u7528 key \u5C5E\u6027\u7684\u503C\uFF0C\u8BF7\u7528\u5176\u4ED6\u5C5E\u6027\u540D\u663E\u5F0F\u4F20\u9012\u8FD9\u4E2A\u503C\uFF1A</h2><h1 id="\u7B2C\u4E5D\u7AE0-\u5728-react-\u91CC-html-\u8868\u5355\u5143\u7D20\u7684\u5DE5\u4F5C\u65B9\u5F0F\u548C\u5176\u4ED6\u7684-dom-\u5143\u7D20\u6709\u4E9B\u4E0D\u540C" tabindex="-1"><a class="header-anchor" href="#\u7B2C\u4E5D\u7AE0-\u5728-react-\u91CC-html-\u8868\u5355\u5143\u7D20\u7684\u5DE5\u4F5C\u65B9\u5F0F\u548C\u5176\u4ED6\u7684-dom-\u5143\u7D20\u6709\u4E9B\u4E0D\u540C" aria-hidden="true">#</a> \u7B2C\u4E5D\u7AE0\uFF1A\u5728 React \u91CC\uFF0CHTML \u8868\u5355\u5143\u7D20\u7684\u5DE5\u4F5C\u65B9\u5F0F\u548C\u5176\u4ED6\u7684 DOM \u5143\u7D20\u6709\u4E9B\u4E0D\u540C</h1><p>\u8868\u5355\u5143\u7D20\u901A\u5E38\u4F1A\u4FDD\u6301\u4E00\u4E9B\u5185\u90E8\u7684 state\u3002\u4F8B\u5982\u8FD9\u4E2A\u7EAF HTML \u8868\u5355\u53EA\u63A5\u53D7\u4E00\u4E2A\u540D\u79F0\u3002</p><h2 id="\u53D7\u63A7\u7EC4\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u53D7\u63A7\u7EC4\u4EF6" aria-hidden="true">#</a> \u53D7\u63A7\u7EC4\u4EF6</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>HTML \u4E2D\u8868\u5355\u5143\u7D20\uFF1Ainput,textarea,select \u7B49\u90FD\u662F\u81EA\u5DF1\u7EF4\u62A4 state,\u6839\u636E\u7528\u6237\u8F93\u5165\u6765\u8FDB\u884C\u66F4\u65B0\u3002
React \u4E2D\u53EF\u53D8\u72B6\u6001\u901A\u5E38\u4FDD\u5B58 state \u5C5E\u6027\u4E2D\uFF0C\u53EA\u80FD\u901A\u8FC7 setState \u6765\u66F4\u65B0\u3002
\u6240\u4EE5\u6211\u4EEC\u53EF\u4EE5\u7ED3\u5408\u4E24\u8005\uFF0C\u8BA9 React \u7684 state \u6210\u4E3A\u552F\u4E00\u7684\u6570\u636E\u6E90\u3002\u6BD4\u5982\u539F\u7406\u7684 name \u8D4B\u503C\u4F7F\u7528 this.state
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="textarea-\u6807\u7B7E" tabindex="-1"><a class="header-anchor" href="#textarea-\u6807\u7B7E" aria-hidden="true">#</a> textarea \u6807\u7B7E</h2><p>HTML \u4E2D\uFF0Ctextarea \u5143\u7D20\u901A\u8FC7\u5B50\u5143\u7D20\u5B9A\u4E49\u5176\u6587\u672C\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&lt;textarea&gt;
  \u4F60\u597D\uFF0C \u8FD9\u662F\u5728 text area \u91CC\u7684\u6587\u672C
&lt;/textarea&gt;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>React \u4E2D\u4F7F\u7528 value \u4EE3\u66FF\uFF0C\u8FD9\u6837\uFF0Ctextarea \u7684\u4F7F\u7528\u548C input \u7684\u4F7F\u7528\u975E\u5E38\u76F8\u4F3C\u3002</p><h2 id="select-\u6807\u7B7E" tabindex="-1"><a class="header-anchor" href="#select-\u6807\u7B7E" aria-hidden="true">#</a> select \u6807\u7B7E</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>HTML \u4E2D\uFF0Cselect \u521B\u5EFA\u4E0B\u62C9\u6807\u7B7E\uFF0C\u8FD9\u91CC\u4F7F\u7528 selected \u6765\u9009\u62E9\u9ED8\u8BA4\u9009\u4E2D\uFF0C
React \u4E2D\u4F7F\u7528 select \u6807\u7B7E\u7684 value \u5C5E\u6027\uFF0C\u6765\u5B9A\u4E49\u8FD9\u4E2A\u9009\u4E2D\uFF0C\u5728\u6839\u6807\u7B7E\u4E2D\u66F4\u65B0\u5B83\u3002
\u4F60\u53EF\u4EE5\u5C06\u6570\u7EC4\u4F20\u9012\u5230 value \u5C5E\u6027\u4E2D\uFF0C\u4EE5\u652F\u6301\u5728 select \u6807\u7B7E\u4E2D\u9009\u62E9\u591A\u4E2A\u9009\u9879\uFF1A
&lt;select multiple={true} value={[&#39;B&#39;, &#39;C&#39;]}&gt;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="input-\u6807\u7B7E" tabindex="-1"><a class="header-anchor" href="#input-\u6807\u7B7E" aria-hidden="true">#</a> input \u6807\u7B7E</h2><p>HTML \u4E2D input type=file \u5141\u8BB8\u7528\u6237\u9009\u62E9\u6587\u4EF6\uFF0C\u4F46\u662F\u8FD9\u91CC\u7684 value \u4E2D\u53EA\u8BFB\uFF0C\u6240\u4EE5\u5B83\u662F\u4E00\u4E2A\u975E\u53D7\u63A7\u7EC4\u4EF6\u3002</p><h2 id="\u5904\u7406\u591A\u4E2A\u8F93\u5165-\u53EF\u4EE5\u7ED9\u6BCF\u4E00\u4E2A\u5143\u7D20\u6DFB\u52A0-name-\u6839\u636E\u51FD\u6570-event-target-name-\u7684\u503C\u9009\u62E9" tabindex="-1"><a class="header-anchor" href="#\u5904\u7406\u591A\u4E2A\u8F93\u5165-\u53EF\u4EE5\u7ED9\u6BCF\u4E00\u4E2A\u5143\u7D20\u6DFB\u52A0-name-\u6839\u636E\u51FD\u6570-event-target-name-\u7684\u503C\u9009\u62E9" aria-hidden="true">#</a> \u5904\u7406\u591A\u4E2A\u8F93\u5165\uFF0C\u53EF\u4EE5\u7ED9\u6BCF\u4E00\u4E2A\u5143\u7D20\u6DFB\u52A0 name,\u6839\u636E\u51FD\u6570 event.target.name \u7684\u503C\u9009\u62E9</h2><h2 id="\u53D7\u63A7\u7EC4\u4EF6\u548C\u975E\u53D7\u63A7\u7EC4\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u53D7\u63A7\u7EC4\u4EF6\u548C\u975E\u53D7\u63A7\u7EC4\u4EF6" aria-hidden="true">#</a> \u53D7\u63A7\u7EC4\u4EF6\u548C\u975E\u53D7\u63A7\u7EC4\u4EF6</h2><p>\u5728\u5927\u591A\u6570\u60C5\u51B5\u4E0B\uFF0C\u6211\u4EEC\u63A8\u8350\u4F7F\u7528 \u53D7\u63A7\u7EC4\u4EF6 \u6765\u5904\u7406\u8868\u5355\u6570\u636E\u3002\u5728\u4E00\u4E2A\u53D7\u63A7\u7EC4\u4EF6\u4E2D\uFF0C\u8868\u5355\u6570\u636E\u662F\u7531 React \u7EC4\u4EF6\u6765\u7BA1\u7406\u7684\u3002 \u53E6\u4E00\u79CD\u66FF\u4EE3\u65B9\u6848\u662F\u4F7F\u7528\u975E\u53D7\u63A7\u7EC4\u4EF6\uFF0C\u8FD9\u65F6\u8868\u5355\u6570\u636E\u5C06\u4EA4\u7531 DOM \u8282\u70B9\u6765\u5904\u7406\u3002</p><h3 id="\u4E00\u4E9B\u5916\u90E8\u5D4C\u5957-react-\u7684\u5FEB\u901F-demo-\u4F7F\u7528\u975E\u53D7\u63A7\u7EC4\u4EF6\u64CD\u4F5C-dom" tabindex="-1"><a class="header-anchor" href="#\u4E00\u4E9B\u5916\u90E8\u5D4C\u5957-react-\u7684\u5FEB\u901F-demo-\u4F7F\u7528\u975E\u53D7\u63A7\u7EC4\u4EF6\u64CD\u4F5C-dom" aria-hidden="true">#</a> \u4E00\u4E9B\u5916\u90E8\u5D4C\u5957 react \u7684\u5FEB\u901F demo,\u4F7F\u7528\u975E\u53D7\u63A7\u7EC4\u4EF6\u64CD\u4F5C dom</h3><p>\u56E0\u4E3A\u975E\u53D7\u63A7\u7EC4\u4EF6\u5C06\u771F\u5B9E\u6570\u636E\u50A8\u5B58\u5728 DOM \u8282\u70B9\u4E2D\uFF0C\u6240\u4EE5\u5728\u4F7F\u7528\u975E\u53D7\u63A7\u7EC4\u4EF6\u65F6\uFF0C \u6709\u65F6\u5019\u53CD\u800C\u66F4\u5BB9\u6613\u540C\u65F6\u96C6\u6210 React \u548C\u975E React \u4EE3\u7801\u3002</p><h1 id="\u7B2C\u5341\u7AE0-\u72B6\u6001\u63D0\u5347" tabindex="-1"><a class="header-anchor" href="#\u7B2C\u5341\u7AE0-\u72B6\u6001\u63D0\u5347" aria-hidden="true">#</a> \u7B2C\u5341\u7AE0\uFF1A\u72B6\u6001\u63D0\u5347</h1><p>\u591A\u4E2A\u7EC4\u4EF6\u9700\u8981\u53CD\u6620\u76F8\u540C\u7684\u53D8\u5316\u6570\u636E\uFF0C\u8FD9\u65F6\u6211\u4EEC\u5EFA\u8BAE\u5C06\u5171\u4EAB\u72B6\u6001\u63D0\u5347\u5230\u6700\u8FD1\u7684\u5171\u540C\u7236\u7EC4\u4EF6\u4E2D\u53BB\u3002 \u5728 React \u4E2D\uFF0C\u5C06\u591A\u4E2A\u7EC4\u4EF6\u4E2D\u9700\u8981\u5171\u4EAB\u7684 state \u5411\u4E0A\u79FB\u52A8\u5230\u5B83\u4EEC\u7684\u6700\u8FD1\u5171\u540C\u7236\u7EC4\u4EF6\u4E2D\uFF0C \u4FBF\u53EF\u5B9E\u73B0\u5171\u4EAB state\u3002\u8FD9\u5C31\u662F\u6240\u8C13\u7684\u201C\u72B6\u6001\u63D0\u5347\u201D\u3002</p><p>\u5982\u679C\u53EF\u4EE5\u901A\u8FC7 prop \u6765\u63A8\u5BFC\u6216\u662F\u7236\u7EA7\u6570\u636E\u63A8\u65AD\uFF0C\u90A3\u4E48\u4E0D\u5E94\u8BE5\u4F7F\u7528 state \u5B9A\u4E49\uFF0C\u800C\u662F\u627E\u5230\u516C\u5171\u7684\u5185\u5BB9\u4E00\u8D77\u4F7F\u7528\u3002</p><h1 id="\u7B2C\u5341\u4E00\u7AE0" tabindex="-1"><a class="header-anchor" href="#\u7B2C\u5341\u4E00\u7AE0" aria-hidden="true">#</a> \u7B2C\u5341\u4E00\u7AE0</h1><p>\u63A8\u8350\u4F7F\u7528\u7EC4\u5408\u800C\u975E\u7EE7\u627F\u6765\u5B9E\u73B0\u7EC4\u4EF6\u95F4\u7684\u4EE3\u7801\u91CD\u7528\u3002 JSX \u6807\u7B7E\u4E2D\u7684\u6240\u6709\u5185\u5BB9\u90FD\u4F1A\u4F5C\u4E3A\u4E00\u4E2A children prop \u4F20\u9012\u7ED9 FancyBorder \u7EC4\u4EF6\u3002 \u5728 React \u4E2D\uFF0C\u6211\u4EEC\u4E5F\u53EF\u4EE5\u901A\u8FC7\u7EC4\u5408\u6765\u5B9E\u73B0\u8FD9\u4E00\u70B9\u3002\u201C\u7279\u6B8A\u201D\u7EC4\u4EF6\u53EF\u4EE5\u901A\u8FC7 props \u5B9A\u5236\u5E76\u6E32\u67D3\u201C\u4E00\u822C\u201D\u7EC4\u4EF6\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>function Dialog(props) {
  return (
    &lt;FancyBorder color=&quot;blue&quot;&gt;
      &lt;h1 className=&quot;Dialog-title&quot;&gt;
        {props.title}
      &lt;/h1&gt;
      &lt;p className=&quot;Dialog-message&quot;&gt;
        {props.message}
      &lt;/p&gt;
    &lt;/FancyBorder&gt;
  );
}

function WelcomeDialog() {
  return (
    &lt;Dialog
      title=&quot;Welcome&quot;
      message=&quot;Thank you for visiting our spacecraft!&quot; /&gt;
  );
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="props-\u548C\u7EC4\u5408\u4E3A\u4F60\u63D0\u4F9B\u4E86\u6E05\u6670\u800C\u5B89\u5168\u5730\u5B9A\u5236\u7EC4\u4EF6\u5916\u89C2\u548C\u884C\u4E3A\u7684\u7075\u6D3B\u65B9\u5F0F\u3002" tabindex="-1"><a class="header-anchor" href="#props-\u548C\u7EC4\u5408\u4E3A\u4F60\u63D0\u4F9B\u4E86\u6E05\u6670\u800C\u5B89\u5168\u5730\u5B9A\u5236\u7EC4\u4EF6\u5916\u89C2\u548C\u884C\u4E3A\u7684\u7075\u6D3B\u65B9\u5F0F\u3002" aria-hidden="true">#</a> Props \u548C\u7EC4\u5408\u4E3A\u4F60\u63D0\u4F9B\u4E86\u6E05\u6670\u800C\u5B89\u5168\u5730\u5B9A\u5236\u7EC4\u4EF6\u5916\u89C2\u548C\u884C\u4E3A\u7684\u7075\u6D3B\u65B9\u5F0F\u3002</h4><p>\u6CE8\u610F\uFF1A\u7EC4\u4EF6\u53EF\u4EE5\u63A5\u53D7\u4EFB\u610F props\uFF0C\u5305\u62EC\u57FA\u672C\u6570\u636E\u7C7B\u578B\uFF0CReact \u5143\u7D20\u4EE5\u53CA\u51FD\u6570\u3002</p><h3 id="props-\u548C-state-\u533A\u522B" tabindex="-1"><a class="header-anchor" href="#props-\u548C-state-\u533A\u522B" aria-hidden="true">#</a> props \u548C state \u533A\u522B</h3><p>props \u662F\u4F20\u9012\u7ED9\u7EC4\u4EF6\u7684\uFF08\u7C7B\u4F3C\u4E8E\u51FD\u6570\u7684\u5F62\u53C2\uFF09\uFF0C\u800C state \u662F\u5728\u7EC4\u4EF6\u5185\u88AB\u7EC4\u4EF6\u81EA\u5DF1\u7BA1\u7406\u7684\uFF08\u7C7B\u4F3C\u4E8E\u5728\u4E00\u4E2A\u51FD\u6570\u5185\u58F0\u660E\u7684\u53D8\u91CF\uFF09\u3002</p><h1 id="_12-react-\u8BBE\u8BA1\u54F2\u5B66" tabindex="-1"><a class="header-anchor" href="#_12-react-\u8BBE\u8BA1\u54F2\u5B66" aria-hidden="true">#</a> 12.React \u8BBE\u8BA1\u54F2\u5B66</h1><h2 id="\u7B2C\u4E00\u6B65\u5C06\u8BBE\u8BA1\u597D\u7684-ui-\u5206\u4E3A\u7EC4\u4EF6\u5C42\u7EA7" tabindex="-1"><a class="header-anchor" href="#\u7B2C\u4E00\u6B65\u5C06\u8BBE\u8BA1\u597D\u7684-ui-\u5206\u4E3A\u7EC4\u4EF6\u5C42\u7EA7" aria-hidden="true">#</a> \u7B2C\u4E00\u6B65\u5C06\u8BBE\u8BA1\u597D\u7684 UI \u5206\u4E3A\u7EC4\u4EF6\u5C42\u7EA7</h2><h2 id="\u7B2C\u4E8C\u6B65\u642D\u5EFA\u57FA\u7840\u7684\u9759\u6001-ui-\u9875\u9762" tabindex="-1"><a class="header-anchor" href="#\u7B2C\u4E8C\u6B65\u642D\u5EFA\u57FA\u7840\u7684\u9759\u6001-ui-\u9875\u9762" aria-hidden="true">#</a> \u7B2C\u4E8C\u6B65\u642D\u5EFA\u57FA\u7840\u7684\u9759\u6001 UI \u9875\u9762</h2><h2 id="\u7B2C\u4E09\u6B65-\u5B9A\u4E49\u6570\u636E\u7ED3\u6784-\u786E\u5B9A-ui-\u7684-state-\u7684\u6700\u5C0F\u8868\u793A" tabindex="-1"><a class="header-anchor" href="#\u7B2C\u4E09\u6B65-\u5B9A\u4E49\u6570\u636E\u7ED3\u6784-\u786E\u5B9A-ui-\u7684-state-\u7684\u6700\u5C0F\u8868\u793A" aria-hidden="true">#</a> \u7B2C\u4E09\u6B65\uFF1A\u5B9A\u4E49\u6570\u636E\u7ED3\u6784\uFF0C\u786E\u5B9A UI \u7684 state \u7684\u6700\u5C0F\u8868\u793A</h2><h2 id="\u7B2C\u56DB\u6B65-\u786E\u5B9A-state-\u7684\u8BBE\u7F6E\u4F4D\u7F6E\u3002" tabindex="-1"><a class="header-anchor" href="#\u7B2C\u56DB\u6B65-\u786E\u5B9A-state-\u7684\u8BBE\u7F6E\u4F4D\u7F6E\u3002" aria-hidden="true">#</a> \u7B2C\u56DB\u6B65\uFF1A\u786E\u5B9A state \u7684\u8BBE\u7F6E\u4F4D\u7F6E\u3002</h2><p>\u6839\u636E React \u4E2D\u6700\u5C0F\u5B9E\u73B0\uFF0C\u653E\u7F6E state \u7684\u4F7F\u7528\u4F4D\u7F6E\u3002</p><h2 id="\u7B2C\u4E94\u6B65-\u6DFB\u52A0\u53CD\u5411\u6570\u636E\u6D41" tabindex="-1"><a class="header-anchor" href="#\u7B2C\u4E94\u6B65-\u6DFB\u52A0\u53CD\u5411\u6570\u636E\u6D41" aria-hidden="true">#</a> \u7B2C\u4E94\u6B65\uFF1A\u6DFB\u52A0\u53CD\u5411\u6570\u636E\u6D41</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u5904\u4E8E\u8F83\u4F4E\u5C42\u7EA7\u7684\u8868\u5355\u7EC4\u4EF6\u66F4\u65B0\u8F83\u9AD8\u5C42\u7EA7\u7684 FilterableProductTable \u4E2D\u7684 state\u3002
\u6211\u4EEC\u53EF\u4EE5\u4F7F\u7528\u8F93\u5165\u6846\u7684 onChange \u4E8B\u4EF6\u6765\u76D1\u89C6\u7528\u6237\u8F93\u5165\u7684\u53D8\u5316\uFF0C\u5E76\u901A\u77E5 FilterableProductTable \u4F20\u9012\u7ED9 SearchBar \u7684\u56DE\u8C03\u51FD\u6570\u3002\u7136\u540E\u8BE5\u56DE\u8C03\u51FD\u6570\u5C06\u8C03\u7528 setState()

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="\u8865\u5145\u4E00\u4E2A\u5C0F\u77E5\u8BC6" tabindex="-1"><a class="header-anchor" href="#\u8865\u5145\u4E00\u4E2A\u5C0F\u77E5\u8BC6" aria-hidden="true">#</a> \u8865\u5145\u4E00\u4E2A\u5C0F\u77E5\u8BC6</h1><p>ES6 \u5F00\u59CB\uFF0C\u5BF9\u8C61\u521D\u59CB\u503C\u8BBE\u5B9A\u9879\u8BED\u6CD5\u8FD8\u652F\u6301\u8BA1\u7B97\u5C5E\u6027\u540D\u79F0\u3002\u8FD9\u5141\u8BB8\u60A8\u5C06\u8868\u8FBE\u5F0F\u653E\u5728\u62EC\u53F7\u4E2D</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>let config = {
  [param]: 12,
  [&#39;mobile&#39; + param.charAt(0).toUpperCase() + param.slice(1)]: 4
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="ref-\u8F6C\u53D1\u662F\u4E00\u9879\u5C06-ref-\u81EA\u52A8\u5730\u901A\u8FC7\u7EC4\u4EF6\u4F20\u9012\u5230\u5176\u4E00\u5B50\u7EC4\u4EF6\u7684\u6280\u5DE7\u3002" tabindex="-1"><a class="header-anchor" href="#ref-\u8F6C\u53D1\u662F\u4E00\u9879\u5C06-ref-\u81EA\u52A8\u5730\u901A\u8FC7\u7EC4\u4EF6\u4F20\u9012\u5230\u5176\u4E00\u5B50\u7EC4\u4EF6\u7684\u6280\u5DE7\u3002" aria-hidden="true">#</a> Ref \u8F6C\u53D1\u662F\u4E00\u9879\u5C06 ref \u81EA\u52A8\u5730\u901A\u8FC7\u7EC4\u4EF6\u4F20\u9012\u5230\u5176\u4E00\u5B50\u7EC4\u4EF6\u7684\u6280\u5DE7\u3002</h1><p>\u8BBF\u95EE\u5176 DOM \u8282\u70B9\u5BF9\u7BA1\u7406\u7126\u70B9\uFF0C\u9009\u4E2D\u6216\u52A8\u753B\u6765\u8BF4\u662F\u4E0D\u53EF\u907F\u514D\u7684\u3002 Ref \u8F6C\u53D1\u662F\u4E00\u4E2A\u53EF\u9009\u7279\u6027\uFF0C\u5176\u5141\u8BB8\u67D0\u4E9B\u7EC4\u4EF6\u63A5\u6536 ref\uFF0C\u5E76\u5C06\u5176\u5411\u4E0B\u4F20\u9012\uFF08\u6362\u53E5\u8BDD\u8BF4\uFF0C\u201C\u8F6C\u53D1\u201D\u5B83\uFF09\u7ED9\u5B50\u7EC4\u4EF6.</p><h2 id="\u6848\u4F8B" tabindex="-1"><a class="header-anchor" href="#\u6848\u4F8B" aria-hidden="true">#</a> \u6848\u4F8B</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>const FancyButton = React.forwardRef((props, ref) =&gt; (
  &lt;button ref={ref} className=&quot;FancyButton&quot;&gt;
    {props.children}
  &lt;/button&gt;
));

// \u4F60\u53EF\u4EE5\u76F4\u63A5\u83B7\u53D6 DOM button \u7684 ref\uFF1A
const ref = React.createRef();
&lt;FancyButton ref={ref}&gt;Click me!&lt;/FancyButton&gt;;



\u5F53 ref \u6302\u8F7D\u5B8C\u6210\uFF0Cref.current \u5C06\u6307\u5411 &lt;button&gt; DOM \u8282\u70B9\u3002

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="\u6CE8\u610F\u81EA\u52A8\u7ED1\u5B9A-\u5982\u4F55-class-\u4E2D\u7684\u65B9\u6CD5\u81EA\u52A8\u7ED1\u5B9A-this" tabindex="-1"><a class="header-anchor" href="#\u6CE8\u610F\u81EA\u52A8\u7ED1\u5B9A-\u5982\u4F55-class-\u4E2D\u7684\u65B9\u6CD5\u81EA\u52A8\u7ED1\u5B9A-this" aria-hidden="true">#</a> \u6CE8\u610F\u81EA\u52A8\u7ED1\u5B9A\uFF0C\u5982\u4F55 class \u4E2D\u7684\u65B9\u6CD5\u81EA\u52A8\u7ED1\u5B9A this</h1><h3 id="\u624B\u52A8\u7ED1\u5B9A-this" tabindex="-1"><a class="header-anchor" href="#\u624B\u52A8\u7ED1\u5B9A-this" aria-hidden="true">#</a> \u624B\u52A8\u7ED1\u5B9A this</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>
\u4E00\u822C\u800C\u8A00\uFF0Cclass \u521B\u5EFA\u7684\u7EC4\u4EF6\u9700\u8981\u5728 constructor \u4E2D\u663E\u5F0F\u7ED1\u5B9A this,.bind(this).
constructor(props) {
super(props);
this.state = {message: &#39;Hello!&#39;};
// \u8FD9\u4E00\u884C\u5F88\u91CD\u8981\uFF01
this.handleClick = this.handleClick.bind(this);
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u81EA\u5B9A\u5B9E\u73B0\u7EC4\u4EF6\u7684\u7ED1\u5B9A-this" tabindex="-1"><a class="header-anchor" href="#\u81EA\u5B9A\u5B9E\u73B0\u7EC4\u4EF6\u7684\u7ED1\u5B9A-this" aria-hidden="true">#</a> \u81EA\u5B9A\u5B9E\u73B0\u7EC4\u4EF6\u7684\u7ED1\u5B9A this</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u5982\u679C\u4F7F\u7528 createReactClass() \u65B9\u6CD5\u521B\u5EFA\u7EC4\u4EF6\uFF0C\u7EC4\u4EF6\u4E2D\u7684\u65B9\u6CD5\u4F1A\u81EA\u52A8\u7ED1\u5B9A\u81F3\u5B9E\u4F8B\uFF0C\u6240\u4EE5\u4E0D\u9700\u8981\u50CF\u4E0A\u9762\u90A3\u6837\u505A\uFF1A

var SayHello = createReactClass({
getInitialState: function() {
return {message: &#39;Hello!&#39;};
},

handleClick: function() {
alert(this.state.message);
},

render: function() {
return (
&lt;button onClick={this.handleClick}&gt;
Say hello
&lt;/button&gt;
);
}
});

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="fragments" tabindex="-1"><a class="header-anchor" href="#fragments" aria-hidden="true">#</a> Fragments</h1><p>React \u4E2D\u7684\u4E00\u4E2A\u5E38\u89C1\u6A21\u5F0F\u662F\u4E00\u4E2A\u7EC4\u4EF6\u8FD4\u56DE\u591A\u4E2A\u5143\u7D20\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>render() {
  return (
    &lt;React.Fragment&gt;
      &lt;ChildA /&gt;
      &lt;ChildB /&gt;
      &lt;ChildC /&gt;
    &lt;/React.Fragment&gt;
  );
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u53E6\u5916\u4E00\u79CD\u77ED\u8BED\u6CD5\u5219" tabindex="-1"><a class="header-anchor" href="#\u53E6\u5916\u4E00\u79CD\u77ED\u8BED\u6CD5\u5219" aria-hidden="true">#</a> \u53E6\u5916\u4E00\u79CD\u77ED\u8BED\u6CD5\u5219</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>return (
      &lt;&gt;
        &lt;td&gt;Hello&lt;/td&gt;
        &lt;td&gt;World&lt;/td&gt;
      &lt;/&gt;
    );

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="\u4EE3\u7801\u5206\u5272" tabindex="-1"><a class="header-anchor" href="#\u4EE3\u7801\u5206\u5272" aria-hidden="true">#</a> \u4EE3\u7801\u5206\u5272</h1><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u5728\u4F60\u7684\u5E94\u7528\u4E2D\u5F15\u5165\u4EE3\u7801\u5206\u5272\u7684\u6700\u4F73\u65B9\u5F0F\u662F\u901A\u8FC7\u52A8\u6001 import() \u8BED\u6CD5\u3002
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="\u4F7F\u7528\u4E4B\u524D\u6848\u4F8B" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528\u4E4B\u524D\u6848\u4F8B" aria-hidden="true">#</a> \u4F7F\u7528\u4E4B\u524D\u6848\u4F8B</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>import { add } from &#39;./math&#39;;

console.log(add(16, 26));
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u4F7F\u7528\u4E4B\u540E\u6848\u4F8B" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528\u4E4B\u540E\u6848\u4F8B" aria-hidden="true">#</a> \u4F7F\u7528\u4E4B\u540E\u6848\u4F8B</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>import(&quot;./math&quot;).then(math =&gt; {
  console.log(math.add(16, 26));
});

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u4EE3\u7801\u61D2\u52A0\u8F7D-lazy" tabindex="-1"><a class="header-anchor" href="#\u4EE3\u7801\u61D2\u52A0\u8F7D-lazy" aria-hidden="true">#</a> \u4EE3\u7801\u61D2\u52A0\u8F7D lazy</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>
const OtherComponent = React.lazy(() =&gt; import(&#39;./OtherComponent&#39;));
import React, { lazy } from &#39;react&#39;;
const MyComponent = lazy(() =&gt; import(&quot;./MyComponent.js&quot;));
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="\u6DF1\u5165-jsx" tabindex="-1"><a class="header-anchor" href="#\u6DF1\u5165-jsx" aria-hidden="true">#</a> \u6DF1\u5165 JSX</h1><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>
\u5B9E\u9645\u4E0A\uFF0Cjsx \u53EA\u662F React.createElement\uFF08component,props,...children\uFF09\u7684\u51FD\u6570\u8BED\u6CD5\u7CD6


olor=&quot;blue&quot; shadowSize={2}&gt;
  Click Me
&lt;/MyButton&gt;

\u7F16\u8BD1\u7ED3\u679C
React.createElement(
  MyButton,
  {color: &#39;blue&#39;, shadowSize: 2},
  &#39;Click Me&#39;
)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="jsx-\u7C7B\u578B\u4E2D\u4F7F\u7528\u70B9\u8BED\u6CD5" tabindex="-1"><a class="header-anchor" href="#jsx-\u7C7B\u578B\u4E2D\u4F7F\u7528\u70B9\u8BED\u6CD5" aria-hidden="true">#</a> JSX \u7C7B\u578B\u4E2D\u4F7F\u7528\u70B9\u8BED\u6CD5</h2><h2 id="\u7528\u6237\u5B9A\u4E49\u7684\u7EC4\u4EF6\u5FC5\u987B\u4EE5\u5927\u5199\u5B57\u6BCD\u5F00\u5934" tabindex="-1"><a class="header-anchor" href="#\u7528\u6237\u5B9A\u4E49\u7684\u7EC4\u4EF6\u5FC5\u987B\u4EE5\u5927\u5199\u5B57\u6BCD\u5F00\u5934" aria-hidden="true">#</a> \u7528\u6237\u5B9A\u4E49\u7684\u7EC4\u4EF6\u5FC5\u987B\u4EE5\u5927\u5199\u5B57\u6BCD\u5F00\u5934</h2><h1 id="\u9AD8\u9636\u7EC4\u4EF6-hoc-\u6682\u505C" tabindex="-1"><a class="header-anchor" href="#\u9AD8\u9636\u7EC4\u4EF6-hoc-\u6682\u505C" aria-hidden="true">#</a> \u9AD8\u9636\u7EC4\u4EF6 HOC \u6682\u505C</h1><p>\u9AD8\u9636\u7EC4\u4EF6\u5C31\u662F\u53C2\u6570\u4E3A\u7EC4\u4EF6\uFF0C\u8FD4\u56DE\u503C\u4E3A\u65B0\u7EC4\u4EF6\u7684\u51FD\u6570\u3002 \u7EC4\u4EF6\u662F\u5C06 props \u8F6C\u6362\u4E3A UI,\u9AD8\u9636\u7EC4\u4EF6\u662F\u5C06\u7EC4\u4EF6\u8F6C\u6362\u4E3A\u53E6\u4E00\u4E2A\u7EC4\u4EF6\u3002</p><h2 id="hoc-\u5E38\u89C1\u7684\u9AD8\u9636\u7EC4\u4EF6" tabindex="-1"><a class="header-anchor" href="#hoc-\u5E38\u89C1\u7684\u9AD8\u9636\u7EC4\u4EF6" aria-hidden="true">#</a> HOC \u5E38\u89C1\u7684\u9AD8\u9636\u7EC4\u4EF6</h2><p>Redux \u7684 connect \u662F\u9AD8\u9636\u7EC4\u4EF6 Relay \u7684 createFramentContainer \u662F\u9AD8\u9636\u7EC4\u4EF6</p><h2 id="\u7EC4\u4EF6\u662F-react-\u4E2D\u4EE3\u7801\u590D\u7528\u7684\u57FA\u672C\u5355\u5143-\u4F46\u662F\u67D0\u4E9B\u6A21\u5F0F\u4E0B-\u4E0D\u9002\u5408\u4F20\u7EDF\u7EC4\u4EF6\u3002" tabindex="-1"><a class="header-anchor" href="#\u7EC4\u4EF6\u662F-react-\u4E2D\u4EE3\u7801\u590D\u7528\u7684\u57FA\u672C\u5355\u5143-\u4F46\u662F\u67D0\u4E9B\u6A21\u5F0F\u4E0B-\u4E0D\u9002\u5408\u4F20\u7EDF\u7EC4\u4EF6\u3002" aria-hidden="true">#</a> \u7EC4\u4EF6\u662F React \u4E2D\u4EE3\u7801\u590D\u7528\u7684\u57FA\u672C\u5355\u5143\uFF0C\u4F46\u662F\u67D0\u4E9B\u6A21\u5F0F\u4E0B\uFF0C\u4E0D\u9002\u5408\u4F20\u7EDF\u7EC4\u4EF6\u3002</h2><h3 id="\u6848\u4F8B\u5B66\u4E60-commentlist-\u7EC4\u4EF6-\u8BA2\u9605\u5916\u90E8\u6570\u636E\u6E90-\u6E32\u67D3\u8BC4\u8BBA\u5217\u8868" tabindex="-1"><a class="header-anchor" href="#\u6848\u4F8B\u5B66\u4E60-commentlist-\u7EC4\u4EF6-\u8BA2\u9605\u5916\u90E8\u6570\u636E\u6E90-\u6E32\u67D3\u8BC4\u8BBA\u5217\u8868" aria-hidden="true">#</a> \u6848\u4F8B\u5B66\u4E60\uFF1Acommentlist \u7EC4\u4EF6\uFF0C\u8BA2\u9605\u5916\u90E8\u6570\u636E\u6E90\uFF0C\u6E32\u67D3\u8BC4\u8BBA\u5217\u8868</h3>`,156),r=[s];function l(t,c){return i(),n("div",null,r)}var u=e(d,[["render",l],["__file","001\u57FA\u7840react\u7B14\u8BB0\u95EE\u9898\u5B66\u4E60\u5B66\u4E60\u7B14\u8BB0\u8BB0\u5F55.html.vue"]]);export{u as default};
