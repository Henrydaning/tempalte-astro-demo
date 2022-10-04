import{_ as r,r as a,o as v,c,a as e,b as n,w as l,e as i,d as t}from"./app.40979aa8.js";const u={},b={class:"table-of-contents"},m=i("0.\u5BF9\u6BD4\u5B66\u4E60blockly-react\u4EE3\u7801\u5B66\u4E60"),o=i("1.\u5B66\u4E60scratch\u4E8C\u6B21\u5C01\u88C5\u5B9E\u73B0\u5E95\u5C42\u4EE3\u7801\u67B6\u6784\u903B\u8F91"),h=i("002web_iso_simulator\u4EE3\u7801\u67B6\u6784\u5206\u6790"),x=i("003\u6C47\u603B\u4EE3\u7801\u6574\u7406\u5B66\u4E60\u95EE\u9898\uFF1F---\u5F85\u89E3\u51B3"),p=i("004svg\u5B66\u4E60API\u8BB0\u5F55"),_=i("\u6C47\u603Bsvg\u7684Path\u8DEF\u5F84\u56FE\u7684\u4F7F\u7528"),g=e("h2",{id:"_0-\u5BF9\u6BD4\u5B66\u4E60blockly-react\u4EE3\u7801\u5B66\u4E60",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_0-\u5BF9\u6BD4\u5B66\u4E60blockly-react\u4EE3\u7801\u5B66\u4E60","aria-hidden":"true"},"#"),i(" 0.\u5BF9\u6BD4\u5B66\u4E60blockly-react\u4EE3\u7801\u5B66\u4E60")],-1),k={href:"https://github.com/google/blockly-samples/tree/master/examples/blockly-react",target:"_blank",rel:"noopener noreferrer"},y=i("blockly-samples/examples/blockly-react at master \xB7 google/blockly-samples (github.com)"),f=e("h2",{id:"_1-\u5B66\u4E60scratch\u4E8C\u6B21\u5C01\u88C5\u5B9E\u73B0\u5E95\u5C42\u4EE3\u7801\u67B6\u6784\u903B\u8F91",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_1-\u5B66\u4E60scratch\u4E8C\u6B21\u5C01\u88C5\u5B9E\u73B0\u5E95\u5C42\u4EE3\u7801\u67B6\u6784\u903B\u8F91","aria-hidden":"true"},"#"),i(" 1.\u5B66\u4E60scratch\u4E8C\u6B21\u5C01\u88C5\u5B9E\u73B0\u5E95\u5C42\u4EE3\u7801\u67B6\u6784\u903B\u8F91")],-1),w=i("\u53C2\u8003\uFF1A"),j={href:"https://gitee.com/nyhxiaoning/RhineBlock.git",target:"_blank",rel:"noopener noreferrer"},B=i("scratch\u7ED3\u6784\u5316\u5B9E\u73B0"),S=t(`<ul><li>\u5B9E\u73B0\u4E86\u4E24\u4E2Ablock\u7684\u8BB0\u5F55\uFF1AArg\u548CBlock</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>src
\u251C\u2500 App.css
\u251C\u2500 App.test.tsx
\u251C\u2500 App.tsx
\u251C\u2500 blocks
\u2502    \u251C\u2500 console.block.tsx
\u2502    \u251C\u2500 equipment.block.tsx
\u2502    \u251C\u2500 event.block.ts
\u2502    \u251C\u2500 logic.block.tsx
\u2502    \u251C\u2500 loop.block.tsx
\u2502    \u251C\u2500 number.block.tsx
\u2502    \u2514\u2500 text.block.tsx
\u251C\u2500 components
\u2502    \u2514\u2500 base
\u2502           \u251C\u2500 Flyout
\u2502           \u2514\u2500 Graph
\u251C\u2500 core
\u2502    \u251C\u2500 RhineBlock.ts
\u2502    \u251C\u2500 block
\u2502    \u2502    \u251C\u2500 arg.class.ts
\u2502    \u2502    \u2514\u2500 block.class.ts
\u2502    \u251C\u2500 drag---\u62D6\u62FD
\u2502    \u2502    \u251C\u2500 drag-manager.ts
\u2502    \u2502    \u2514\u2500 drag-view.css
\u2502    \u251C\u2500 render---\u6E32\u67D3
\u2502    \u2502    \u251C\u2500 base
\u2502    \u2502    \u2514\u2500 mellow
\u2502    \u251C\u2500 utils---\u529F\u80FD\u51FD\u6570\u5C01\u88C5
\u2502    \u2502    \u251C\u2500 color-adjust.ts
\u2502    \u2502    \u251C\u2500 normal.ts
\u2502    \u2502    \u251C\u2500 path-builder.ts
\u2502    \u2502    \u2514\u2500 svg-el-creator.ts---\u751F\u6210\u753B\u5E03\u51FD\u6570\uFF1A\u5DE6\u4FA7\u753B\u5E03\u548C\u53F3\u4FA7\u7684\u753B\u5E03\u7684svg\u529F\u80FD\u51FD\u6570\u5B9E\u73B0
\u2502    \u2514\u2500 view---\u89C6\u56FE\u5C42\u4EE3\u7801
\u2502           \u251C\u2500 flyout
\u2502           \u2514\u2500 graph
\u251C\u2500 index.css
\u251C\u2500 index.tsx---\u6807\u51C6react\u9879\u76EE\u5165\u53E3\u6587\u4EF6
\u251C\u2500 react-app-env.d.ts---\u8865\u5145\u7C7B\u4F3C\u58F0\u660E\u7684\u53D8\u91CF
\u251C\u2500 reportWebVitals.ts
\u2514\u2500 setupTests.ts
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u51FA\u73B0 \u7684\u65AD\u5C42\u524D\u7AEF\u8865\u5145\u77E5\u8BC6\u5B66\u4E60</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>1.createElementNS
createElementNS-\u4E24\u4E2A\u53C2\u6570
\u547D\u540D\u7A7A\u95F4\u548C\u6807\u7B7E\u540D\uFF0C
var svgNS = &#39;http://www.w3.org/2000/svg&#39;; //\u547D\u540D\u7A7A\u95F4
var oSvg = document.createElementNS(svgNS,&#39;svg&#39;); //\u521B\u5EFA\u4E86\u4E00\u4E2Asvg\u5143\u7D20

\u6CE8\u610F\uFF1AcreateElement\u662F\u521B\u5EFA\u666E\u901Ahtml\u6807\u7B7E\u3002

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_002web-iso-simulator\u4EE3\u7801\u67B6\u6784\u5206\u6790" tabindex="-1"><a class="header-anchor" href="#_002web-iso-simulator\u4EE3\u7801\u67B6\u6784\u5206\u6790" aria-hidden="true">#</a> 002web_iso_simulator\u4EE3\u7801\u67B6\u6784\u5206\u6790</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>src
\u251C\u2500 App
\u2502    \u251C\u2500 App.js---\u6807\u51C6\u516C\u5171\u7C7B\u5F15\u5165
\u2502    \u251C\u2500 App.module.css
\u2502    \u251C\u2500 App.test.jsx
\u2502    \u251C\u2500 DarkTheme.js---\u4E3B\u9898\u6587\u4EF6\u7684\u5C01\u88C5
\u2502    \u251C\u2500 Editor
\u2502    \u2502    \u251C\u2500 BlockToolbox
\u2502    \u2502    \u251C\u2500 DeviceDetail
\u2502    \u2502    \u251C\u2500 DeviceNode
\u2502    \u2502    \u251C\u2500 Editor.js
\u2502    \u2502    \u251C\u2500 Editor.module.css
\u2502    \u2502    \u251C\u2500 GraphRegister.js
\u2502    \u2502    \u251C\u2500 NewFlower
\u2502    \u2502    \u251C\u2500 data
\u2502    \u2502    \u251C\u2500 deviceDetail.js
\u2502    \u2502    \u251C\u2500 devices.js
\u2502    \u2502    \u251C\u2500 mui.css
\u2502    \u2502    \u2514\u2500 utils
\u2502    \u251C\u2500 LightTheme.js---\u4E3B\u9898\u6587\u4EF6\u914D\u7F6E
\u2502    \u251C\u2500 Login
\u2502    \u2502    \u251C\u2500 Login.js
\u2502    \u2502    \u2514\u2500 Login.module.css
\u2502    \u251C\u2500 Start
\u2502    \u2502    \u251C\u2500 EnterExist
\u2502    \u2502    \u251C\u2500 EnterNew
\u2502    \u2502    \u251C\u2500 Start.js
\u2502    \u2502    \u2514\u2500 Start.module.css
\u2502    \u251C\u2500 state.js
\u2502    \u2514\u2500 store.js---redux\u72B6\u6001\u63A7\u5236
\u251C\u2500 RhineBlock---\u7EDF\u4E00\u5C01\u88C5\u7684scratch\u5E93\u5904\u7406\u51FD\u6570
\u2502    \u251C\u2500 blocks
\u2502    \u2502    \u251C\u2500 console.block.tsx
\u2502    \u2502    \u251C\u2500 equipment.block.tsx---\u903B\u8F91\u5217\u8868\u7684\u8BBE\u5907\u6A21\u5757
\u2502    \u2502    \u251C\u2500 event.block.ts---\u903B\u8F91\u5217\u8868\u7684\u5F00\u59CB\u6A21\u5757
\u2502    \u2502    \u251C\u2500 logic.block.tsx
\u2502    \u2502    \u251C\u2500 loop.block.tsx
\u2502    \u2502    \u251C\u2500 number.block.tsx
\u2502    \u2502    \u2514\u2500 text.block.tsx
\u2502    \u2514\u2500 core---\u7EDF\u4E00\u5E93\u51FD\u6570\u5C01\u88C5
\u2502           \u251C\u2500 RhineBlock.ts
\u2502           \u251C\u2500 block
\u2502           \u251C\u2500 drag
\u2502           \u251C\u2500 render
\u2502           \u251C\u2500 utils
\u2502           \u2514\u2500 view
\u251C\u2500 common---\u516C\u5171\u7EC4\u4EF6\u7684\u5C01\u88C5
\u2502    \u251C\u2500 ContextOption
\u2502    \u2502    \u2514\u2500 ContextOption.js
\u2502    \u251C\u2500 ModalTitle
\u2502    \u2502    \u251C\u2500 ModalTitle.js
\u2502    \u2502    \u2514\u2500 ModalTitle.module.css
\u2502    \u251C\u2500 OptionPaper
\u2502    \u2502    \u251C\u2500 OptionPaper.js
\u2502    \u2502    \u2514\u2500 OptionPaper.module.css
\u2502    \u2514\u2500 ToolBtn
\u2502           \u251C\u2500 ToolBtn.js
\u2502           \u2514\u2500 ToolBtn.module.css
\u251C\u2500 index.css
\u251C\u2500 index.js---\u6807\u51C6react\u9879\u76EE\u5165\u53E3\u6587\u4EF6\uFF0C\u6E32\u67D3App.js\u6587\u4EF6
\u251C\u2500 logo.svg
\u251C\u2500 reportWebVitals.js
\u2514\u2500 setupTests.js

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_003\u6C47\u603B\u4EE3\u7801\u6574\u7406\u5B66\u4E60\u95EE\u9898-\u5F85\u89E3\u51B3" tabindex="-1"><a class="header-anchor" href="#_003\u6C47\u603B\u4EE3\u7801\u6574\u7406\u5B66\u4E60\u95EE\u9898-\u5F85\u89E3\u51B3" aria-hidden="true">#</a> 003\u6C47\u603B\u4EE3\u7801\u6574\u7406\u5B66\u4E60\u95EE\u9898\uFF1F---\u5F85\u89E3\u51B3</h3><h4 id="_1-\u5C01\u88C5\u7684\u56FE\u5F62\u5E93\u4E2D" tabindex="-1"><a class="header-anchor" href="#_1-\u5C01\u88C5\u7684\u56FE\u5F62\u5E93\u4E2D" aria-hidden="true">#</a> \uFF081\uFF09\u5C01\u88C5\u7684\u56FE\u5F62\u5E93\u4E2D\uFF1A</h4><p>\u4E24\u4E2A\u7C7B\u5206\u522B\u6709\u6709\u4EC0\u4E48\u4F5C\u7528</p><p>arg.class.ts\u548Cblock.class.ts</p><p>\u4E24\u4E2A\u7C7B\uFF1AArg\u548CBlock\u7C7B</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u521D\u59CB\u5316Block\u529F\u80FD\u7C7B\uFF1AArg\u548CBlock\u5173\u7CFB



</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-class-block\u8FD9\u4E2A\u5E93\u51FD\u6570\u4E2D\u7C7B\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#_2-class-block\u8FD9\u4E2A\u5E93\u51FD\u6570\u4E2D\u7C7B\u65B9\u6CD5" aria-hidden="true">#</a> \uFF082\uFF09class Block\u8FD9\u4E2A\u5E93\u51FD\u6570\u4E2D\u7C7B\u65B9\u6CD5</h4><p>\u5C01\u88C5 \u5404\u79CD\u65B9\u6CD5\u662F\u4EC0\u4E48</p><h4 id="_3-\u8FD9\u4E9Bcore\u6587\u4EF6\u5939\u4E4B\u95F4\u7684\u5173\u7CFB\u548C\u6E32\u67D3\u53EF\u4EE5\u8BF4\u660E\u4E00\u4E0B\u5417" tabindex="-1"><a class="header-anchor" href="#_3-\u8FD9\u4E9Bcore\u6587\u4EF6\u5939\u4E4B\u95F4\u7684\u5173\u7CFB\u548C\u6E32\u67D3\u53EF\u4EE5\u8BF4\u660E\u4E00\u4E0B\u5417" aria-hidden="true">#</a> \uFF083\uFF09\u8FD9\u4E9Bcore\u6587\u4EF6\u5939\u4E4B\u95F4\u7684\u5173\u7CFB\u548C\u6E32\u67D3\u53EF\u4EE5\u8BF4\u660E\u4E00\u4E0B\u5417</h4><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u6BD4\u5982\u8FD9\u91CC\u7684core\u4E2D\u7684block\u4E2D\u6587\u4EF6\u4E24\u4E2A\u5206\u522B\u63D0\u4F9B\u7684\u80FD\u529B
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="_4-\u5177\u4F53\u7684base-render-ts\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#_4-\u5177\u4F53\u7684base-render-ts\u6587\u4EF6" aria-hidden="true">#</a> \uFF084\uFF09\u5177\u4F53\u7684base-render.ts\u6587\u4EF6</h4><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u5C40\u90E8\u91CD\u6E32\u67D3\u8868\u793A\u4EC0\u4E48\u610F\u601D\uFF1F

BaseRender\u662F\u4E00\u4E2A\u6E32\u67D3\u57FA\u7C7B\u3002

render\u6E32\u67D3\u6587\u4EF6\u5939\u4E2D
ShapeProvider\u548CBaseRender---\u51FD\u6570\u65B9\u6CD5\u8BF4\u660E

MellowRender\u7C7B\u7684\u4F5C\u7528\u8BF4\u660E




</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_5-view\u6587\u4EF6\u5939\u7684\u4E24\u4E2A\u4F5C\u7528" tabindex="-1"><a class="header-anchor" href="#_5-view\u6587\u4EF6\u5939\u7684\u4E24\u4E2A\u4F5C\u7528" aria-hidden="true">#</a> \uFF085\uFF09view\u6587\u4EF6\u5939\u7684\u4E24\u4E2A\u4F5C\u7528</h4><h4 id="_6-rhineblock\u6574\u4E2A\u5E93\u51FD\u6570\u589E\u52A0\u8BF4\u660E\u548C\u6CE8\u91CA" tabindex="-1"><a class="header-anchor" href="#_6-rhineblock\u6574\u4E2A\u5E93\u51FD\u6570\u589E\u52A0\u8BF4\u660E\u548C\u6CE8\u91CA" aria-hidden="true">#</a> \uFF086\uFF09RhineBlock\u6574\u4E2A\u5E93\u51FD\u6570\u589E\u52A0\u8BF4\u660E\u548C\u6CE8\u91CA</h4><h4 id="_7-\u5173\u4E8E\u91CD\u6784\u6211\u6709\u4E2A\u95EE\u9898" tabindex="-1"><a class="header-anchor" href="#_7-\u5173\u4E8E\u91CD\u6784\u6211\u6709\u4E2A\u95EE\u9898" aria-hidden="true">#</a> \uFF087\uFF09\u5173\u4E8E\u91CD\u6784\u6211\u6709\u4E2A\u95EE\u9898</h4><p>\u4EE5\u540E\u6709\u751F\u6210\u4EE3\u7801\u95EE\u9898---\u56E0\u4E3A\u6211\u770B\u8FD9\u4E2Ablock\u6A21\u5757\u4E2Djs\u4EE3\u7801\u975E\u5E38\u591A\uFF0C\u662F\u548Cscratch\u7ED1\u5B9A\u5173\u7CFB\u3002</p><p>\u8FD9\u4E2A\u751F\u6210\u4EE3\u7801\u5E93\u6587\u4EF6\uFF0C\u662F\u4E00\u4E2A\u73B0\u6210\u7684\u529F\u80FD\uFF0C\u6211\u53EF\u4EE5\u5FEB\u901F\u4F7F\u7528\u3002</p><p>\u4F46\u662F\u5982\u679C\u91CD\u6784\u4E4B\u540E\uFF0C\u53D8\u5F97\u975E\u5E38\u7684\u96BE\u53D7\u3002</p><p>\u8FD9\u4E2A\u672A\u6765\u6A21\u5757\u4F7F\u7528\u4F1A\u5BFC\u81F4\u975E\u5E38\u591A\u7684\u5DE5\u4F5C\u91CF\u8F93\u51FA</p><h4 id="_8-\u4E0D\u91CD\u6784scratch-\u89E3\u51B3\u4E0D\u4E86\u90A3\u4E9B\u95EE\u9898-\u4F8B\u5982" tabindex="-1"><a class="header-anchor" href="#_8-\u4E0D\u91CD\u6784scratch-\u89E3\u51B3\u4E0D\u4E86\u90A3\u4E9B\u95EE\u9898-\u4F8B\u5982" aria-hidden="true">#</a> \uFF088\uFF09\u4E0D\u91CD\u6784scratch\uFF0C\u89E3\u51B3\u4E0D\u4E86\u90A3\u4E9B\u95EE\u9898\uFF0C\u4F8B\u5982</h4><h2 id="_004svg\u5B66\u4E60api\u8BB0\u5F55" tabindex="-1"><a class="header-anchor" href="#_004svg\u5B66\u4E60api\u8BB0\u5F55" aria-hidden="true">#</a> 004svg\u5B66\u4E60API\u8BB0\u5F55</h2><h3 id="\u6C47\u603Bsvg\u7684path\u8DEF\u5F84\u56FE\u7684\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#\u6C47\u603Bsvg\u7684path\u8DEF\u5F84\u56FE\u7684\u4F7F\u7528" aria-hidden="true">#</a> \u6C47\u603Bsvg\u7684Path\u8DEF\u5F84\u56FE\u7684\u4F7F\u7528</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u7C7B\u4F3C\u4F7F\u7528svg\u7684\u4F7F\u7528
&lt;path d=&quot;M 50,100&quot; /&gt;---\u7EDD\u5BF9\u4F4D\u7F6E
&lt;path d=&quot;m 50,100&quot; /&gt;---\u76F8\u5BF9\u4F4D\u7F6E

1.M = moveto

M x y \u79FB\u52A8\u5230\u6307\u5B9A\u5750\u6807\uFF0Cxy\u5206\u522B\u4E3Ax\u8F74\u548Cy\u8F74\u7684\u5750\u6807\u70B9\uFF0C\u7C7B\u4F3C\u753B\u7B14\u7684\u8D77\u70B9\u3002

path\u4E2D\u7684\u8D77\u70B9\uFF0C\u5FC5\u987B\u5B58\u5728\uFF08\u6587\u6863\u4E2D\u867D\u7136\u6CA1\u6709\u63D0\u5230\u8FC7\uFF0C\u4F46\u662Fpath\u7684\u5176\u4ED6\u547D\u4EE4\u90FD\u9700\u8981\u4F9D\u8D56\u4E00\u4E2A\u521D\u59CB\u4F4D\u7F6E\uFF0C\u800C\u5B9E\u9645\u64CD\u4F5C\u8FC7\u7A0B\u4E2D\u4E5F\u6CA1\u6709\u9700\u8981\u5230\u53EF\u4EE5\u4E0D\u4F7F\u7528M\u7684\u60C5\u51B5\uFF0C\u540E\u9762\u53D1\u73B0\u6709\u4F8B\u5916\u6211\u518D\u8FC7\u6765\u8865\u5145\u3002
---\u8FD9\u91CC\u6CE8\u610F\u4E24\u79CD\u7528\u6CD5\u533A\u5206\uFF0C\u4E00\u79CD\u662F\u79FB\u52A8\u5230\u7EDD\u5BF9\u4F4D\u7F6E\uFF0C\u4E00\u79CD\u662F\u79FB\u52A8\u5230\u76F8\u5BF9\u4F4D\u7F6E
M x,y x\u548Cy\u662F\u7EDD\u5BF9\u5750\u6807\uFF0C\u5206\u522B\u4EE3\u8868\u6C34\u5E73\u5750\u6807\u548C\u5782\u76F4\u5750\u6807\u3002
m dx,dy dx\u548Cdy\u662F\u76F8\u5BF9\u4E8E\u5F53\u524D\u70B9\u7684\u8DDD\u79BB\uFF0C\u5206\u522B\u662F\u5411\u53F3\u548C\u5411\u4E0B\u7684\u8DDD\u79BB\u3002


2.L = lineto

L x y \u5728\u521D\u59CB\u4F4D\u7F6E\uFF08M \u753B\u7684\u8D77\u70B9\uFF09\u548Cxy\u786E\u5B9A\u7684\u5750\u6807\u753B\u4E00\u6761\u7EBF\u3002
\u4E24\u70B9\u4E00\u7EBF\uFF0C\u76F4\u7EBF\uFF0C\u7ED8\u56FE\u4E2D\u5F88\u5E38\u89C1\u7684\u65B9\u5F0F\u3002

3.H = horizontal lineto

H x \u6CBF\u7740x\u8F74\u79FB\u52A8\u4E00\u6BB5\u4F4D\u7F6E

4.V = vertical lineto

V y \u6CBF\u7740y\u8F74\u79FB\u52A8\u4E00\u6BB5\u4F4D\u7F6E

5.C = curveto

C x1 y1 x2 y2 x y
\u4E09\u6B21\u8D1D\u585E\u5C14\u66F2\u7EBF
\u5F53\u524D\u70B9\u4E3A\u8D77\u70B9\uFF0Cxy\u4E3A\u7EC8\u70B9\uFF0C\u8D77\u70B9\u548Cx1y1\u63A7\u5236\u66F2\u7EBF\u8D77\u59CB\u7684\u659C\u7387\uFF0C\u7EC8\u70B9\u548Cx2y2\u63A7\u5236\u7ED3\u675F\u7684\u659C\u7387\u3002

6.S = smooth curveto

S x2 y2 x y
\u7B80\u5316\u7684\u8D1D\u585E\u5C14\u66F2\u7EBF
1.\u5982\u679CS\u547D\u4EE4\u8DDF\u5728\u4E00\u4E2AC\u547D\u4EE4\u6216\u8005\u53E6\u4E00\u4E2AS\u547D\u4EE4\u7684\u540E\u9762\uFF0C\u5B83\u7684\u7B2C\u4E00\u4E2A\u63A7\u5236\u70B9\uFF0C\u5C31\u4F1A\u88AB\u5047\u8BBE\u6210\u524D\u4E00\u4E2A\u63A7\u5236\u70B9\u7684\u5BF9\u79F0\u70B9\u3002

2.\u5982\u679CS\u547D\u4EE4\u5355\u72EC\u4F7F\u7528\uFF0C\u524D\u9762\u6CA1\u6709C\u547D\u4EE4\u6216\u8005\u53E6\u4E00\u4E2AS\u547D\u4EE4\uFF0C\u90A3\u4E48\u5B83\u7684\u4E24\u4E2A\u63A7\u5236\u70B9\u5C31\u4F1A\u88AB\u5047\u8BBE\u4E3A\u540C\u4E00\u4E2A\u70B9\u3002

7.Q = quadratic B\xE9zier curve

Q x1 y1 x y
\u4E8C\u6B21\u8D1D\u585E\u5C14\u66F2\u7EBFQ
\u53EA\u9700\u8981\u4E00\u4E2A\u63A7\u5236\u70B9\uFF0C\u7528\u6765\u786E\u5B9A\u8D77\u70B9\u548C\u7EC8\u70B9\u7684\u66F2\u7EBF\u659C\u7387\u3002\u56E0\u6B64\u5B83\u9700\u8981\u4E24\u7EC4\u53C2\u6570\uFF0C\u63A7\u5236\u70B9\u548C\u7EC8\u70B9\u5750\u6807\u3002

8.T = smooth quadratic B\xE9zier curveto

Q\u547D\u4EE4\u7684\u7B80\u5199\u547D\u4EE4\u3002&lt;/br&gt;
\u4E0ES\u547D\u4EE4\u76F8\u4F3C\uFF0CT\u4E5F\u4F1A\u901A\u8FC7\u524D\u4E00\u4E2A\u63A7\u5236\u70B9\uFF0C\u63A8\u65AD\u51FA\u4E00\u4E2A\u65B0\u7684\u63A7\u5236\u70B9\u3002
1.T\u547D\u4EE4\u524D\u9762\u5FC5\u987B\u662F\u4E00\u4E2AQ\u547D\u4EE4\uFF0C\u6216\u8005\u662F\u53E6\u4E00\u4E2AT\u547D\u4EE4

2.\u5982\u679CT\u5355\u72EC\u4F7F\u7528\uFF0C\u90A3\u4E48\u63A7\u5236\u70B9\u5C31\u4F1A\u88AB\u8BA4\u4E3A\u548C\u7EC8\u70B9\u662F\u540C\u4E00\u4E2A\u70B9\uFF0C\u6240\u4EE5\u753B\u51FA\u6765\u7684\u5C06\u662F\u4E00\u6761\u76F4\u7EBF

9.A = elliptical Arc

A rx,ry x-axis-rotation large-arc-flag sweep-flag x,y
rx \u5F27\u7684\u534A\u957F\u8F74\u957F\u5EA6
ry \u5F27\u7684\u534A\u77ED\u8F74\u957F\u5EA6
x-axis-rotation \u662F\u6B64\u6BB5\u5F27\u6240\u5728\u7684x\u8F74\u4E0E\u6C34\u5E73\u65B9\u5411\u7684\u5939\u89D2\uFF0C\u5373x\u8F74\u7684\u9006\u65F6\u9488\u65CB\u8F6C\u89D2\u5EA6\uFF0C\u8D1F\u6570\u4EE3\u8868\u987A\u65F6\u9488\u65CB\u8F6C\u89D2\u5EA6\u3002
large-arc-flag \u4E3A1\u8868\u793A\u5927\u89D2\u5EA6\u5F27\u7EBF\uFF0C0\u8868\u793A\u5C0F\u89D2\u5EA6\u5F27\u7EBF
sweep-flag \u4E3A1\u8868\u793A\u4ECE\u8D77\u70B9\u5230\u7EC8\u70B9\u5F27\u7EBF\u7ED5\u4E2D\u5FC3\u987A\u65F6\u9488\u65B9\u5411\uFF0C0\u8868\u793A\u9006\u65F6\u9488\u65B9\u5411\u3002
xy \u662F\u7EC8\u70B9\u5750\u6807\u3002

10.Z = closepath\u4ECE\u5F53\u524D\u4F4D\u7F6E\u5230\u8D77\u70B9\u753B\u4E00\u6761\u76F4\u7EBF\u95ED\u5408\u3002
 
11.ArcTo \u662F path \u5143\u7D20\u4E2D\u7684\u4E00\u4E2A\u6307\u4EE4
\u8868\u793A\u8FD9\u4E2A\u8DEF\u5F84\u7684\u8FC7\u7A0B\u3002
\u9700\u8981\u6CE8\u610F\u7684\u662F\uFF0C\u5F53\u5728 SVG \u4E2D\u7684 path \u5143\u7D20\u4F7F\u7528 ArcTo \u7684\u65F6\u5019\uFF0C\u5F27\u7EBF\u7684\u8D77\u59CB\u70B9\u548C\u7EC8\u6B62\u70B9\u4E0D\u80FD\u91CD\u53E0\uFF0C\u5426\u5219\u5C06\u753B\u4E0D\u51FA\u6765\u8FD9\u4E2A path\u3002

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,29);function T(A,E){const s=a("RouterLink"),d=a("ExternalLinkIcon");return v(),c("div",null,[e("nav",b,[e("ul",null,[e("li",null,[n(s,{to:"#_0-\u5BF9\u6BD4\u5B66\u4E60blockly-react\u4EE3\u7801\u5B66\u4E60"},{default:l(()=>[m]),_:1})]),e("li",null,[n(s,{to:"#_1-\u5B66\u4E60scratch\u4E8C\u6B21\u5C01\u88C5\u5B9E\u73B0\u5E95\u5C42\u4EE3\u7801\u67B6\u6784\u903B\u8F91"},{default:l(()=>[o]),_:1}),e("ul",null,[e("li",null,[n(s,{to:"#_002web-iso-simulator\u4EE3\u7801\u67B6\u6784\u5206\u6790"},{default:l(()=>[h]),_:1})]),e("li",null,[n(s,{to:"#_003\u6C47\u603B\u4EE3\u7801\u6574\u7406\u5B66\u4E60\u95EE\u9898-\u5F85\u89E3\u51B3"},{default:l(()=>[x]),_:1})])])]),e("li",null,[n(s,{to:"#_004svg\u5B66\u4E60api\u8BB0\u5F55"},{default:l(()=>[p]),_:1}),e("ul",null,[e("li",null,[n(s,{to:"#\u6C47\u603Bsvg\u7684path\u8DEF\u5F84\u56FE\u7684\u4F7F\u7528"},{default:l(()=>[_]),_:1})])])])])]),g,e("p",null,[e("a",k,[y,n(d)])]),f,e("p",null,[w,e("a",j,[B,n(d)])]),S])}var R=r(u,[["render",T],["__file","001scratch\u7EC4\u4EF6\u5C01\u88C5\u5B9E\u73B0.html.vue"]]);export{R as default};
