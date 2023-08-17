(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3788],{8802:function(s,n,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/resources/internal/output",function(){return o(2407)}])},2407:function(s,n,o){"use strict";o.r(n),o.d(n,{__N_SSG:function(){return l}});var e=o(5893),a=o(1151),t=o(8691);function r(s){let n=Object.assign({h1:"h1",code:"code",p:"p",h2:"h2",h3:"h3",pre:"pre"},(0,a.ah)(),s.components),{Intro:o,Properties:r,Property:l}=n;return o||p("Intro",!0),r||p("Properties",!0),l||p("Property",!0),(0,e.jsxs)(e.Fragment,{children:[(0,e.jsxs)(n.h1,{children:["Output ",(0,e.jsx)(n.code,{children:"output"})]}),"\n",(0,e.jsxs)(o,{children:[(0,e.jsxs)(n.p,{children:["The ",(0,e.jsx)(n.code,{children:"output"})," resource allows you to define output variables which can be used\nto return values from modules or with the jumppad ",(0,e.jsx)(n.code,{children:"output"})," and ",(0,e.jsx)(n.code,{children:"env"})," commands."]}),(0,e.jsxs)(n.p,{children:[(0,e.jsx)("b",{children:"Note:"})," ",(0,e.jsx)(n.code,{children:"output"})," resources are module scoped, ",(0,e.jsx)(n.code,{children:"jumppad output"})," will only show\nthe value of ",(0,e.jsx)(n.code,{children:"output"})," resources scoped at the top level."]})]}),"\n",(0,e.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n",(0,e.jsx)(r,{children:(0,e.jsx)(l,{name:"value",type:"interface",required:"true",value:"",children:(0,e.jsx)(n.p,{children:"Value to set to the output, if this value contains an interpolated\nproperty from another resource, the output will be created after the\nreferenced resource."})})}),"\n",(0,e.jsx)(t.default,{}),"\n",(0,e.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,e.jsx)(n.h3,{children:"Simple Example"}),"\n",(0,e.jsxs)(n.p,{children:["The following example shows how to use an ",(0,e.jsx)(n.code,{children:"output"})," resource to configure the\nenvironment variable ",(0,e.jsx)(n.code,{children:"KUBECONFIG"}),"."]}),"\n",(0,e.jsx)(n.pre,{language:"hcl",code:'output "KUBECONFIG" {\n  value = resource.k8s_cluster.k3s.kubeconfig\n}\n',children:(0,e.jsx)(n.code,{className:"language-hcl",children:'<span><span style="color: var(--shiki-token-keyword)">output</span><span style="color: var(--shiki-token-string-expression)"> &quot;KUBECONFIG&quot;</span><span style="color: var(--shiki-color-text)"> {</span></span>\n<span><span style="color: var(--shiki-color-text)">  value </span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-color-text)"> resource</span><span style="color: var(--shiki-token-constant)">.</span><span style="color: var(--shiki-color-text)">k8s_cluster</span><span style="color: var(--shiki-token-constant)">.</span><span style="color: var(--shiki-color-text)">k3s</span><span style="color: var(--shiki-token-constant)">.</span><span style="color: var(--shiki-color-text)">kubeconfig</span></span>\n<span><span style="color: var(--shiki-color-text)">}</span></span>\n<span></span>'})}),"\n",(0,e.jsx)(n.h3,{children:"Lists of Values"}),"\n",(0,e.jsx)(n.p,{children:"The following output sets a list of numbers"}),"\n",(0,e.jsx)(n.pre,{language:"hcl",code:'output "list" {\n  value = [1,2,3] \n}\n',children:(0,e.jsx)(n.code,{className:"language-hcl",children:'<span><span style="color: var(--shiki-token-keyword)">output</span><span style="color: var(--shiki-token-string-expression)"> &quot;list&quot;</span><span style="color: var(--shiki-color-text)"> {</span></span>\n<span><span style="color: var(--shiki-color-text)">  value </span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-color-text)"> [</span><span style="color: var(--shiki-token-constant)">1</span><span style="color: var(--shiki-color-text)">,</span><span style="color: var(--shiki-token-constant)">2</span><span style="color: var(--shiki-color-text)">,</span><span style="color: var(--shiki-token-constant)">3</span><span style="color: var(--shiki-color-text)">] </span></span>\n<span><span style="color: var(--shiki-color-text)">}</span></span>\n<span></span>'})}),"\n",(0,e.jsx)(n.p,{children:"This can be consumed using the following interpolation."}),"\n",(0,e.jsxs)(n.p,{children:["Note: Indexes for lists are ",(0,e.jsx)(n.code,{children:"0"})," based."]}),"\n",(0,e.jsx)(n.pre,{language:"hcl",code:'output "list_value" {\n  value = output.list.2 // 3\n}\n',children:(0,e.jsx)(n.code,{className:"language-hcl",children:'<span><span style="color: var(--shiki-token-keyword)">output</span><span style="color: var(--shiki-token-string-expression)"> &quot;list_value&quot;</span><span style="color: var(--shiki-color-text)"> {</span></span>\n<span><span style="color: var(--shiki-color-text)">  value </span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-color-text)"> output</span><span style="color: var(--shiki-token-constant)">.</span><span style="color: var(--shiki-color-text)">list</span><span style="color: var(--shiki-token-constant)">.2</span><span style="color: var(--shiki-color-text)"> // </span><span style="color: var(--shiki-token-constant)">3</span></span>\n<span><span style="color: var(--shiki-color-text)">}</span></span>\n<span></span>'})}),"\n",(0,e.jsx)(n.h3,{children:"Maps of Values"}),"\n",(0,e.jsx)(n.p,{children:"The following output sets a map of values"}),"\n",(0,e.jsx)(n.pre,{language:"hcl",code:'output "map" {\n  value = {\n    list = [1,2,3]\n    string = "hello world"\n    submap = {\n      foo = "bar"\n    }\n  }\n}\n',children:(0,e.jsx)(n.code,{className:"language-hcl",children:'<span><span style="color: var(--shiki-token-keyword)">output</span><span style="color: var(--shiki-token-string-expression)"> &quot;map&quot;</span><span style="color: var(--shiki-color-text)"> {</span></span>\n<span><span style="color: var(--shiki-color-text)">  value </span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-color-text)"> {</span></span>\n<span><span style="color: var(--shiki-color-text)">    list = [1,2,3]</span></span>\n<span><span style="color: var(--shiki-color-text)">    string = &quot;hello world&quot;</span></span>\n<span><span style="color: var(--shiki-color-text)">    submap = {</span></span>\n<span><span style="color: var(--shiki-color-text)">      foo = &quot;bar&quot;</span></span>\n<span><span style="color: var(--shiki-color-text)">    }</span></span>\n<span><span style="color: var(--shiki-color-text)">  }</span></span>\n<span><span style="color: var(--shiki-color-text)">}</span></span>\n<span></span>'})}),"\n",(0,e.jsx)(n.p,{children:"This can be consumed using the following interpolation."}),"\n",(0,e.jsx)(n.pre,{language:"hcl",code:'output "map_value_1" {\n  value = output.map.list.2 // 3\n}\n\noutput "map_value_2" {\n  value = output.map.string // hello world\n}\n\noutput "map_value_3" {\n  value = output.map.submap.foo // bar\n}\n',children:(0,e.jsx)(n.code,{className:"language-hcl",children:'<span><span style="color: var(--shiki-token-keyword)">output</span><span style="color: var(--shiki-token-string-expression)"> &quot;map_value_1&quot;</span><span style="color: var(--shiki-color-text)"> {</span></span>\n<span><span style="color: var(--shiki-color-text)">  value </span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-color-text)"> output</span><span style="color: var(--shiki-token-constant)">.</span><span style="color: var(--shiki-color-text)">map</span><span style="color: var(--shiki-token-constant)">.</span><span style="color: var(--shiki-color-text)">list</span><span style="color: var(--shiki-token-constant)">.2</span><span style="color: var(--shiki-color-text)"> // </span><span style="color: var(--shiki-token-constant)">3</span></span>\n<span><span style="color: var(--shiki-color-text)">}</span></span>\n<span></span>\n<span><span style="color: var(--shiki-token-keyword)">output</span><span style="color: var(--shiki-token-string-expression)"> &quot;map_value_2&quot;</span><span style="color: var(--shiki-color-text)"> {</span></span>\n<span><span style="color: var(--shiki-color-text)">  value </span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-color-text)"> output</span><span style="color: var(--shiki-token-constant)">.</span><span style="color: var(--shiki-color-text)">map</span><span style="color: var(--shiki-token-constant)">.</span><span style="color: var(--shiki-color-text)">string // hello world</span></span>\n<span><span style="color: var(--shiki-color-text)">}</span></span>\n<span></span>\n<span><span style="color: var(--shiki-token-keyword)">output</span><span style="color: var(--shiki-token-string-expression)"> &quot;map_value_3&quot;</span><span style="color: var(--shiki-color-text)"> {</span></span>\n<span><span style="color: var(--shiki-color-text)">  value </span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-color-text)"> output</span><span style="color: var(--shiki-token-constant)">.</span><span style="color: var(--shiki-color-text)">map</span><span style="color: var(--shiki-token-constant)">.</span><span style="color: var(--shiki-color-text)">submap</span><span style="color: var(--shiki-token-constant)">.</span><span style="color: var(--shiki-color-text)">foo // bar</span></span>\n<span><span style="color: var(--shiki-color-text)">}</span></span>\n<span></span>'})})]})}var l=!0;function p(s,n){throw Error("Expected "+(n?"component":"object")+" `"+s+"` to be defined: you likely forgot to import, pass, or provide it.")}n.default=function(){let s=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,a.ah)(),s.components);return n?(0,e.jsx)(n,Object.assign({},s,{children:(0,e.jsx)(r,s)})):r(s)}},8691:function(s,n,o){"use strict";o.r(n),o.d(n,{__N_SSG:function(){return r}});var e=o(5893),a=o(1151);function t(s){let n=Object.assign({h2:"h2",p:"p",code:"code",a:"a"},(0,a.ah)(),s.components);return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(n.h2,{id:"meta_properties",children:"Meta Properties"}),"\n",(0,e.jsxs)(n.p,{children:["In addition to the main properties, all resources have meta properties, such\nas the ",(0,e.jsx)(n.code,{children:"id"})," of the resource. To see the list of these properties please see the\n",(0,e.jsx)(n.code,{children:"Meta Properties"})," section in the documentation ",(0,e.jsx)(n.a,{href:"/docs/resources/meta",children:"/docs/resources/meta"}),"."]})]})}var r=!0;n.default=function(){let s=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,a.ah)(),s.components);return n?(0,e.jsx)(n,Object.assign({},s,{children:(0,e.jsx)(t,s)})):t(s)}}},function(s){s.O(0,[9774,2888,179],function(){return s(s.s=8802)}),_N_E=s.O()}]);