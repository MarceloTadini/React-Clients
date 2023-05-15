import React from "react";
import Header from "./partials/Header";

function App() {
    return (
        <>
            <h1>
                Página Inicial
            </h1>
            <Header/>
            <ul>
                <li><a href="/users">Usuários</a></li>
            </ul>
        </>
    )
}

export default App;