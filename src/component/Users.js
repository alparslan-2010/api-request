
import React from 'react';
import axios from "axios";





function Users() {


    //useState

    const [data, setData] = React.useState([]);
    const [produccts,setProduccts] = React.useState([]);

    //let users = [];

    async function getUsers() {


        // users = reponse.data;
        const reponse = await axios.get("https://jsonplaceholder.typicode.com/users")

        setData(reponse.data);
        console.log(reponse.data);

    }

    getUsers();
    console.log("res", data);

    return (


        <div>
            <ul>

                {
                    data?.map((item) => (
                        <>
                            <li>{item.name}</li>
                            <li>{item.email}</li>
                        </>


                    ))


                }


            </ul>

        </div>

    )




}
export default Users;