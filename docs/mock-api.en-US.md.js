webpackJsonp([64],{2474:function(n,s){n.exports={content:["article",["p","Mocking data is a significant part of web application front end development which is the key of seperating front-end and back-end. We can mock Restful API of background service to avoiding development block of service side development progress."],["p","We can use ",["a",{title:null,href:"https://github.com/sorrycc/roadhog"},"roadhog"]," to proxy or mock data in Ant Design Pro."],["h2","Use roadhog"],["p","Create ",["code",".roadhogrc.mock.js"]," in your project root directory to mock API like below, more detail in ",["a",{title:null,href:"https://github.com/sorrycc/roadhog#mock"},"roadhog"],"."],["pre",{lang:"js",highlighted:'<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>\n  <span class="token comment" spellcheck="true">// literal Object and Array</span>\n  <span class="token string">\'GET /api/users\'</span><span class="token punctuation">:</span> <span class="token punctuation">{</span> users<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">]</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n\n  <span class="token comment" spellcheck="true">// GET could be omitted</span>\n  <span class="token string">\'/api/users/1\'</span><span class="token punctuation">:</span> <span class="token punctuation">{</span> id<span class="token punctuation">:</span> <span class="token number">1</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n\n  <span class="token comment" spellcheck="true">// implement simple API by express@4</span>\n  <span class="token string">\'POST /api/users/create\'</span><span class="token punctuation">:</span> <span class="token punctuation">(</span>req<span class="token punctuation">,</span> res<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span> res<span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span><span class="token string">\'OK\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n\n  <span class="token comment" spellcheck="true">// Forward to another server</span>\n  <span class="token comment" spellcheck="true">// `/assets/0.0.50/index.css` will be forword https://assets.online/assets/0.0.50/index.css</span>\n  <span class="token string">\'GET /assets/*\'</span><span class="token punctuation">:</span> <span class="token string">\'https://assets.online/\'</span><span class="token punctuation">,</span>\n\n  <span class="token comment" spellcheck="true">// Forward to another server with glob matcher</span>\n  <span class="token comment" spellcheck="true">// `/someDir/0.0.50/index.css` will be forword to https://g.alicdn.com/tb-page/taobao-home/0.0.50/index.css</span>\n  <span class="token string">\'GET /someDir/(.*)\'</span><span class="token punctuation">:</span> <span class="token string">\'https://g.alicdn.com/tb-page/taobao-home\'</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>'},["code","export default {\n  // literal Object and Array\n  'GET /api/users': { users: [1, 2] },\n\n  // GET could be omitted\n  '/api/users/1': { id: 1 },\n\n  // implement simple API by express@4\n  'POST /api/users/create': (req, res) => { res.end('OK'); },\n\n  // Forward to another server\n  // `/assets/0.0.50/index.css` will be forword https://assets.online/assets/0.0.50/index.css\n  'GET /assets/*': 'https://assets.online/',\n\n  // Forward to another server with glob matcher\n  // `/someDir/0.0.50/index.css` will be forword to https://g.alicdn.com/tb-page/taobao-home/0.0.50/index.css\n  'GET /someDir/(.*)': 'https://g.alicdn.com/tb-page/taobao-home',\n};"]],["p","When you start server by ",["code","roadhog dev"],", the mock service will proxy network requests as follow your rules defined in ",["code",".roadhogrc.mock.js"],"."],["p","You can response literal object like this:"],["pre",{lang:null,highlighted:'<span class="token string">\'GET /api/currentUser\'</span><span class="token punctuation">:</span> {\n  name<span class="token punctuation">:</span> <span class="token string">\'momo.zxy\'</span><span class="token punctuation">,</span>\n  avatar<span class="token punctuation">:</span> imgMap<span class="token punctuation">.</span>user<span class="token punctuation">,</span>\n  userid<span class="token punctuation">:</span> <span class="token string">\'00000001\'</span><span class="token punctuation">,</span>\n  notifyCount<span class="token punctuation">:</span> <span class="token number">12</span><span class="token punctuation">,</span>\n}<span class="token punctuation">,</span>'},["code","'GET /api/currentUser': {\n  name: 'momo.zxy',\n  avatar: imgMap.user,\n  userid: '00000001',\n  notifyCount: 12,\n},"]],["p","Now you can see the result in browser console when visits ",["code","/api/users"],":"],["p","Request:"],["p",["img",{src:"https://gw.alipayobjects.com/zos/rmsportal/ZdlcFoYonSGDupWnktZn.png",width:"400"}]],["p","Response:"],["p",["img",{src:"https://gw.alipayobjects.com/zos/rmsportal/OLHIXePGHkkFoaZVQAts.png",width:"600"}]],["h3","Using Mock.js"],["p",["a",{title:null,href:"http://mockjs.com/"},"Mock.js"]," is a popular mock library that can help to generate mock data, we can use it in ",["code",".roadhogrc.mock.js"],"."],["pre",{lang:"js",highlighted:'<span class="token keyword">import</span> mockjs <span class="token keyword">from</span> <span class="token string">\'mockjs\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>\n  <span class="token string">\'GET /api/tags\'</span><span class="token punctuation">:</span> mockjs<span class="token punctuation">.</span><span class="token function">mock</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n    <span class="token string">\'list|100\'</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span> name<span class="token punctuation">:</span> <span class="token string">\'@city\'</span><span class="token punctuation">,</span> <span class="token string">\'value|1-100\'</span><span class="token punctuation">:</span> <span class="token number">50</span><span class="token punctuation">,</span> <span class="token string">\'type|0-2\'</span><span class="token punctuation">:</span> <span class="token number">1</span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>'},["code","import mockjs from 'mockjs';\n\nexport default {\n  'GET /api/tags': mockjs.mock({\n    'list|100': [{ name: '@city', 'value|1-100': 50, 'type|0-2': 1 }],\n  }),\n};"]],["h3","CORS support"],["p","Define header of ",["code","response"]," like this:"],["pre",{lang:null,highlighted:'<span class="token string">\'POST /api/users/create\'</span><span class="token punctuation">:</span> <span class="token punctuation">(</span>req<span class="token punctuation">,</span> res<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> {\n  <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>\n  res<span class="token punctuation">.</span><span class="token function">setHeader</span><span class="token punctuation">(</span><span class="token string">\'Access-Control-Allow-Origin\'</span><span class="token punctuation">,</span> <span class="token string">\'*\'</span><span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>\n  <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>\n}<span class="token punctuation">,</span>'},["code","'POST /api/users/create': (req, res) => {\n  ...\n  res.setHeader('Access-Control-Allow-Origin', '*');\n  ...\n},"]],["h2","Divide mock data into different files"],["p","We can maintain our mock data in different files for different data models in the large application, and import them in ",["code",".roadhog.mock.js"],"."],["p",["img",{src:"https://gw.alipayobjects.com/zos/rmsportal/wbeiDacBkchXrTafasBy.png",width:"200"}]],["p",["code",".roadhog.mock.js"]," would be like:"],["pre",{lang:"js",highlighted:'<span class="token keyword">import</span> mockjs <span class="token keyword">from</span> <span class="token string">\'mockjs\'</span><span class="token punctuation">;</span>\n\n<span class="token comment" spellcheck="true">// import mock files</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> getRule<span class="token punctuation">,</span> postRule <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'./mock/rule\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> getActivities<span class="token punctuation">,</span> getNotice<span class="token punctuation">,</span> getFakeList <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'./mock/api\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> getFakeChartData <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'./mock/chart\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> getProfileBasicData <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'./mock/profile\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> getProfileAdvancedData <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'./mock/profile\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> getNotices <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'./mock/notices\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> proxy <span class="token operator">=</span> <span class="token punctuation">{</span>\n  <span class="token string">\'GET /api/fake_list\'</span><span class="token punctuation">:</span> getFakeList<span class="token punctuation">,</span>\n  <span class="token string">\'GET /api/fake_chart_data\'</span><span class="token punctuation">:</span> getFakeChartData<span class="token punctuation">,</span>\n  <span class="token string">\'GET /api/profile/basic\'</span><span class="token punctuation">:</span> getProfileBasicData<span class="token punctuation">,</span>\n  <span class="token string">\'GET /api/profile/advanced\'</span><span class="token punctuation">:</span> getProfileAdvancedData<span class="token punctuation">,</span>\n  <span class="token string">\'GET /api/notices\'</span><span class="token punctuation">:</span> getNotices<span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n<span class="token keyword">export</span> <span class="token keyword">default</span> proxy<span class="token punctuation">;</span>'},["code","import mockjs from 'mockjs';\n\n// import mock files\nimport { getRule, postRule } from './mock/rule';\nimport { getActivities, getNotice, getFakeList } from './mock/api';\nimport { getFakeChartData } from './mock/chart';\nimport { getProfileBasicData } from './mock/profile';\nimport { getProfileAdvancedData } from './mock/profile';\nimport { getNotices } from './mock/notices';\n\nconst proxy = {\n  'GET /api/fake_list': getFakeList,\n  'GET /api/fake_chart_data': getFakeChartData,\n  'GET /api/profile/basic': getProfileBasicData,\n  'GET /api/profile/advanced': getProfileAdvancedData,\n  'GET /api/notices': getNotices,\n};\n\nexport default proxy;"]],["h2","Delay mock API"],["p","In real world the AJAX request usually response with a network delay which should be simulated in mocking API."],["h3","setTimeout"],["p","You can implement the API within ",["code","setTimeout"],"."],["pre",{lang:"js",highlighted:'<span class="token string">\'POST /api/forms\'</span><span class="token punctuation">:</span> <span class="token punctuation">(</span>req<span class="token punctuation">,</span> res<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n  <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n    res<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token string">\'Ok\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">,</span>'},["code","'POST /api/forms': (req, res) => {\n  setTimeout(() => {\n    res.send('Ok');\n  }, 1000);\n},"]],["h3","Use roadhog-api-doc plugin"],["p","We provide ",["code","delay"]," function in ",["a",{title:null,href:"https://github.com/nikogu/roadhog-api-doc"},"roadhog-api-doc"]," to make this convenient."],["pre",{lang:"js",highlighted:'<span class="token keyword">import</span> <span class="token punctuation">{</span> delay <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'roadhog-api-doc\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> proxy <span class="token operator">=</span> <span class="token punctuation">{</span>\n  <span class="token string">\'GET /api/project/notice\'</span><span class="token punctuation">:</span> getNotice<span class="token punctuation">,</span>\n  <span class="token string">\'GET /api/activities\'</span><span class="token punctuation">:</span> getActivities<span class="token punctuation">,</span>\n  <span class="token string">\'GET /api/rule\'</span><span class="token punctuation">:</span> getRule<span class="token punctuation">,</span>\n  <span class="token string">\'GET /api/tags\'</span><span class="token punctuation">:</span> mockjs<span class="token punctuation">.</span><span class="token function">mock</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n    <span class="token string">\'list|100\'</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span> name<span class="token punctuation">:</span> <span class="token string">\'@city\'</span><span class="token punctuation">,</span> <span class="token string">\'value|1-100\'</span><span class="token punctuation">:</span> <span class="token number">50</span><span class="token punctuation">,</span> <span class="token string">\'type|0-2\'</span><span class="token punctuation">:</span> <span class="token number">1</span> <span class="token punctuation">}</span><span class="token punctuation">]</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n  <span class="token string">\'GET /api/fake_list\'</span><span class="token punctuation">:</span> getFakeList<span class="token punctuation">,</span>\n  <span class="token string">\'GET /api/fake_chart_data\'</span><span class="token punctuation">:</span> getFakeChartData<span class="token punctuation">,</span>\n  <span class="token string">\'GET /api/profile/basic\'</span><span class="token punctuation">:</span> getProfileBasicData<span class="token punctuation">,</span>\n  <span class="token string">\'GET /api/profile/advanced\'</span><span class="token punctuation">:</span> getProfileAdvancedData<span class="token punctuation">,</span>\n  <span class="token string">\'POST /api/register\'</span><span class="token punctuation">:</span> <span class="token punctuation">(</span>req<span class="token punctuation">,</span> res<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n    res<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token punctuation">{</span> status<span class="token punctuation">:</span> <span class="token string">\'ok\'</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token string">\'GET /api/notices\'</span><span class="token punctuation">:</span> getNotices<span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n<span class="token comment" spellcheck="true">// Delay one second for all interfaces</span>\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">delay</span><span class="token punctuation">(</span>proxy<span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>'},["code","import { delay } from 'roadhog-api-doc';\n\nconst proxy = {\n  'GET /api/project/notice': getNotice,\n  'GET /api/activities': getActivities,\n  'GET /api/rule': getRule,\n  'GET /api/tags': mockjs.mock({\n    'list|100': [{ name: '@city', 'value|1-100': 50, 'type|0-2': 1 }]\n  }),\n  'GET /api/fake_list': getFakeList,\n  'GET /api/fake_chart_data': getFakeChartData,\n  'GET /api/profile/basic': getProfileBasicData,\n  'GET /api/profile/advanced': getProfileAdvancedData,\n  'POST /api/register': (req, res) => {\n    res.send({ status: 'ok' });\n  },\n  'GET /api/notices': getNotices,\n};\n\n// Delay one second for all interfaces\nexport default delay(proxy, 1000);"]],["h2","Generate API documentation"],["p","A detailed API documentation includes path, method, params and response will be helpful when we collaborate with server-side developer. ",["code","roadhog-api-doc"]," can generate one from your ",["code",".roadhog.mock.js"],"."],["p","Implement you API information in ",["code",".roadhog.mock.js"]," like below:"],["pre",{lang:"js",highlighted:'<span class="token keyword">import</span> <span class="token punctuation">{</span> postRule <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'./mock/rule\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> format <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'roadhog-api-doc\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> proxy <span class="token operator">=</span> <span class="token punctuation">{</span>\n  <span class="token string">\'GET /api/currentUser\'</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    <span class="token comment" spellcheck="true">// Description</span>\n    $desc<span class="token punctuation">:</span> <span class="token string">"Get the current user info"</span><span class="token punctuation">,</span>\n    <span class="token comment" spellcheck="true">// Params</span>\n    $params<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n      pageSize<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n        desc<span class="token punctuation">:</span> <span class="token string">\'Page size\'</span><span class="token punctuation">,</span>\n        exp<span class="token punctuation">:</span> <span class="token number">2</span><span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token comment" spellcheck="true">// Response Body</span>\n    $body<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n      name<span class="token punctuation">:</span> <span class="token string">\'momo.zxy\'</span><span class="token punctuation">,</span>\n      avatar<span class="token punctuation">:</span> imgMap<span class="token punctuation">.</span>user<span class="token punctuation">,</span>\n      userid<span class="token punctuation">:</span> <span class="token string">\'00000001\'</span><span class="token punctuation">,</span>\n      notifyCount<span class="token punctuation">:</span> <span class="token number">12</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token string">\'POST /api/rule\'</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    $params<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n      pageSize<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n        desc<span class="token punctuation">:</span> <span class="token string">\'Page size\'</span><span class="token punctuation">,</span>\n        exp<span class="token punctuation">:</span> <span class="token number">2</span><span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    $body<span class="token punctuation">:</span> postRule<span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">format</span><span class="token punctuation">(</span>proxy<span class="token punctuation">)</span><span class="token punctuation">;</span>'},["code","import { postRule } from './mock/rule';\nimport { format } from 'roadhog-api-doc';\n\nconst proxy = {\n  'GET /api/currentUser': {\n    // Description\n    $desc: \"Get the current user info\",\n    // Params\n    $params: {\n      pageSize: {\n        desc: 'Page size',\n        exp: 2,\n      },\n    },\n    // Response Body\n    $body: {\n      name: 'momo.zxy',\n      avatar: imgMap.user,\n      userid: '00000001',\n      notifyCount: 12,\n    },\n  },\n  'POST /api/rule': {\n    $params: {\n      pageSize: {\n        desc: 'Page size',\n        exp: 2,\n      },\n    },\n    $body: postRule,\n  },\n};\n\nexport default format(proxy);"]],["p","Then run the ",["code","npm start"]," and visit ",["code","http://localhost:8989"],":"],["p",["img",{width:"500",src:"https://gw.alipayobjects.com/zos/rmsportal/TKmBIxyMTBiMJZtAlBgg.png"}]],["h3","Integrate"],["p","If you need to integrate with real service after finish front end development via mock data, just ",["a",{title:null,href:"/docs/server-cn#%E4%BB%8E-mock-%E7%9B%B4%E6%8E%A5%E5%88%87%E6%8D%A2%E5%88%B0%E6%9C%8D%E5%8A%A1%E7%AB%AF%E8%AF%B7%E6%B1%82"},"close the mock data or proxy request to the real interfaces"],"."],["pre",{lang:"bash",highlighted:'$ <span class="token function">npm</span> run start:no-proxy'},["code","$ npm run start:no-proxy"]]],meta:{order:13,title:"Mock Data",type:"Advanced",filename:"docs/mock-api.en-US.md"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#Use-roadhog",title:"Use roadhog"},"Use roadhog"]],["li",["a",{className:"bisheng-toc-h2",href:"#Divide-mock-data-into-different-files",title:"Divide mock data into different files"},"Divide mock data into different files"]],["li",["a",{className:"bisheng-toc-h2",href:"#Delay-mock-API",title:"Delay mock API"},"Delay mock API"]],["li",["a",{className:"bisheng-toc-h2",href:"#Generate-API-documentation",title:"Generate API documentation"},"Generate API documentation"]]]}}});