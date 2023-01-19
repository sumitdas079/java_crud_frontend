import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'

export default function EditUser() {

    const { id } = useParams()
    
    let navigate = useNavigate()
    const [user, setUser] = useState({
        name: "",
        username: "",
        email: "",
    });

    const { name, username, email } = user;

    const onInputChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    useEffect(() => {
        loadUser()
    }, [])

    const onSubmit = async (e) => {
        e.preventDefault();
        await axios.put(`http://localhost:8080/user/${id}`, user);
        navigate("/");
    }

    const loadUser = async () => {
        const result = await axios.get(`http://localhost:8080/user/${id}`)
        setUser(result.data)
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
                    <h2 className="text-center m-4">Edit User</h2>

                    <form onSubmit={(e) => onSubmit(e)}>
                        <div className="mb-3 row">
                            <label htmlFor="Name" className="col-sm-2 col-form-label">
                                Name
                            </label>
                            <div className="col-sm-8">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Enter your name"
                                    name="name"
                                    value={name}
                                    onChange={(e) => onInputChange(e)}
                                />
                            </div>
                        </div>
                        <div className="mb-3 row">
                            <label htmlFor="Username" className="col-sm-2 col-form-label">
                                Username
                            </label>
                            <div className="col-sm-8">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Enter your username"
                                    name="username"
                                    value={username}
                                    onChange={(e) => onInputChange(e)}
                                />
                            </div>
                        </div>
                        <div className="mb-3 row">
                            <label htmlFor="Email" className="col-sm-2 col-form-label">
                                Email
                            </label>
                            <div className="col-sm-8">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Enter your email"
                                    name="email"
                                    value={email}
                                    onChange={(e) => onInputChange(e)}
                                />
                            </div>
                        </div>
                        <div className="col-md-12 text-center">
                            <button type="submit" className="btn btn-success mx-2">
                                Submit
                            </button>
                            <Link className="btn btn-danger mx-2" to="/">
                                Cancel
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </div >
    );
}
