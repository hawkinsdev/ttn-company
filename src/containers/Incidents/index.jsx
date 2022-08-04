import React, {useState} from 'react'
import { IncidentsV } from '../../components/Incidents'

export const IncidentC = () => {
    const [showModal, setShowModal] = useState(false)
    const [showRegister, setShowRegister] = useState(false)
    const Incidents = [
        {id: 1, reporter: 'Luisa Perez Ferrer', charge: 'Auxiliar', campus: 'Foca Norte', patient: 'Ana Gutierrez Florez', dateInc: '11/04/2022 10:30 a.m', summaryInc: 'El paciente se cayó de la silla y se partio el brazo'},
        {id: 2, reporter: 'Luisa Perez Ferrer', charge: 'Auxiliar', campus: 'Foca Norte', patient: 'Ana Gutierrez Florez', dateInc: '11/04/2022 10:30 a.m', summaryInc: 'El paciente se cayó de la silla y se partio el brazo'},
        {id: 3, reporter: 'Luisa Perez Ferrer', charge: 'Auxiliar', campus: 'Foca Norte', patient: 'Ana Gutierrez Florez', dateInc: '11/04/2022 10:30 a.m', summaryInc: 'El paciente se cayó de la silla y se partio el brazo'},
        {id: 4, reporter: 'Luisa Perez Ferrer', charge: 'Auxiliar', campus: 'Foca Norte', patient: 'Ana Gutierrez Florez', dateInc: '11/04/2022 10:30 a.m', summaryInc: 'El paciente se cayó de la silla y se partio el brazo'},
        {id: 5, reporter: 'Luisa Perez Ferrer', charge: 'Auxiliar', campus: 'Foca Norte', patient: 'Ana Gutierrez Florez', dateInc: '11/04/2022 10:30 a.m', summaryInc: 'El paciente se cayó de la silla y se partio el brazo'},
        {id: 6, reporter: 'Luisa Perez Ferrer', charge: 'Auxiliar', campus: 'Foca Norte', patient: 'Ana Gutierrez Florez', dateInc: '11/04/2022 10:30 a.m', summaryInc: 'El paciente se cayó de la silla y se partio el brazo'},
        {id: 7, reporter: 'Luisa Perez Ferrer', charge: 'Auxiliar', campus: 'Foca Norte', patient: 'Ana Gutierrez Florez', dateInc: '11/04/2022 10:30 a.m', summaryInc: 'El paciente se cayó de la silla y se partio el brazo'},
        {id: 8, reporter: 'Luisa Perez Ferrer', charge: 'Auxiliar', campus: 'Foca Norte', patient: 'Ana Gutierrez Florez', dateInc: '11/04/2022 10:30 a.m', summaryInc: 'El paciente se cayó de la silla y se partio el brazo'},
        {id: 9, reporter: 'Luisa Perez Ferrer', charge: 'Auxiliar', campus: 'Foca Norte', patient: 'Ana Gutierrez Florez', dateInc: '11/04/2022 10:30 a.m', summaryInc: 'El paciente se cayó de la silla y se partio el brazo'},
        {id: 10, reporter: 'Luisa Perez Ferrer', charge: 'Auxiliar', campus: 'Foca Norte', patient: 'Ana Gutierrez Florez', dateInc: '11/04/2022 10:30 a.m', summaryInc: 'El paciente se cayó de la silla y se partio el brazo'},
    ]

    return (
        <IncidentsV
            data={{
                Incidents,
                showModal,
                showRegister
            }}
            setShowModal={setShowModal}
            setShowRegister={setShowRegister}
        />
    )
}