import { useState } from 'react'
import Btn from './Btn'
import { Button } from 'semantic-ui-react'
import Class from './Class'


const Home = () => {
  const [state,setState] = useState(true)
  return (
    <>
      state: {String(state)}
      <br/>
      <hr/>
      <h4>
        Update State within Component
      </h4>
      <Button onClick={()=>setState(!state)}>inner State</Button>
      <hr/>
      <Btn setState={setState}/>
      <hr/>
      {state &&<Class/>}
    </>
  )
}

export default Home 