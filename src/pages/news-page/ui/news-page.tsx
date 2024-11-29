import { MainLayout } from 'src/layouts'
import { Container } from 'src/shared/ui'
import { NewsList } from 'src/widgets/news-list'

const NewsPage: React.FC = () => {
    return (
        <MainLayout>
            <Container>
                <div className='mb-[100px] flex flex-col gap-10'>
                    <h1 className='text-2xl font-semibold'>Новости</h1>
                    <NewsList/>
                </div>
            </Container>
        </MainLayout>
    )
}
export default NewsPage