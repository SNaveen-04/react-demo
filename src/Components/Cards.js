import { Grid } from "semantic-ui-react"
import { users } from "../Data"
import UserCard from "./UserCard"

const Test = () => {
  return (
    <div style={{padding:"4em"}}>
    <Grid columns={4} textAlign="center" verticalAlign="middle">
      {users.map((user,index)=>{
        return (
          <UserCard key={user.id} user={user}/>
        )
      })}
    </Grid>
    </div>
  )
}

export default Test