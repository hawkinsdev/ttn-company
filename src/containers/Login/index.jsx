import React, { useState} from 'react'
import { LoginV } from '../../components/Login'
import { useNavigate } from 'react-router-dom'
import { SwalFire } from '../../utils'

export const LoginC =  () => {
    const navigate = useNavigate()
    const [values, setValues] = useState({})

    const handleChange = (e) => {
        const { name, value} = e?.target
        let dataValues = {}
        dataValues[name] = value
       setValues({...values, ...dataValues})
    }

    const data = {
        name: 'Jesus Manuel Varela Miranda',
        AccessToken: true,
        typeUSer: 'admin',
        username: 987654321,
        password: '123123',
    }
    
    const SignIn = (username, password) => {
        console.log(username, password, true)
        if(Number(username) === data?.username && password === data?.password){
            localStorage.setItem('signin', JSON.stringify(data))
            navigate('/home')  
        }else {
            SwalFire('Error!', 'Usuario o Contraseña incorrectos' ,'error')
        }
        
    }
        
    return (
        <LoginV
            SignIn={SignIn}
            handleChange={handleChange}
            values={values}
        />
    )
}
