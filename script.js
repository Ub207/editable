"use strict";
document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById('resume-form');
    const generateBtn = document.getElementById('generate-btn');
    const resumeDisplay = document.getElementById('resume-display');
    const resumeContent = document.getElementById('resume-content');
    const editBtn = document.getElementById('edit-btn');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        // Capture form data
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const education = document.getElementById('education').value;
        const experience = document.getElementById('experience').value;
        const skills = document.getElementById('skills').value;
        // Populate the resume content
        resumeContent.innerHTML = `
            <div class="resume-section"><h2>Name</h2><p>${name}</p></div>
            <div class="resume-section"><h2>Email</h2><p>${email}</p></div>
            <div class="resume-section"><h2>Phone</h2><p>${phone}</p></div>
            <div class="resume-section"><h2>Education</h2><p>${education}</p></div>
            <div class="resume-section"><h2>Experience</h2><p>${experience}</p></div>
            <div class="resume-section"><h2>Skills</h2><p>${skills}</p></div>
        `;
        // Hide the form and show the resume display
        form.style.display = 'none';
        resumeDisplay.style.display = 'block';
    });
    // Add functionality to the "Edit" button
    editBtn.addEventListener('click', () => {
        // Show the form and hide the resume display
        form.style.display = 'block';
        resumeDisplay.style.display = 'none';
    });
});
