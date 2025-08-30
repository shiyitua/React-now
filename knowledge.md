## 组件

1.ESM，在ES模块中，若使用命名导出时，导入应该使用花括号的格式导入命名变量
如以下`data.js`文件：

```javascript
import componentsImg from './assets/components.png'
import propsImg from './assets/config.png'

export const CORE_CONCEPTS = [
  {
    img: componentsImg,
    title: 'Components',
    description: '组件是构成React用户界面的核心内容'
  },
  {
    img: propsImg,
    title: 'Props',
    description: 'Props是重用同一组件时需要传递的参数'
  }
]
```

那么在导入该文件数据时，应使用花括号的形式：

```js
import { CORE_CONCEPTS } from './data.js'
```

2.组件和`props`是相辅相成的，连在一起使用的，就如同函数和函数参数一样。
函数可以复用，参数就是在复用函数时传递的不同数据。
同理，组件也可以复用，`props`就是在复用组件时传递的不同数据
每个自定义组件都会接受一个`props`参数，即使你没有为组件设置任何属性，只不过此时的`props`对象就是一个空对象而已。如：

```js
export default function Header(props) {
  return (
  	<img src="" alt="" />
    <h1>这里是标题</h1>
    <p>这里是描述</p>
  )
}
```

3.`props`对象中有一个特殊的内置属性，即`children`，即使你没有对组件设置任何属性，这个属性依然是可以使用的，因为它是React设置的，不是通过属性设置的，是内置的
`children`属性仅仅指的是组件标签之间的内容，可以只是一些文本，也可以是一些复杂的`jsx`结构

3.React中的组件就是一个JavaScript函数，但这个特殊的函数需要遵循两个规则：
（1）函数名首字母大写
（2）返回一个可渲染的内容，通常是html元素
函数名首字母大写是为了和html内置元素做区分，因为html内置的元素如`div`, `span`, `p`, `section`, `header`, `main`等都是首字母小写的，React组件函数首字母大写是为了在使用时告诉React，该组件函数不是html内置元素，而是自定义的组件标签

## 组件事件

在组件内部定义事件处理函数的优势是：可以访问组件内部的`props`和`steate`
