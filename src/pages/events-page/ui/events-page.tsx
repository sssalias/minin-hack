import { MainLayout } from 'src/layouts'
import { Container } from 'src/shared/ui'
import { EventList } from 'src/widgets/event-list'

const EventsPage: React.FC = () => {
    return (
        <MainLayout>
            <Container>
                <div className='flex flex-col gap-6 mb-[100px]'>
                    <h1 className='text-2xl font-semibold'>Мероприятия</h1>
                    <EventList/>
                </div>
            </Container>
        </MainLayout>
    )
}
export default EventsPage