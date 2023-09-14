import React, { useState } from 'react'

const Login = () => {
    const [credentials, setCredential] = useState({email: "", password: ""})

    const handleSubmit = async (e) => {
        e.preventDefault()  
        const response = await fetch("http://localhost:5000/api/auth/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({email: credentials.email, password: credentials.password}),
        });
        const json = await response.json()
        console.log(json)
    }

    const  onChange = (e) =>{
        setCredential({...credentials, [e.target.name]: e.target.value})
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="email">Email address</label>
                    <input type="email" className="form-control" value={credentials.email} id="email" name='email' aria-describedby="emailHelp" placeholder="Enter email" onChange={onChange}/>
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" className="form-control" value={credentials.password} id="password" name='password' placeholder="Password" onChange={onChange}/>
                </div>
                <button type="submit" className="btn btn-primary my-3" >Submit</button>
            </form>
        </div>
    )
}

export default Login