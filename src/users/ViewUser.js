import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

export default function ViewUser() {

    const [user, setUser] = useState({
        name: "",
        username: "",
        email: "",
    });

    const { id } = useParams();

    useEffect(() => {
        loadUser();
    }, []);

    const loadUser = async () => {
        const result = await axios.get(`http://localhost:8080/user/${id}`);
        setUser(result.data);
    };

    return (
        <div className='container'>
            <div className="row">
                <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
                    <h2 className="text-center m-4">User Details</h2>
                    <div className="card">
                        <div className="card-header">
                            User info of id: {user.id}
                            <ul className="list-group">
                                <div className="list-group-item">
                                    <b>Name: </b>
                                    {user.name}
                                </div>
                                <div className="list-group-item">
                                    <b>Username: </b>
                                    {user.username}
                                </div>
                                <div className="list-group-item">
                                    <b>Email: </b>
                                    {user.email}
                                </div>
                            </ul>
                        </div>
                    </div>
                    <Link className='btn btn-outline-dark my-2' to={'/'}>Go Back</Link>
                </div>
            </div>
        </div>
    )
}
