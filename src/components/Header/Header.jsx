import './Header.css'
import reactImg from '../../assets/react-core-concepts.png'

const reactDesc = ['基础的', '关键的', '核心的']

function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1))
}

export default function Header() {
  const description = reactDesc[genRandomInt(reactDesc.length - 1)]

  return (
    <header>
      <img src={reactImg} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>React{description}概念 是你将要构建的任何React app都需要的</p>
    </header>
  )
}