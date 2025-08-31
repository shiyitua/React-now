import Header from './components/Header/Header'
import CoreConcept from './components/CoreConcept/CoreConcept'
import TabButton from './components/TabButton/TabButton'
import { useState } from 'react'

import { CORE_CONCEPTS, EXAMPLES } from './data'



function App() {
  // const [selectedTopic, setSelectedTopic] = useState('请选择上面的选项按钮')
  // const [selectedTopic, setSelectedTopic] = useState('Components')
  const [selectedTopic, setSelectedTopic] = useState()

  function handleSelected(selectedButton) {
    // selectedButton => 'Components', 'JSX', 'Props' 'State'
    setSelectedTopic(selectedButton)
    console.log(selectedTopic)
  }

  return (
    <>
      <Header></Header>
      <main>
        <section id='core-concepts'>
          <h2>核心概念</h2>
          <ul>
            {CORE_CONCEPTS.map((conceptItem) => (
              <CoreConcept 
                key={conceptItem.title} 
                {...conceptItem} 
              />
            ))}
            {/* <CoreConcept
              title={CORE_CONCEPTS[0].title}
              description={CORE_CONCEPTS[0].description}
              img={CORE_CONCEPTS[0].img}
            />
            <CoreConcept {...CORE_CONCEPTS[1]}></CoreConcept>
            <CoreConcept {...CORE_CONCEPTS[2]}></CoreConcept>
            <CoreConcept {...CORE_CONCEPTS[3]}></CoreConcept> */}
          </ul>
        </section>
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
          {!selectedTopic ? <p>请选择上面的选项按钮</p> : (
            <div id="tab-content">
              <h3>{EXAMPLES[selectedTopic].title}</h3>
              <p>{EXAMPLES[selectedTopic].description}</p>
              <pre>
                <code>{EXAMPLES[selectedTopic].code}</code>
              </pre>
            </div>
          )}
        </section>
      </main>
    </>
  )
}

export default App