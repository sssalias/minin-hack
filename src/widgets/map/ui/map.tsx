import {YMap, YMapDefaultSchemeLayer, YMapDefaultFeaturesLayer} from 'src/features/ymaps/config'
import { useOrgStore } from 'src/store'
import { MapMarker } from 'src/widgets/map-marker'
import type {YMapLocationRequest} from 'ymaps3'

const LOCATION: YMapLocationRequest = {
    center: [43.998973, 56.330432],
    zoom: 12
}


const Map: React.FC = () => {

    const {data} = useOrgStore()

    return (
        <div className='w-full h-full'>
            <YMap location={LOCATION}>
                <YMapDefaultSchemeLayer />
                <YMapDefaultFeaturesLayer />
                {data.map(dto => <MapMarker dto={dto}/>)}
            </YMap>
        </div>
    )
}
export default Map