import { Link } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProviders";


const Register = () => {
    const { createUser }=useContext(AuthContext)

    const handleRegister= e => {
        e.preventDefault();
        // const email=e.target.email.value;
        // const password=e.target.password.value;
        // console.log(email,password)
        console.log(e.currentTarget)
        const form=new FormData(e.currentTarget)
        const name=form.get('name')
        const photo=form.get('photo')
        const email=form.get('email')
        const password=form.get('password')
        console.log(name,photo,email,password)

        //user create
        createUser(email,password)
        .then(res => console.log(res.user))
        .catch(error => console.error(error))

        //sign in
        // signIn(email,password)
        // .then(res => console.log(res.user))
        // .catch(error => console.error(error))
    }
    return (
        <div>
             <Navbar></Navbar>
         <div>
         <h2 className="text-3xl text-center my-8">Please Register</h2>
            <form onSubmit={handleRegister} className="md:w-3/4 lg:1/2 mx-auto">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" placeholder="name" name="name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo URL</span>
          </label>
          <input type="text" placeholder="photo URL" name="photo" className="input input-bordered" required />
        </div>
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
          <button className="btn btn-primary">Register</button>
        </div>
      </form>
      <p className="text-center mt-4">Already have an account? <Link to='/login' className="text-blue-600 font-bold">Login</Link></p>
         </div> 
        </div>
    );
};

export default Register;