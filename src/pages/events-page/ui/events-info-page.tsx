import { MainLayout } from 'src/layouts'
import { Container } from 'src/shared/ui'

const EventsInfoPage: React.FC = () => {
    return (
        <MainLayout>
            <Container>
                <div className='flex flex-col gap-4 mb-[100px]'>
                    <h1 className='text-2xl font-semibold'>Мероприятие да</h1>
                </div>
            </Container>
        </MainLayout>
    )
}
export default EventsInfoPage