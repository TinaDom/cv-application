
import { useState } from "react";

function Experience() {
    const [companyName, setCompanyName] = useState('');
    const [positionTitle, setPositionTitle] = useState('');
    const [mainResponsibilities, setMainResponsibilities] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);

    return (
        <section>
            <h2>Experience</h2>

            {!isSubmitted && (
                <form>
                    <label>
                        Company Name:
                        <input
                            type="text"
                            name="company"
                            value={companyName}
                            onChange={(e) => setCompanyName(e.target.value)}
                        />
                    </label>

                    <label>
                        Position Title:
                        <input
                            type="text"
                            name="position"
                            value={positionTitle}
                            onChange={(e) => setPositionTitle(e.target.value)}
                        />
                    </label>

                    <label>
                        Main Responsibilities:
                        <input
                            type="text"
                            name="responsibilities"
                            value={mainResponsibilities}
                            onChange={(e) => setMainResponsibilities(e.target.value)}
                        />
                    </label>

                    <label>
                        Start Date:
                        <input
                            type="date"
                            name="startDate"
                            value={startDate}
                            onChange={(e) => setStartDate(e.target.value)}
                        />
                    </label>

                    <label>
                        End Date:
                        <input
                            type="date"
                            name="endDate"
                            value={endDate}
                            onChange={(e) => setEndDate(e.target.value)}
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
                    <h3>Work Experience</h3>
                    <p>Company Name: {companyName}</p>
                    <p>Position Title: {positionTitle}</p>
                    <p>Main Responsibilities: {mainResponsibilities}</p>
                    <p>Start Date: {startDate}</p>
                    <p>End Date: {endDate}</p>

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

export default Experience;
