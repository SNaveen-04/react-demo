import { Card,CardDescription,CardHeader, CardMeta, Divider, GridColumn, Image } from "semantic-ui-react"
import img from '../assests/profile.jpg'
const UserCard = ({user}) =>{
    const {name,age,college} = user
    return(
      <GridColumn>
        <Card>
        <Image src={img} size='small' centered/>
        <Divider/>
          <CardHeader textAlign="center">
            {name}
          </CardHeader>
          <CardMeta textAlign="center">
            {age}
          </CardMeta>
          <CardDescription textAlign="center">
            {college}
          </CardDescription>
        </Card>
      </GridColumn>
    )
  }

export default UserCard;