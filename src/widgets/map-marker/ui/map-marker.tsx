import { Button, Modal, ModalBody, ModalContent, ModalHeader, useDisclosure } from '@nextui-org/react'
import { YMapMarker } from 'src/features/ymaps/config'
import { Organization } from 'src/services-api'
import { FaBuilding } from 'react-icons/fa6'

type Props = {
    dto: Organization
}
const MapMarker: React.FC<Props> = props => {

    const {isOpen, onOpenChange, onOpen} = useDisclosure()

    return (
        <>
            <YMapMarker coordinates={[props.dto.latitude, props.dto.longitude]}>
                <Button onClick={onOpen} variant='solid' color='primary' isIconOnly size='lg'>
                    <FaBuilding/>
                </Button>
            </YMapMarker>
            <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
                <ModalContent>
                    <ModalHeader>Организация {props.dto.title}</ModalHeader>
                    <ModalBody>
                        <span>{props.dto.description}</span>
                        <span><strong>Координаты: </strong>{props.dto.latitude}, {props.dto.longitude}</span>
                        <span><strong>E-mail: </strong>{props.dto.email}</span>
                        <span><strong>Телефон: </strong>{props.dto.phone}</span>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    )
}
export default MapMarker