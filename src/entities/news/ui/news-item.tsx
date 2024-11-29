import { Card, CardBody, Modal, ModalBody, ModalContent, ModalHeader, useDisclosure } from '@nextui-org/react'
import { News } from 'src/services-api'

type Props = {
    dto: News
}
const NewsItem: React.FC<Props> = props => {

    const {isOpen, onOpenChange, onOpen} = useDisclosure()

    return (
        <>
            <Card isBlurred shadow='sm' className='p-4 cursor-pointer'>
                <CardBody onClick={onOpen}>
                    <h2 className='text-xl font-semibold'>{props.dto.title}</h2>
                    <span>{props.dto.description}</span>
                </CardBody>
            </Card>
            <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
                <ModalContent>
                    <ModalHeader>{props.dto.title}</ModalHeader>
                    <ModalBody>
                        <span>{props.dto.description}</span>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    )
}
export default NewsItem