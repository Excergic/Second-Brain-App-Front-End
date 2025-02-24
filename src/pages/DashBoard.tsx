
import { Button } from '../Components/ui/Button'
import { PlusIcon } from '../Icons/PlusIcon'
import { ShareIcon } from '../Icons/ShareIcon'
import { Card } from '../Components/ui/Card'
import { CreateContentModal } from '../Components/ui/CreateContentModal'
import { useState } from 'react'
import { SideBar } from '../Components/ui/SideBar'

export function DashBoard() {
  const [ modalOpen, setModalOpen ] = useState(false);
  return <>
  <div>
    <SideBar />
    <div className='p-4 ml-72 min-h-screen bg-gray-100 border-2'>
        <CreateContentModal open = {modalOpen} onClose={() => setModalOpen(false)} />
      <div className='flex justify-end gap-4'>

    <Button 
          variant='primary' 
          title='Add Content' 
          size='md' 
          startIcon={<PlusIcon size= "md" />}
          onclick={() => {
            setModalOpen(true)
          }}  
      />

    <Button
          variant='secondary' 
          title='Share Brain' 
          size='md' 
          startIcon={<ShareIcon size= "md" />} 
        />
        </div>
        <div className='flex gap-4'>
              <Card title='elon tweet' link='https://x.com/elonmusk/status/1893810875875889507' type='twitter'  />
              <Card title='lex Fridman with levels' link='https://www.youtube.com/watch?v=oFtjKbXKqbg' type='youtube'  /></div>
              </div>
    </div>
</>

  
}

export default DashBoard
