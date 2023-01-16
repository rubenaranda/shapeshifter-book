import GetCitationData from '../GetCitationData'
import { Frame, Title, InformationBlock, Citations, Citation } from './style'
import Button from '../GenericButton'
import webIcon from '../assets/web-icon.png'

const baseURL = 'https://cors-anywhere.herokuapp.com/https://api.hamatim.com/quote'

const ShapeshifterBookApp = () => {
  return (
    <Frame className='frame'>
      <img src={webIcon} />
      <Title>The Shapeshifter Book</Title>
      <InformationBlock>Choose the citation that most catches your attention, and discover a new world in which to immerse yourself!</InformationBlock>
      <Citations>
        <Citation>To tell you the truth, I used to consider it a disgrace to be found ignorant by other people. But now, I find that I am not ashamed of knowing less than others, and I'm less inclined to force myself to read books. In short, I have grown old and decrepit.</Citation>
        <Citation>Test 2</Citation>
        <Citation>Booksellers are the most valuable destination for the lonely, given the numbers of books written because authors couldn't find anyone to talk to.</Citation>
      </Citations>
      <Button text='Reroll!' onClick={() => console.log('hola')} />
    </Frame>
  )
}

export default ShapeshifterBookApp
