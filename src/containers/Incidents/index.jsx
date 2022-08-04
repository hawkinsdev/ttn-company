import React, {useState } from 'react'
import { IncidentsV } from '../../components/Incidents'
import { SwalFire } from '../../utils'

export const IncidentC = () => {
    const [showModal, setShowModal] = useState(false)
    const [showRegister, setShowRegister] = useState(false)
    const [values, setValues] = useState({})
    const [dataIncidents, setDataIncidents] = useState([])
    
    let Incidents = [
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

    const handleChange = (e) => {
        const { name, value} = e?.target
        let dataValues = {}
        dataValues[name] = value
       setValues({...values, ...dataValues})
    }

    const createIncident = () => {
        Incidents = [...Incidents, {
            id: Incidents?.length + 1,
            reporter: values?.reporter,
            charge: values?.charge,
            campus: values?.campus,
            patient: values?.patient,
            dateInc: `${values?.dateInc} ${values?.hourInc}`,
            summaryInc: values?.summaryInc,
        }]
        setShowRegister(false)
        setDataIncidents(Incidents)
        setValues({})
        SwalFire('Bien!!', 'Se ha creado el incidente correctamente', 'success')
    }

    console.log(dataIncidents)
    return (
        <IncidentsV
            data={{
                Incidents: dataIncidents?.length ? dataIncidents : Incidents,
                showModal,
                showRegister,
                values
            }}
            setShowModal={setShowModal}
            setShowRegister={setShowRegister}
            handleChange={handleChange}
            createIncident={createIncident}
        />
    )
}