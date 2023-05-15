import React from "react";
import { Button } from "@mui/material";
import {TextField} from "@mui/material";

function Users() {
    return (
        <>
            <h1>Usuários</h1>
            <ul>
                <li><a href="/">Home</a></li>
            </ul>
            <Button variant="contained" color="primary">Teste</Button>
            <TextField required id="standard-required" label="Required" defaultValue="Teste"></TextField>
        </>
    );
}

export default Users;