import { Card, CardBody } from '@nextui-org/react'
import { News } from 'src/services-api'

type Props = {
    dto: News
}
const NewsItem: React.FC<Props> = props => {
    return (
        <Card shadow='sm'>
            <CardBody>
                <h2 className='text-xl font-semibold'>{props.dto.title}</h2>
                <span>{props.dto.description}</span>
            </CardBody>
        </Card>
    )
}
export default NewsItem