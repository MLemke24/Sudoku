import 'styled-components'

import {theme } from '../styles-main'

type Theme = typeof theme;

declare module 'styled-components' {
    export interface DefaultTheme extends Theme {
        
    }
}