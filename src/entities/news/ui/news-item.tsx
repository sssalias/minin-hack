import { Card, CardBody } from '@nextui-org/react'
import { Link } from 'react-router-dom'

type Props = {
    
}
const NewsItem: React.FC<Props> = props => {
    return (
        <Link to={`/news/asfa`}>
            <Card shadow='sm'>
                <CardBody>
                    <h2 className='text-xl font-semibold'>У Артёма большой хуй</h2>
                    <span>Это круто да...</span>
                </CardBody>
            </Card>
        </Link>
    )
}
export default NewsItem