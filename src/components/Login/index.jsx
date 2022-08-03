import React from 'react'
import PropTypes from 'prop-types'
import {
    Container, SLogin, SBanner,
    Label, Input, Title, Button, FromGroup
} from './styled'

export const LoginV = ({ SignIn, handleChange, values }) => {
    return (
        <Container>
            <SLogin>
                <Title>Bienvenido</Title>
                <FromGroup>
                    <Label>Identificacion</Label>
                    <Input type='number' placeholder='123456789' name='username' onChange={(e) => handleChange(e)} />
                </FromGroup>
                <FromGroup>
                    <Label>Contraseña</Label>
                    <Input type='password' placeholder='**********' name='password' onChange={(e) => handleChange(e)}/>
                </FromGroup>
                <Button onClick={() => SignIn(values?.username, values?.password)}>Continuar</Button>
            </SLogin> 
            <SBanner />
        </Container>
    )
}

LoginV.propTypes = {
    SignIn: PropTypes.func
}