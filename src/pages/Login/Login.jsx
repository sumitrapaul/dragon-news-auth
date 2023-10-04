import { Link, Navigate, useLocation } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProviders";


const Login = () => {
const { signIn } = useContext(AuthContext)
const location=useLocation()



const handleLogin= e => {
    e.preventDefault();
    // const email=e.target.email.value;
    // const password=e.target.password.value;
    // console.log(email,password)
    console.log(e.currentTarget)
    const form=new FormData(e.currentTarget)
    const email=form.get('email')
    const password=form.get('password')
    console.log(email,password)
    signIn(email,password)

    .then(res =>{
        console.log(res.user)

        Navigate(location?.state ? location.state : '/')

    })
    .catch(error =>{
        console.log(error)
    })
}



    return (
        <div>
            <Navbar></Navbar>
         <div>
         <h2 className="text-3xl text-center my-8">Please Login</h2>
            <form onSubmit={handleLogin} className="md:w-3/4 lg:1/2 mx-auto">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" name="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" name="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
      <p className="text-center mt-4">Do not have an account? <Link to='/register' className="text-blue-600 font-bold">Register</Link></p>
         </div>
        </div>
    );
};

export default Login;