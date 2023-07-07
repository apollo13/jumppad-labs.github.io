(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7697],{4273:function(n,e,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/cli/dev",function(){return a(6401)}])},6401:function(n,e,a){"use strict";a.r(e),a.d(e,{__N_SSG:function(){return t}});var s=a(5893),o=a(1151);function r(n){let e=Object.assign({h1:"h1",p:"p",code:"code",h2:"h2",pre:"pre"},(0,o.ah)(),n.components),{Intro:a,Properties:r,Property:t}=e;return a||p("Intro",!0),r||p("Properties",!0),t||p("Property",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.h1,{children:"Dev"}),"\n",(0,s.jsx)(a,{children:(0,s.jsxs)(e.p,{children:["Watches current configuration and auotmatically runs ",(0,s.jsx)(e.code,{children:"jumppad up"})]})}),"\n",(0,s.jsx)(e.h2,{id:"usage",children:"Usage"}),"\n",(0,s.jsx)(e.pre,{language:"shell",code:"jumppad dev ./config_folder\n",children:(0,s.jsx)(e.code,{className:"language-shell",children:'<span><span style="color: var(--shiki-color-text)">jumppad dev ./config_folder</span></span>\n<span></span>'})}),"\n",(0,s.jsx)(e.h2,{id:"flags",children:"Flags"}),"\n",(0,s.jsxs)(r,{children:[(0,s.jsx)(t,{name:"interval",type:"duration",value:"5s",children:(0,s.jsx)(e.p,{children:'Interval to check for changes. E.g. --interval=5s (default "5s")'})}),(0,s.jsx)(t,{name:"var",type:"string",required:"false",value:"",children:(0,s.jsx)(e.p,{children:"Allows setting variables from the command line, variables are specified as a key and value, e.g --var key=value. Can be specified multiple times"})}),(0,s.jsx)(t,{name:"vars-file",type:"string",required:"false",value:"",children:(0,s.jsx)(e.p,{children:"Load variables from a location other than *.vars files in the blueprint folder. E.g --vars-file=./file.vars"})})]}),"\n",(0,s.jsx)(e.pre,{language:"shell",code:'➜ jp down\n2023-07-07T07:07:02.791+0100 [INFO]  Destroying resources\n2023-07-07T07:07:02.791+0100 [DEBUG] State file does not exist\n2023-07-07T07:07:02.791+0100 [ERROR] Unable to destroy stack: error="remove /home/nicj/.jumppad/state/state.json: no such file or directory"\n\njumppad on  f-library-resource [$] via \uD83D\uDC39 v1.19.2 on \uD83D\uDC33 v20.10.23 using ☁️  default/kubecon-sysdig \n➜ export LOG_LEVEL=info \n\njumppad on  f-library-resource [$] via \uD83D\uDC39 v1.19.2 on \uD83D\uDC33 v20.10.23 using ☁️  default/kubecon-sysdig \n➜ jp dev ./examples/container\nChecking for changes...\n2023-07-07T07:07:19.001+0100 [INFO]  Parsing configuration: path=/home/nicj/go/src/github.com/jumppad-labs/jumppad/examples/container\nChanges detected, resources to add 10, resources changed 0, resources to delete 0, running up\n2023-07-07T07:07:19.007+0100 [INFO]  Creating resources from configuration: path=/home/nicj/go/src/github.com/jumppad-labs/jumppad/examples/container\n2023-07-07T07:07:19.007+0100 [INFO]  Parsing configuration: path=/home/nicj/go/src/github.com/jumppad-labs/jumppad/examples/container\n2023-07-07T07:07:19.012+0100 [INFO]  Creating ImageCache: ref=default\n2023-07-07T07:07:22.905+0100 [INFO]  Creating Network: ref=resource.network.onprem\n2023-07-07T07:07:23.019+0100 [INFO]  Creating ImageCache: ref=default\n2023-07-07T07:07:23.712+0100 [INFO]  Generating template: ref=resource.template.consul_config output=/home/nicj/.jumppad/data/config/consul.hcl\n2023-07-07T07:07:23.713+0100 [INFO]  Creating Blueprint: ref=container\n2023-07-07T07:07:23.713+0100 [INFO]  Creating Container: ref=resource.container.consul\n2023-07-07T07:07:26.671+0100 [INFO]  Creating Container: ref=resource.sidecar.envoy\n2023-07-07T07:07:26.971+0100 [INFO]  Creating Output: ref=consul_http_addr\n\nChecking for changes...\n2023-07-07T07:07:31.977+0100 [INFO]  Parsing configuration: path=/home/nicj/go/src/github.com/jumppad-labs/jumppad/examples/container\n\nChecking for changes...\n2023-07-07T07:07:36.985+0100 [INFO]  Parsing configuration: path=/home/nicj/go/src/github.com/jumppad-labs/jumppad/examples/container\n\nChecking for changes...\n2023-07-07T07:07:41.994+0100 [INFO]  Parsing configuration: path=/home/nicj/go/src/github.com/jumppad-labs/jumppad/examples/container\n\nChecking for changes...\n2023-07-07T07:07:47.005+0100 [INFO]  Parsing configuration: path=/home/nicj/go/src/github.com/jumppad-labs/jumppad/examples/container\nChanges detected, resources to add 1, resources changed 0, resources to delete 0, running up\n2023-07-07T07:07:47.013+0100 [INFO]  Creating resources from configuration: path=/home/nicj/go/src/github.com/jumppad-labs/jumppad/examples/container\n2023-07-07T07:07:47.014+0100 [INFO]  Parsing configuration: path=/home/nicj/go/src/github.com/jumppad-labs/jumppad/examples/container\n2023-07-07T07:07:47.026+0100 [INFO]  Refresh Network: ref=onprem\n2023-07-07T07:07:47.026+0100 [INFO]  Creating ImageCache: ref=default\n2023-07-07T07:07:47.039+0100 [INFO]  Refresh Template: ref=resource.template.consul_config\n2023-07-07T07:07:47.039+0100 [INFO]  Generating template: ref=resource.template.consul_config output=/home/nicj/.jumppad/data/config/consul.hcl\n2023-07-07T07:07:47.041+0100 [INFO]  Refresh Container: ref=consul\n2023-07-07T07:07:47.042+0100 [INFO]  Refresh Container: ref=envoy\n2023-07-07T07:07:47.044+0100 [INFO]  Creating Container: ref=resource.sidecar.envoy2\n',children:(0,s.jsx)(e.code,{className:"language-shell",children:'<span><span style="color: var(--shiki-color-text)">➜ jp down</span></span>\n<span><span style="color: var(--shiki-color-text)">2023-07-07T07:07:02.791+0100 [INFO]  Destroying resources</span></span>\n<span><span style="color: var(--shiki-color-text)">2023-07-07T07:07:02.791+0100 [DEBUG] State file does not exist</span></span>\n<span><span style="color: var(--shiki-color-text)">2023-07-07T07:07:02.791+0100 [ERROR] Unable to destroy stack: error=</span><span style="color: var(--shiki-token-string-expression)">&quot;remove /home/nicj/.jumppad/state/state.json: no such file or directory&quot;</span></span>\n<span></span>\n<span><span style="color: var(--shiki-color-text)">jumppad on  f-library-resource [$] via \uD83D\uDC39 v1.19.2 on \uD83D\uDC33 v20.10.23 using ☁️  default/kubecon-sysdig </span></span>\n<span><span style="color: var(--shiki-color-text)">➜ </span><span style="color: var(--shiki-token-keyword)">export</span><span style="color: var(--shiki-color-text)"> LOG_LEVEL=info </span></span>\n<span></span>\n<span><span style="color: var(--shiki-color-text)">jumppad on  f-library-resource [$] via \uD83D\uDC39 v1.19.2 on \uD83D\uDC33 v20.10.23 using ☁️  default/kubecon-sysdig </span></span>\n<span><span style="color: var(--shiki-color-text)">➜ jp dev ./examples/container</span></span>\n<span><span style="color: var(--shiki-color-text)">Checking </span><span style="color: var(--shiki-token-keyword)">for</span><span style="color: var(--shiki-color-text)"> changes...</span></span>\n<span><span style="color: var(--shiki-color-text)">2023-07-07T07:07:19.001+0100 [INFO]  Parsing configuration: path=/home/nicj/go/src/github.com/jumppad-labs/jumppad/examples/container</span></span>\n<span><span style="color: var(--shiki-color-text)">Changes detected, resources to add 10, resources changed 0, resources to delete 0, running up</span></span>\n<span><span style="color: var(--shiki-color-text)">2023-07-07T07:07:19.007+0100 [INFO]  Creating resources from configuration: path=/home/nicj/go/src/github.com/jumppad-labs/jumppad/examples/container</span></span>\n<span><span style="color: var(--shiki-color-text)">2023-07-07T07:07:19.007+0100 [INFO]  Parsing configuration: path=/home/nicj/go/src/github.com/jumppad-labs/jumppad/examples/container</span></span>\n<span><span style="color: var(--shiki-color-text)">2023-07-07T07:07:19.012+0100 [INFO]  Creating ImageCache: ref=default</span></span>\n<span><span style="color: var(--shiki-color-text)">2023-07-07T07:07:22.905+0100 [INFO]  Creating Network: ref=resource.network.onprem</span></span>\n<span><span style="color: var(--shiki-color-text)">2023-07-07T07:07:23.019+0100 [INFO]  Creating ImageCache: ref=default</span></span>\n<span><span style="color: var(--shiki-color-text)">2023-07-07T07:07:23.712+0100 [INFO]  Generating template: ref=resource.template.consul_config output=/home/nicj/.jumppad/data/config/consul.hcl</span></span>\n<span><span style="color: var(--shiki-color-text)">2023-07-07T07:07:23.713+0100 [INFO]  Creating Blueprint: ref=container</span></span>\n<span><span style="color: var(--shiki-color-text)">2023-07-07T07:07:23.713+0100 [INFO]  Creating Container: ref=resource.container.consul</span></span>\n<span><span style="color: var(--shiki-color-text)">2023-07-07T07:07:26.671+0100 [INFO]  Creating Container: ref=resource.sidecar.envoy</span></span>\n<span><span style="color: var(--shiki-color-text)">2023-07-07T07:07:26.971+0100 [INFO]  Creating Output: ref=consul_http_addr</span></span>\n<span></span>\n<span><span style="color: var(--shiki-color-text)">Checking </span><span style="color: var(--shiki-token-keyword)">for</span><span style="color: var(--shiki-color-text)"> changes...</span></span>\n<span><span style="color: var(--shiki-color-text)">2023-07-07T07:07:31.977+0100 [INFO]  Parsing configuration: path=/home/nicj/go/src/github.com/jumppad-labs/jumppad/examples/container</span></span>\n<span></span>\n<span><span style="color: var(--shiki-color-text)">Checking </span><span style="color: var(--shiki-token-keyword)">for</span><span style="color: var(--shiki-color-text)"> changes...</span></span>\n<span><span style="color: var(--shiki-color-text)">2023-07-07T07:07:36.985+0100 [INFO]  Parsing configuration: path=/home/nicj/go/src/github.com/jumppad-labs/jumppad/examples/container</span></span>\n<span></span>\n<span><span style="color: var(--shiki-color-text)">Checking </span><span style="color: var(--shiki-token-keyword)">for</span><span style="color: var(--shiki-color-text)"> changes...</span></span>\n<span><span style="color: var(--shiki-color-text)">2023-07-07T07:07:41.994+0100 [INFO]  Parsing configuration: path=/home/nicj/go/src/github.com/jumppad-labs/jumppad/examples/container</span></span>\n<span></span>\n<span><span style="color: var(--shiki-color-text)">Checking </span><span style="color: var(--shiki-token-keyword)">for</span><span style="color: var(--shiki-color-text)"> changes...</span></span>\n<span><span style="color: var(--shiki-color-text)">2023-07-07T07:07:47.005+0100 [INFO]  Parsing configuration: path=/home/nicj/go/src/github.com/jumppad-labs/jumppad/examples/container</span></span>\n<span><span style="color: var(--shiki-color-text)">Changes detected, resources to add 1, resources changed 0, resources to delete 0, running up</span></span>\n<span><span style="color: var(--shiki-color-text)">2023-07-07T07:07:47.013+0100 [INFO]  Creating resources from configuration: path=/home/nicj/go/src/github.com/jumppad-labs/jumppad/examples/container</span></span>\n<span><span style="color: var(--shiki-color-text)">2023-07-07T07:07:47.014+0100 [INFO]  Parsing configuration: path=/home/nicj/go/src/github.com/jumppad-labs/jumppad/examples/container</span></span>\n<span><span style="color: var(--shiki-color-text)">2023-07-07T07:07:47.026+0100 [INFO]  Refresh Network: ref=onprem</span></span>\n<span><span style="color: var(--shiki-color-text)">2023-07-07T07:07:47.026+0100 [INFO]  Creating ImageCache: ref=default</span></span>\n<span><span style="color: var(--shiki-color-text)">2023-07-07T07:07:47.039+0100 [INFO]  Refresh Template: ref=resource.template.consul_config</span></span>\n<span><span style="color: var(--shiki-color-text)">2023-07-07T07:07:47.039+0100 [INFO]  Generating template: ref=resource.template.consul_config output=/home/nicj/.jumppad/data/config/consul.hcl</span></span>\n<span><span style="color: var(--shiki-color-text)">2023-07-07T07:07:47.041+0100 [INFO]  Refresh Container: ref=consul</span></span>\n<span><span style="color: var(--shiki-color-text)">2023-07-07T07:07:47.042+0100 [INFO]  Refresh Container: ref=envoy</span></span>\n<span><span style="color: var(--shiki-color-text)">2023-07-07T07:07:47.044+0100 [INFO]  Creating Container: ref=resource.sidecar.envoy2</span></span>\n<span></span>'})})]})}var t=!0;function p(n,e){throw Error("Expected "+(e?"component":"object")+" `"+n+"` to be defined: you likely forgot to import, pass, or provide it.")}e.default=function(){let n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:e}=Object.assign({},(0,o.ah)(),n.components);return e?(0,s.jsx)(e,Object.assign({},n,{children:(0,s.jsx)(r,n)})):r(n)}}},function(n){n.O(0,[9774,2888,179],function(){return n(n.s=4273)}),_N_E=n.O()}]);