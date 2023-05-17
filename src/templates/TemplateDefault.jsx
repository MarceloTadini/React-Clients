import Header from "../partials/Header/Header"
import Container from '@mui/material/Container';

function TemplateDefault({children}){
    return(
        <>
            <Header/>
            <Container >
                {children}
            </Container>
            
        </>
    )
}

export default TemplateDefault