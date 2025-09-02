import TabButton from "./TabButton/TabButton"
import { useState } from "react"

import { EXAMPLES } from "../data"

export default function Example() {
  // const [selectedTopic, setSelectedTopic] = useState('请选择上面的选项按钮')
  // const [selectedTopic, setSelectedTopic] = useState('Components')
  const [selectedTopic, setSelectedTopic] = useState()

  let tabContent = <p>请选择上面的选项按钮</p>

  if(selectedTopic){
    tabContent = (
      <div id="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>{EXAMPLES[selectedTopic].code}</code>
        </pre>
      </div>
    )
  }

  function handleSelected(selectedButton) {
    // selectedButton => 'Components', 'JSX', 'Props' 'State'
    setSelectedTopic(selectedButton)
    console.log(selectedTopic)
  }

  return (
    <section id='examples'>
      <menu>
        <TabButton
          isSelected={selectedTopic==='Components' ? true : false} 
          onSelected={() => handleSelected('Components')}>
            Components
        </TabButton>
        <TabButton
          isSelected={selectedTopic==='JSX' ? true : false} 
          onSelected={() => handleSelected('JSX')}>
            JSX
        </TabButton>
        <TabButton
          isSelected={selectedTopic==='Props' ? true : false} 
          onSelected={() => handleSelected('Props')}>
            Props
        </TabButton>
        <TabButton
          isSelected={selectedTopic==='State' ? true : false} 
          onSelected={() => handleSelected('State')}>
            State
        </TabButton>
      </menu>
      {/* {!selectedTopic ? <p>请选择上面的选项按钮</p> : (
        <div id="tab-content">
          <h3>{EXAMPLES[selectedTopic].title}</h3>
          <p>{EXAMPLES[selectedTopic].description}</p>
          <pre>
            <code>{EXAMPLES[selectedTopic].code}</code>
          </pre>
        </div>
      )} */}
      {tabContent}
    </section>
  )
}