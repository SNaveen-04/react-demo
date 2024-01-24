import { Grid } from "semantic-ui-react"
import { users } from "../Data"
import UserCard from "./UserCard"
import Header from "./Header"
import styles from '../styles/app.module.css'

const Test = () => {
  return (
    <div>
    <Header data='Card'/>
    <div className={styles.CardContainer}>
    <Grid  columns={4} textAlign="center" verticalAlign="middle">
      {users.map((user,index)=>{
        return (
          <UserCard key={user.id} user={user}/>
        )
      })}
    </Grid>
    </div>
    </div>
  )
}

export default Test