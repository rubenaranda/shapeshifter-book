import styled from '@emotion/styled'
import { withTheme } from '../helpers/styles.helper'

export const Frame = styled.div`
${withTheme('font-family', 'fonts.body')}
${withTheme('margin-left', 'sizes.25')}
${withTheme('margin-right', 'sizes.25')}
font-weight: bold;
`
export const WebIcon = styled.img`

`

export const Title = styled.h1`
${withTheme('font-family', 'fonts.title')}
text-align: center;
${withTheme('padding-top', 'sizes.rem1')}
${withTheme('font-size', 'sizes.rem3')}
`
export const InformationBlock = styled.div`
text-align: center;
${withTheme('padding-top', 'sizes.rem3')}
`

export const Citations = styled.div`
${withTheme('padding-top', 'sizes.rem3')}
`
export const Citation = styled.p`
${withTheme('padding-top', 'sizes.rem5')}
`
