import React from 'react';
import { ModalContent, ModalBody, ModalButtonClose, ModalItem, Icon, ModalTitle,
    ModalInput, ModalSelect, ModalOption, ModalTextArea, ModalButton
} from './styled'
import { PropTypes } from 'prop-types'
import Close from '../../assets/icons/close.png'
 
export const ModalDetail = ({setShowModal}) => {
    return (
        <ModalContent>
            <ModalBody>
                <ModalItem>
                    <ModalTitle>Detalle de incidente</ModalTitle>
                    <ModalButtonClose onClick={() => setShowModal(false)}>
                        <Icon src={Close}/>
                    </ModalButtonClose>
                </ModalItem>
                <ModalItem>
                    <ModalInput type='text' placeholder='Nombre del insumo'/>
                    <ModalInput type='number' placeholder='Código'/>
                </ModalItem>
                <ModalItem>
                    <ModalSelect>
                        <ModalOption>Sede</ModalOption>
                    </ModalSelect>
                </ModalItem>
                <ModalItem height='35%'>
                    <ModalTextArea placeholder='Comentarios'></ModalTextArea>
                </ModalItem>
                <ModalItem justifyContent='center'>
                    <ModalButton>Solicitar</ModalButton>
                </ModalItem>
            </ModalBody>
        </ModalContent>
    )
}

ModalDetail.propTypes = {
    data: PropTypes.object
}
