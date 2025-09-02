import Section from "./Section"
import CoreConcept from "./CoreConcept/CoreConcept"

import { CORE_CONCEPTS } from "../data"

export default function CoreConcepts() {
  return (
    <Section id='core-concepts' title='核心概念'>
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
    </Section>
  )
}