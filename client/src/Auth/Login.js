import React, { useState } from "react";

const Login = () => {
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    });

    const handleChange =(event)=>{
        const {name,value} = event.target
        setFormData({
            ...formData,[name]:value
        })
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(formData)
    }
    return (
        <div>
            <div>  </div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Username</label>
                    <input name = 'username' type='text' value={formData.username} onChange={handleChange} required />
                </div>
                <div>
                    <label>Password</label>
                    <input name="password" type='password' value={formData.password} onChange={handleChange} required/>
                </div>
                <div>
                    <button type='submit'>Login</button>
                </div>
            </form>
        </div>
    );
}

export default Login;