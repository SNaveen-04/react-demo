import { useState } from "react"
import { Button, Confirm, Icon } from "semantic-ui-react"

const Steps = () => {
    const [open,setOpen] = useState(false)
    const handleClick = () =>{
        setOpen(!open)
    }
  return (
    <div>
        <Button onClick={handleClick}>Confirm</Button>
        <Confirm
            open={open}
            onClose={handleClick}
            onConfirm={()=>{
                handleClick();
                alert('confirmed')
            }}
        />
        <Icon loading name="spinner"/>
    </div>
  )
}

export default Steps