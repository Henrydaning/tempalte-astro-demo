import{_ as e,o as n,c as i,d as s}from"./app.5805b0e6.js";const r={},l=s(`<h2 id="_1-\u914D\u7F6E\u81EA\u52A8\u6821\u9A8C-husky-eslint-lint-staged-prettier" tabindex="-1"><a class="header-anchor" href="#_1-\u914D\u7F6E\u81EA\u52A8\u6821\u9A8C-husky-eslint-lint-staged-prettier" aria-hidden="true">#</a> 1.\u914D\u7F6E\u81EA\u52A8\u6821\u9A8C husky+eslint+lint-staged+prettier</h2><p>\u7B2C\u4E00\u7248\u672C\u662F\u6700\u7B80\u5355\u7684\u65B9\u6848\uFF0C\u5176\u4ED6\u7684\u5185\u5BB9 vue,react \u9879\u76EE\u90FD\u53EF\u4EE5\u5F15\u5165\uFF0C\u7136\u540E\u6D4B\u8BD5\uFF0C\u5DF2\u7ECF\u6D4B\u8BD5 vue \u548C react \u9879\u76EE\uFF0C\u6B63\u5E38\u3002</p><h3 id="_1-\u7B2C\u4E00\u6B65-\u5B89\u88C5\u57FA\u7840-eslint-\u63D2\u4EF6-prettier" tabindex="-1"><a class="header-anchor" href="#_1-\u7B2C\u4E00\u6B65-\u5B89\u88C5\u57FA\u7840-eslint-\u63D2\u4EF6-prettier" aria-hidden="true">#</a> (1)\u7B2C\u4E00\u6B65\uFF1A\u5B89\u88C5\u57FA\u7840 eslint \u63D2\u4EF6\uFF0Cprettier</h3><p>npm i eslint prettier lint-staged eslint-plugin-prettier eslint-config-prettier</p><h3 id="_2-\u7B2C\u4E8C\u6B65-\u589E\u52A0\u5E38\u7528\u6587\u4EF6\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#_2-\u7B2C\u4E8C\u6B65-\u589E\u52A0\u5E38\u7528\u6587\u4EF6\u914D\u7F6E" aria-hidden="true">#</a> (2)\u7B2C\u4E8C\u6B65\uFF1A\u589E\u52A0\u5E38\u7528\u6587\u4EF6\u914D\u7F6E</h3><p>.prettier.js</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>module.exports = {
  printWidth: 120, // \u6362\u884C\u5B57\u7B26\u4E32\u9608\u503C
  tabWidth: 2, // \u8BBE\u7F6E\u5DE5\u5177\u6BCF\u4E00\u4E2A\u6C34\u5E73\u7F29\u8FDB\u7684\u7A7A\u683C\u6570
  useTabs: false,
  semi: false, // \u53E5\u672B\u662F\u5426\u52A0\u5206\u53F7
  vueIndentScriptAndStyle: true,
  singleQuote: true, // \u7528\u5355\u5F15\u53F7
  trailingComma: &quot;none&quot;, // \u6700\u540E\u4E00\u4E2A\u5BF9\u8C61\u5143\u7D20\u52A0\u9017\u53F7
  bracketSpacing: true, // \u5BF9\u8C61\uFF0C\u6570\u7EC4\u52A0\u7A7A\u683C
  jsxBracketSameLine: true, // jsx &gt; \u662F\u5426\u53E6\u8D77\u4E00\u884C
  arrowParens: &quot;always&quot;, // (x) =&gt; {} \u662F\u5426\u8981\u6709\u5C0F\u62EC\u53F7
  requirePragma: false, // \u4E0D\u9700\u8981\u5199\u6587\u4EF6\u5F00\u5934\u7684 @prettier
  insertPragma: false, // \u4E0D\u9700\u8981\u81EA\u52A8\u5728\u6587\u4EF6\u5F00\u5934\u63D2\u5165 @prettier
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>.eslintrc.js</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>module.exports = {
    env: {
        &#39;browser&#39;: true,
        &#39;commonjs&#39;: true,
        &#39;es6&#39;: true
    },
    extends: &#39;eslint:recommended&#39;,
    globals: {
        page: true,
        REACT_APP_ENV: true
    },
    parser: &#39;@babel/eslint-parser&#39;,
    parserOptions: {
        requireConfigFile: false, // \u662F\u5426\u9700\u8981 babel \u914D\u7F6E\u6587\u4EF6
        sourceType: &#39;module&#39;, // script \u6216\u8005 module
        allowImportExportEverywhere: false, // \u8BBE\u7F6E\u4E3A true\uFF0Cimport \u548C export \u58F0\u660E \u53EF\u4EE5\u51FA\u73B0\u5728\u6587\u4EF6\u7684\u4EFB\u52A1\u4F4D\u7F6E\uFF0C\u5426\u5219\u53EA\u80FD\u51FA\u73B0\u5728\u9876\u90E8
        ecmaFeatures: {
            globalReturn: false // \u8BBE\u7F6E\u4E3A true\uFF0C\u5F53 sourceType \u4E3A script \u65F6\uFF0C\u5141\u8BB8\u5168\u5C40 return
        },
        babelOptions: {
            presets: [&#39;@babel/preset-react&#39;]
        }
    },
    plugins: [
        &#39;react&#39;
    ],
    rules: {
        &#39;for-direction&#39;: &#39;error&#39;, // \u7981\u6B62 for \u5FAA\u73AF\u51FA\u73B0\u65B9\u5411\u9519\u8BEF\u7684\u5FAA\u73AF\uFF0C\u6BD4\u5982 for (i = 0; i &lt; 10; i--)
        &#39;no-await-in-loop&#39;: &#39;off&#39;,// \u7981\u6B62\u5C06 await \u5199\u5728\u5FAA\u73AF\u91CC
        &#39;no-compare-neg-zero&#39;: &#39;error&#39;,// \u7981\u6B62\u4E0E\u8D1F\u96F6\u8FDB\u884C\u6BD4\u8F83
        &#39;no-empty-character-class&#39;: &#39;error&#39;, // \u7981\u6B62\u5728\u6B63\u5219\u8868\u8FBE\u5F0F\u4E2D\u4F7F\u7528\u7A7A\u7684\u5B57\u7B26\u96C6 []
        &#39;no-extra-parens&#39;: [&#39;error&#39;,&#39;functions&#39;], // \u7981\u6B62\u51FD\u6570\u8868\u8FBE\u5F0F\u4E2D\u51FA\u73B0\u591A\u4F59\u7684\u62EC\u53F7
        &#39;no-extra-semi&#39;: &#39;error&#39;, // \u7981\u6B62\u51FA\u73B0\u591A\u4F59\u7684\u5206\u53F7
        &#39;no-func-assign&#39;: &#39;error&#39;, // \u7981\u6B62\u5C06\u4E00\u4E2A\u51FD\u6570\u58F0\u660E\u91CD\u65B0\u8D4B\u503C
        &#39;no-inner-declarations&#39;: [&#39;error&#39;, &#39;both&#39;],// \u7981\u6B62\u5728 if \u4EE3\u7801\u5757\u5185\u51FA\u73B0\u51FD\u6570\u58F0\u660E
        &#39;no-regex-spaces&#39;: &#39;error&#39;, // \u7981\u6B62\u5728\u6B63\u5219\u8868\u8FBE\u5F0F\u4E2D\u51FA\u73B0\u8FDE\u7EED\u7684\u7A7A\u683C
        &#39;no-sparse-arrays&#39;: &#39;error&#39;,// \u7981\u6B62\u5728\u6570\u7EC4\u4E2D\u51FA\u73B0\u8FDE\u7EED\u7684\u9017\u53F7
        &#39;no-unreachable&#39;: &#39;error&#39;, // \u7981\u6B62\u5728 return, throw, break \u6216 continue \u4E4B\u540E\u8FD8\u6709\u4EE3\u7801
        &#39;no-template-curly-in-string&#39;: &#39;error&#39;,// \u7981\u6B62\u51FA\u73B0\u96BE\u4EE5\u7406\u89E3\u7684\u591A\u884C\u8868\u8FBE\u5F0F
        &#39;use-isnan&#39;: &#39;error&#39;,// \u5FC5\u987B\u4F7F\u7528 isNaN(foo)
        // &#39;complexity&#39;: [&#39;error&#39;,{&#39;max&#39;: 20}], // \u7981\u6B62\u51FD\u6570\u7684\u5FAA\u73AF\u590D\u6742\u5EA6\u8D85\u8FC7 20
        &#39;dot-location&#39;: [&#39;error&#39;,&#39;property&#39;], // \u94FE\u5F0F\u8C03\u7528\u7684\u65F6\u5019\uFF0C\u70B9\u53F7\u5FC5\u987B\u653E\u5728\u7B2C\u4E8C\u884C\u5F00\u5934\u5904\uFF0C\u7981\u6B62\u653E\u5728\u7B2C\u4E00\u884C\u7ED3\u5C3E\u5904
        &#39;no-empty-function&#39;: [
            &#39;error&#39;,
            {
                &#39;allow&#39;: [
                    &#39;functions&#39;,
                    &#39;arrowFunctions&#39;
                ]
            }
        ],  // \u4E0D\u5141\u8BB8\u6709\u7A7A\u51FD\u6570\uFF0C\u9664\u975E\u662F\u5C06\u4E00\u4E2A\u7A7A\u51FD\u6570\u8BBE\u7F6E\u4E3A\u67D0\u4E2A\u9879\u7684\u9ED8\u8BA4\u503C
        &#39;no-extend-native&#39;: &#39;error&#39;, // \u7981\u6B62\u4FEE\u6539\u539F\u751F\u5BF9\u8C61
        &#39;no-global-assign&#39;: &#39;error&#39;,// \u7981\u6B62\u5BF9\u5168\u5C40\u53D8\u91CF\u8D4B\u503C
        &#39;key-spacing&#39;: [0, {
            &#39;beforeColon&#39;: false,
            &#39;afterColon&#39;: true
        }],//\u5BF9\u8C61\u5B57\u9762\u91CF\u4E2D\u5192\u53F7\u7684\u524D\u540E\u7A7A\u683C
        &#39;max-depth&#39;: [
            &#39;error&#39;,
            5
        ], // \u4EE3\u7801\u5757\u5D4C\u5957\u7684\u6DF1\u5EA6\u7981\u6B62\u8D85\u8FC7 5 \u5C42
        &#39;max-params&#39;: [
            &#39;error&#39;,
            6
        ],  // \u51FD\u6570\u7684\u53C2\u6570\u7981\u6B62\u8D85\u8FC7 6 \u4E2A
        &#39;newline-per-chained-call&#39;: &#39;error&#39;,//\u94FE\u5F0F\u8C03\u7528\u5FC5\u987B\u6362\u884C
        &#39;no-multiple-empty-lines&#39;: [&#39;error&#39;,{
            &#39;max&#39;: 3,
            &#39;maxEOF&#39;: 1,
            &#39;maxBOF&#39;: 1
        }],// \u7981\u6B62\u51FA\u73B0\u8D85\u8FC7\u4E09\u884C\u7684\u8FDE\u7EED\u7A7A\u884C
        &#39;no-whitespace-before-property&#39;: &#39;error&#39;, // \u7981\u6B62\u5C5E\u6027\u524D\u6709\u7A7A\u683C
        &#39;nonblock-statement-body-position&#39;: [
            &#39;error&#39;,
            &#39;beside&#39;,
            {
                &#39;overrides&#39;: {
                    &#39;while&#39;: &#39;below&#39;
                }
            }
        ],// \u7981\u6B62 if \u540E\u9762\u4E0D\u52A0\u5927\u62EC\u53F7\u800C\u5199\u4E24\u884C\u4EE3\u7801
        &#39;object-curly-newline&#39;: [
            &#39;error&#39;,
            {
                &#39;multiline&#39;: true,
                &#39;consistent&#39;: true
            }
        ],// \u5927\u62EC\u53F7\u5185\u7684\u9996\u5C3E\u5FC5\u987B\u6709\u6362\u884C
        &#39;object-property-newline&#39;: &#39;error&#39;, // \u5BF9\u8C61\u5B57\u9762\u91CF\u5185\u7684\u5C5E\u6027\u6BCF\u884C\u5FC5\u987B\u53EA\u6709\u4E00\u4E2A

        &#39;no-debugger&#39;: 0, // \u4E0D\u7981\u7528debugger
        &#39;no-var&#39;: 0, // \u5BF9var\u8B66\u544A
        &#39;semi&#39;: 0, // \u4E0D\u5F3A\u5236\u4F7F\u7528\u5206\u53F7
        &#39;no-irregular-whitespace&#39;: 0, // \u4E0D\u89C4\u5219\u7684\u7A7A\u767D\u4E0D\u5141\u8BB8
        &#39;no-trailing-spaces&#39;: 2, // \u4E00\u884C\u7ED3\u675F\u540E\u9762\u6709\u7A7A\u683C\u5C31\u53D1\u51FA\u8B66\u544A
        &#39;eol-last&#39;: 0, // \u6587\u4EF6\u4EE5\u5355\u4E00\u7684\u6362\u884C\u7B26\u7ED3\u675F
        &#39;no-underscore-dangle&#39;: 0, // \u6807\u8BC6\u7B26\u4E0D\u80FD\u4EE5_\u5F00\u5934\u6216\u7ED3\u5C3E
        &#39;no-lone-blocks&#39;: 0, // \u7981\u6B62\u4E0D\u5FC5\u8981\u7684\u5D4C\u5957\u5757
        &#39;no-class-assign&#39;: 2, // \u7981\u6B62\u7ED9\u7C7B\u8D4B\u503C
        &#39;no-cond-assign&#39;: 2, // \u7981\u6B62\u5728\u6761\u4EF6\u8868\u8FBE\u5F0F\u4E2D\u4F7F\u7528\u8D4B\u503C\u8BED\u53E5
        &#39;no-const-assign&#39;: 2, // \u7981\u6B62\u4FEE\u6539const\u58F0\u660E\u7684\u53D8\u91CF
        &#39;no-delete-var&#39;: 2, // \u4E0D\u80FD\u5BF9var\u58F0\u660E\u7684\u53D8\u91CF\u4F7F\u7528delete\u64CD\u4F5C\u7B26
        &#39;no-dupe-keys&#39;: 2, // \u5728\u521B\u5EFA\u5BF9\u8C61\u5B57\u9762\u91CF\u65F6\u4E0D\u5141\u8BB8\u952E\u91CD\u590D
        &#39;no-duplicate-case&#39;: 2, // switch\u4E2D\u7684case\u6807\u7B7E\u4E0D\u80FD\u91CD\u590D
        &#39;no-useless-catch&#39;:0,//\u5141\u8BB8try catch
        &#39;no-dupe-args&#39;: 2, // \u51FD\u6570\u53C2\u6570\u4E0D\u80FD\u91CD\u590D
        &#39;no-empty&#39;: 2, // \u5757\u8BED\u53E5\u4E2D\u7684\u5185\u5BB9\u4E0D\u80FD\u4E3A\u7A7A
        &#39;no-invalid-this&#39;: 0, // \u7981\u6B62\u65E0\u6548\u7684this\uFF0C\u53EA\u80FD\u7528\u5728\u6784\u9020\u5668\uFF0C\u7C7B\uFF0C\u5BF9\u8C61\u5B57\u9762\u91CF
        &#39;no-redeclare&#39;: 2, // \u7981\u6B62\u91CD\u590D\u58F0\u660E\u53D8\u91CF
        &#39;no-spaced-func&#39;: 2, // \u51FD\u6570\u8C03\u7528\u65F6 \u51FD\u6570\u540D\u4E0E()\u4E4B\u95F4\u4E0D\u80FD\u6709\u7A7A\u683C
        &#39;no-this-before-super&#39;: 0, // \u5728\u8C03\u7528super()\u4E4B\u524D\u4E0D\u80FD\u4F7F\u7528this\u6216super
        &#39;no-undef&#39;: 2, // \u4E0D\u80FD\u6709\u672A\u5B9A\u4E49\u7684\u53D8\u91CF
        &#39;no-use-before-define&#39;: 2, // \u672A\u5B9A\u4E49\u524D\u4E0D\u80FD\u4F7F\u7528
        &#39;camelcase&#39;: 0, // \u5F3A\u5236\u9A7C\u5CF0\u6CD5\u547D\u540D
        &#39;jsx-quotes&#39;: [2, &#39;prefer-double&#39;], // \u5F3A\u5236\u5728JSX\u5C5E\u6027\uFF08jsx-quotes\uFF09\u4E2D\u4E00\u81F4\u4F7F\u7528\u53CC\u5F15\u53F7
        &#39;react/display-name&#39;: 0, // \u9632\u6B62\u5728React\u7EC4\u4EF6\u5B9A\u4E49\u4E2D\u4E22\u5931displayName
        &#39;react/forbid-prop-types&#39;: [2, {&#39;forbid&#39;: [&#39;any&#39;]}], // \u7981\u6B62\u67D0\u4E9BpropTypes
        &#39;react/jsx-boolean-value&#39;: 2, // \u5728JSX\u4E2D\u5F3A\u5236\u5E03\u5C14\u5C5E\u6027\u7B26\u53F7
        // &#39;react/jsx-closing-bracket-location&#39;: 1, // \u5728JSX\u4E2D\u9A8C\u8BC1\u53F3\u62EC\u53F7\u4F4D\u7F6E
        &#39;react/jsx-curly-spacing&#39;: [2, {
            &#39;when&#39;: &#39;never&#39;,
            &#39;children&#39;: true
        }], // \u5728JSX\u5C5E\u6027\u548C\u8868\u8FBE\u5F0F\u4E2D\u52A0\u5F3A\u6216\u7981\u6B62\u5927\u62EC\u53F7\u5185\u7684\u7A7A\u683C\u3002
        &#39;react/jsx-key&#39;: 2, // \u5728\u6570\u7EC4\u6216\u8FED\u4EE3\u5668\u4E2D\u9A8C\u8BC1JSX\u5177\u6709key\u5C5E\u6027
        &#39;react/jsx-max-props-per-line&#39;: [1, {&#39;maximum&#39;: 3}], // \u9650\u5236JSX\u4E2D\u5355\u884C\u4E0A\u7684props\u7684\u6700\u5927\u6570\u91CF
        &#39;react/jsx-no-bind&#39;: 0, // JSX\u4E2D\u4E0D\u5141\u8BB8\u4F7F\u7528\u7BAD\u5934\u51FD\u6570\u548Cbind
        &#39;react/jsx-no-duplicate-props&#39;: 2, // \u9632\u6B62\u5728JSX\u4E2D\u91CD\u590D\u7684props
        &#39;react/jsx-no-literals&#39;: 0, // \u9632\u6B62\u4F7F\u7528\u672A\u5305\u88C5\u7684JSX\u5B57\u7B26\u4E32
        &#39;react/jsx-no-undef&#39;: 1, // \u5728JSX\u4E2D\u7981\u6B62\u672A\u58F0\u660E\u7684\u53D8\u91CF
        &#39;react/jsx-pascal-case&#39;: 0, // \u4E3A\u7528\u6237\u5B9A\u4E49\u7684JSX\u7EC4\u4EF6\u5F3A\u5236\u4F7F\u7528PascalCase
        &#39;react/jsx-sort-props&#39;: 0, // \u5F3A\u5316props\u6309\u5B57\u6BCD\u6392\u5E8F
        &#39;react/jsx-uses-react&#39;: 1, // \u9632\u6B62\u53CD\u5E94\u88AB\u9519\u8BEF\u5730\u6807\u8BB0\u4E3A\u672A\u4F7F\u7528
        &#39;react/jsx-uses-vars&#39;: 2, // \u9632\u6B62\u5728JSX\u4E2D\u4F7F\u7528\u7684\u53D8\u91CF\u88AB\u9519\u8BEF\u5730\u6807\u8BB0\u4E3A\u672A\u4F7F\u7528
        &#39;react/no-danger&#39;: 0, // \u9632\u6B62\u4F7F\u7528\u5371\u9669\u7684JSX\u5C5E\u6027
        &#39;react/no-did-mount-set-state&#39;: 0, // \u9632\u6B62\u5728componentDidMount\u4E2D\u4F7F\u7528setState
        &#39;react/no-did-update-set-state&#39;: 1, // \u9632\u6B62\u5728componentDidUpdate\u4E2D\u4F7F\u7528setState
        &#39;react/no-direct-mutation-state&#39;: 2, // \u9632\u6B62this.state\u7684\u76F4\u63A5\u53D8\u5F02
        &#39;no-unused-vars&#39;:0,//\u5141\u8BB8\u58F0\u660E\uFF0C\u4E0D\u4F7F\u7528\u7684\u53D8\u91CF
        // &#39;react/no-multi-comp&#39;: 2, // \u9632\u6B62\u6BCF\u4E2A\u6587\u4EF6\u6709\u591A\u4E2A\u7EC4\u4EF6\u5B9A\u4E49
        &#39;react/no-set-state&#39;: 0, // \u9632\u6B62\u4F7F\u7528setState
        &#39;react/no-unknown-property&#39;: &quot;off&quot;, // \u9632\u6B62\u4F7F\u7528\u672A\u77E5\u7684DOM\u5C5E\u6027
        &#39;react/prefer-es6-class&#39;: 0, // \u4E3AReact\u7EC4\u4EF6\u5F3A\u5236\u6267\u884CES5\u6216ES6\u7C7B
        &#39;react/prop-types&#39;: 0, // \u9632\u6B62\u5728React\u7EC4\u4EF6\u5B9A\u4E49\u4E2D\u4E22\u5931props\u9A8C\u8BC1
        &#39;react/react-in-jsx-scope&#39;: 0, // \u4F7F\u7528JSX\u65F6\u9632\u6B62\u4E22\u5931React
        &#39;react/self-closing-comp&#39;: 0, // \u9632\u6B62\u6CA1\u6709children\u7684\u7EC4\u4EF6\u7684\u989D\u5916\u7ED3\u675F\u6807\u7B7E
        &#39;react/sort-comp&#39;: 2, // \u5F3A\u5236\u7EC4\u4EF6\u65B9\u6CD5\u987A\u5E8F
        &#39;no-extra-boolean-cast&#39;: 0, // \u7981\u6B62\u4E0D\u5FC5\u8981\u7684bool\u8F6C\u6362
        &#39;react/no-array-index-key&#39;: 0, // \u9632\u6B62\u5728\u6570\u7EC4\u4E2D\u904D\u5386\u4E2D\u4F7F\u7528\u6570\u7EC4key\u505A\u7D22\u5F15
        &#39;react/no-deprecated&#39;: 1, // \u4E0D\u4F7F\u7528\u5F03\u7528\u7684\u65B9\u6CD5
        &#39;react/jsx-equals-spacing&#39;: 2, // \u5728JSX\u5C5E\u6027\u4E2D\u5F3A\u5236\u6216\u7981\u6B62\u7B49\u53F7\u5468\u56F4\u7684\u7A7A\u683C
        &#39;comma-dangle&#39;: 0, // \u5BF9\u8C61\u5B57\u9762\u91CF\u9879\u5C3E\u4E0D\u80FD\u6709\u9017\u53F7
        &#39;no-mixed-spaces-and-tabs&#39;: 0, // \u7981\u6B62\u6DF7\u7528tab\u548C\u7A7A\u683C
        &#39;prefer-arrow-callback&#39;: 0, // \u6BD4\u8F83\u559C\u6B22\u7BAD\u5934\u56DE\u8C03
        &#39;arrow-parens&#39;: 0, // \u7BAD\u5934\u51FD\u6570\u7528\u5C0F\u62EC\u53F7\u62EC\u8D77\u6765
        &#39;arrow-spacing&#39;: 0, //= &gt;\u7684\u524D/\u540E\u62EC\u53F7
        &#39;react/no-unescaped-entities&#39;: &#39;error&#39; // \u7981\u6B62\u51FA\u73B0 HTML \u4E2D\u7684\u5C5E\u6027\uFF0C\u5982 class
    }
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-\u914D\u7F6E-husky-\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#_3-\u914D\u7F6E-husky-\u914D\u7F6E" aria-hidden="true">#</a> (3)\u914D\u7F6E husky \u914D\u7F6E</h3><p>npm i husky -D npx husky-init install # npm</p><p>\u5982\u679C\u662F yarn \u6216\u662F pnpm \u5B89\u88C5\u597D husky \u540E,\u9700\u8981\u914D\u7F6E\u4E09\u6B65\u9AA4\uFF0C\u624D\u80FD\u6B63\u5F0F\u4F7F\u7528 npx husky-init # Yarn 1 yarn dlx husky-init # Yarn 2+ pnpm dlx husky-init # pnpm</p><p>\u7B2C\u4E00\u6B65\uFF1A\u6839\u636E\u5F53\u524D\u7684 lint-staged \u5185\u5BB9\u914D\u7F6E &quot;lint&quot;: &quot;eslint . --fix&quot;,//\u6CE8\u610F\u914D\u7F6E\u8FD9\u91CC.\uFF0C\u53EF\u4EE5\u6362\u6210 src \u6587\u4EF6\u5939\uFF0C\u8FD9\u6837\u53EA\u4F1A\u6821\u9A8C src \u6587\u4EF6\u5939\u5185\u5BB9 &quot;lint-staged&quot;: &quot;lint-staged --allow-empty&quot; package.json \u7684 script \u811A\u672C\u589E\u52A0\u4E0B\u9762\u5185\u5BB9,\u6CE8\u610F &quot;lint-staged&quot;: &quot;lint-staged --allow-empty&quot;,\u8868\u793A\u5141\u8BB8\u521B\u5EFA\u7A7A\u7684\u63D0\u4EA4 &quot;lint-staged&quot;: &quot;lint-staged --allow-empty&quot;, &quot;lint-staged:js&quot;: &quot;eslint --ext .js,.jsx,.ts,.tsx &quot;,</p><p>\u7B2C\u4E8C\u6B65\uFF1Apackage.json \u4E0B\u9762\u589E\u52A0\u914D\u7F6E \u7B2C\u4E00\u79CD &quot;lint-staged&quot;: { &quot;<strong>/*.{js,jsx,ts,tsx}&quot;: &quot;yarn run lint-staged:js&quot;, &quot;</strong>/*.{js,jsx,tsx,ts,less,md,json}&quot;: [ &quot;eslint --fix --color&quot;, &quot;prettier --write&quot; ] }, \u7B2C\u4E8C\u79CD &quot;lint-staged&quot;: { &quot;*<em>/</em>.{js,jsx,tsx,ts}&quot;: [ &quot;prettier --write&quot;, &quot;eslint --cache --fix --color&quot;, &quot;git add&quot; ] }, \u7B2C\u4E09\u79CD &quot;lint-staged&quot;: { &quot;*<em>/</em>.{js,jsx,tsx,ts}&quot;: [ &quot;prettier --write&quot;, &quot;eslint --fix --color&quot;, &quot;git add&quot; ] },</p><p>\u8FD9\u91CC\u6CE8\u610F\uFF1A\u81EA\u5B9A\u4E49\u914D\u7F6E\u5185\u5BB9</p><p>\u7B2C\u4E09\u6B65\uFF1A\u5C06 husky \u76EE\u5F55\u4E0B\u7684\u5185\u5BB9\u8FDB\u884C\u4FEE\u6539 husky \u76EE\u5F55\u4E0B\u9762\u9ED8\u8BA4\u662F npm test \u4FEE\u6539\u6210 npm run lint-staged</p><p>\u4F8B\u5982\u7ED9\u4E00\u4E2Ademo\u7248\u672C\uFF0C package.json+.husky \u6587\u4EF6\u5939+eslint+prettier</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>package.json\u4E2D
    script\u4E2D
    &quot;prepare&quot;: &quot;husky install&quot;,
    &quot;lint&quot;: &quot;eslint . --fix&quot;,
    &quot;lint-staged&quot;: &quot;lint-staged --allow-empty&quot;,
    \u589E\u52A0
  &quot;lint-staged&quot;: {
    &quot;**/*.{js,jsx,tsx,ts}&quot;: [
      &quot;eslint  --fix --color&quot;,
      &quot;git add&quot;
    ]
  },




</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-\u6CE8\u610F" tabindex="-1"><a class="header-anchor" href="#_4-\u6CE8\u610F" aria-hidden="true">#</a> (4)\u6CE8\u610F\uFF1A</h3><p>\u8FD9\u4E9B\u5185\u5BB9\u524D\u63D0\uFF0C\u914D\u7F6E\u597D eslint \u548C prettier \u662F\u6709\u5FC5\u8981\u7684~</p><h3 id="_5-\u5E38\u89C1\u95EE\u9898-husky-\u53EF\u4EE5\u5FFD\u7565\u6821\u9A8C\u4E00\u4E9B\u6587\u4EF6\u5417" tabindex="-1"><a class="header-anchor" href="#_5-\u5E38\u89C1\u95EE\u9898-husky-\u53EF\u4EE5\u5FFD\u7565\u6821\u9A8C\u4E00\u4E9B\u6587\u4EF6\u5417" aria-hidden="true">#</a> (5)\u5E38\u89C1\u95EE\u9898\uFF1Ahusky \u53EF\u4EE5\u5FFD\u7565\u6821\u9A8C\u4E00\u4E9B\u6587\u4EF6\u5417\uFF1F</h3><p>\u901A\u8FC7 lint-staged \u914D\u7F6E\u5373\u53EF\u3002 &quot;ignore&quot;: [&quot;node_modules&quot;, &quot;dist&quot;, &quot;package-lock.json&quot;] }</p><h3 id="_6-\u7ED5\u8FC7-commit-\u6821\u9A8C\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#_6-\u7ED5\u8FC7-commit-\u6821\u9A8C\u65B9\u6CD5" aria-hidden="true">#</a> \uFF086\uFF09\u7ED5\u8FC7 commit \u6821\u9A8C\u65B9\u6CD5</h3><p>git commit --no-verify -m &quot;\u7565\u8FC7\u4EE3\u7801\u68C0\u6D4B&quot; \u4F46\u662F\u56E2\u961F\u5F00\u53D1\u4E2D\uFF0C\u4F1A\u628A\u522B\u4EBA\u5751\u4E86\u3002</p><h3 id="_7-\u914D\u7F6E\u65B0\u589E-lint-staged-\u683C\u5F0F\u5316\u4EE3\u7801\u7684\u5185\u5BB9" tabindex="-1"><a class="header-anchor" href="#_7-\u914D\u7F6E\u65B0\u589E-lint-staged-\u683C\u5F0F\u5316\u4EE3\u7801\u7684\u5185\u5BB9" aria-hidden="true">#</a> \uFF087\uFF09\u914D\u7F6E\u65B0\u589E lint-staged \u683C\u5F0F\u5316\u4EE3\u7801\u7684\u5185\u5BB9</h3><p>\u91CD\u65B0\u683C\u5F0F\u5316\u4EE3\u7801 \u50CF Prettier\u3001ESLint/TSLint \u6216 stylelint \u8FD9\u6837\u7684\u5DE5\u5177\u53EF\u4EE5\u6839\u636E\u9002\u5F53\u7684\u914D\u7F6E\u91CD\u65B0\u683C\u5F0F\u5316\u4EE3\u7801\uFF0C \u65B9\u6CD5\u662F\u8FD0\u884C Prettier--write / ESLint --fix / TSLint --fix / stylelint --fix\u3002\u53EA\u8981\u6CA1\u6709\u9519\u8BEF,lint-staged \u5C06\u81EA\u52A8\u5411\u63D0\u4EA4\u6DFB\u52A0\u4EFB\u4F55\u4FEE\u6539\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u4F8B\u5982
&quot;*.js&quot;: &quot;prettier --write&quot;

&quot;lint-staged&quot;: {
    &quot;*.{js}&quot;: [
      &quot;eslint --cache --fix&quot;,
      &quot;prettier --write&quot;
    ],
    &quot;*.css&quot;: [
      &quot;stylelint --cache --fix&quot;,
      &quot;prettier --write&quot;
    ]
  }

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_8-husky-\u5DE5\u5177" tabindex="-1"><a class="header-anchor" href="#_8-husky-\u5DE5\u5177" aria-hidden="true">#</a> \uFF088\uFF09husky \u5DE5\u5177</h3><p>\u65B9\u6CD5 1 husky \u5176\u5B9E\u5C31\u662F\u4E00\u4E2A\u4E3A git \u5BA2\u6237\u7AEF\u589E\u52A0 hook \u7684\u5DE5\u5177\u3002\u53EF\u4EE5\u505A\u4E00\u4E9B\u9884\u6821\u9A8C\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code> &quot;husky&quot;: {
    &quot;hooks&quot;: {
      &quot;pre-commit&quot;: &quot;npm run lint-staged&quot;,
    }
  }

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u65B9\u6848 2\uFF1A\u63A8\u8350\u8FD9\u79CD\u60C5\u51B5 \u8FD9\u4E2A\u68C0\u6D4B\u5DE5\u5177\u7684\u5DE5\u4F5C\uFF0C\u5728\u4E0A\u9762\u5B89\u88C5 husky \u540E\uFF0Cnpx husky-init install \u540E\uFF0C\u751F\u6210.husky \u4E2D\u5DF2\u7ECF\u5305\u542B\u4E86\u3002 pre-commit.sh \u4E2D\u589E\u52A0\uFF0C\u5C06\u539F\u6765\u7684 npm test \u4FEE\u6539\u4E3A npm run lint-staged</p><h3 id="_9-\u6709\u65F6\u5019\u4E00\u4E2A\u9879\u76EE\u5B89\u88C5\u589E\u52A0-husky-lint-staged-\u540E\u4E0D\u751F\u6548" tabindex="-1"><a class="header-anchor" href="#_9-\u6709\u65F6\u5019\u4E00\u4E2A\u9879\u76EE\u5B89\u88C5\u589E\u52A0-husky-lint-staged-\u540E\u4E0D\u751F\u6548" aria-hidden="true">#</a> \uFF089\uFF09\u6709\u65F6\u5019\u4E00\u4E2A\u9879\u76EE\u5B89\u88C5\u589E\u52A0 husky+lint-staged \u540E\u4E0D\u751F\u6548</h3><p>\u5C06\u4E00\u4E2A js \u6587\u4EF6\u7B80\u5355\u505A\u4E00\u4E9B\u4FEE\u6539\uFF0C\u8FD9\u6837\u53EF\u4EE5\u65B9\u4FBF\u6821\u9A8C\u3002 \u6709\u65F6\u5019\uFF0C\u6709\u7F13\u5B58\u7684\u5F71\u54CD\uFF0C\u5BFC\u81F4\u4E0D\u751F\u6548\u3002</p><h3 id="_10-\u4F7F\u7528\u591A\u6846\u67B6\u6846\u67B6\u7684\u65F6\u5019-\u672C\u5730\u5316\u7684-husky-\u4E0D\u751F\u6548\u3002" tabindex="-1"><a class="header-anchor" href="#_10-\u4F7F\u7528\u591A\u6846\u67B6\u6846\u67B6\u7684\u65F6\u5019-\u672C\u5730\u5316\u7684-husky-\u4E0D\u751F\u6548\u3002" aria-hidden="true">#</a> \uFF0810\uFF09\u4F7F\u7528\u591A\u6846\u67B6\u6846\u67B6\u7684\u65F6\u5019\uFF0C\u672C\u5730\u5316\u7684 husky \u4E0D\u751F\u6548\u3002</h3><p>\u9ED8\u8BA4 husky \u53EA\u4F1A\u627E\u6839\u76EE\u5F55\uFF0C\u4E0D\u4F1A\u4ECE\u5F53\u524D\u5B50\u9879\u76EE\u4E2D\u627E husky \u914D\u7F6E\u5185\u5BB9\u3002 \u8FD9\u91CC\u6CE8\u610F\u4E00\u4E0B\u5373\u53EF\u3002</p>`,35),d=[l];function a(t,u){return n(),i("div",null,d)}var c=e(r,[["render",a],["__file","000\u4EE3\u7801\u6821\u9A8C\u7EDF\u4E00\u683C\u5F0F\u5316.html.vue"]]);export{c as default};
