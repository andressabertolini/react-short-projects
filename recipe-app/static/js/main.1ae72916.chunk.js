(this["webpackJsonprecipe-app"]=this["webpackJsonprecipe-app"]||[]).push([[0],{10:function(e,c,A){},11:function(e,c,A){"use strict";A.r(c);var t=A(0),a=A(1),s=A.n(a),i=A(3),d=A.n(i);A(9);var n=({title:e,description:c,image:A,url:a})=>Object(t.jsx)("div",{className:"recipe-item",children:Object(t.jsxs)("a",{href:a,target:"_blank",children:[Object(t.jsx)("img",{src:A}),Object(t.jsxs)("div",{className:"content",children:[Object(t.jsx)("h2",{children:e}),Object(t.jsx)("p",{children:c})]})]})});A(10);var r=()=>{const[e,c]=Object(a.useState)([]),[A,s]=Object(a.useState)(""),[i,d]=Object(a.useState)("chocolate");return Object(a.useEffect)((()=>{(async()=>{const e=await fetch(`https://api.edamam.com/search?q=${i}&app_id=4268b762&app_key=8acb3c74dd6b60e9300b96e0a92f22ef`),A=await e.json();c(A.hits),console.log(A)})()}),[i]),Object(t.jsx)("div",{className:"app",children:Object(t.jsxs)("div",{className:"container",children:[Object(t.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAB2AAAAdgB+lymcgAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAATMSURBVHic7ZvLbxtVFMa/c2c8duy0idMacBJKjPKCSkgIUpAKqtQNC0RbWHWByt/QDahiwSYSFay6Y4GEQMqGVUtpkZBYgVBLQGUDCLGwWkOq1M/EduLxzL2HhWM7dl44ngdN5ydZ8rHOPfe7n8czd+5cAwEBjzTkVUfMLO5niyeZ+Qwxz4FoFsAQwARQCcCfABZB4qtkYvgHIlJe6HLdAGYWS9nCO8R4D8DMf2z2FxgfJR8f+YyIpJv6XDXgn2x2hpT4AsCJfRVg/AzFF0ZHj/7hrLI2rhmwtJx/DcCXAA73WapMROeTj43cdEDWFlwxoDF4vgZQ2KGSdRL0VjIxcsOhei0cNyDz4MGkxtoigGGHS1dI4eVk8shvThbd1YC7pVJcr8s3iekMwLMAxgHEnBTQL8wMKRVsKVGrmTBNi0GwdKHlNV3/RhhqfnZiIr1T+20NyGQyA1po4CKI3gUw5Jp6F2DFKK+to1pZAwMQgtgIhb61wjj/fCpV6s7fYsC9bHZUZ3EVjDlPFLuEZdkoFFchVWM6oevaeiw6eHoq9cStzXkdBmRyuTFN0i00DvWHHikVcoUSpGyYIEjIQ4ejc1MTY3eaOaL5Jp1ORzSbruKADB4ANE0gPnwYze9ZsdKq1dr3d9Lp1gm6ZUA4dugiCC96L9NdjJCOwVikFdu2HTMsWmjGBADpYnE4XFdpOH/p+l/ASmE5V4RSDAAgEjwUjT41OTmWEQAQseQ5HNDBAwAJgXC4PSdjVmQq+31g4yfATG/4pM0zIuFQR6ykfB1onwOOey3Ia3Rd74ilUgmgbUDSa0Feo4vOKY9SygDaBrDXgryGu6Z8vPFBwwDCkteCvKY5GWqiaagDTQMYv3svyVtsq3NhSQgtC2wYQMTXfdDkKTWz3hHrmrgObBhQC2nXAGy5UzooKFYw620DiAQbIvQhsGFAKh4vMdFln/S5TqWy3poFAkAkYnw9OTmWATbdC9SrK1dAWPRBn6tYlo1KtdaKdV2rGDT4djNuGZBKpWo2qXMA/nai42y+hFx+xZOcnZBSolBcRfMqrwlhR0Paq1NTR1abOWJzg2OJxJIt1EsAftpXj5uwLBt1y/IkZzvqlo1cYWXzgsiaEY68Mj2d+nVznuhueCyRWDLXVk+B6BIewhMjK4XVchW5/AqkVCASHB2I3IgZ8eTx6Sdvd+fr2xVJpVI1AJfTxeInEUueZaazYDwDwjiAQbcH0QvMDKkUbEuiZjYWRUlQPWTo+ZAubkIz5p99evTuTu23NaBJKh4vAfh84wUAWFrO2wA0x0bQB8yM+8v5VkwEvPDczJajejd6Sj6IBAb4LcBvAgP8FuA3gQF+C/CbwAC/BfhNYIDfAvwmMMBvAX4TGOC3AL/ZdT2gHwwjtOcePKdy+sE1A46O7L25zKmcfnjkfwKBAX4L8JvAAL8F+E1ggN8C/KbnecAH8x+7oWNfMAOlUqGvGvs4ArjcV48Owl17u4io581evRtA9F3PbVzC7npqrOl6ptcaPRsgIC8B1N9x5wCsGOu1tVZMQijSjQu91un5Iecvt38snDh5aoEVxqvVyrRZq2nNfbjlchl104SbsWmaICJUqhWslkqwbQvRgdi9SEg/vfDplY4/QwQEBOzJv0dq2AheXqBOAAAAAElFTkSuQmCC"}),Object(t.jsx)("h1",{children:"Recipe Book"}),Object(t.jsxs)("form",{className:"search-form",onSubmit:e=>{e.preventDefault(),d(A)},children:[Object(t.jsx)("input",{type:"text",className:"search-bar",value:A,onChange:e=>{s(e.target.value)}}),Object(t.jsx)("button",{type:"submit",className:"search-button",children:"Search"})]}),e.map(((e,c)=>Object(t.jsx)(n,{title:e.recipe.label,description:e.recipe.label,image:e.recipe.image,url:e.recipe.url},c)))]})})};d.a.render(Object(t.jsx)(s.a.StrictMode,{children:Object(t.jsx)(r,{})}),document.getElementById("root"))},9:function(e,c,A){}},[[11,1,2]]]);
//# sourceMappingURL=main.1ae72916.chunk.js.map