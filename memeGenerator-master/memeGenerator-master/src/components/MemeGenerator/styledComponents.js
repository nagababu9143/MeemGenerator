// Style your components here
import styled from 'styled-components'

export const BgContainerComponent = styled.div`
  margin: 20px;
  min-height: 100vh;
  display: flex;
`

export const FormComponent = styled.form`
  display: flex;
  flex-direction: column;
  margin: 20px;
  min-width: 50vw;
`

export const HeadingComponent = styled.h1`
  font-family: 'Open Sans';
  color: #35469c;
`

export const LabelComponent = styled.label`
  font-family: 'Open Sans';
  color: #7e858e;
  margin-bottom: 5px;
`

export const InputComponent = styled.input`
  margin-bottom: 15px;
  height: 30px;
  width: 250px;
  border: 1px solid #d7dfe9;
  color: #7e858e;
  border-radius: 5px;
  padding: 5px;
  outline: none;
`
export const OptionComponent = styled.select`
  margin-bottom: 15px;
  height: 30px;
  width: 250px;
  border: 1px solid #d7dfe9;
  color: #7e858e;
  border-radius: 5px;
  padding: 5px;
  outline: none;
`
export const ButtonComponent = styled.button`
  background-color: #0b69ff;
  color: #ffffff;
  font-family: 'Open Sans';
  border: 0;
  border-radius: 5px;
  height: 30px;
  width: 100px;
  cursor: pointer;
`
export const OutputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 500px;
  height: 500px;
  background-image: url(${props => props.bgImage});
  background-size: cover;
`

export const Paragraph = styled.p`
  font-size: ${props => props.size}px;
  color: white;
  font-family: 'Open Sans';
`
