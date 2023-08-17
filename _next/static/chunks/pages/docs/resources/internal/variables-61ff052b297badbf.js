(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[211],{4537:function(s,n,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/resources/internal/variables",function(){return e(6995)}])},6995:function(s,n,e){"use strict";e.r(n),e.d(n,{__N_SSG:function(){return i}});var a=e(5893),o=e(1151);function r(s){let n=Object.assign({h1:"h1",code:"code",p:"p",ul:"ul",li:"li",h2:"h2",h3:"h3",pre:"pre"},(0,o.ah)(),s.components),{Intro:e,Properties:r,Property:i}=n;return e||l("Intro",!0),r||l("Properties",!0),i||l("Property",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.h1,{children:["Variable ",(0,a.jsx)(n.code,{children:"variable"})]}),"\n",(0,a.jsxs)(e,{children:[(0,a.jsxs)(n.p,{children:["The ",(0,a.jsx)(n.code,{children:"variable"})," resource allows you to create modular and reusable configuration.\nVariables are defined using variable resouce, they allow the author of a blueprint\nto provide default values which can be overriden my the following methods:"]}),(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Variable definition files"}),"\n",(0,a.jsx)(n.li,{children:"Flags provided to Jumppad up"}),"\n",(0,a.jsx)(n.li,{children:"Environment variables"}),"\n"]}),(0,a.jsx)(n.p,{children:"Any variable defined is local to the current module."})]}),"\n",(0,a.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n",(0,a.jsx)(r,{children:(0,a.jsxs)(i,{name:"value",type:"string",required:"true",value:"",children:[(0,a.jsx)(n.p,{children:"The value of the variable."}),(0,a.jsxs)(n.p,{children:[(0,a.jsx)("b",{children:"Note:"})," Variables are processed before resources and can not contain any interpolated\nvalues."]})]})}),"\n",(0,a.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,a.jsx)(n.h3,{children:"Simple Variables"}),"\n",(0,a.jsxs)(n.p,{children:["The following eample defines two variables version which has a value 1.6.1,\nand subnet which has a value of 10.6.0.0/16. To use these variables inside\nthe configuration you use the ",(0,a.jsx)(n.code,{children:"variable.[variable_name]"})," syntax. When using a variable\non its own it is not required to encapsulate this in a string, as can be seen\nin the subnet example subnet = var.subnet, however; should you need to concatonate\nthis variable with another then you need to encapsulate the ",(0,a.jsx)(n.code,{children:"variable.[variable_name]"}),"\ninside the parentheses ",(0,a.jsx)(n.code,{children:"${}"}),", this is seen in the container image stanza,\n",(0,a.jsx)(n.code,{children:'name = "consul:${variable.version}"'}),"."]}),"\n",(0,a.jsx)(n.pre,{language:"hcl",code:'variable "version" {\n  default = "1.6.1"\n}\n\nvariable "subnet`" {\n  default = "10.6.0.0/16"\n}\n\nresource "network" "onprem" {\n  subnet = variable.subnet\n}\n\nresource "container" "consul" {\n  image   {\n    name = "consul:${variable.version}"\n  }\n\n  command = ["consul", "agent", "-dev"]\n\n  network   {\n    id = resource.network.onprem.id\n    ip_address = "10.6.0.200"\n  }\n}\n',children:(0,a.jsx)(n.code,{className:"language-hcl",children:'<span><span style="color: var(--shiki-token-keyword)">variable</span><span style="color: var(--shiki-token-string-expression)"> &quot;version&quot;</span><span style="color: var(--shiki-color-text)"> {</span></span>\n<span><span style="color: var(--shiki-color-text)">  default </span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&quot;1.6.1&quot;</span></span>\n<span><span style="color: var(--shiki-color-text)">}</span></span>\n<span></span>\n<span><span style="color: var(--shiki-token-keyword)">variable</span><span style="color: var(--shiki-token-string-expression)"> &quot;subnet`&quot;</span><span style="color: var(--shiki-color-text)"> {</span></span>\n<span><span style="color: var(--shiki-color-text)">  default </span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&quot;10.6.0.0/16&quot;</span></span>\n<span><span style="color: var(--shiki-color-text)">}</span></span>\n<span></span>\n<span><span style="color: var(--shiki-token-keyword)">resource</span><span style="color: var(--shiki-token-string-expression)"> &quot;network&quot; &quot;onprem&quot;</span><span style="color: var(--shiki-color-text)"> {</span></span>\n<span><span style="color: var(--shiki-color-text)">  subnet </span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-color-text)"> variable</span><span style="color: var(--shiki-token-constant)">.</span><span style="color: var(--shiki-color-text)">subnet</span></span>\n<span><span style="color: var(--shiki-color-text)">}</span></span>\n<span></span>\n<span><span style="color: var(--shiki-token-keyword)">resource</span><span style="color: var(--shiki-token-string-expression)"> &quot;container&quot; &quot;consul&quot;</span><span style="color: var(--shiki-color-text)"> {</span></span>\n<span><span style="color: var(--shiki-color-text)">  </span><span style="color: var(--shiki-token-keyword)">image</span><span style="color: var(--shiki-color-text)">   {</span></span>\n<span><span style="color: var(--shiki-color-text)">    name </span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&quot;consul:</span><span style="color: var(--shiki-token-keyword)">${variable</span><span style="color: var(--shiki-token-function)">.version</span><span style="color: var(--shiki-token-keyword)">}</span><span style="color: var(--shiki-token-string-expression)">&quot;</span></span>\n<span><span style="color: var(--shiki-color-text)">  }</span></span>\n<span></span>\n<span><span style="color: var(--shiki-color-text)">  command </span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-color-text)"> [</span><span style="color: var(--shiki-token-string-expression)">&quot;consul&quot;</span><span style="color: var(--shiki-color-text)">, </span><span style="color: var(--shiki-token-string-expression)">&quot;agent&quot;</span><span style="color: var(--shiki-color-text)">, </span><span style="color: var(--shiki-token-string-expression)">&quot;-dev&quot;</span><span style="color: var(--shiki-color-text)">]</span></span>\n<span></span>\n<span><span style="color: var(--shiki-color-text)">  </span><span style="color: var(--shiki-token-keyword)">network</span><span style="color: var(--shiki-color-text)">   {</span></span>\n<span><span style="color: var(--shiki-color-text)">    id </span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-color-text)"> resource</span><span style="color: var(--shiki-token-constant)">.</span><span style="color: var(--shiki-color-text)">network</span><span style="color: var(--shiki-token-constant)">.</span><span style="color: var(--shiki-color-text)">onprem</span><span style="color: var(--shiki-token-constant)">.</span><span style="color: var(--shiki-color-text)">id</span></span>\n<span><span style="color: var(--shiki-color-text)">    ip_address </span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&quot;10.6.0.200&quot;</span></span>\n<span><span style="color: var(--shiki-color-text)">  }</span></span>\n<span><span style="color: var(--shiki-color-text)">}</span></span>\n<span></span>'})}),"\n",(0,a.jsx)(n.h3,{children:"Complex Example"}),"\n",(0,a.jsx)(n.p,{children:"In addition to specifying simple string variables, it is also possible to define\nvariables which are maps, or arrays. The following example shows the use of both\nof these types. In addition to the example shown below, a map can also contain\nan array and an array a map allowing you to mix complex types together."}),"\n",(0,a.jsx)(n.pre,{language:"hcl",code:'variable "subnet" {\n  default = {\n    main = "10.6.0.0/16"\n    consul = "10.7.0.0/16"\n  }\n}\n\nvariable "command" {\n  default = [\n    "consul",\n    "agent",\n    "-dev"\n  ]\n}\n\nresource "network" "onprem" {\n  subnet = variable.subnet.main\n}\n\nresource "container" "consul" {\n  command = variable.command\n}\n',children:(0,a.jsx)(n.code,{className:"language-hcl",children:'<span><span style="color: var(--shiki-token-keyword)">variable</span><span style="color: var(--shiki-token-string-expression)"> &quot;subnet&quot;</span><span style="color: var(--shiki-color-text)"> {</span></span>\n<span><span style="color: var(--shiki-color-text)">  default </span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-color-text)"> {</span></span>\n<span><span style="color: var(--shiki-color-text)">    main = &quot;10.6.0.0/16&quot;</span></span>\n<span><span style="color: var(--shiki-color-text)">    consul = &quot;10.7.0.0/16&quot;</span></span>\n<span><span style="color: var(--shiki-color-text)">  }</span></span>\n<span><span style="color: var(--shiki-color-text)">}</span></span>\n<span></span>\n<span><span style="color: var(--shiki-token-keyword)">variable</span><span style="color: var(--shiki-token-string-expression)"> &quot;command&quot;</span><span style="color: var(--shiki-color-text)"> {</span></span>\n<span><span style="color: var(--shiki-color-text)">  default </span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-color-text)"> [</span></span>\n<span><span style="color: var(--shiki-color-text)">    </span><span style="color: var(--shiki-token-string-expression)">&quot;consul&quot;</span><span style="color: var(--shiki-color-text)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">    </span><span style="color: var(--shiki-token-string-expression)">&quot;agent&quot;</span><span style="color: var(--shiki-color-text)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">    </span><span style="color: var(--shiki-token-string-expression)">&quot;-dev&quot;</span></span>\n<span><span style="color: var(--shiki-color-text)">  ]</span></span>\n<span><span style="color: var(--shiki-color-text)">}</span></span>\n<span></span>\n<span><span style="color: var(--shiki-token-keyword)">resource</span><span style="color: var(--shiki-token-string-expression)"> &quot;network&quot; &quot;onprem&quot;</span><span style="color: var(--shiki-color-text)"> {</span></span>\n<span><span style="color: var(--shiki-color-text)">  subnet </span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-color-text)"> variable</span><span style="color: var(--shiki-token-constant)">.</span><span style="color: var(--shiki-color-text)">subnet</span><span style="color: var(--shiki-token-constant)">.</span><span style="color: var(--shiki-color-text)">main</span></span>\n<span><span style="color: var(--shiki-color-text)">}</span></span>\n<span></span>\n<span><span style="color: var(--shiki-token-keyword)">resource</span><span style="color: var(--shiki-token-string-expression)"> &quot;container&quot; &quot;consul&quot;</span><span style="color: var(--shiki-color-text)"> {</span></span>\n<span><span style="color: var(--shiki-color-text)">  command </span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-color-text)"> variable</span><span style="color: var(--shiki-token-constant)">.</span><span style="color: var(--shiki-color-text)">command</span></span>\n<span><span style="color: var(--shiki-color-text)">}</span></span>\n<span></span>'})}),"\n",(0,a.jsx)(n.h2,{id:"overriding_variables",children:"Overriding Variables"}),"\n",(0,a.jsxs)(n.p,{children:["The ",(0,a.jsx)(n.code,{children:"variable"})," resource allows the specification of a default value for a variable,\noverriding these variables can be performed using the three following methods:"]}),"\n",(0,a.jsx)(n.h3,{children:"Variable Files"}),"\n",(0,a.jsx)(n.p,{children:"When reading a configuration folder Jumppad will auotmatically search for and\nparse files with the extension .vars. Variable files allow you to set the value\nfor complex and simple variables and are specified as seen in the following example:"}),"\n",(0,a.jsx)(n.pre,{language:"hcl",code:'version = "1.8.1"\n\nsubnet = {\n  main = "192.1.0.0/16"\n  consul = "192.2.0.0/16"\n}\n',children:(0,a.jsx)(n.code,{className:"language-hcl",children:'<span><span style="color: var(--shiki-color-text)">version </span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&quot;1.8.1&quot;</span></span>\n<span></span>\n<span><span style="color: var(--shiki-color-text)">subnet </span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-color-text)"> {</span></span>\n<span><span style="color: var(--shiki-color-text)">  main = &quot;192.1.0.0/16&quot;</span></span>\n<span><span style="color: var(--shiki-color-text)">  consul = &quot;192.2.0.0/16&quot;</span></span>\n<span><span style="color: var(--shiki-color-text)">}</span></span>\n<span></span>'})}),"\n",(0,a.jsxs)(n.p,{children:["In addition to variable files being automatically loaded by Jumppad from the\nmodule folder you can specify external files using the command line flag ",(0,a.jsx)(n.code,{children:"--vars-file"}),".\nThere is no naming convention for variable files specified in this way."]}),"\n",(0,a.jsx)(n.pre,{language:"shell",code:'jumppad up --vars-file="./myvariables.defaults" ./module \n',children:(0,a.jsx)(n.code,{className:"language-shell",children:'<span><span style="color: var(--shiki-color-text)">jumppad up --vars-file=</span><span style="color: var(--shiki-token-string-expression)">&quot;./myvariables.defaults&quot;</span><span style="color: var(--shiki-color-text)"> ./module </span></span>\n<span></span>'})}),"\n",(0,a.jsx)(n.h3,{children:"Command Line Arguments"}),"\n",(0,a.jsx)(n.p,{children:"It is possible to override variables using command line arguments, the run and\ntest commands have the flag --var which has a value variable=value pair that can\nbe used to set a varaible. The --var flag can be specified multiple times."}),"\n",(0,a.jsx)(n.pre,{language:"shell",code:'jumppad up --var="version=1.9.1" --var="another=value" ./module \n',children:(0,a.jsx)(n.code,{className:"language-shell",children:'<span><span style="color: var(--shiki-color-text)">jumppad up --var=</span><span style="color: var(--shiki-token-string-expression)">&quot;version=1.9.1&quot;</span><span style="color: var(--shiki-color-text)"> --var=</span><span style="color: var(--shiki-token-string-expression)">&quot;another=value&quot;</span><span style="color: var(--shiki-color-text)"> ./module </span></span>\n<span></span>'})}),"\n",(0,a.jsx)(n.h3,{children:"Environment Variables"}),"\n",(0,a.jsxs)(n.p,{children:["Lastly you can specify variables using environment variables. To define a variable\nusing an environment variable you prefix the name of the variable with ",(0,a.jsx)(n.code,{children:"HCL_VAR_"}),",\nfor example, the variable version when set as an environment variable would\nbe specified as ",(0,a.jsx)(n.code,{children:"HCL_VAR_version"}),"."]}),"\n",(0,a.jsx)(n.pre,{language:"shell",code:"export SY_VAR_version=1.8.2\n",children:(0,a.jsx)(n.code,{className:"language-shell",children:'<span><span style="color: var(--shiki-token-keyword)">export</span><span style="color: var(--shiki-color-text)"> SY_VAR_version=1.8.2</span></span>\n<span></span>'})}),"\n",(0,a.jsx)(n.h3,{children:"Variable Load order"}),"\n",(0,a.jsx)(n.p,{children:"When using variables there is a defined order of precidence. The following list shows the priority order for setting varaibles."}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"variable stanza block"}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"[name].vars"})," files found in the config folder"]}),"\n",(0,a.jsxs)(n.li,{children:["environment variables ",(0,a.jsx)(n.code,{children:"HCL_VAR_[name]"})]}),"\n",(0,a.jsxs)(n.li,{children:["command line argumens specified with the ",(0,a.jsx)(n.code,{children:"--var"})," flag"]}),"\n",(0,a.jsxs)(n.li,{children:["variable files specified using the ",(0,a.jsx)(n.code,{children:"--var-file"})," command line flag"]}),"\n"]})]})}var i=!0;function l(s,n){throw Error("Expected "+(n?"component":"object")+" `"+s+"` to be defined: you likely forgot to import, pass, or provide it.")}n.default=function(){let s=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,o.ah)(),s.components);return n?(0,a.jsx)(n,Object.assign({},s,{children:(0,a.jsx)(r,s)})):r(s)}}},function(s){s.O(0,[9774,2888,179],function(){return s(s.s=4537)}),_N_E=s.O()}]);