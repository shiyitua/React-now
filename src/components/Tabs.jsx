export default function Tabs({children, button, /*buttonContainer,*/ ButtonContainer}) {
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