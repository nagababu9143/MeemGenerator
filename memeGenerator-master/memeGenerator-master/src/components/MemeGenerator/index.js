import {Component} from 'react'
import {
  LabelComponent,
  InputComponent,
  HeadingComponent,
  FormComponent,
  BgContainerComponent,
  OptionComponent,
  ButtonComponent,
  OutputContainer,
  Paragraph,
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
    bottomText: '',
    topText: '',
    imageUrl: '',
    fontSize: fontSizesOptionsList[0].optionId,
    isGenerated: false,
  }

  onImageUrlChange = event => {
    this.setState({imageUrl: event.target.value})
  }

  onTopTextChange = event => {
    this.setState({topText: event.target.value})
  }

  onBottomTextChange = event => {
    this.setState({bottomText: event.target.value})
  }

  onFontSizeChange = event => {
    this.setState({fontSize: event.target.value})
  }

  onSubmitForm = event => {
    event.preventDefault()
    this.setState({isGenerated: true})
  }

  render() {
    const {fontSize, bottomText, topText, imageUrl, isGenerated} = this.state
    return (
      <BgContainerComponent>
        <FormComponent onSubmit={this.onSubmitForm}>
          <HeadingComponent>Meme Generator</HeadingComponent>
          <LabelComponent htmlFor="image">Image Url</LabelComponent>
          <InputComponent
            id="image"
            placeholder="Enter Image Url"
            onChange={this.onImageUrlChange}
            value={imageUrl}
          />

          <LabelComponent htmlFor="topText">Top Text</LabelComponent>
          <InputComponent
            id="topText"
            placeholder="Enter Top Text"
            onChange={this.onTopTextChange}
            value={topText}
          />

          <LabelComponent htmlFor="bottomText">Bottom Text</LabelComponent>
          <InputComponent
            id="bottomText"
            placeholder="Enter Bottom Text"
            onChange={this.onBottomTextChange}
            value={bottomText}
          />

          <LabelComponent htmlFor="bottomText">Font Size</LabelComponent>
          <OptionComponent onChange={this.onFontSizeChange} value={fontSize}>
            {fontSizesOptionsList.map(each => (
              <option key={each.optionId}>{each.displayText}</option>
            ))}
          </OptionComponent>
          <ButtonComponent type="submit">Generate</ButtonComponent>
        </FormComponent>
        {isGenerated && (
          <OutputContainer bgImage={imageUrl} data-testid="meme">
            <Paragraph size={fontSize}>{topText}</Paragraph>
            <Paragraph size={fontSize}>{bottomText}</Paragraph>
          </OutputContainer>
        )}
      </BgContainerComponent>
    )
  }
}

export default MemeGenerator
