"use client"

import React, { useState, useRef } from "react";


const PostData = async () => {
    return new Promise(async (resolve, reject) => {
        const data = await fetch('/api/submitForm', {
            method: "post",
            headers: {
                Accept: "application/json",
                ["Content-Type"]: "application/json"
            },
            body: JSON.stringify({
                name: document.getElementById("Name").value,
                email_adress: document.getElementById("Email").value,
            })
        }).catch((r) => {
            reject("Failed to fetch from server. Check your internet connection!")
        })
        if (data.status == 200) {
            resolve(data.status)
        } else {
            reject('Request failed with error code ' + data.status)
        }
    })
}

const ContactUs = () => {

    const [successMessage, setSuccessMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [showForm, setShowForm] = useState(true);
    const [submissionInProgress, setSubmissionInProgress] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent default form submission behavior

        setSubmissionInProgress(true);
        try {
            await PostData();
            setSuccessMessage("Thank you! Your submission has been received!");
            setShowForm(false); // Hide the form on success
        } catch (error) {
            setErrorMessage(error);
            setShowForm(false)
        }
        finally {
            setSubmissionInProgress(false); // Reset submission status
        }

    };

    return (
        <section>

            {showForm && (
                <div className="contact-container" >
                    {<form onSubmit={handleSubmit}>
                        <div className="contact-heading">Subscribe to stay updated</div>
                        <div className="contact-wrapper">

                            <input className="input-field"
                                maxLength="256"
                                name="Name"
                                data-name="Name"
                                placeholder="Space Traveller Name"
                                type="text"
                                id="Name"
                                required>
                            </input>

                            <input className="input-field"
                                maxLength="256" name="Email"
                                data-name="Email"
                                placeholder="Contact Email Address"
                                type="email"
                                id="Email"
                                required>
                            </input>

                            <button className="secondary-btn" type="submit" disabled={submissionInProgress} data-wait="Please wait...">
                                {submissionInProgress ? "Please wait..." : "Join Newsletter"}
                            </button>

                        </div>
                    </form>}
                </div>
            )}

            {successMessage && !showForm && (
                <div className="success-message">
                    <p>{successMessage}</p>
                </div>
            )}

            {errorMessage && (
                <div className="error-message">
                    <p>{errorMessage}</p>
                </div>
            )}
        </section>
    );
};

export { ContactUs };
