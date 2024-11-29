import { MainLayout } from 'src/layouts'
import { Container } from 'src/shared/ui'

const EventsInfoPage: React.FC = () => {
    return (
        <MainLayout>
            <Container>
                <div className='flex flex-col gap-4 mb-[100px]'>
                    <h1 className='text-2xl font-semibold'>Крутое мероприятие</h1>
                    <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia odit, blanditiis exercitationem nulla minima beatae voluptates qui? Excepturi distinctio nisi reprehenderit ab aut, ducimus culpa sed, pariatur dolorem eos omnis.</span>
                </div>
            </Container>
        </MainLayout>
    )
}
export default EventsInfoPage