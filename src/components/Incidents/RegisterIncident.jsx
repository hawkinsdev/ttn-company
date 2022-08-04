import React, { useState } from 'react';
import { PropTypes } from 'prop-types'
import { RegisterContentMain, TitleHeader, Icon, CardStepper, ModalButton, CardStepContent,
    ModalInput, ModalSelect, ModalOption, ModalTextArea, ModalTitle, FormGroup, AlingButton
} from './styled'
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import ArrowLeft from '../../assets/icons/arrowLeft.png'


export const RegisterIncident = ({values, handleChange, createIncident}) => {
    const [step, setStep] = useState(0)

    const handleBack = () => {
        if (step > 0) setStep(step - 1)
    }

    const steps = [
        'Información básica',
        'Información captura',
        'Descripcion del incidente',
    ];

    return (
        <RegisterContentMain>
            <TitleHeader justifyContent='center'>
                <Icon width={'21px'} height='21px' src={ArrowLeft} style={{paddingRight: '30px'}} onClick={() => handleBack() } />
                Nuevo incidente y evento adverso
            </TitleHeader>
            <CardStepper>
                <Box sx={{ width: '100%' }}>
                    <Stepper activeStep={step} alternativeLabel>   
                        {steps.map((label) => (
                        <Step key={label}>
                            <StepLabel>{label}</StepLabel>
                        </Step>
                        ))}
                    </Stepper>
                </Box>
            </CardStepper>
            <CardStepContent>
                <ModalTitle>{ step === 0 ? 'Información Básica' : step === 1 ?  'Información captura' : step === 2 ? 'Descripción del incidente': ''}</ModalTitle>
                {step === 0 && <FormGroup>
                    <ModalInput type='text' placeholder='Nombre del reportante' name='reporter' onChange={handleChange} value={values?.reporter} />
                    <ModalInput type='text' placeholder='Cargo' name='charge' onChange={handleChange} value={values?.charge} />
                    <ModalSelect width='48%' name='campus' onChange={handleChange} value={values?.campus}>
                        <ModalOption>Sede</ModalOption>
                        <ModalOption value='Principal'>Principal</ModalOption>    
                    </ModalSelect>
                    <ModalSelect width='48%'>
                        <ModalOption>Lugar</ModalOption>
                    </ModalSelect>
                    <ModalSelect width='48%'>
                        <ModalOption>Servicio</ModalOption>
                    </ModalSelect>
                    <ModalInput type='text' placeholder='Fecha del incidente' name='dateInc' onChange={handleChange} value={values?.dateInc} />
                    <ModalInput type='text' placeholder='Hora del incidente' name='hourInc' onChange={handleChange} value={values?.hourInc} />
                    <ModalInput type='text' placeholder='Fecha del Reporte' name='dateRep' onChange={handleChange} value={values?.dateRep} />
                </FormGroup>}
                {step === 1 && <FormGroup>
                    <ModalInput type='text' placeholder='Nombre del paciente' name='patient' onChange={handleChange} value={values?.patient} />
                    <ModalInput type='number' placeholder='Identificacion' name='identificacion'/>
                    <ModalSelect>
                        <ModalOption>Aseguradora</ModalOption>
                    </ModalSelect>
                    <ModalInput type='number' placeholder='Edad' name='edad'/>
                    <ModalSelect width='48%' placeholder='Sexo'>
                        <ModalOption>Masculino</ModalOption>
                        <ModalOption>Femenino</ModalOption>
                    </ModalSelect>
                    <ModalTextArea placeholder='Antecedentes patologicos' />
                </FormGroup>}
                {step === 2 && <FormGroup>
                    <ModalTextArea placeholder='Descripción de lo ocurrido' name='summaryInc' onChange={handleChange} value={values?.summaryInc} />
                    <ModalTextArea placeholder='Acciones inseguras' />
                </FormGroup>}
                <AlingButton>
                    {step === 2 ? 
                        <ModalButton onClick={() => createIncident()}>Guardar</ModalButton>
                    :<ModalButton onClick={() => setStep(step + 1)}>Continuar</ModalButton>
                    }
                </AlingButton>
            </CardStepContent>
        </RegisterContentMain>
    )
}

RegisterIncident.propTypes = {
    values: PropTypes.object,
    handleChange: PropTypes.func,
    createIncident: PropTypes.func,
}