// Style your components here
import styled from 'styled-components'

export const GenerateContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Heading = styled.h1`
  color: #35469c;
  font-family: 'Open Sans';
  font-weight: bold;
`

export const Label = styled.label`
  text-align: right;
  color: #7e858e;

  margin-bottom: 8px;
`

export const Input = styled.input`
  width: 200px;
  color: #7e858e;
  border-style: solid;
  border-color: #d7dfe9;
  border-radius: 3px;
  margin-top: 10px;
`

export const DropDown = styled.select`
  background: #ffffff;
  border: 2px solid #e5e5e5;
  box-sizing: border-box;
  width: 180px;
  height: 30px;
  font-size: 12px;
  font-weight: 500;
`
export const ListItem = styled.li`
  list-style-type: none;
  margin-bottom: 0.8em;
`
export const GenerateButton = styled.button`
  width: 100px;
  height: 28px;
  background-color: #0b69ff;
  border: none;
  border-radius: 4px;
  margin-bottom: 20px;
`

export const GenerateWrapper = styled.div`
  background-image: url(${props => props.imgUrl});
  width: 500px;
  height: 100vh;

  background-size: cover;
  background-repeat: no-repeat;
`

export const TopHeading = styled.h1`
  font-family: 'Open Sans';
  color: #ffffff;
  font-size: ${props => props.fontSize}${`px`};
`
export const BottomHeading = styled.h1`
  font-family: 'Open Sans';
  color: #ffffff;
  font-size: ${props => props.fontSize}${`px`};
`
