import { Frame, Title, InformationBlock, Citations, WebIcon, Headder } from './style'
import CitationData from '../Citation'
import Button from '../GenericButton'
import webIcon from '../assets/web-icon.png'
import { useEffect, useState } from 'react'

const ShapeshifterBookApp = () => {
  // const [reroll, setReroll] = useState(false)
  // const [isReroll, setIsReroll] = useState(false)
  // useEffect(() => {
  //   setIsReroll(true)
  // }, [reroll])

  return (
    <Frame className='frame'>
      <Headder>
        <WebIcon src={webIcon} />
        <Title>The Shapeshifter Book</Title>
        <InformationBlock>Choose the citation that most catches your attention, and discover a new world in which to immerse yourself!</InformationBlock>
      </Headder>
      <Citations>
        <CitationData />
        <CitationData />
        <CitationData />
      </Citations>
      <Button text='Reroll!' onClick={() => console.log('hola')} />
    </Frame>
  )
}

export default ShapeshifterBookApp
