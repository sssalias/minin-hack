import { EventItem } from 'src/entities/events'

const EventList: React.FC = () => {
    return (
        <div className='flex flex-col gap-2'>
            <EventItem/>
        </div>
    )
}
export default EventList