import React, { useState } from "react"

const Form: React.FC = () => {
    const [name, setName] = useState<string>('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value)
    }

    return (
        <div>
            <input type="text" placeholder="Enter your name" value={name} onChange={handleChange} />
            <p>Name: {name}</p>

        </div>
    )
}

export default Form;