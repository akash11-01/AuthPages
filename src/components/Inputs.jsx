export const FloatingInput = ({ label, required, id, value, onChange }) => {

    return (
        <div className="relative w-full mb-6">
            <input
                type="text"
                label={label}
                id={id}
                placeholder=" "
                required={required}
                value={value}
                onChange={onChange}
                className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-purple-600 peer"
            />
            <label
                htmlFor={label}
                className="absolute text-sm text-blue-700 font-semibold  duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-3 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
            >
                {label}{required && <span className="text-pink-500">*</span>}
            </label>
        </div>
    );
};