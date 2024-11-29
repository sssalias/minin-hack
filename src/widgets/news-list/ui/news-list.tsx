import { NewsItem } from 'src/entities/news'
import { News } from 'src/services-api'

const news: News[] = [
    {
        id: 'afsafsaf',
        title: 'Крутая новость',
        description: 'Очень крутая новость',
        publish_data: '29.11.2024',
        media: [],
        organization_id: 'asfsaf'
    }
]

const NewsList: React.FC = () => {
    return (
        <div className='flex flex-col gap-2'>
            {news.map(dto => <NewsItem dto={dto}/>)}
        </div>
    )
}
export default NewsList