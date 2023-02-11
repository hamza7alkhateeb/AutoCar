import { useState } from "react";
import { Helmet } from "react-helmet";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { authSignup } from "../rtk/actions/authAction";

function Signup() { 
    const dispatch = useDispatch()
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        password2:""
    })

    const onChange = (e) => setFormData({
        ...formData , [e.target.name]:e.target.value
        })
    
    const {name,email,password,password2}=formData

    const onSubmit = (e) => {
        e.preventDefault()
         dispatch(authSignup(name,email,password,password2))
    }

    return (
      <div className="auth">
        <Helmet>
          <title>AutoCar - Sign Up</title>
          <meta name="description" content="sign up page" />
        </Helmet>
        <h1 className="auth__title">Sign Up</h1>
        <p className="auth__lead">Create your Account</p>
        <form className="auth__form" onSubmit={(e) => onSubmit(e)}>
          <div className="auth__form__group">
            <input
              className="auth__form__input"
              type="text"
              placeholder="Name"
              name="name"
              value={name}
              onChange={(e) => onChange(e)}
              required
            />
          </div>
          <div className="auth__form__group">
            <input
              className="auth__form__input"
              type="email"
              placeholder="Email"
              name="email"
              value={email}
              onChange={(e) => onChange(e)}
              required
            />
          </div>
          <div className="auth__form__group">
            <input
              className="auth__form__input"
              type="password"
              placeholder="Password"
              name="password"
              value={password}
              onChange={(e) => onChange(e)}
              minLength="6"
            />
          </div>
          <div className="auth__form__group">
            <input
              className="auth__form__input"
              type="password"
              placeholder="Confirm Password"
              name="password2"
              value={password2}
              onChange={(e) => onChange(e)}
              minLength="6"
            />
          </div>
          <button className="auth__form__button">Register</button>
        </form>
        <p className="auth__authtext">
           Already have an account?{" "}
          <Link className="auth__authtext__link" to="/login">
            Sign In
          </Link>
         </p>
       </div>
     );

 }
 export default Signup