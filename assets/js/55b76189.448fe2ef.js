"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3897],{88814:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var r=t(85893),i=t(11151);const s={},a="Portkey Integration with AutoGen",o={id:"ecosystem/portkey",title:"Portkey Integration with AutoGen",description:"Portkey is a 2-line upgrade to make your AutoGen agents reliable, cost-efficient, and fast.",source:"@site/docs/ecosystem/portkey.md",sourceDirName:"ecosystem",slug:"/ecosystem/portkey",permalink:"/autogen/docs/ecosystem/portkey",draft:!1,unlisted:!1,editUrl:"https://github.com/microsoft/autogen/edit/main/website/docs/ecosystem/portkey.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"PGVector",permalink:"/autogen/docs/ecosystem/pgvector"},next:{title:"Promptflow",permalink:"/autogen/docs/ecosystem/promptflow"}},l={},c=[{value:"Getting Started",id:"getting-started",level:2},{value:"Key Features",id:"key-features",level:2},{value:"Colab Notebook",id:"colab-notebook",level:2},{value:"Advanced Features",id:"advanced-features",level:2},{value:"Interoperability",id:"interoperability",level:3},{value:"Example: Switching from OpenAI to Azure OpenAI",id:"example-switching-from-openai-to-azure-openai",level:4},{value:"Reliability",id:"reliability",level:3},{value:"Metrics",id:"metrics",level:3},{value:"Comprehensive Logging",id:"comprehensive-logging",level:3},{value:"Guardrails",id:"guardrails",level:3},{value:"Continuous Improvement",id:"continuous-improvement",level:3},{value:"Caching",id:"caching",level:3},{value:"Security and Compliance",id:"security-and-compliance",level:3},{value:"Additional Resources",id:"additional-resources",level:2}];function d(e){const n={a:"a",b:"b",br:"br",code:"code",details:"details",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",summary:"summary",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"portkey-integration-with-autogen",children:"Portkey Integration with AutoGen"}),"\n ",(0,r.jsx)(n.img,{src:"https://github.com/siddharthsambharia-portkey/Portkey-Product-Images/blob/main/Portkey-Autogen.png?raw=true",alt:"Portkey Metrics Visualization",width:"70%"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"https://portkey.ai",children:"Portkey"})," is a 2-line upgrade to make your AutoGen agents reliable, cost-efficient, and fast."]}),"\n",(0,r.jsx)(n.p,{children:"Portkey adds 4 core production capabilities to any AutoGen agent:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"Routing to 200+ LLMs"}),"\n",(0,r.jsx)(n.li,{children:"Making each LLM call more robust"}),"\n",(0,r.jsx)(n.li,{children:"Full-stack tracing & cost, performance analytics"}),"\n",(0,r.jsx)(n.li,{children:"Real-time guardrails to enforce behavior"}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"getting-started",children:"Getting Started"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Install Required Packages:"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"pip install -qU pyautogen portkey-ai\n"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Configure AutoGen with Portkey:"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:'from autogen import AssistantAgent, UserProxyAgent, config_list_from_json\nfrom portkey_ai import PORTKEY_GATEWAY_URL, createHeaders\n\nconfig = [\n    {\n        "api_key": "OPENAI_API_KEY",\n        "model": "gpt-3.5-turbo",\n        "base_url": PORTKEY_GATEWAY_URL,\n        "api_type": "openai",\n        "default_headers": createHeaders(\n            api_key="YOUR_PORTKEY_API_KEY",\n            provider="openai",\n        )\n    }\n]\n'})}),"\n",(0,r.jsxs)(n.p,{children:["Generate your API key in the ",(0,r.jsx)(n.a,{href:"https://app.portkey.ai/",children:"Portkey Dashboard"}),"."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"And, that's it! With just this, you can start logging all of your AutoGen requests and make them reliable."}),"\n",(0,r.jsxs)(n.ol,{start:"3",children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.strong,{children:"Let's Run your Agent"})}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:'import autogen\n\n# Create user proxy agent, coder, product manager\n\n\nuser_proxy = autogen.UserProxyAgent(\n    name="User_proxy",\n    system_message="A human admin who will give the idea and run the code provided by Coder.",\n    code_execution_config={"last_n_messages": 2, "work_dir": "groupchat"},\n    human_input_mode="ALWAYS",\n)\n\n\ncoder = autogen.AssistantAgent(\n    name="Coder",\n    system_message = "You are a Python developer who is good at developing games. You work with Product Manager.",\n    llm_config={"config_list": config},\n)\n\n# Create groupchat\ngroupchat = autogen.GroupChat(\n    agents=[user_proxy, coder], messages=[])\nmanager = autogen.GroupChatManager(groupchat=groupchat, llm_config={"config_list": config})\n\n\n\n# Start the conversation\nuser_proxy.initiate_chat(\n    manager, message="Build a classic & basic pong game with 2 players in python")\n'})}),"\n",(0,r.jsx)(n.br,{}),"\nHere\u2019s the output from your Agent\u2019s run on Portkey's dashboard",(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.img,{src:"https://github.com/siddharthsambharia-portkey/Portkey-Product-Images/blob/main/Portkey-Dashboard.png?raw=true",width:'70%"',alt:"Portkey Dashboard"}),"\n",(0,r.jsx)(n.h2,{id:"key-features",children:"Key Features"}),"\n",(0,r.jsx)(n.p,{children:"Portkey offers a range of advanced features to enhance your AutoGen agents. Here\u2019s an overview"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Feature"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:["\ud83c\udf10 ",(0,r.jsx)(n.a,{href:"#interoperability",children:"Multi-LLM Integration"})]}),(0,r.jsx)(n.td,{children:"Access 200+ LLMs with simple configuration changes"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:["\ud83d\udee1\ufe0f ",(0,r.jsx)(n.a,{href:"#reliability",children:"Enhanced Reliability"})]}),(0,r.jsx)(n.td,{children:"Implement fallbacks, load balancing, retries, and much more"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:["\ud83d\udcca ",(0,r.jsx)(n.a,{href:"#metrics",children:"Advanced Metrics"})]}),(0,r.jsx)(n.td,{children:"Track costs, tokens, latency, and 40+ custom metrics effortlessly"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:["\ud83d\udd0d ",(0,r.jsx)(n.a,{href:"#comprehensive-logging",children:"Detailed Traces and Logs"})]}),(0,r.jsx)(n.td,{children:"Gain insights into every agent action and decision"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:["\ud83d\udea7 ",(0,r.jsx)(n.a,{href:"#guardrails",children:"Guardrails"})]}),(0,r.jsx)(n.td,{children:"Enforce agent behavior with real-time checks on inputs and outputs"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:["\ud83d\udd04 ",(0,r.jsx)(n.a,{href:"#continuous-improvement",children:"Continuous Optimization"})]}),(0,r.jsx)(n.td,{children:"Capture user feedback for ongoing agent improvements"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:["\ud83d\udcbe ",(0,r.jsx)(n.a,{href:"#caching",children:"Smart Caching"})]}),(0,r.jsx)(n.td,{children:"Reduce costs and latency with built-in caching mechanisms"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:["\ud83d\udd10 ",(0,r.jsx)(n.a,{href:"#security-and-compliance",children:"Enterprise-Grade Security"})]}),(0,r.jsx)(n.td,{children:"Set budget limits and implement fine-grained access controls"})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"colab-notebook",children:"Colab Notebook"}),"\n",(0,r.jsxs)(n.p,{children:["For a hands-on example of integrating Portkey with Autogen, check out our notebook",(0,r.jsx)(n.br,{})," ",(0,r.jsx)(n.br,{}),(0,r.jsx)(n.a,{href:"https://git.new/Portkey-Autogen",children:(0,r.jsx)(n.img,{src:"https://colab.research.google.com/assets/colab-badge.svg",alt:"Google Colab"})})," ."]}),"\n",(0,r.jsx)(n.h2,{id:"advanced-features",children:"Advanced Features"}),"\n",(0,r.jsx)(n.h3,{id:"interoperability",children:"Interoperability"}),"\n",(0,r.jsxs)(n.p,{children:["Easily switch between ",(0,r.jsx)(n.strong,{children:"200+ LLMs"})," by changing the ",(0,r.jsx)(n.code,{children:"provider"})," and API key in your configuration."]}),"\n",(0,r.jsx)(n.h4,{id:"example-switching-from-openai-to-azure-openai",children:"Example: Switching from OpenAI to Azure OpenAI"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:'config = [\n    {\n        "api_key": "api-key",\n        "model": "gpt-3.5-turbo",\n        "base_url": PORTKEY_GATEWAY_URL,\n        "api_type": "openai",\n        "default_headers": createHeaders(\n            api_key="YOUR_PORTKEY_API_KEY",\n            provider="azure-openai",\n            virtual_key="AZURE_VIRTUAL_KEY"\n        )\n    }\n]\n'})}),"\n",(0,r.jsx)(n.p,{children:"Note: AutoGen messages will go through Portkey's AI Gateway following OpenAI's API signature. Some language models may not work properly because messages need to be in a specific role order."}),"\n",(0,r.jsx)(n.h3,{id:"reliability",children:"Reliability"}),"\n",(0,r.jsx)(n.p,{children:"Implement fallbacks, load balancing, and automatic retries to make your agents more resilient."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:'{\n  "strategy": {\n    "mode": "fallback" # Options: "loadbalance" or "fallback"\n  },\n  "targets": [\n    {\n      "provider": "openai",\n      "api_key": "openai-api-key",\n      "override_params": {\n        "top_k": "0.4",\n        "max_tokens": "100"\n      }\n    },\n    {\n      "provider": "anthropic",\n      "api_key": "anthropic-api-key",\n      "override_params": {\n        "top_p": "0.6",\n        "model": "claude-3-5-sonnet-20240620"\n      }\n    }\n  ]\n}\n'})}),"\n",(0,r.jsxs)(n.p,{children:["Learn more about ",(0,r.jsx)(n.a,{href:"https://docs.portkey.ai/docs/product/ai-gateway-streamline-llm-integrations/configs",children:"Portkey Config object here"}),".\nBe Careful to Load-Balance/Fallback to providers that don't support tool calling when the request contains a function call."]}),"\n",(0,r.jsx)(n.h3,{id:"metrics",children:"Metrics"}),"\n",(0,r.jsxs)(n.p,{children:["Agent runs are complex. Portkey automatically logs ",(0,r.jsx)(n.strong,{children:"40+ comprehensive metrics"})," for your AI agents, including cost, tokens used, latency, etc. Whether you need a broad overview or granular insights into your agent runs, Portkey's customizable filters provide the metrics you need."]}),"\n",(0,r.jsxs)(n.details,{children:["\n  ",(0,r.jsx)(n.summary,{children:(0,r.jsx)(n.b,{children:"Portkey's Observability Dashboard"})}),"\n",(0,r.jsx)(n.img,{src:"https://github.com/siddharthsambharia-portkey/Portkey-Product-Images/blob/main/Portkey-Dashboard.png?raw=true",width:'70%"',alt:"Portkey Dashboard"}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"comprehensive-logging",children:"Comprehensive Logging"}),"\n",(0,r.jsx)(n.p,{children:"Access detailed logs and traces of agent activities, function calls, and errors. Filter logs based on multiple parameters for in-depth analysis."}),"\n",(0,r.jsxs)(n.details,{children:["\n  ",(0,r.jsx)(n.summary,{children:(0,r.jsx)(n.b,{children:"Traces"})}),"\n  ",(0,r.jsx)(n.img,{src:"https://raw.githubusercontent.com/siddharthsambharia-portkey/Portkey-Product-Images/main/Portkey-Traces.png",alt:"Portkey Logging Interface",width:"70%"}),"\n"]}),"\n",(0,r.jsxs)(n.details,{children:["\n  ",(0,r.jsx)(n.summary,{children:(0,r.jsx)(n.b,{children:"Logs"})}),"\n  ",(0,r.jsx)(n.img,{src:"https://raw.githubusercontent.com/siddharthsambharia-portkey/Portkey-Product-Images/main/Portkey-Logs.png",alt:"Portkey Metrics Visualization",width:"70%"}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"guardrails",children:"Guardrails"}),"\n",(0,r.jsxs)(n.p,{children:["AutoGen agents, while powerful, can sometimes produce unexpected or undesired outputs. Portkey's Guardrails feature helps enforce agent behavior in real-time, ensuring your AutoGen agents operate within specified parameters. Verify both the ",(0,r.jsx)(n.strong,{children:"inputs"})," to and ",(0,r.jsx)(n.em,{children:"outputs"})," from your agents to ensure they adhere to specified formats and content guidelines. Learn more about Portkey's Guardrails ",(0,r.jsx)(n.a,{href:"https://docs.portkey.ai/product/guardrails",children:"here"})]}),"\n",(0,r.jsx)(n.h3,{id:"continuous-improvement",children:"Continuous Improvement"}),"\n",(0,r.jsx)(n.p,{children:"Capture qualitative and quantitative user feedback on your requests to continuously enhance your agent performance."}),"\n",(0,r.jsx)(n.h3,{id:"caching",children:"Caching"}),"\n",(0,r.jsx)(n.p,{children:"Reduce costs and latency with Portkey's built-in caching system."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:'portkey_config = {\n "cache": {\n    "mode": "semantic"  # Options: "simple" or "semantic"\n }\n}\n'})}),"\n",(0,r.jsx)(n.h3,{id:"security-and-compliance",children:"Security and Compliance"}),"\n",(0,r.jsx)(n.p,{children:"Set budget limits on provider API keys and implement fine-grained user roles and permissions for both your application and the Portkey APIs."}),"\n",(0,r.jsx)(n.h2,{id:"additional-resources",children:"Additional Resources"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://docs.portkey.ai",children:"\ud83d\udcd8 Portkey Documentation"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://twitter.com/portkeyai",children:"\ud83d\udc26 Twitter"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://discord.gg/JHPt4C7r",children:"\ud83d\udcac Discord Community"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://app.portkey.ai",children:"\ud83d\udcca Portkey App"})}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["For more information on using these features and setting up your Config, please refer to the ",(0,r.jsx)(n.a,{href:"https://docs.portkey.ai",children:"Portkey documentation"}),"."]})]})}function h(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>o,a:()=>a});var r=t(67294);const i={},s=r.createContext(i);function a(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);