import { Link } from 'react-router-dom'
import { NAV } from 'src/shared/libs'
import { Container } from 'src/shared/ui'
import { Logo } from 'src/widgets/logo'

const Header: React.FC = () => {
    return (
        <header className='w-screen fixed h-[100px] top-0 bg-white shadow-md z-[10]'>
            <Container>
                <div className='w-full h-full flex justify-between items-center'>
                    <Logo/>
                    <nav className='flex gap-2 items-center'>
                        {NAV.map(element => {
                            if (element.icon) {
                                return (
                                    <Link to={element.link}>
                                        <i>
                                            {element.icon}
                                        </i>
                                    </Link>
                                )
                            } else {
                                return (
                                    <Link to={element.link}>
                                        <span>
                                            {element.title}
                                        </span>
                                    </Link>
                                )
                            }
                        })}
                    </nav>
                </div>
            </Container>
        </header>
    )
}
export default Header