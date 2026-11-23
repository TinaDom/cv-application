
import { useState } from "react";

function Experience() {
    const [companyName, setCompanyName] = useState('');
    const [positionTitle, setPositionTitle] = useState('');
    const [mainResponsibilities, setMainResponsibilities] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [currentlyWorking, setCurrentlyWorking] = useState(false);

    function handleSubmit(e) {
        e.preventDefault();
        setIsSubmitted(true);
    }

    function handleClear() {
    setCompanyName('');
    setPositionTitle('');
    setMainResponsibilities('');
    setStartDate('');
    setEndDate('');
    setCurrentlyWorking(false);
}

    return (
        <section>
            <h2>Experience</h2>

            {!isSubmitted && (
                <form onSubmit={handleSubmit}>
                    <label>
                        Company Name:
                        <input
                            type="text"
                            name="company"
                            value={companyName}
                            onChange={(e) => setCompanyName(e.target.value)}
                            required
                        />
                    </label>

                    <label>
                        Position Title:
                        <input
                            type="text"
                            name="position"
                            value={positionTitle}
                            onChange={(e) => setPositionTitle(e.target.value)}
                            required
                        />
                    </label>

                    <label>
                        Main Responsibilities:
                        <textarea
                            name="responsibilities"
                            value={mainResponsibilities}
                            onChange={(e) => setMainResponsibilities(e.target.value)}
                            required
                        />
                    </label>

                    <label>
                        Start Date:
                        <input
                            type="date"
                            name="startDate"
                            value={startDate}
                            onChange={(e) => setStartDate(e.target.value)}
                            required
                        />
                    </label>

                   {!currentlyWorking && (
                    <label>
                        End Date:
                        <input
                        type="date"
                        name="endDate"
                        value={endDate}
                        onChange={(e) => setEndDate(e.target.value)}
                        required
                        />
                        </label>
                    )}

                    <label>
                        <input
                        type="checkbox"
                        checked={currentlyWorking}
                        onChange={(e) => setCurrentlyWorking(e.target.checked)}
                        />
                        I currently work here
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
                    <h3>Work Experience</h3>
                    <p>Company Name: {companyName}</p>
                    <p>Position Title: {positionTitle}</p>
                    <p>Main Responsibilities: {mainResponsibilities}</p>
                    <p>Start Date: {startDate}</p>
                    <p>End Date: {currentlyWorking ? "Present" : endDate}</p>

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
