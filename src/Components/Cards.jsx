import { Grid } from "semantic-ui-react"
import users from '../Data.json'
import UserCard from "./UserCard"
import Header from "./Header"
import styles from '../styles/app.module.css'

const Test = () => {
  return (
    <div>
    <Header data='Card'/>
    <div className={styles.CardContainer}>
    <Grid  columns={4} textAlign="center" verticalAlign="middle">
      {users.map(({id,...rest})=><UserCard key={id} user={rest}/>)}
    </Grid>
    </div>
    </div>
  )
}

export default Test