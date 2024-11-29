import { useEffect } from 'react'
import { getAllOrg } from 'src/entities/map'
import { MainLayout } from 'src/layouts'
import { Map } from 'src/widgets/map'

const MapPage: React.FC = () => {


    useEffect(() => {
        getAllOrg()
    }, [])

    return (
        <MainLayout>
            <div className='mt-[-100px] h-[calc(100vh-100px)]'>
                <Map/>
            </div>
        </MainLayout>
    )
}
export default MapPage