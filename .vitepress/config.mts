import { defineConfig } from 'vitepress'

const sidebar = [
  { text: "1. ECMAScript 6简介", link: "/intro" },
  { text: "2. let 和 const 命令", link: "/let" },
  { text: "3. 变量的解构赋值", link: "/destructuring" },
  { text: "4. 字符串的扩展", link: "/string" },
  { text: "5. 字符串的新增方法", link: "/string-methods" },
  { text: "6. 正则的扩展", link: "/regex" },
  { text: "7. 数值的扩展", link: "/number" },
  { text: "8. 函数的扩展", link: "/function" },
  { text: "9. 数组的扩展", link: "/array" },
  { text: "10. 对象的扩展", link: "/object" },
  { text: "11. 对象的新增方法", link: "/object-methods" },
  { text: "12. 运算符的扩展", link: "/operator" },
  { text: "13. Symbol", link: "/symbol" },
  { text: "14. Set 和 Map 数据结构", link: "/set-map" },
  { text: "15. Proxy", link: "/proxy" },
  { text: "16. Reflect", link: "/reflect" },
  { text: "17. Promise 对象", link: "/promise" },
  { text: "18. Iterator 和 for...of 循环", link: "/iterator" },
  { text: "19. Generator 函数的语法", link: "/generator" },
  { text: "20. Generator 函数的异步应用", link: "/generator-async" },
  { text: "21. async 函数", link: "/async" },
  { text: "22. Class 的基本语法", link: "/class" },
  { text: "23. Class 的继承", link: "/class-extends" },
  { text: "24. Module 的语法", link: "/module" },
  { text: "25. Module 的加载实现", link: "/module-loader" },
  { text: "26. 编程风格", link: "/style" },
  { text: "27. 读懂规格", link: "/spec" },
  { text: "28. 异步遍历器", link: "/async-iterator" },
  { text: "29. ArrayBuffer", link: "/arraybuffer" },
  { text: "30. 最新提案", link: "/proposals" },
  { text: "31. Decorator", link: "/decorator" },
  { text: "32. 参考链接", link: "/reference" }
]
// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "ES6教程",
  description: "ECMAScript 6 入门教程",
  base: '/es6-vps/',
  outDir: 'dist',
  cleanUrls: true,  //去掉url中的.html后缀
  srcDir: 'docs',
  ignoreDeadLinks: true,//忽略无效链接
  markdown: {
    theme: {
      light: 'vitesse-light',
      dark: 'vitesse-dark',
    },
    lineNumbers: true,
  },
  themeConfig: {
    search: {
      provider: 'local',
    },
    docFooter: {
      prev: '上一页',
      next: '下一页'
    },
    outline: 'deep',//侧边栏深度:数字或者deep
    outlineTitle: '文章目录',
    returnToTopLabel: '返回顶部',
    sidebar: sidebar,
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
