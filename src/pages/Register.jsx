/* eslint-disable no-unused-vars */
import { useContext, useState } from "react";
import { Authcontext } from "../authprovider/Authprovider";
import { Link, useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'
import { updateProfile } from "firebase/auth";

const Register = () => {

    const {createUser} = useContext(Authcontext)
    const [error, setError] = useState('')
    const navigate = useNavigate()

    const handleregister = e => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photo = form.photo.value;
        // console.log(name, email, password, photo)

        setError('')

        if(password.length < 6){
            setError('Password must have at least 6 character!!')
            return
        }else if(!/^(?=.*[A-Z]).+$/.test(password)){
            setError('Password must have one Uppercase word!!')
            return
        }else if(!/[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(password)){
            setError('Password must have one special character!!')
            return
        }

        createUser(email, password)
        .then(result => {
             result.user.displayName = name
             result.user.photoURL = photo
            
            console.log(result.user)
            Swal.fire(
                'Done!',
                'You regestered successfully',
                'success'
              )
              updateProfile(result.user, {
                displayName: name,
                photoURL: photo
              })
              .then()
              .catch()
              e.target.reset()
              navigate('/')
        })
        .catch(error => {
            // console.log(error.message)
        })
    }

    return (
        <div className="bg-gray-100 dark:bg-black dark:text-white">
            <h1 className="text-center text-3xl font-semibold">Regester here</h1>
            <div className="hero min-h-screen ">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="card flex-shrink-0 w-52 md:w-[600px] shadow-2xl ">
                        <form onSubmit={handleregister} className="card-body ">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text dark:text-white">Name</span>
                                </label>
                                <input type="text" placeholder="Your Name" 
                                name="name"
                                className="input input-bordered dark:bg-gray-500" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text dark:text-white">Email</span>
                                </label>
                                <input type="email" placeholder="Email Address" 
                                name="email"
                                className="input input-bordered dark:bg-gray-500" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text dark:text-white">Password</span>
                                </label>
                                <input type="password" placeholder="Password" 
                                name="password"
                                className="input input-bordered dark:bg-gray-500" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text dark:text-white">Password</span>
                                </label>
                                <input type="text" placeholder="Photo URL"
                                name="photo"
                                className="input input-bordered dark:bg-gray-500" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover dark:text-white">Forgot password?</a>
                                </label>
                            </div>
                            <div>
                                <p className="text-red-500 font-semibold">
                                    {
                                        error && <p>{error}</p>
                                    }
                                </p>
                            </div>
                            <div>
                                <p className="text-lg font-semibold">Already have an account? <Link className="text-emerald-500 font-bold" to='/login'>Login</Link></p>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-accent">Register</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;