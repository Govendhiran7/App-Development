import React from "react";
const resume = {
    fullName: '',
    email: '',
    phoneNumber: '',
    summary: '',
    education: [],
    experience: [],
};

// Function to add education details
function addEducation() {
    const educationDetails = prompt('Enter education details:');
    if (educationDetails) {
        resume.education.push(educationDetails);
    }
}

// Function to add experience details
function addExperience() {
    const experienceDetails = prompt('Enter experience details:');
    if (experienceDetails) {
        resume.experience.push(experienceDetails);
    }
}

// Function to display the generated resume
function displayResume() {
    const resumeText = `
        Full Name: ${resume.fullName}
        Email: ${resume.email}
        Phone Number: ${resume.phoneNumber}
        Summary: ${resume.summary}

        Education:
        ${resume.education.join('\n')}

        Experience:
        ${resume.experience.join('\n')}
    `;

    console.log(resumeText);
}

// Collect user input
resume.fullName = prompt('Enter Full Name:');
resume.email = prompt('Enter Email:');
resume.phoneNumber = prompt('Enter Phone Number:');
resume.summary = prompt('Enter Summary:');

// Add education and experience details
addEducation();
addExperience();

// Display the generated resume
displayResume();
export default resume;