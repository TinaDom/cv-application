
import { useState } from "react";

function Education() {
    const [school, setSchool] = useState('');
    const [titleOfStudy, setTitleOfStudy] = useState('');
    const [dateOfStudy, setDateOfStudy] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);

    return (
        <section>
            <h2>Education</h2>

            {!isSubmitted && (
                <form>
                    <label>
                        School:
                        <input
                            type="text"
                            name="school"
                            value={school}
                            onChange={(e) => setSchool(e.target.value)}
                        />
                    </label>

                    <label>
                        Title of Study:
                        <input
                            type="text"
                            name="title"
                            value={titleOfStudy}
                            onChange={(e) => setTitleOfStudy(e.target.value)}
                        />
                    </label>

                    <label>
                        Date of Study:
                        <input
                            type="date"
                            name="date"
                            value={dateOfStudy}
                            onChange={(e) => setDateOfStudy(e.target.value)}
                        />
                    </label>

                    <button
                        type="button"
                        onClick={() => setIsSubmitted(true)}
                    >
                        Submit
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
