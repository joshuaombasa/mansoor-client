import React, { useState } from "react";
import { Link, useLocation, useNavigate,useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import loginUser from "../redux/action-creators/loginUser";
import { loginVendor } from "../api";

export default function Login() {

    const [formData, setFormData] = useState({
        email: "",
        password: "",
    })

    const [searchParams, setSearchParams] = useSearchParams()

    const redirectTo = searchParams.get("redirectTo")

    const location = useLocation()
    
   const message = location.state ? location.state.message : ""

    const [error, setError] = useState("")

    
    const loggedInData = useSelector(state => state.loggedInData)
    const navigate = useNavigate()
    const dispatch = useDispatch()

    function handleChange(event) {
        const {name, value} = event.target
        setFormData((prevFormData) => (
            {
                ...prevFormData,
                [name] : value
            }
        ))
    }
    

    function handleSubmit(event) {
        event.preventDefault()
        async function doLogin() {
            try {
                const data = await loginVendor(formData)
                dispatch(loginUser(data.user))
                navigate(redirectTo || "/vendor")
            } catch (error) {
                setError(error)
            }
        }
        doLogin()
    }

    return (
        <div className="login--page">
            <div className="login--page--container">
                <h1>Sign in to your account</h1>
                {message && <p className="error">{message}</p>}
                {error && <p className="error">{error.message}</p>}
                <form onSubmit={handleSubmit} className="login--form">
                    <input 
                         type="email" 
                         name="email"
                         value={formData.email}
                         onChange={handleChange }
                         placeholder="Email address"
                    />
                    <input 
                         type="password" 
                         name="password"
                         value={formData.password}
                         onChange={handleChange}
                         placeholder="Password"
                    />
                    <button>Sign in</button>
                </form>
                <span>Don’t have an account? <Link>Create one now</Link></span>
            </div>
        </div>
    )
}