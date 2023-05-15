import Header from "../partials/Header/Header"
import Container from '@mui/material/Container';

import  {makeStyles}  from "@mui/material"

const useStyles = makeStyles(() => {
    return{
        container: {
            padding: '15px 0'
        }
    }
})

function TemplateDefault({children}){
    const classes = useStyles()
    return(
        <>
            <Header/>
            <Container className={classes.container}>
                {children}
            </Container>
            
        </>
    )
}

export default TemplateDefault