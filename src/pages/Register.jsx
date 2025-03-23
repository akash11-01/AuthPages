import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FloatingInput } from "../components/Inputs";

export default function Register() {
    const [agency, setAgency] = useState("Yes");
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        fullName: "",
        phone: "",
        email: "",
        password: "",
        company: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value })
    };

    const [color, setColor] = useState('gray');
    useEffect(() => {
        if (formData.fullName !== '' && formData.phone !== '' && formData.email !== '' && formData.password !== '') {
            setColor('blue')
        }
    }, [formData])

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate('/account')
    }
    return (
        <div className="flex flex-col justify-center items-center h-screen bg-gray-100">
            <div className="flex m-5 flex-col justify-center h-screen  items-center w-full max-w-md bg-white rounded-lg shadow-md p-6">
                <h1 className="text-3xl font-bold w-full max-w-md m-8">
                    Create Your <br /> PopX account
                </h1>
                <form className="w-full max-w-md" onSubmit={handleSubmit}>
                    <FloatingInput
                        label="Full Name"
                        required={true}
                        id='fullName'
                        value={formData.fullName}
                        onChange={handleChange}
                    />
                    <FloatingInput
                        label="Phone number"
                        required={true}
                        id='phone'
                        value={formData.phone}
                        onChange={handleChange}
                    />
                    <FloatingInput
                        label="Email address"
                        required={true}
                        id='email'
                        value={formData.email}
                        onChange={handleChange}
                    />
                    <FloatingInput
                        label="Password"
                        required={true}
                        id='password'
                        value={formData.password}
                        onChange={handleChange}
                    />
                    <FloatingInput
                        label="Company name"
                        required={false}
                        id='company'
                        value={formData.company}
                        onChange={handleChange}
                    />

                    <div className="flex flex-col space-y-2">
                        <label className="text-sm font-medium text-gray-700">
                            Are you an Agency?<span className="text-pink-500 ml-1">*</span>
                        </label>

                        <div className="flex items-center space-x-6">
                            {/* Yes Option */}
                            <label className="flex items-center cursor-pointer">
                                <input
                                    type="radio"
                                    name="agency"
                                    value="Yes"
                                    checked={agency === 'Yes'}
                                    onChange={(e) => setAgency(e.target.value)}
                                    className="peer hidden"
                                />
                                <div className="w-5 h-5 rounded-full border border-gray-400 peer-checked:border-purple-600 peer-checked:ring-2 peer-checked:ring-purple-400 flex justify-center items-center mr-2">
                                    <div className={`w-2.5 h-2.5 rounded-full ${agency === 'Yes' ? 'bg-purple-600' : ''}`}></div>
                                </div>
                                <span className="text-gray-800 text-sm">Yes</span>
                            </label>

                            {/* No Option */}
                            <label className="flex items-center cursor-pointer">
                                <input
                                    type="radio"
                                    name="agency"
                                    value="No"
                                    checked={agency === 'No'}
                                    onChange={(e) => setAgency(e.target.value)}
                                    className="peer hidden"
                                />
                                <div className="w-5 h-5 rounded-full border border-gray-400 peer-checked:border-purple-600 peer-checked:ring-2 peer-checked:ring-purple-400 flex justify-center items-center mr-2">
                                    <div className={`w-2.5 h-2.5 rounded-full ${agency === 'No' ? 'bg-purple-600' : ''}`}></div>
                                </div>
                                <span className="text-gray-800 text-sm">No</span>
                            </label>
                        </div>
                    </div>

                    <button
                        type="submit"
                        style={{ background: color }}
                        className="w-full p-3 text-white rounded-md font-semibold mt-[25%]"
                    >
                        Create account
                    </button>
                </form>
            </div>
        </div>
    );
}
