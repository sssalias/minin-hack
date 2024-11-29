import { Card, CardBody } from '@nextui-org/react'
import { Link } from 'react-router-dom'

type Props = {
    
}
const EventItem: React.FC<Props> = props => {
    return (
        <Link to={`/events/asfsaf`}>
            <Card className='p-6' shadow='sm'>
                <CardBody>
                    <span>Крутое мероприятие</span>
                </CardBody>
            </Card>
        </Link>
    )
}
export default EventItem