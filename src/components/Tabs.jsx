export default function Tabs({children, button, /*buttonContainer,*/ ButtonContainer='menu'}) {
  // const ButtonContainer = buttonContainer
  return (
    <>
      <ButtonContainer>
        {button}
      </ButtonContainer>
      {children}
    </>
  )
}