import componentsImg from './assets/components.png'
import propsImg from './assets/config.png'
import jsxImg from './assets/jsx-ui.png'
import stateImg from './assets/state-mgmt.png'

export const CORE_CONCEPTS = [
  {
    image: componentsImg,
    title: 'Components',
    description: '核心UI构建块，通过组合多个组件来构建用户界面'
  },
  {
    image: jsxImg,
    title: 'JSX',
    description: '返回一个动态的HTML结构，来定义可渲染的确切的标签'
  },
  {
    image: propsImg,
    title: 'Props',
    description: '为组件增加可配置性，通过给组件传输属性数据来使组件可复用'
  },
  {
    image: stateImg,
    title: 'State',
    description: 'React管理数据何时改变，导致组件重新渲染或更新'
  },

]