import './TabButton.css'

export default function TabButton(props) {
  return (
    <li>
      <button onClick={props.onSelected}>{props.children}</button>
    </li>
  )
}