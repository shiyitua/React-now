import componentsImg from './assets/components.png'
import propsImg from './assets/config.png'
import jsxImg from './assets/jsx-ui.png'
import stateImg from './assets/state-mgmt.png'

export const CORE_CONCEPTS = [
  {
    img: componentsImg,
    title: 'Components',
    description: '核心UI构建块，通过组合多个组件来构建用户界面'
  },
  {
    img: jsxImg,
    title: 'JSX',
    description: '返回一个动态的HTML结构，来定义可渲染的确切的标签'
  },
  {
    img: propsImg,
    title: 'Props',
    description: '为组件增加可配置性，通过给组件传输属性数据来使组件可复用'
  },
  {
    img: stateImg,
    title: 'State',
    description: 'React管理数据何时改变，导致组件重新渲染或更新'
  },
]

export const EXAMPLES = {
  Components: {
    title: 'Components',
    description: '核心UI构建块，通过组合多个组件来构建用户界面',
    code: 
`function Welcome() {
  return <h1>Hello World</h1> 
}`
  },
  JSX: {
    title: 'JSX',
    description: '返回一个动态的HTML结构，来定义可渲染的确切的标签',
    code: 
`<div>
  <h1>Welcom {userName}</h1>
  <p>开始学习React</p>
</div>`
  },
  Props: {
    title: 'Props',
    description: '为组件增加可配置性，通过给组件传输属性数据来使组件可复用',
    code:
`function Welcome(props) {
  return <h1>Hello, {props.name}</h1>
}`
  },
  State: {
    title: 'State',
    description: 'React管理数据何时改变，导致组件重新渲染或更新',
    code: 
`function Counter() {
  const [isVisible, setIsVisible] = useState(false)

  function handleClick() {
    setIsVisible(true)
  }
  
  return (
    <div>
      <p class='isVisible'>这是一段样例</p>
    </div>
  )
}`
  }
}