import {TextField, Button, Typography} from '@mui/material';
import { useState } from 'react';
import useAuth from '../state/auth';
import { redirect } from "react-router-dom";


function Login(){


    const [form, setForm] = useState({
        email:'',
        password:'',
    })

    const [isLoading, setIsLoading] = useState(false)

    const { user, setUser } = useAuth()

    function handleInputChange(event){
        const {name, value} = event.target

        setForm({
            ...form,
            [name]: value,
        })
    }

    function handleFormSubmit(){
        setIsLoading(true)
        setTimeout(() => {
            const response = {
                success: true,
                user: {
                    email: form.email
                }
            }

            setUser({
                logged: response.success,
                email: form.email
            })

           return redirect("/");
            
        }, 400)
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
                <Button onClick={handleFormSubmit} variant="contained" color='primary'>
                {
                    isLoading ? 'Aguarde...' : 'Entrar'
                }
                </Button>
            </div>
        </>
    )
}

export default Login