var result = `/*
 * 面试官你好，我是李弢
 * 我将以动画的形式来介绍我自己
 * 只用文字介绍太单调了
 * 我就用代码来介绍吧
 * 首先准备一些样式
 */

*{
  transition: all 1s;
}
html{
  background: rgb(222,222,222);
  font-size: 16px;
}
#code{
  border: 1px solid #aaa;
  padding: 16px;
}

/* 我需要一点代码高亮 */
.token.selector{
    color: #690;
}
.token.property{
    color: #905;
}
.token.function{
    color: #DD4A68;
}

/* 加点呼吸效果 */
#code{
  animation: breath 0.5s infinite alternate-reverse;
}
`
var result2 = `
/* 不玩了，我来自我介绍一下吧 */
/* 我需要一块黑板 */

#codeWrapper{
    width:50%;
    position:fixed;
    left:0;
}

#paper > #content{
    display: block;
}
/* 然后我就可以在黑板上写字了 */
    `
var result3 = `
/* 接下来我们使用 marked.js 将 Markdown 转为 HTML */
    `
var md = `
#### 自我介绍
***
李弢，自学前端开发半年，希望应聘前端岗位

#### 教育经历
***
1. 台湾辅仁大学 资讯工程学系 硕士
2. 北京林业大学 地理信息系统 本科

#### 技能介绍
***
熟悉 HTML CSS JavaScript Vue.js node.js Python

#### 项目介绍
***
1. 轮播
2. 导航页
3. 小画板

#### 联系方式
***
* 手机 xxx
`
var result3 = `
/* 接下来我们使用 marked.js 将 Markdown 转为 HTML */
    `
var result4 = `
/* 以上就是我的动态简历 */
/* 谢谢观看 */
    `
var md = `
#### 自我介绍
---
李弢，自学前端开发半年，希望应聘前端岗位

#### 教育经历
---
1. 台湾辅仁大学 资讯工程学系 硕士
2. 北京林业大学 地理信息系统 本科

#### 技能介绍
---
熟悉 HTML CSS JavaScript Vue.js node.js Python

#### 项目介绍
---
1. 轮播
2. 导航页
3. 小画板

#### 联系方式
---
* 手机 xxx
`

function writeCode(prefix, code, fn) {
    let domCode = document.querySelector('#code')
    let n = 0
    let id = setInterval(() => {
        n += 1
        domCode.innerHTML = Prism.highlight(prefix + code.substring(0, n), Prism.languages.css)
        styleTag.innerHTML = prefix + code.substring(0, n)
        domCode.scrollTop = domCode.scrollHeight
        if (n >= code.length) {
            window.clearInterval(id)
            fn.call()
        }
    },70)
}

function writeMarkdown(markdown, fn) {
    let domPaper = document.querySelector('#paper > #content')
    let n = 0
    let id = setInterval(()=>{
        n += 1
        domPaper.innerHTML = markdown.substring(0, n)
        domPaper.scrollTop = domPaper.scrollHeight
        if (n >= markdown.length) {
            window.clearInterval(id)
            fn.call()
        }
    },50)
}

writeCode('', result, ()=>{
    createPaper(()=>{
        writeCode(result, result2, ()=>{
            writeMarkdown(md,()=>{
                writeCode(result+result2, result3, ()=>{
                    markdownToHTML(()=>{
                        writeCode(result+result2+result3, result4 ,()=>{
                            console.log('完成')
                        })
                    })
                })
            })
        })
    })
})

function markdownToHTML(fn) {
    let content = document.querySelector('#paper > #content')
    content.innerHTML = marked(content.innerHTML)
    fn.call()
}

function createPaper(fn) {
    var paper = document.createElement('div')
    var content = document.createElement('pre')
    paper.id = 'paper'
    content.id = 'content'
    document.body.appendChild(paper)
    paper.appendChild(content)
    fn.call()
}

function fn3(preResult) {

    var n = 0
    var id = setInterval(()=>{
        n += 1
        code.innerHTML = preResult + result.substring(0,n)
        code.innerHTML = Prism.highlight(code.innerHTML, Prism.languages.css)
        styleTag.innerHTML = preResult + result.substring(0,n)
        if(n >= result.length){
            window.clearInterval(id)
        }
    },1)
}