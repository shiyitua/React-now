import TabButton from "./TabButton/TabButton"
import { useState } from "react"
import Section from "./Section"
import Tabs from "./Tabs"

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
    <Section id='examples' title="示例">
      <Tabs
        // buttonContainer='menu'
        button={
          <>
            <TabButton
              isSelected={selectedTopic==='Components' ? true : false} 
              onClick={() => handleSelected('Components')}>
                Components
            </TabButton>
            <TabButton
              isSelected={selectedTopic==='JSX' ? true : false} 
              onClick={() => handleSelected('JSX')}>
                JSX
            </TabButton>
            <TabButton
              isSelected={selectedTopic==='Props' ? true : false} 
              onClick={() => handleSelected('Props')}>
                Props
            </TabButton>
            <TabButton
              isSelected={selectedTopic==='State' ? true : false} 
              onClick={() => handleSelected('State')}>
                State
            </TabButton>
          </>
        }
      />
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
    </Section>
  )
}