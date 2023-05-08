(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1191],{9063:function(s,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/resources/helm",function(){return n(3420)}])},3420:function(s,e,n){"use strict";n.r(e),n.d(e,{__N_SSG:function(){return l}});var o=n(5893),r=n(1151),a=n(8691);function t(s){let e=Object.assign({h1:"h1",code:"code",p:"p",a:"a",h2:"h2",pre:"pre",h3:"h3"},(0,r.ah)(),s.components),{Intro:n,Properties:t,Property:l}=e;return n||i("Intro",!0),t||i("Properties",!0),l||i("Property",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(e.h1,{children:["Helm ",(0,o.jsx)(e.code,{children:"helm"})]}),"\n",(0,o.jsxs)(n,{children:[(0,o.jsxs)(e.p,{children:["The ",(0,o.jsx)(e.code,{children:"helm"})," resource allows Helm charts to be provisioned to ",(0,o.jsx)(e.code,{children:"k8s_cluster"})," resources."]}),(0,o.jsx)(e.p,{children:"Documentation is work in progress, please see the old documentation at:"}),(0,o.jsx)(e.p,{children:(0,o.jsx)(e.a,{href:"https://shipyard.run/docs/resources/exec_remote",children:"https://shipyard.run/docs/resources/exec_remote"})})]}),"\n",(0,o.jsx)(e.h2,{id:"properties",children:"Properties"}),"\n",(0,o.jsxs)(t,{children:[(0,o.jsxs)(l,{name:"cluster",type:"string",required:"true",value:"",readonly:!0,children:[(0,o.jsx)(e.p,{children:"Text"}),(0,o.jsx)(e.pre,{language:"hcl",code:"code\n",children:(0,o.jsx)(e.code,{className:"language-hcl",children:'<span><span style="color: var(--shiki-color-text)">code</span></span>\n<span></span>'})})]}),(0,o.jsx)(l,{name:"cluster",type:"string",required:"true",value:"",readonly:!0,children:(0,o.jsx)(e.p,{children:"Text"})})]}),"\n",(0,o.jsx)(a.default,{}),"\n",(0,o.jsx)(e.h2,{id:"examples",children:"Examples"}),"\n",(0,o.jsx)(e.h3,{children:"Install Helm Chart from a Helm Repository"}),"\n",(0,o.jsx)(e.pre,{language:"hcl",code:'resource "helm" "consul" {\n  cluster = resource.k8s_cluster.k3s.id\n\n  repository {\n    name = "hashicorp"\n    url  = "https://helm.releases.hashicorp.com"\n  }\n\n  chart   = "hashicorp/consul"\n  version = "v0.40.0"\n\n  values = "./helm/consul-values.yaml"\n\n  health_check {\n    timeout = "240s"\n    pods = [\n      "component=connect-injector",\n      "component=client",\n      "component=controller",\n      "component=server",\n    ]\n  }\n}\n',children:(0,o.jsx)(e.code,{className:"language-hcl",children:'<span><span style="color: var(--shiki-token-keyword)">resource</span><span style="color: var(--shiki-token-string-expression)"> &quot;helm&quot; &quot;consul&quot;</span><span style="color: var(--shiki-color-text)"> {</span></span>\n<span><span style="color: var(--shiki-color-text)">  cluster </span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-color-text)"> resource</span><span style="color: var(--shiki-token-constant)">.</span><span style="color: var(--shiki-color-text)">k8s_cluster</span><span style="color: var(--shiki-token-constant)">.</span><span style="color: var(--shiki-color-text)">k3s</span><span style="color: var(--shiki-token-constant)">.</span><span style="color: var(--shiki-color-text)">id</span></span>\n<span></span>\n<span><span style="color: var(--shiki-color-text)">  </span><span style="color: var(--shiki-token-keyword)">repository</span><span style="color: var(--shiki-color-text)"> {</span></span>\n<span><span style="color: var(--shiki-color-text)">    name </span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&quot;hashicorp&quot;</span></span>\n<span><span style="color: var(--shiki-color-text)">    url  </span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&quot;https://helm.releases.hashicorp.com&quot;</span></span>\n<span><span style="color: var(--shiki-color-text)">  }</span></span>\n<span></span>\n<span><span style="color: var(--shiki-color-text)">  chart   </span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&quot;hashicorp/consul&quot;</span></span>\n<span><span style="color: var(--shiki-color-text)">  version </span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&quot;v0.40.0&quot;</span></span>\n<span></span>\n<span><span style="color: var(--shiki-color-text)">  values </span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&quot;./helm/consul-values.yaml&quot;</span></span>\n<span></span>\n<span><span style="color: var(--shiki-color-text)">  </span><span style="color: var(--shiki-token-keyword)">health_check</span><span style="color: var(--shiki-color-text)"> {</span></span>\n<span><span style="color: var(--shiki-color-text)">    timeout </span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&quot;240s&quot;</span></span>\n<span><span style="color: var(--shiki-color-text)">    pods </span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-color-text)"> [</span></span>\n<span><span style="color: var(--shiki-color-text)">      </span><span style="color: var(--shiki-token-string-expression)">&quot;component=connect-injector&quot;</span><span style="color: var(--shiki-color-text)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">      </span><span style="color: var(--shiki-token-string-expression)">&quot;component=client&quot;</span><span style="color: var(--shiki-color-text)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">      </span><span style="color: var(--shiki-token-string-expression)">&quot;component=controller&quot;</span><span style="color: var(--shiki-color-text)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">      </span><span style="color: var(--shiki-token-string-expression)">&quot;component=server&quot;</span><span style="color: var(--shiki-color-text)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">    ]</span></span>\n<span><span style="color: var(--shiki-color-text)">  }</span></span>\n<span><span style="color: var(--shiki-color-text)">}</span></span>\n<span></span>'})}),"\n",(0,o.jsx)(e.h3,{children:"Install Helm Chart from a GitHub Repository"}),"\n",(0,o.jsx)(e.pre,{language:"hcl",code:'resource "helm" "vault" {\n  cluster = resource.k8s_cluster.k3s.id\n  chart = "github.com/hashicorp/vault-helm"\n\n  values_string = {\n    "server.dataStorage.size" = "128Mb"\n  }\n}\n',children:(0,o.jsx)(e.code,{className:"language-hcl",children:'<span><span style="color: var(--shiki-token-keyword)">resource</span><span style="color: var(--shiki-token-string-expression)"> &quot;helm&quot; &quot;vault&quot;</span><span style="color: var(--shiki-color-text)"> {</span></span>\n<span><span style="color: var(--shiki-color-text)">  cluster </span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-color-text)"> resource</span><span style="color: var(--shiki-token-constant)">.</span><span style="color: var(--shiki-color-text)">k8s_cluster</span><span style="color: var(--shiki-token-constant)">.</span><span style="color: var(--shiki-color-text)">k3s</span><span style="color: var(--shiki-token-constant)">.</span><span style="color: var(--shiki-color-text)">id</span></span>\n<span><span style="color: var(--shiki-color-text)">  chart </span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&quot;github.com/hashicorp/vault-helm&quot;</span></span>\n<span></span>\n<span><span style="color: var(--shiki-color-text)">  values_string </span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-color-text)"> {</span></span>\n<span><span style="color: var(--shiki-color-text)">    &quot;server.dataStorage.size&quot; = &quot;128Mb&quot;</span></span>\n<span><span style="color: var(--shiki-color-text)">  }</span></span>\n<span><span style="color: var(--shiki-color-text)">}</span></span>\n<span></span>'})}),"\n",(0,o.jsx)(e.h3,{children:"Install Helm Chart from a Local Folder"}),"\n",(0,o.jsx)(e.pre,{language:"hcl",code:'resource "helm" "vault" {\n  cluster = resource.k8s_cluster.k3s.id\n  chart   = "./files/helm/vault"\n\n  values_string = {\n    "server.dataStorage.size" = "128Mb"\n  }\n}\n',children:(0,o.jsx)(e.code,{className:"language-hcl",children:'<span><span style="color: var(--shiki-token-keyword)">resource</span><span style="color: var(--shiki-token-string-expression)"> &quot;helm&quot; &quot;vault&quot;</span><span style="color: var(--shiki-color-text)"> {</span></span>\n<span><span style="color: var(--shiki-color-text)">  cluster </span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-color-text)"> resource</span><span style="color: var(--shiki-token-constant)">.</span><span style="color: var(--shiki-color-text)">k8s_cluster</span><span style="color: var(--shiki-token-constant)">.</span><span style="color: var(--shiki-color-text)">k3s</span><span style="color: var(--shiki-token-constant)">.</span><span style="color: var(--shiki-color-text)">id</span></span>\n<span><span style="color: var(--shiki-color-text)">  chart   </span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&quot;./files/helm/vault&quot;</span></span>\n<span></span>\n<span><span style="color: var(--shiki-color-text)">  values_string </span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-color-text)"> {</span></span>\n<span><span style="color: var(--shiki-color-text)">    &quot;server.dataStorage.size&quot; = &quot;128Mb&quot;</span></span>\n<span><span style="color: var(--shiki-color-text)">  }</span></span>\n<span><span style="color: var(--shiki-color-text)">}</span></span>\n<span></span>'})})]})}var l=!0;function i(s,e){throw Error("Expected "+(e?"component":"object")+" `"+s+"` to be defined: you likely forgot to import, pass, or provide it.")}e.default=function(){let s=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:e}=Object.assign({},(0,r.ah)(),s.components);return e?(0,o.jsx)(e,Object.assign({},s,{children:(0,o.jsx)(t,s)})):t(s)}},8691:function(s,e,n){"use strict";n.r(e),n.d(e,{__N_SSG:function(){return t}});var o=n(5893),r=n(1151);function a(s){let e=Object.assign({h2:"h2",p:"p",code:"code",pre:"pre",em:"em"},(0,r.ah)(),s.components),{Properties:n,Property:a}=e;return n||l("Properties",!0),a||l("Property",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(e.h2,{id:"meta_properties",children:"Meta Properties"}),"\n",(0,o.jsx)(e.p,{children:"All jumppad resources have the following read only properties."}),"\n",(0,o.jsxs)(n,{children:[(0,o.jsxs)(a,{name:"depends_on",type:"[]string",required:"false",value:"",children:[(0,o.jsxs)(e.p,{children:["An array of resources that this resource depends on. Jumppad will ensure that\nall resources referenced in ",(0,o.jsx)(e.code,{children:"depends_on"})," are created before the resource."]}),(0,o.jsx)(e.p,{children:'For example, the resource "mine" would be created after the resource "myother".'}),(0,o.jsx)(e.pre,{language:"hcl",code:'  resource "container" "mine" {\n    depends_on = ["resource.container.myother"]\n  }\n  \n  resource "container" "myother" {\n\n  }\n',children:(0,o.jsx)(e.code,{className:"language-hcl",children:'<span><span style="color: var(--shiki-color-text)">  </span><span style="color: var(--shiki-token-keyword)">resource</span><span style="color: var(--shiki-token-string-expression)"> &quot;container&quot; &quot;mine&quot;</span><span style="color: var(--shiki-color-text)"> {</span></span>\n<span><span style="color: var(--shiki-color-text)">    depends_on </span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-color-text)"> [</span><span style="color: var(--shiki-token-string-expression)">&quot;resource.container.myother&quot;</span><span style="color: var(--shiki-color-text)">]</span></span>\n<span><span style="color: var(--shiki-color-text)">  }</span></span>\n<span><span style="color: var(--shiki-color-text)">  </span></span>\n<span><span style="color: var(--shiki-color-text)">  </span><span style="color: var(--shiki-token-keyword)">resource</span><span style="color: var(--shiki-token-string-expression)"> &quot;container&quot; &quot;myother&quot;</span><span style="color: var(--shiki-color-text)"> {</span></span>\n<span></span>\n<span><span style="color: var(--shiki-color-text)">  }</span></span>\n<span></span>'})}),(0,o.jsxs)(e.p,{children:["Where possible Jumppad attempts to automatically create a dependency graph\nby using interpolated properties. For example, the previous scenario could\nhave been written without using ",(0,o.jsx)(e.code,{children:"depends_on"})," by using interpolated properties."]}),(0,o.jsx)(e.pre,{language:"hcl",code:'  resource "container" "mine" {\n    image {\n      name = resource.container.myother.image.name\n    }\n  }\n  \n  resource "container" "myother" {\n    image {\n      name = "myimage:version"\n    }\n  }\n',children:(0,o.jsx)(e.code,{className:"language-hcl",children:'<span><span style="color: var(--shiki-color-text)">  </span><span style="color: var(--shiki-token-keyword)">resource</span><span style="color: var(--shiki-token-string-expression)"> &quot;container&quot; &quot;mine&quot;</span><span style="color: var(--shiki-color-text)"> {</span></span>\n<span><span style="color: var(--shiki-color-text)">    </span><span style="color: var(--shiki-token-keyword)">image</span><span style="color: var(--shiki-color-text)"> {</span></span>\n<span><span style="color: var(--shiki-color-text)">      name </span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-color-text)"> resource</span><span style="color: var(--shiki-token-constant)">.</span><span style="color: var(--shiki-color-text)">container</span><span style="color: var(--shiki-token-constant)">.</span><span style="color: var(--shiki-color-text)">myother</span><span style="color: var(--shiki-token-constant)">.</span><span style="color: var(--shiki-color-text)">image</span><span style="color: var(--shiki-token-constant)">.</span><span style="color: var(--shiki-color-text)">name</span></span>\n<span><span style="color: var(--shiki-color-text)">    }</span></span>\n<span><span style="color: var(--shiki-color-text)">  }</span></span>\n<span><span style="color: var(--shiki-color-text)">  </span></span>\n<span><span style="color: var(--shiki-color-text)">  </span><span style="color: var(--shiki-token-keyword)">resource</span><span style="color: var(--shiki-token-string-expression)"> &quot;container&quot; &quot;myother&quot;</span><span style="color: var(--shiki-color-text)"> {</span></span>\n<span><span style="color: var(--shiki-color-text)">    </span><span style="color: var(--shiki-token-keyword)">image</span><span style="color: var(--shiki-color-text)"> {</span></span>\n<span><span style="color: var(--shiki-color-text)">      name </span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&quot;myimage:version&quot;</span></span>\n<span><span style="color: var(--shiki-color-text)">    }</span></span>\n<span><span style="color: var(--shiki-color-text)">  }</span></span>\n<span></span>'})})]}),(0,o.jsx)(a,{name:"disabled",type:"bool",required:"false",value:"false",children:(0,o.jsx)(e.p,{children:"If set to false the resource will not be created."})}),(0,o.jsxs)(a,{name:"id",type:"string",required:"false",value:"",readonly:!0,children:[(0,o.jsxs)(e.p,{children:["The unique ",(0,o.jsx)(e.code,{children:"id"})," for the resource, this value can be used in interpolation\nsyntax to reference properties for a resource."]}),(0,o.jsx)(e.pre,{code:"  resource.container.nic\n  ouput.myoutput\n  module.mine.submodule.resource.container.nic\n  module.mine.submodule.ouput.myoutput\n\n",children:(0,o.jsx)(e.code,{children:"  resource.container.nic\n  ouput.myoutput\n  module.mine.submodule.resource.container.nic\n  module.mine.submodule.ouput.myoutput\n\n"})})]}),(0,o.jsxs)(a,{name:"name",type:"string",required:"false",value:"",readonly:!0,children:[(0,o.jsxs)(e.p,{children:["The name of the resource, ",(0,o.jsx)(e.em,{children:"note:"})," this value is not unique and does not\ntake into account if the resource is embedded in a module."]}),(0,o.jsxs)(e.p,{children:["This value is the same as the ",(0,o.jsx)(e.code,{children:"name"}),' field of the resource. i.e "mine".']}),(0,o.jsx)(e.pre,{language:"hcl",code:'  resource "container" "mine" {}\n',children:(0,o.jsx)(e.code,{className:"language-hcl",children:'<span><span style="color: var(--shiki-color-text)">  </span><span style="color: var(--shiki-token-keyword)">resource</span><span style="color: var(--shiki-token-string-expression)"> &quot;container&quot; &quot;mine&quot;</span><span style="color: var(--shiki-color-text)"> {}</span></span>\n<span></span>'})})]}),(0,o.jsxs)(a,{name:"type",type:"string",required:"true",value:"",readonly:!0,children:[(0,o.jsx)(e.p,{children:"The string type of the resource."}),(0,o.jsxs)(e.p,{children:["This value is the same as the ",(0,o.jsx)(e.code,{children:"type"}),' field of the resource. i.e. "container"']}),(0,o.jsx)(e.pre,{language:"hcl",code:'  resource "container" "mine" {}\n',children:(0,o.jsx)(e.code,{className:"language-hcl",children:'<span><span style="color: var(--shiki-color-text)">  </span><span style="color: var(--shiki-token-keyword)">resource</span><span style="color: var(--shiki-token-string-expression)"> &quot;container&quot; &quot;mine&quot;</span><span style="color: var(--shiki-color-text)"> {}</span></span>\n<span></span>'})})]}),(0,o.jsxs)(a,{name:"module",type:"string",required:"false",value:"",readonly:!0,children:[(0,o.jsx)(e.p,{children:"The full module path for the resource. Should the resource be included\nin a module, this value will be the name of the module and any parent\nmodules that the resource is embedded in."}),(0,o.jsxs)(e.p,{children:["For example, given the following structure, the ",(0,o.jsx)(e.code,{children:"module"}),' value would be\n"mymodule.mysubmodule".']}),(0,o.jsx)(e.pre,{language:"hcl",code:'  resource "container" "mine" {}\n\n  ## included in\n\n  module "mysubmodule" {}\n  \n  ## included in\n\n  module "mymodule" {}\n',children:(0,o.jsx)(e.code,{className:"language-hcl",children:'<span><span style="color: var(--shiki-color-text)">  </span><span style="color: var(--shiki-token-keyword)">resource</span><span style="color: var(--shiki-token-string-expression)"> &quot;container&quot; &quot;mine&quot;</span><span style="color: var(--shiki-color-text)"> {}</span></span>\n<span></span>\n<span><span style="color: var(--shiki-color-text)">  </span><span style="color: var(--shiki-token-comment)">## included in</span></span>\n<span></span>\n<span><span style="color: var(--shiki-color-text)">  </span><span style="color: var(--shiki-token-keyword)">module</span><span style="color: var(--shiki-token-string-expression)"> &quot;mysubmodule&quot;</span><span style="color: var(--shiki-color-text)"> {}</span></span>\n<span><span style="color: var(--shiki-color-text)">  </span></span>\n<span><span style="color: var(--shiki-color-text)">  </span><span style="color: var(--shiki-token-comment)">## included in</span></span>\n<span></span>\n<span><span style="color: var(--shiki-color-text)">  </span><span style="color: var(--shiki-token-keyword)">module</span><span style="color: var(--shiki-token-string-expression)"> &quot;mymodule&quot;</span><span style="color: var(--shiki-color-text)"> {}</span></span>\n<span></span>'})})]}),(0,o.jsx)(a,{name:"file",type:"string",required:"false",value:"",readonly:!0,children:(0,o.jsx)(e.p,{children:"The absolute path of the file that contains this resource"})})]})]})}var t=!0;function l(s,e){throw Error("Expected "+(e?"component":"object")+" `"+s+"` to be defined: you likely forgot to import, pass, or provide it.")}e.default=function(){let s=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:e}=Object.assign({},(0,r.ah)(),s.components);return e?(0,o.jsx)(e,Object.assign({},s,{children:(0,o.jsx)(a,s)})):a(s)}}},function(s){s.O(0,[9774,2888,179],function(){return s(s.s=9063)}),_N_E=s.O()}]);