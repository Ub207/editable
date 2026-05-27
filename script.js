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
        resumeContent.innerHTML = '';
        for (const [label, value] of [
            ['Name', name], ['Email', email], ['Phone', phone],
            ['Education', education], ['Experience', experience], ['Skills', skills]
        ]) {
            const section = document.createElement('div');
            section.className = 'resume-section';
            const heading = document.createElement('h2');
            heading.textContent = label;
            const para = document.createElement('p');
            para.textContent = value;
            section.appendChild(heading);
            section.appendChild(para);
            resumeContent.appendChild(section);
        }
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
