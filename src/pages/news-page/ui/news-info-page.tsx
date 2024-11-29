import { useParams } from 'react-router-dom'
import { MainLayout } from 'src/layouts'
import { Container } from 'src/shared/ui'

const NewsInfoPage: React.FC = () => {

    const {id} = useParams()

    return (
        <MainLayout>
            <Container>
                <div className='flex flex-col gap-2 mb-[100px]'>
                    <h1 className='text-2xl font-semibold'>У Артёма большой хуй</h1>
                    <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse ratione omnis cumque voluptatum beatae aliquid optio magni accusamus maiores dolore iure, recusandae sequi, dolor dolores quibusdam impedit nihil placeat sed!</span>
                </div >
            </Container>
        </MainLayout>
    )
}
export default NewsInfoPage