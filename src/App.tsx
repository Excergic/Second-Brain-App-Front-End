
import { Button } from './Components/ui/Button'
import { PlusIcon } from './Icons/PlusIcon'

function App() {
  return <>
    <Button startIcon={<PlusIcon size='md'/>} variant = 'primary' text = 'Add Content' size='md' />
    <Button variant = 'secondary' text = 'Share'  size='md'/>
  </>
}

export default App
