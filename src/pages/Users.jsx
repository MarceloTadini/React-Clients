import React, { useEffect, useState } from "react";
import axios from "axios";
import CustomersCard from "../components/CustomerCard";

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
            <h1>Usuários</h1>

            <li><a href="/">Home</a></li>

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