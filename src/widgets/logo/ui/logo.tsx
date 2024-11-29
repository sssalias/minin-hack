import MininLogo from 'src/widgets/logo/assets/MininLogo.svg'

const Logo: React.FC = () => {
    return (
        <div className='h-[64px] w-[100px]'>
            <img className='w-full h-full object-cover' src={MininLogo} alt='logo' />
        </div>
    )
}
export default Logo