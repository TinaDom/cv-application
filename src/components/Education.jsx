
import { useState } from "react";

function Education() {
    const [school, setSchool] = useState('');
    const [titleOfStudy, setTitleOfStudy] = useState('');
    const [dateOfStudy, setDateOfStudy] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);

    function handleSubmit(e) {
        e.preventDefault();
        setIsSubmitted(true);
    }

    function handleClear() {
    setSchool('');
    setTitleOfStudy('');
    setDateOfStudy('');
}

    return (
        <section>
            <h2>Education</h2>

            {!isSubmitted && (
                <form onSubmit={handleSubmit}>
                    <label>
                        School:
                        <input
                            type="text"
                            name="school"
                            value={school}
                            onChange={(e) => setSchool(e.target.value)}
                            required
                        />
                    </label>

                    <label>
                        Title of Study:
                        <input
                            type="text"
                            name="title"
                            value={titleOfStudy}
                            onChange={(e) => setTitleOfStudy(e.target.value)}
                            required
                        />
                    </label>

                    <label>
                        Date of Study:
                        <input
                            type="date"
                            name="date"
                            value={dateOfStudy}
                            onChange={(e) => setDateOfStudy(e.target.value)}
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
                    <h3>Education Information</h3>
                    <p>School: {school}</p>
                    <p>Title of Study: {titleOfStudy}</p>
                    <p>Date of Study: {dateOfStudy}</p>

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

export default Education;
