(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3999],{6814:function(s,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/resources/module",function(){return n(1744)}])},1744:function(s,e,n){"use strict";n.r(e),n.d(e,{__N_SSG:function(){return l}});var o=n(5893),a=n(1151),r=n(8691);function t(s){let e=Object.assign({h1:"h1",code:"code",p:"p",h2:"h2",pre:"pre",h3:"h3"},(0,a.ah)(),s.components),{Intro:n,Properties:t,Property:l}=e;return n||i("Intro",!0),t||i("Properties",!0),l||i("Property",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(e.h1,{children:["Module ",(0,o.jsx)(e.code,{children:"module"})]}),"\n",(0,o.jsxs)(n,{children:[(0,o.jsxs)(e.p,{children:["The ",(0,o.jsx)(e.code,{children:"module"})," resource allows a blueprint to reference other files or blueprints.\nBlueprints can be referenced from the local file system or from GitHub repositories."]}),(0,o.jsxs)(e.p,{children:["All resources contained within a module are scoped to the name of the containing\nmodule. For example, if a module ",(0,o.jsx)(e.code,{children:"mine"})," contains a kubernetes cluster called ",(0,o.jsx)(e.code,{children:"dev"}),"\nthen the FQRN and the name within docker would be:"]}),(0,o.jsx)(e.p,{children:(0,o.jsx)(e.code,{children:"server.dev.mine.k8s-cluster.jumppad.dev"})}),(0,o.jsx)(e.p,{children:"Modules can also contain modules, to ensure that resouce references are unique\nresources always take on the name of their module including any parent modules."}),(0,o.jsxs)(e.p,{children:["For example, if a module ",(0,o.jsx)(e.code,{children:"mine"})," contains a kubernetes cluster called ",(0,o.jsx)(e.code,{children:"dev"})," was\ncontained in module ",(0,o.jsx)(e.code,{children:"parent"}),". Then the FQRN and the name within docker would be:"]}),(0,o.jsx)(e.p,{children:(0,o.jsx)(e.code,{children:"server.dev.parent.mine.k8s-cluster.jumppad.dev"})})]}),"\n",(0,o.jsx)(e.h2,{id:"properties",children:"Properties"}),"\n",(0,o.jsxs)(t,{children:[(0,o.jsx)(l,{name:"source",type:"string",required:"true",value:"",children:(0,o.jsx)(e.p,{children:"The source of the module, can either be a local file or GitHub repositories\nor remote archive."})}),(0,o.jsxs)(l,{name:"variables",type:"map[string]interface",required:"false",value:"",children:[(0,o.jsxs)(e.p,{children:["Module can define ",(0,o.jsx)(e.code,{children:"variables"})," making them dynamic, ",(0,o.jsx)(e.code,{children:"variables"})," are scoped\nto each module meaning that any variable that is set globally will not be\nreadable to modules or submodules. To set variables defined inside a module\nuse the ",(0,o.jsx)(e.code,{children:"varaibles"})," block"]}),(0,o.jsx)(e.pre,{language:"hcl",code:"  variables = {\n    network_id  = resource.network.cloud.id\n    consul_port = 18501\n  }\n",children:(0,o.jsx)(e.code,{className:"language-hcl",children:'<span><span style="color: var(--shiki-color-text)">  variables </span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-color-text)"> {</span></span>\n<span><span style="color: var(--shiki-color-text)">    network_id  = resource.network.cloud.id</span></span>\n<span><span style="color: var(--shiki-color-text)">    consul_port = 18501</span></span>\n<span><span style="color: var(--shiki-color-text)">  }</span></span>\n<span></span>'})})]})]}),"\n",(0,o.jsx)(r.default,{}),"\n",(0,o.jsx)(e.h2,{id:"examples",children:"Examples"}),"\n",(0,o.jsx)(e.h3,{children:"Module Reuse"}),"\n",(0,o.jsx)(e.p,{children:"The following example shows how a module can be used multiple times."}),"\n",(0,o.jsx)(e.pre,{language:"hcl",code:'resource "network" "cloud" {\n  subnet = "10.5.0.0/16"\n}\n\nmodule "consul_dc1" {\n  source = "./module_k3s"\n\n  variables = {\n    network_id  = resource.network.cloud.id\n    consul_port = 18500\n  }\n}\n\nmodule "consul_dc2" {\n  // CI has limited resources, add a manual dependency to ensure that only one module\n  // is created at once\n  depends_on = ["module.consul_dc1"]\n\n  source = "./module_k3s"\n\n  variables = {\n    network_id  = resource.network.cloud.id\n    consul_port = 18501\n  }\n}\n\noutput "dc1_addr" {\n  value = module.consul_dc1.output.consul_http_addr\n}\n\noutput "dc2_addr" {\n  value = module.consul_dc2.output.consul_http_addr\n}\n',children:(0,o.jsx)(e.code,{className:"language-hcl",children:'<span><span style="color: var(--shiki-token-keyword)">resource</span><span style="color: var(--shiki-token-string-expression)"> &quot;network&quot; &quot;cloud&quot;</span><span style="color: var(--shiki-color-text)"> {</span></span>\n<span><span style="color: var(--shiki-color-text)">  subnet </span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&quot;10.5.0.0/16&quot;</span></span>\n<span><span style="color: var(--shiki-color-text)">}</span></span>\n<span></span>\n<span><span style="color: var(--shiki-token-keyword)">module</span><span style="color: var(--shiki-token-string-expression)"> &quot;consul_dc1&quot;</span><span style="color: var(--shiki-color-text)"> {</span></span>\n<span><span style="color: var(--shiki-color-text)">  source </span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&quot;./module_k3s&quot;</span></span>\n<span></span>\n<span><span style="color: var(--shiki-color-text)">  variables </span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-color-text)"> {</span></span>\n<span><span style="color: var(--shiki-color-text)">    network_id  = resource.network.cloud.id</span></span>\n<span><span style="color: var(--shiki-color-text)">    consul_port = 18500</span></span>\n<span><span style="color: var(--shiki-color-text)">  }</span></span>\n<span><span style="color: var(--shiki-color-text)">}</span></span>\n<span></span>\n<span><span style="color: var(--shiki-token-keyword)">module</span><span style="color: var(--shiki-token-string-expression)"> &quot;consul_dc2&quot;</span><span style="color: var(--shiki-color-text)"> {</span></span>\n<span><span style="color: var(--shiki-color-text)">  </span><span style="color: var(--shiki-token-comment)">// CI has limited resources, add a manual dependency to ensure that only one module</span></span>\n<span><span style="color: var(--shiki-color-text)">  </span><span style="color: var(--shiki-token-comment)">// is created at once</span></span>\n<span><span style="color: var(--shiki-color-text)">  depends_on </span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-color-text)"> [</span><span style="color: var(--shiki-token-string-expression)">&quot;module.consul_dc1&quot;</span><span style="color: var(--shiki-color-text)">]</span></span>\n<span></span>\n<span><span style="color: var(--shiki-color-text)">  source </span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&quot;./module_k3s&quot;</span></span>\n<span></span>\n<span><span style="color: var(--shiki-color-text)">  variables </span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-color-text)"> {</span></span>\n<span><span style="color: var(--shiki-color-text)">    network_id  = resource.network.cloud.id</span></span>\n<span><span style="color: var(--shiki-color-text)">    consul_port = 18501</span></span>\n<span><span style="color: var(--shiki-color-text)">  }</span></span>\n<span><span style="color: var(--shiki-color-text)">}</span></span>\n<span></span>\n<span><span style="color: var(--shiki-token-keyword)">output</span><span style="color: var(--shiki-token-string-expression)"> &quot;dc1_addr&quot;</span><span style="color: var(--shiki-color-text)"> {</span></span>\n<span><span style="color: var(--shiki-color-text)">  value </span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-color-text)"> module</span><span style="color: var(--shiki-token-constant)">.</span><span style="color: var(--shiki-color-text)">consul_dc1</span><span style="color: var(--shiki-token-constant)">.</span><span style="color: var(--shiki-color-text)">output</span><span style="color: var(--shiki-token-constant)">.</span><span style="color: var(--shiki-color-text)">consul_http_addr</span></span>\n<span><span style="color: var(--shiki-color-text)">}</span></span>\n<span></span>\n<span><span style="color: var(--shiki-token-keyword)">output</span><span style="color: var(--shiki-token-string-expression)"> &quot;dc2_addr&quot;</span><span style="color: var(--shiki-color-text)"> {</span></span>\n<span><span style="color: var(--shiki-color-text)">  value </span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-color-text)"> module</span><span style="color: var(--shiki-token-constant)">.</span><span style="color: var(--shiki-color-text)">consul_dc2</span><span style="color: var(--shiki-token-constant)">.</span><span style="color: var(--shiki-color-text)">output</span><span style="color: var(--shiki-token-constant)">.</span><span style="color: var(--shiki-color-text)">consul_http_addr</span></span>\n<span><span style="color: var(--shiki-color-text)">}</span></span>\n<span></span>'})})]})}var l=!0;function i(s,e){throw Error("Expected "+(e?"component":"object")+" `"+s+"` to be defined: you likely forgot to import, pass, or provide it.")}e.default=function(){let s=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:e}=Object.assign({},(0,a.ah)(),s.components);return e?(0,o.jsx)(e,Object.assign({},s,{children:(0,o.jsx)(t,s)})):t(s)}},8691:function(s,e,n){"use strict";n.r(e),n.d(e,{__N_SSG:function(){return t}});var o=n(5893),a=n(1151);function r(s){let e=Object.assign({h2:"h2",p:"p",code:"code",a:"a"},(0,a.ah)(),s.components);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(e.h2,{id:"meta_properties",children:"Meta Properties"}),"\n",(0,o.jsxs)(e.p,{children:["In addition to the main properties, all resources have meta properties, such\nas the ",(0,o.jsx)(e.code,{children:"id"})," of the resource. To see the list of these properties please see the\n",(0,o.jsx)(e.code,{children:"Meta Properties"})," section in the documentation ",(0,o.jsx)(e.a,{href:"/docs/resources/meta",children:"/docs/resources/meta"}),"."]})]})}var t=!0;e.default=function(){let s=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:e}=Object.assign({},(0,a.ah)(),s.components);return e?(0,o.jsx)(e,Object.assign({},s,{children:(0,o.jsx)(r,s)})):r(s)}}},function(s){s.O(0,[9774,2888,179],function(){return s(s.s=6814)}),_N_E=s.O()}]);