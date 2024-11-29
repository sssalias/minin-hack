import { Card, CardBody } from '@nextui-org/react'
import { Link } from 'react-router-dom'

type Props = {
    
}
const EventItem: React.FC<Props> = props => {
    return (
        <Link to={`/events/asfsaf`}>
            <Card shadow='sm'>
                <CardBody>EventItem</CardBody>
            </Card>
        </Link>
    )
}
export default EventItem