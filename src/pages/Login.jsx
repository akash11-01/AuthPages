import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FloatingInput } from "../components/Inputs";

export default function Login() {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });
    const [color, setColor] = useState('gray')
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value })
    };

    useEffect(() => {
        if (formData.email !== '' && formData.password !== '') {
            setColor('blue')
        }
    }, [formData])

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate('/account')
    }
    return (
        <div className="flex flex-col  items-center h-screen bg-gray-100">
            <div className="flex m-8 flex-col  h-screen  items-center w-full max-w-md bg-white rounded-lg shadow-md p-6">
                <h1 className="text-3xl font-bold w-full max-w-md m-8">
                    Sign in to Your <br /> PopX account
                </h1>
                <p className="mt-[-16px] mb-4">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, est.
                </p>
                <form className="w-full max-w-md " onSubmit={handleSubmit}>
                    <FloatingInput
                        label="Email address"
                        required={true}
                        id='email'
                        value={formData.email}
                        onChange={handleChange}
                    />
                    <FloatingInput
                        label="Password"
                        id='password'
                        required={true}
                        value={formData.password}
                        onChange={handleChange}
                    />

                    <button
                        style={{ background: color }}
                        type="submit"
                        className="w-full p-3 text-white rounded-md font-semibold "
                    >
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
}
