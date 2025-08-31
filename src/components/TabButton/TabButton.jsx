import './TabButton.css'

export default function TabButton(props) {
  return (
    <li>
      <button 
        className={props.isSelected ? 'active' : ''} 
        onClick={props.onSelected}>{props.children}
      </button>
    </li>
  )
}