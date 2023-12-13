import { Link } from "react-router-dom";

const Error = () => {
    return (
        <div className="text-center">
            <h1 className="text-2xl font-semibold mt-5">Something went wrong..!</h1>
            <img className="mx-auto my-8 h-[60vh]" src="https://i.ibb.co/b6bbh3g/100130939-error-404-page-not-found-error-with-glitch-effect-on-screen-vector-illustration-for-your-d.jpg" alt="" />
            <Link to='/'><button className="btn btn-accent">Go home</button></Link>
        </div>
    );
};

export default Error;