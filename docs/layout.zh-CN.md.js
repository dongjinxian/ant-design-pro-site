webpackJsonp([65],{2473:function(n,s){n.exports={content:["article",{},["h2","Ant Design Pro \u7684\u5e03\u5c40"],["p","\u5728 Ant Design Pro \u4e2d\uff0c\u6211\u4eec\u62bd\u79bb\u4e86\u4f7f\u7528\u8fc7\u7a0b\u4e2d\u7684\u901a\u7528\u5e03\u5c40\uff0c\u90fd\u653e\u5728 ",["code","layouts"]," \u76ee\u5f55\u4e2d\uff0c\u5206\u522b\u4e3a\uff1a"],["ul",["li",["p","BasicLayout\uff1a\u57fa\u7840\u9875\u9762\u5e03\u5c40\uff0c\u5305\u542b\u4e86\u5934\u90e8\u5bfc\u822a\uff0c\u4fa7\u8fb9\u680f\u548c\u901a\u77e5\u680f\uff1a"]]],["p",["img",{src:"https://gw.alipayobjects.com/zos/rmsportal/oXmyfmffJVvdbmDoGvuF.png"}]],["ul",["li",["p","UserLayout\uff1a\u62bd\u79bb\u51fa\u7528\u4e8e\u767b\u9646\u6ce8\u518c\u9875\u9762\u7684\u901a\u7528\u5e03\u5c40"]],["li",["p","BlankLayout\uff1a\u7a7a\u767d\u7684\u5e03\u5c40"]]],["p",["img",{src:"https://gw.alipayobjects.com/zos/rmsportal/mXsydBXvLqBVEZLMssEy.png"}]],["h3","\u5982\u4f55\u4f7f\u7528 Ant Design Pro \u5e03\u5c40"],["p","\u901a\u5e38\u5e03\u5c40\u662f\u548c\u8def\u7531\u7cfb\u7edf\u7d27\u5bc6\u7ed3\u5408\u7684\uff0cAnt Design Pro \u7684\u8def\u7531\u4f7f\u7528\u4e86 Umi \u7684\u8def\u7531\u65b9\u6848\uff0c\u4e3a\u4e86\u7edf\u4e00\u65b9\u4fbf\u7684\u7ba1\u7406\u8def\u7531\u548c\u9875\u9762\u7684\u5173\u7cfb\uff0c\u6211\u4eec\u5c06\u914d\u7f6e\u4fe1\u606f\u7edf\u4e00\u62bd\u79bb\u5230 ",["code","config/router.config.js"]," \u4e0b\uff0c\u901a\u8fc7\u5982\u4e0b\u914d\u7f6e\u5b9a\u4e49\u6bcf\u4e2a\u9875\u9762\u7684\u5e03\u5c40\uff1a"],["pre",{lang:"jsx",highlighted:'module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>\n  path<span class="token punctuation">:</span> <span class="token string">\'/\'</span><span class="token punctuation">,</span>\n  component<span class="token punctuation">:</span> <span class="token string">\'../layouts/BasicLayout\'</span><span class="token punctuation">,</span>  <span class="token comment" spellcheck="true">// \u6307\u5b9a\u4ee5\u4e0b\u9875\u9762\u7684\u5e03\u5c40</span>\n  routes<span class="token punctuation">:</span> <span class="token punctuation">[</span>\n    <span class="token comment" spellcheck="true">// dashboard</span>\n    <span class="token punctuation">{</span> path<span class="token punctuation">:</span> <span class="token string">\'/\'</span><span class="token punctuation">,</span> redirect<span class="token punctuation">:</span> <span class="token string">\'/dashboard/analysis\'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">{</span>\n      path<span class="token punctuation">:</span> <span class="token string">\'/dashboard\'</span><span class="token punctuation">,</span>\n      name<span class="token punctuation">:</span> <span class="token string">\'dashboard\'</span><span class="token punctuation">,</span>\n      icon<span class="token punctuation">:</span> <span class="token string">\'dashboard\'</span><span class="token punctuation">,</span>\n      routes<span class="token punctuation">:</span> <span class="token punctuation">[</span>\n        <span class="token punctuation">{</span> path<span class="token punctuation">:</span> <span class="token string">\'/dashboard/analysis\'</span><span class="token punctuation">,</span> name<span class="token punctuation">:</span> <span class="token string">\'analysis\'</span><span class="token punctuation">,</span> component<span class="token punctuation">:</span> <span class="token string">\'./Dashboard/Analysis\'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n        <span class="token punctuation">{</span> path<span class="token punctuation">:</span> <span class="token string">\'/dashboard/monitor\'</span><span class="token punctuation">,</span> name<span class="token punctuation">:</span> <span class="token string">\'monitor\'</span><span class="token punctuation">,</span> component<span class="token punctuation">:</span> <span class="token string">\'./Dashboard/Monitor\'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n        <span class="token punctuation">{</span> path<span class="token punctuation">:</span> <span class="token string">\'/dashboard/workplace\'</span><span class="token punctuation">,</span> name<span class="token punctuation">:</span> <span class="token string">\'workplace\'</span><span class="token punctuation">,</span> component<span class="token punctuation">:</span> <span class="token string">\'./Dashboard/Workplace\'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n      <span class="token punctuation">]</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">]</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">]</span>'},["code","module.exports = [{\n  path: '/',\n  component: '../layouts/BasicLayout',  // \u6307\u5b9a\u4ee5\u4e0b\u9875\u9762\u7684\u5e03\u5c40\n  routes: [\n    // dashboard\n    { path: '/', redirect: '/dashboard/analysis' },\n    {\n      path: '/dashboard',\n      name: 'dashboard',\n      icon: 'dashboard',\n      routes: [\n        { path: '/dashboard/analysis', name: 'analysis', component: './Dashboard/Analysis' },\n        { path: '/dashboard/monitor', name: 'monitor', component: './Dashboard/Monitor' },\n        { path: '/dashboard/workplace', name: 'workplace', component: './Dashboard/Workplace' },\n      ],\n    },\n  ],\n}]"]],["p","\u6620\u5c04\u8def\u7531\u548c\u9875\u9762\u5e03\u5c40\uff08\u7ec4\u4ef6\uff09\u7684\u5173\u7cfb\u5982\u4ee3\u7801\u6240\u793a\uff0c\u5b8c\u6574\u6620\u5c04\u8f6c\u6362\u5b9e\u73b0\u53ef\u4ee5\u53c2\u770b ",["a",{title:null,href:"https://github.com/ant-design/ant-design-pro/blob/master/config/router.config.js"},"router.config.js"],"\u3002"],["p","\u66f4\u591a Umi \u7684\u8def\u7531\u914d\u7f6e\u65b9\u5f0f\u53ef\u4ee5\u53c2\u8003\uff1a",["a",{title:null,href:"https://umijs.org/guide/router.html#%E9%85%8D%E7%BD%AE%E5%BC%8F%E8%B7%AF%E7%94%B1"},"Umi  \u914d\u7f6e\u5f0f\u8def\u7531"],"\u3002"],["h4","Pro \u6269\u5c55\u914d\u7f6e"],["p","\u6211\u4eec\u5728 ",["code","router.config.js"]," \u6269\u5c55\u4e86\u4e00\u4e9b\u5173\u4e8e pro \u5168\u5c40\u83dc\u5355\u7684\u914d\u7f6e\u3002"],["pre",{lang:null,highlighted:'{\n  name<span class="token punctuation">:</span> <span class="token string">\'dashboard\'</span><span class="token punctuation">,</span>\n  icon<span class="token punctuation">:</span> <span class="token string">\'dashboard\'</span><span class="token punctuation">,</span>\n  hideInMenu<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n  hideChildrenInMenu<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n  hideInBreadcrumb<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n  authority<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">\'admin\'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n}'},["code","{\n  name: 'dashboard',\n  icon: 'dashboard',\n  hideInMenu: true,\n  hideChildrenInMenu: true,\n  hideInBreadcrumb: true,\n  authority: ['admin'],\n}"]],["ul",["li",["p",["code","name"],": \u5f53\u524d\u8def\u7531\u5728\u83dc\u5355\u548c\u9762\u5305\u5c51\u4e2d\u7684\u540d\u79f0\uff0c\u6ce8\u610f\u8fd9\u91cc\u662f\u56fd\u9645\u5316\u914d\u7f6e\u7684 key\uff0c\u5177\u4f53\u5c55\u793a\u83dc\u5355\u540d\u53ef\u4ee5\u5728 ",["a",{title:null,href:"https://github.com/ant-design/ant-design-pro/blob/v2/src/locales/zh-CN.js"},"/src/locales/zh-CN.js"]," \u8fdb\u884c\u914d\u7f6e\u3002"]],["li",["p",["code","icon"],": \u5f53\u524d\u8def\u7531\u5728\u83dc\u5355\u4e0b\u7684\u56fe\u6807\u540d\u3002"]],["li",["p",["code","hideInMenu"],": \u5f53\u524d\u8def\u7531\u5728\u83dc\u5355\u4e2d\u4e0d\u5c55\u73b0\uff0c\u9ed8\u8ba4 ",["code","false"],"\u3002"]],["li",["p",["code","hideChildrenInMenu"],": \u5f53\u524d\u8def\u7531\u7684\u5b50\u7ea7\u5728\u83dc\u5355\u4e2d\u4e0d\u5c55\u73b0\uff0c\u9ed8\u8ba4 ",["code","false"],"\u3002"]],["li",["p",["code","hideInBreadcrumb"],": \u5f53\u524d\u8def\u7531\u5728\u9762\u5305\u5c51\u4e2d\u4e0d\u5c55\u73b0\uff0c\u9ed8\u8ba4 ",["code","false"],"\u3002"]],["li",["p",["code","authority"],": \u5141\u8bb8\u5c55\u793a\u7684\u6743\u9650\uff0c\u4e0d\u8bbe\u5219\u90fd\u53ef\u89c1\uff0c\u8be6\u89c1\uff1a",["a",{title:null,href:"/docs/authority-management"},"\u6743\u9650\u7ba1\u7406"],"\u3002"]]],["h2","Ant Design \u5e03\u5c40\u7ec4\u4ef6"],["p","\u9664\u4e86 Pro \u91cc\u7684\u5185\u5efa\u5e03\u5c40\u4ee5\u4e3a\uff0c\u5728\u4e00\u4e9b\u9875\u9762\u4e2d\u9700\u8981\u8fdb\u884c\u5e03\u5c40\uff0c\u53ef\u4ee5\u4f7f\u7528 Ant Design \u76ee\u524d\u63d0\u4f9b\u7684\u4e24\u5957\u5e03\u5c40\u7ec4\u4ef6\u5de5\u5177\uff1a",["a",{title:null,href:"http://ant.design/components/layout/"},"Layout"]," \u548c ",["a",{title:null,href:"http://ant.design/components/grid/"},"Grid"],"\u3002"],["h3","Grid \u7ec4\u4ef6"],["p","\u6805\u683c\u5e03\u5c40\u662f\u7f51\u9875\u4e2d\u6700\u5e38\u7528\u7684\u5e03\u5c40\uff0c\u5176\u7279\u70b9\u5c31\u662f\u6309\u7167\u4e00\u5b9a\u6bd4\u4f8b\u5212\u5206\u9875\u9762\uff0c\u80fd\u591f\u968f\u7740\u5c4f\u5e55\u7684\u53d8\u5316\u4f9d\u65e7\u4fdd\u6301\u6bd4\u4f8b\uff0c\u4ece\u800c\u5177\u6709\u5f39\u6027\u5e03\u5c40\u7684\u7279\u70b9\u3002"],["p","\u800c Ant Design \u7684\u6805\u683c\u7ec4\u4ef6\u63d0\u4f9b\u7684\u529f\u80fd\u66f4\u4e3a\u5f3a\u5927\uff0c\u80fd\u591f\u8bbe\u7f6e\u95f4\u8ddd\u3001\u5177\u6709\u652f\u6301\u54cd\u5e94\u5f0f\u7684\u6bd4\u4f8b\u8bbe\u7f6e\uff0c\u4ee5\u53ca\u652f\u6301 ",["code","flex"]," \u6a21\u5f0f\uff0c\u57fa\u672c\u4e0a\u6db5\u76d6\u4e86\u5927\u90e8\u5206\u7684\u5e03\u5c40\u573a\u666f\uff0c\u8be6\u60c5\u53c2\u770b\uff1a",["a",{title:null,href:"http://ant.design/components/grid/"},"Grid"],"\u3002"],["h3","Layout \u7ec4\u4ef6"],["p","\u5982\u679c\u4f60\u9700\u8981\u8f85\u52a9\u9875\u9762\u6846\u67b6\u7ea7\u522b\u7684\u5e03\u5c40\u8bbe\u8ba1\uff0c\u90a3\u4e48 ",["a",{title:null,href:"http://ant.design/components/layout/"},"Layout"]," \u5219\u662f\u4f60\u6700\u4f73\u7684\u9009\u62e9\uff0c\u5b83\u62bd\u8c61\u4e86\u5927\u90e8\u5206\u6846\u67b6\u5e03\u5c40\u7ed3\u6784\uff0c\u4f7f\u5f97\u53ea\u9700\u8981\u586b\u7a7a\u5c31\u53ef\u4ee5\u5f00\u53d1\u89c4\u8303\u4e13\u4e1a\u7684\u9875\u9762\u6574\u4f53\u5e03\u5c40\uff0c\u8be6\u60c5\u53c2\u770b\uff1a",["a",{title:null,href:"http://ant.design/components/layout/"},"Layout"],"\u3002"],["h3","\u6839\u636e\u4e0d\u540c\u573a\u666f\u533a\u5206\u62bd\u79bb\u5e03\u5c40\u7ec4\u4ef6"],["p","\u5728\u5927\u90e8\u5206\u573a\u666f\u4e0b\uff0c\u6211\u4eec\u9700\u8981\u57fa\u4e8e\u4e0a\u9762\u4e24\u4e2a\u7ec4\u4ef6\u5c01\u88c5\u4e00\u4e9b\u9002\u7528\u4e8e\u5f53\u4e0b\u5177\u4f53\u4e1a\u52a1\u7684\u7ec4\u4ef6\uff0c\u5305\u542b\u4e86\u901a\u7528\u7684\u5bfc\u822a\u3001\u4fa7\u8fb9\u680f\u3001\u9876\u90e8\u901a\u77e5\u3001\u9875\u9762\u6807\u9898\u7b49\u5143\u7d20\u3002\u4f8b\u5982 Ant Design Pro \u7684 ",["a",{title:null,href:"https://github.com/ant-design/ant-design-pro/blob/master/src/layouts/BasicLayout.js"},"BasicLayout"],"\u3002"],["p","\u901a\u5e38\uff0c\u6211\u4eec\u4f1a\u628a\u62bd\u8c61\u51fa\u6765\u7684\u5e03\u5c40\u7ec4\u4ef6\uff0c\u653e\u5230\u8ddf ",["code","pages"],"\u3001 ",["code","components"]," \u5e73\u884c\u7684 ",["code","layouts"]," \u6587\u4ef6\u5939\u4e2d\u65b9\u4fbf\u7ba1\u7406\u3002\u9700\u8981\u6ce8\u610f\u7684\u662f\uff0c\u8fd9\u4e9b\u5e03\u5c40\u7ec4\u4ef6\u548c\u6211\u4eec\u5e73\u65f6\u4f7f\u7528\u7684\u5176\u5b83\u7ec4\u4ef6\u5e76\u6ca1\u6709\u4ec0\u4e48\u4e0d\u540c\uff0c\u53ea\u4e0d\u8fc7\u529f\u80fd\u6027\u4e0a\u662f\u4e3a\u4e86\u5904\u7406\u5e03\u5c40\u95ee\u9898\u3002"],["blockquote",["p","\u9664\u4e86 Ant Design \u5b98\u65b9\u63d0\u4f9b\u7684\u5e03\u5c40\u7ec4\u4ef6\uff0c\u4e5f\u53ef\u4ee5\u8bd5\u8bd5 ",["a",{title:null,href:"https://ant.design/docs/react/recommendation-cn"},"\u793e\u533a\u7cbe\u9009"]," \u91cc\u63a8\u8350\u7684\u5e03\u5c40\u7ec4\u4ef6\u3002"]]],meta:{order:2,title:"\u5e03\u5c40",type:"\u5165\u95e8",filename:"docs/layout.zh-CN.md"},description:["section",["p","\u9875\u9762\u6574\u4f53\u5e03\u5c40\u662f\u4e00\u4e2a\u4ea7\u54c1\u6700\u5916\u5c42\u7684\u6846\u67b6\u7ed3\u6784\uff0c\u5f80\u5f80\u4f1a\u5305\u542b\u5bfc\u822a\u3001\u9875\u811a\u3001\u4fa7\u8fb9\u680f\u3001\u901a\u77e5\u680f\u4ee5\u53ca\u5185\u5bb9\u7b49\u3002\u5728\u9875\u9762\u4e4b\u4e2d\uff0c\u4e5f\u6709\u5f88\u591a\u533a\u5757\u7684\u5e03\u5c40\u7ed3\u6784\u3002\u5728\u771f\u5b9e\u9879\u76ee\u4e2d\uff0c\u9875\u9762\u5e03\u5c40\u901a\u5e38\u7edf\u9886\u6574\u4e2a\u5e94\u7528\u7684\u754c\u9762\uff0c\u6709\u975e\u5e38\u91cd\u8981\u7684\u4f5c\u7528\u3002"]],toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#Ant-Design-Pro-\u7684\u5e03\u5c40",title:"Ant Design Pro \u7684\u5e03\u5c40"},"Ant Design Pro \u7684\u5e03\u5c40"]],["li",["a",{className:"bisheng-toc-h2",href:"#Ant-Design-\u5e03\u5c40\u7ec4\u4ef6",title:"Ant Design \u5e03\u5c40\u7ec4\u4ef6"},"Ant Design \u5e03\u5c40\u7ec4\u4ef6"]]]}}});