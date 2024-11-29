import { MainLayout } from 'src/layouts'
import { Container } from 'src/shared/ui'

const ProfilePage: React.FC = () => {
    return (
        <MainLayout>
            <Container>
                <div className='flex gap-[400px]'>
                    <div className='flex flex-col gap-4'>
                        <h1 className='text-2xl font-semibold'>Профиль</h1>
                        <span>ГУСЕВ ГЕОРГИЙ</span>
                    </div>
                    <div className='flex flex-col gap-4'>
                        <h2 className='text-xl font-semibold'>Мероприятия</h2>
                        <span>Нет мероприятий</span>
                    </div>
                </div>
            </Container>
        </MainLayout>
    )
}
export default ProfilePage