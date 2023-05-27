import Header from "../partials/Header/Header"
import Container from '@mui/material/Container';
import useAuth from "../state/auth";

function TemplateDefault({children}){

    const {user} = useAuth()



    return(
        <>
            <Header user={user}/>
            <Container >
                {children}
            </Container>
            
        </>
    )
}

export default TemplateDefault