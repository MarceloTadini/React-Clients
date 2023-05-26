import {TextField, Button, Typography} from '@mui/material';
import { useState } from 'react';

function Login(){

    const [form, setForm] = useState({
        email:'',
        password:'',
    })

    function handleInputChange(event){
        const {name, value} = event.target

        setForm({
            ...form,
            [name]: value,
        })
    }

    function handleFormSubmit(){
        console.log(form)
    } 

    return(
        <>  
            <h2>Login</h2>

            <Typography variant="h3">Acesso Restrito</Typography>

            <div>
                <TextField
                  label="Digite o seu email"
                  name="email"
                  onChange={handleInputChange}
                />
            </div>

            <div>
                <TextField
                  label="Digite sua senha"
                  name="password"
                  onChange={handleInputChange}
                  type='password'
                />
            </div>

            <div>
                <Button onClick={handleFormSubmit} variant="contained" color='primary'>Entrar</Button>
            </div>
        </>
    )
}

export default Login