import { Button } from '@mui/material'
function App() {
  return (
    <>
      <Button variant="text">Text</Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined" sx={{ color: 'red' }} >Outlined</Button>
    </>
  )
}

export default App
