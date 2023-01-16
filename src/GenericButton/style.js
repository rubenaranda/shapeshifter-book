import styled from '@emotion/styled'
import { withTheme } from '../helpers/styles.helper'

export const ButtonPosition = styled.button`
${withTheme('margin-top', 'sizes.rem3')}
${withTheme('margin-right', 'sizes.rem1')}
${withTheme('padding-right', 'sizes.rem1')}
${withTheme('padding-left', 'sizes.rem1')}
position: absolute;
${withTheme('right', 'sizes.25')}
text-align: center;
border-radius:0.5rem;
${withTheme('font-family', 'fonts.body')}
${withTheme('font-size', 'sizes.rem1')}
${withTheme('border-color', 'colors.lightBeige')}
${withTheme('background-color', 'colors.darkBeige')}
font-weight: bold;
`
