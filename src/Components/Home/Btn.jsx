import { Button } from "semantic-ui-react"

const Btn = ({setState}) => {
  return (
    <>
      <h4>
        State update function passing through props
      </h4>
    <Button onClick={() => setState(prev => !prev)}>Update state in parent</Button>
    </>
  )
}

export default Btn