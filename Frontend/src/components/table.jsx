import React, { useState, useEffect } from "react"
import './table.css'



function DataTable() {


    const [value, setValue] = useState([])
    useEffect(() => {
        fetch("http://localhost:7900/getuser").then((res) => {
            return res.json();
        }).then((resp) => {
            setValue(resp)
        }).catch((err) => {
            console.log(err.message)
        })
    }, [])
    console.log(value);
    return (


        <>
        
                <table id="example" className="display">
                <thead>

                    <tr>
                        <th>FirstName</th>
                        <th>LastName</th>
                        <th>Email</th>
                        <th>Date of birth</th>
                        <th>image</th>
                    </tr>
                </thead>
                <tbody>
                    {value.map((item) => (
                    <tr key = {item._id}>
                    <td>{item.firstName}</td>
                    <td>{item.lastName}</td>
                    <td>{item.email}</td>
                    <td>{new Date(item.dob).toLocaleDateString()}</td>
                    <td>{item.image}</td>
                    </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}

export default DataTable