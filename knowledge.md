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

为按钮或其他页面元素添加事件时，应该只是使用事件处理函数的函数名，而不应该加`()`，
加上`()`表示立即执行调用该函数，
不加`()`表示将该函数以地址传递的形式传递给该按钮事件监听器，当代码执行到该行时，只是定义了一个函数，并将其绑定到按钮的事件监听器上，当按钮被点击时才会触发该事件处理函数。如下：

```js
function handleSelected() {
	console.log('自定义组件被点击') 
}

<TabButton onSelected={handleSelected}>Components</TabButton>
```

当然还有另一种用法，用来灵活操作事件处理函数，如下：

```js
function handleSelected(selectedButton) {
  console.log(`点击了${selectedButton}`)
}

<TabButton onSelected={()=>{handleSelected('Props')}}>Props</TabButton>
```

这样可以灵活的操作事件处理函数，此时可以给事件处理函数传递参数，
当代码执行到此行时，事件处理函数并不会立即触发执行，因为它是被包裹在箭头函数中，
当代码执行到此行时，只是定义了外层的箭头函数，而且该箭头函数并不是立即执行函数，所以只是将该箭头函数绑定到了自定义组件的事件监听器上，当自定义组件被触发时，才会执行箭头函数，然后箭头函数中的`handleSelect`函数才会真正执行

默认情况下，React组件只渲染一次，所以当数据更新时，同时也需要重新渲染组件，此时我们需要告诉React该组件函数应该被重新渲染

而使用普通的变量，更新UI组件是失效的，因为该组件函数在默认情况下只执行一次，即使数据发生了改变，也不会重新执行和渲染
此时我们需要使用另一种方式告诉React，应该再次执行该组件函数，这种方式就是状态

## 状态

状态是关于注册变量的，也可以说这些变量是由React管理的，并且通过React提供的函数来更新，这个函数也会告诉React数据已经发生改变，因此React会更新UI

这些特殊的变量是通过一个特殊的函数创建的，这个函数必须从React库中导入，这个函数叫做`useState`，这是一个React钩子，所有钩子都是以`use`为前缀的函数

这些钩子的特殊之处在于：它们是技术上的正常函数，但它们只能在React组件函数中调用，或者在自定义钩子中调用

这些钩子函数必须在组件函数中的顶层调用，不能在任何其他代码中嵌套

`useState`钩子是React提供的最重要的钩子之一，它可以管理组件的一些特定状态。
当它被更改时，它会触发这个钩子所在的组件函数重新执行
