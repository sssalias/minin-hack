import { NewsItem } from 'src/entities/news'

const NewsList: React.FC = () => {
    return (
        <div className='flex flex-col gap-2'>
            <NewsItem/>
        </div>
    )
}
export default NewsList