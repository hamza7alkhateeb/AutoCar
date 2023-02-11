import { useState } from "react";
import { Helmet } from "react-helmet";
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate, } from "react-router-dom";
import { authLogin } from "../rtk/actions/authAction";

function Login() {
    const dispatch = useDispatch();
    const { isAuthenticated } = useSelector(state => state.auth)
    
    const [formData, setFormData] = useState({
      email: "",
      password: "",
    });
    const onChange = (e) => setFormData({
        ...formData, [e.target.name]: e.target.value
    });
    
    const { email, password } = formData;

    const onSubmit = (e) => {
        e.preventDefault();
        dispatch(authLogin(email, password));
    };
    if (isAuthenticated) return <Navigate to={'/'}/>
     

    return (
      <div className="auth">
        <Helmet>
          <title>AutoCar - Login</title>
          <meta name="description" content="login page" />
        </Helmet>
        <h1 className="auth__title">Sign In</h1>
        <p className="auth__lead">Sign into your Account</p>
        <form className="auth__form" onSubmit={(e) => onSubmit(e)}>
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
          <button className="auth__form__button">Login</button>
        </form>
        <p className="auth__authtext">
          Don't have an account?{" "}
          <Link className="auth__authtext__link" to="/signup">
            Sign Up
          </Link>
        </p>
      </div>
    );
}
export default Login;