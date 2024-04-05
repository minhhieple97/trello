import { experimental_extendTheme as extendTheme } from '@mui/material/styles'

const theme = extendTheme({
  colorSchemes: {
    light: {
      palette: {
        primary: {
          main: '#fffff'
        }
      }
    },
    dark: {
      palette: {
        primary: {
          main: '#fffff'
        }
      }
    }
  }
})

export default theme