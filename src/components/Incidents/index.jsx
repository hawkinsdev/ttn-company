import React, { useState} from "react";
import { PropTypes } from 'prop-types'
import { ContentMain, TitleHeader, Card, CardTable, Acordeon, IconArrow,
    AcordeonBody, InputAcordeon, SelectAcordeon, OptionAcordeon, Table,
    THead, TBody, Th, Tr, Td, ButtonAdd, Icon
} from './styled'
import ArrowDown from '../../assets/icons/arrowDown.png'
import ArrowUp from '../../assets/icons/arrowTop.png'
import AddIncident from '../../assets/icons/addIncident.png'
import Detail from '../../assets/icons/detail.png'
import About from '../../assets/icons/about.png'
import ReactToolTip from 'react-tooltip'
import { ModalDetail } from './Modal' 
import { RegisterIncident } from './RegisterIncident'

export const IncidentsV = ({
    data: {
        Incidents,
        showModal,
        showRegister,
        values
    },
    setShowModal,
    setShowRegister,
    handleChange,
    createIncident
}) => {
    const [showAcordeon, setShowAcordeon ] = useState(false)
    return (
        <ContentMain>
            {showRegister ? <RegisterIncident handleChange={handleChange} values={values} createIncident={createIncident}/>
            :<>
                {showModal && <ModalDetail setShowModal={setShowModal} />}
                <TitleHeader>Incidentes</TitleHeader>
                <ButtonAdd onClick={() => setShowRegister(true)}>
                    Nuevo incidente 
                    <Icon src={AddIncident}/>
                </ButtonAdd>
                <Card>
                    <CardTable>
                        <Acordeon>
                            <IconArrow src={!showAcordeon ? ArrowDown : ArrowUp} onClick={() => setShowAcordeon(!showAcordeon)}/>
                        </Acordeon>
                        <AcordeonBody style={{...( !showAcordeon ? {display: 'none'} : {}) }}>
                            <InputAcordeon type='text' placeholder='Fecha de Inicio'/>   
                            <InputAcordeon type='text' placeholder='Fecha de Fin'/>   
                            <SelectAcordeon>
                                <OptionAcordeon>Estado</OptionAcordeon>
                            </SelectAcordeon>  
                            <InputAcordeon type='text' placeholder='No. Programación'/>   
                            <InputAcordeon type='text' placeholder='ID paciente'/>   
                            <SelectAcordeon>
                                <OptionAcordeon>Cirujano</OptionAcordeon>
                            </SelectAcordeon>    
                            <SelectAcordeon>
                                <OptionAcordeon>Tracking</OptionAcordeon>
                            </SelectAcordeon>  
                            <SelectAcordeon>
                                <OptionAcordeon>Condicion</OptionAcordeon>
                            </SelectAcordeon>  
                            <InputAcordeon type='text' placeholder='Recuento'/>   
                        </AcordeonBody>
                        <Table>
                            <THead>
                                <Tr>
                                    <Th>Nombre reportante</Th>
                                    <Th>Cargo</Th>
                                    <Th>Sede</Th>
                                    <Th>Paciente</Th>
                                    <Th>Fecha incidente</Th>
                                    <Th>Descripcion incidente</Th>
                                    <Th></Th>
                                </Tr>
                            </THead>
                            <TBody>
                                {Incidents?.map((x, i) => 
                                    <Tr key={i}>
                                        <Td>{x?.reporter}</Td>
                                        <Td>{x?.charge}</Td>
                                        <Td>{x?.campus}</Td>
                                        <Td>{x?.patient}</Td>
                                        <Td>{x?.dateInc}</Td>
                                        <Td>{x?.summaryInc}</Td>
                                        <Td>
                                            <Icon src={About} data-tip data-for='tooltip' />
                                            <ReactToolTip id="tooltip" place="top" effect="solid" backgroundColor="white" textColor="#6E6F7C  ">
                                                Insumos vencidos
                                            </ReactToolTip>
                                        </Td>
                                        <Td>
                                            <Icon src={Detail} width='4px' height={12} style={{cursor: 'pointer'}} onClick={() => setShowModal(!showModal)}/>
                                        </Td>
                                    </Tr>
                                )}
                            </TBody>
                        </Table>
                    </CardTable>
                </Card>
            </>}
        </ContentMain>
    )
}

IncidentsV.propTypes = {
    data: PropTypes.object,
    setShowModal: PropTypes.func,
    setShowRegister: PropTypes.func,
    handleChange: PropTypes.func,
    createIncident: PropTypes.func
}