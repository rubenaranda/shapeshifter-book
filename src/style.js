import styled from '@emotion/styled'
import { withTheme } from './helpers/styles.helpers'

export const Title = styled.h1`
${withTheme('font-family', 'fonts.title')}
${withTheme('padding-top', 'sizes.rem1')}
${withTheme('padding-left', 'sizes.rem11')}
${withTheme('font-size', 'sizes.rem5')}
width: 100%;
`

export const Author = styled.p`
${withTheme('font-family', 'fonts.body')}
${withTheme('font-size', 'sizes.rem2')}

`

export const Info = styled.p`
${withTheme('font-family', 'fonts.body')}
${withTheme('font-size', 'sizes.rem2')}

`

export const Description = styled.p`
${withTheme('font-family', 'fonts.body')}
${withTheme('font-size', 'sizes.rem1')}
${withTheme('margin-right', 'sizes.20')}
${withTheme('margin-top', 'sizes.negative')}
float: right;
font-weight: bold;
width: 25%;
`

export const LeftPage = styled.p`
${withTheme('margin-left', 'sizes.15')}
width: 30%;
`

export const BookImage = styled.p`
${withTheme('margin-left', 'sizes.55')}
height: 100px;
width: 200px;
`

export const NoResult = styled.p`
text-align: start;
${withTheme('margin-left', 'sizes.20')}
${withTheme('margin-top', 'sizes.20')}
${withTheme('font-family', 'fonts.body')}
${withTheme('font-size', 'sizes.rem2')}
`

export const ReturnButton = styled.p`
text-align: start;
${withTheme('margin-left', 'sizes.25')}
`