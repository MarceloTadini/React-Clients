import React, { useEffect, useState } from "react";
import axios from "axios";
import CustomersCard from "../components/CustomerCard";
import Header from "../partials/Header/Header";

function Users() {

    const [customers, setCustomers] = useState([])
    console.log(customers)

    useEffect(() => {
        axios.get('https://reqres.in/api/users')
            .then(response => {
                const { data } = response.data
                setCustomers(data)
            })
    }, [])
    return (
        <>
            <Header/>
            <h1>Usuários</h1>

            {
                customers.map(item => (
                    <CustomersCard
                        name={item.first_name}
                        lastName={item.last_name}
                        email={item.email}
                        avatar={item.avatar}
                    />
                ))
            }

        </>
    );
}

export default Users;