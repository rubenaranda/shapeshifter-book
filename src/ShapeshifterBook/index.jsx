import { Frame, Title, InformationBlock, Citations, WebIcon, Headder } from './style'
import CitationData from '../Citation'
import Button from '../GenericButton'
import webIcon from '../assets/web-icon.png'
import { useState } from 'react'
const ShapeshifterBookApp = ({ setBookData }) => {
  const [reroll, setReroll] = useState(1)
  console.log(typeof setBookData)

  const handleClick = () => {
    setReroll(reroll + 1)
  }

  return (
    <Frame className='frame'>
      <Headder>
        <WebIcon src={webIcon} />
        <Title>The Shapeshifter Book</Title>
        <InformationBlock>Choose the citation that most catches your attention, and discover a new world in which to immerse yourself!</InformationBlock>
      </Headder>
      <Citations key={reroll}>
        <CitationData setBookData={setBookData} />
        <CitationData setBookData={setBookData} />
        <CitationData setBookData={setBookData} />
      </Citations>
      <Button text='Reroll!' onClick={handleClick} />
    </Frame>
  )
}

export default ShapeshifterBookApp
