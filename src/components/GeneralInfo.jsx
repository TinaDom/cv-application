
import { useState } from "react";

function GeneralInfo() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);

    function handleSubmit(e) {
        e.preventDefault();
        setIsSubmitted(true);
    }

    function handleClear() {
    setName('');
    setEmail('');
    setPhone('');
}

    return (
        <section>
            <h2>General Information</h2>

            {!isSubmitted && (
                <form onSubmit={handleSubmit}>
                    <label>
                        Full Name:
                        <input
                            type="text"
                            name="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </label>

                    <label>
                        Email:
                        <input
                            type="email"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </label>

                    <label>
                        Phone Number:
                        <input
                            type="tel"
                            name="phone"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            required
                        />
                    </label>

                    <button type="submit">
                        Submit
                    </button>

                    <button 
                    type="button" 
                    className="clear-button"
                    onClick={handleClear}
                    >
                    Clear Form 
                    </button>
                </form>
            )}

            {isSubmitted && (
                <div>
                    <h3>Personal Information</h3>
                    <p>Name: {name}</p>
                    <p>Email: {email}</p>
                    <p>Phone: {phone}</p>

                    <button
                        type="button"
                        onClick={() => setIsSubmitted(false)}
                    >
                        Edit
                    </button>
                </div>
            )}
        </section>
    );
}

export default GeneralInfo;
