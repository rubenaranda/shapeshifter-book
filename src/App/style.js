import styled from '@emotion/styled'
import { withTheme } from '../helpers/styles.helper'
import background from '../assets/background-div.png'

export const Frame = styled.div`
${withTheme('font-family', 'fonts.body')}
${withTheme('margin-left', 'sizes.25')}
${withTheme('margin-right', 'sizes.25')}
margin-top: 4%;
margin-bottom: 5%;
padding-bottom: 10%;
background-image: url(${background});
font-weight: bold;
`

export const Headder = styled.div`
display: flex;
flex-direction: row;
align-items: center;
flex-wrap: wrap;
`

export const WebIcon = styled.img`
${withTheme('width', 'sizes.rem7')}
${withTheme('heigth', 'sizes.rem7')}
${withTheme('padding-left', 'sizes.rem3')}
`

export const Title = styled.h1`
${withTheme('font-family', 'fonts.title')}
text-align: center;
${withTheme('padding-top', 'sizes.rem1')}
${withTheme('font-size', 'sizes.rem5')}
width: 70%;
`
export const InformationBlock = styled.div`
text-align: center;
${withTheme('padding-top', 'sizes.rem3')}
`

export const Citations = styled.div`
${withTheme('padding-top', 'sizes.rem3')}
${withTheme('padding-left', 'sizes.rem1')}
${withTheme('padding-right', 'sizes.rem1')}
`
