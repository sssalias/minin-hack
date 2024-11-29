import { Link } from 'react-router-dom'
import { NAV } from 'src/shared/libs'
import { Container } from 'src/shared/ui'
import { Logo } from 'src/widgets/logo'

const Footer: React.FC = () => {
    return (
        <footer className='w-screen bg-gray-50 h-[400px]'>
            <Container>
                <div className='w-full flex gap-24 py-14'>
                    <div>
                        <Logo/>
                    </div> 
                    <div className='flex flex-col gap-2'>
                        {NAV.slice(0, 3).map(el => <Link to={el.link}>{el.title}</Link> )}
                    </div>
                    <div className='flex flex-col gap-2'>
                        {NAV.slice(3, 6).map(el => <Link to={el.link}>{el.title}</Link> )}
                    </div>                   
                </div>
            </Container>
        </footer>
    )
}
export default Footer