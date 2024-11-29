import { Footer } from 'src/widgets/footer'
import { Header } from 'src/widgets/header'

type Props = {  
    children: React.ReactNode
}
const MainLayout: React.FC<Props> = props => {
    return (
        <div className='w-screen'>
            <Header/>
            <main className='mt-[200px] min-h-[calc(100vh-100px-500px)]'>
                {props.children}
            </main>
            <Footer/>
        </div>
    )
}
export default MainLayout