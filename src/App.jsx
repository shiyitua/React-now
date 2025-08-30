import Header from './components/Header/Header'
import CoreConcept from './components/CoreConcept/CoreConcept'
import TabButton from './components/TabButton/TabButton'

import { CORE_CONCEPTS } from './data'



function App() {
  function handleSelected() {
    console.log(`Hello ${this}`)
  }
  return (
    <>
      <Header></Header>
      <main>
        <section id='core-concepts'>
          <h2>核心概念</h2>
          <ul>
            <CoreConcept
              title={CORE_CONCEPTS[0].title}
              description={CORE_CONCEPTS[0].description}
              img={CORE_CONCEPTS[0].image}
            />
            <CoreConcept
              title={CORE_CONCEPTS[1].title}
              description={CORE_CONCEPTS[1].description}
              img={CORE_CONCEPTS[1].image}
            />
            <CoreConcept
              title={CORE_CONCEPTS[2].title}
              description={CORE_CONCEPTS[2].description}
              img={CORE_CONCEPTS[2].image}
            />
            <CoreConcept
              title={CORE_CONCEPTS[3].title}
              description={CORE_CONCEPTS[3].description}
              img={CORE_CONCEPTS[3].image}
            />
          </ul>
        </section>
        <section id='examples'>
          <menu>
            <TabButton onSelected={handleSelected}>Components</TabButton>
            <TabButton onSelected={handleSelected}>JSX</TabButton>
            <TabButton onSelected={handleSelected}>Props</TabButton>
            <TabButton onSelected={handleSelected}>State</TabButton>
          </menu>
        </section>
      </main>
    </>
  )
}

export default App