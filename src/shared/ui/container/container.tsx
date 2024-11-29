type Props = {
    children: React.ReactNode
}
const Container: React.FC<Props> = props => {
    return (
        <div className='w-3/4 h-full mx-auto'>
            {props.children}
        </div>
    )
}
export default Container