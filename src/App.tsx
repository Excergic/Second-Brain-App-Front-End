
import { Button } from './Components/ui/Button'
import { PlusIcon } from './Icons/PlusIcon'
import { ShareIcon } from './Icons/ShareIcon'

function App() {
  return <>

<Button 
      variant='primary' 
      title='Add Content' 
      size='md' 
      startIcon={<PlusIcon size= "md" />}  
   />

<Button 
      variant='secondary' 
      title='Share' 
      size='md' 
      startIcon={<ShareIcon size= "md" />} 
     />

</>

  
}

export default App
