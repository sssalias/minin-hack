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
    },
    {
        id: 'afsafsaf',
        title: 'Ещё одна очень крутая новость',
        description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Id obcaecati, corporis error veritatis, dignissimos non repellat molestias tenetur similique dolorem nesciunt earum perferendis repudiandae sunt mollitia dolorum nihil beatae eos. 
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Id obcaecati, corporis error veritatis, dignissimos non repellat molestias tenetur similique dolorem nesciunt earum perferendis repudiandae sunt mollitia dolorum nihil beatae eos.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Id obcaecati, corporis error veritatis, dignissimos non repellat molestias tenetur similique dolorem nesciunt earum perferendis repudiandae sunt mollitia dolorum nihil beatae eos.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Id obcaecati, corporis error veritatis, dignissimos non repellat molestias tenetur similique dolorem nesciunt earum perferendis repudiandae sunt mollitia dolorum nihil beatae eos.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Id obcaecati, corporis error veritatis, dignissimos non repellat molestias tenetur similique dolorem nesciunt earum perferendis repudiandae sunt mollitia dolorum nihil beatae eos.`,
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