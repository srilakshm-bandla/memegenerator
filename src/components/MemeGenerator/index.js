import {Component} from 'react'
import {
  GenerateWrapper,
  GenerateContainer,
  Heading,
  Label,
  Input,
  DropDown,
  GenerateButton,
  TopHeading,
  BottomHeading,
} from './styledComponents'

const fontSizesOptionsList = [
  {
    optionId: '8',
    displayText: '8',
  },
  {
    optionId: '12',
    displayText: '12',
  },
  {
    optionId: '16',
    displayText: '16',
  },
  {
    optionId: '20',
    displayText: '20',
  },
  {
    optionId: '24',
    displayText: '24',
  },
  {
    optionId: '28',
    displayText: '28',
  },
  {
    optionId: '32',
    displayText: '32',
  },
]
// Write your code here
class MemeGenerator extends Component {
  state = {
    fontSize: fontSizesOptionsList[0].optionId,
    imgUrl: '',
    topText: '',
    bottomText: '',
  }

  onChangeFontsize = event => {
    this.setState({fontSize: event.target.value})
  }

  onchangeTopText = event => {
    this.setState({topText: event.target.value})
  }

  changeBottomText = event => {
    this.setState({bottomText: event.target.value})
  }

  changeImage = event => {
    this.setState({imgUrl: event.target.value})
  }

  onClickGenerate = () => {
    this.renderMeme()
  }

  renderMeme = () => {
    const {fontSize, imgUrl, topText, bottomText} = this.state

    return (
      <GenerateWrapper imgUrl={imgUrl} data-testid="meme">
        <TopHeading fontSize={fontSize}>{topText}</TopHeading>
        <BottomHeading fontSize={fontSize}>{bottomText}</BottomHeading>
      </GenerateWrapper>
    )
  }

  render() {
    const {fontSize, imgUrl, topText, bottomText} = this.state

    return (
      <GenerateContainer>
        <Heading>Meme Generator</Heading>
        <label htmlFor="Image URL">Image URL</label>
        <input
          type="text"
          name="imgUrl"
          placeholder="Enter the Image URL"
          onChange={this.changeImage}
          value={imgUrl}
        />
        <label htmlFor="topText">Top Text</label>
        <input
          type="text"
          name="topText"
          placeholder="Enter the Top Text"
          onChange={this.onchangeTopText}
          value={topText}
        />
        <label htmlFor="bottomText">Bottom Text</label>
        <input
          type="text"
          name="bottomText"
          placeholder="Enter the Bottom Text"
          onChange={this.changeBottomText}
          value={bottomText}
        />
        <label htmlFor="fontsize">Font Size</label>
        <select value={fontSize} onChange={this.onChangeFontsize}>
          {fontSizesOptionsList.map(each => (
            <option key={each.optionId} value={each.optionId}>
              {each.displayText}
            </option>
          ))}
        </select>
        <GenerateButton onClick={this.onClickGenerate}>Generate</GenerateButton>
        <div>{this.renderMeme()}</div>
      </GenerateContainer>
    )
  }
}

export default MemeGenerator
