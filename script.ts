document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById('resume-form') as HTMLFormElement;
    const generateBtn = document.getElementById('generate-btn') as HTMLButtonElement;
    const resumeDisplay = document.getElementById('resume-display') as HTMLDivElement;
    const resumeContent = document.getElementById('resume-content') as HTMLDivElement;
    const editBtn = document.getElementById('edit-btn') as HTMLButtonElement;

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        // Capture form data
        const name = (document.getElementById('name') as HTMLInputElement).value;
        const email = (document.getElementById('email') as HTMLInputElement).value;
        const phone = (document.getElementById('phone') as HTMLInputElement).value;
        const education = (document.getElementById('education') as HTMLTextAreaElement).value;
        const experience = (document.getElementById('experience') as HTMLTextAreaElement).value;
        const skills = (document.getElementById('skills') as HTMLTextAreaElement).value;

        // Populate the resume content
        resumeContent.innerHTML = '';
        for (const [label, value] of [
            ['Name', name], ['Email', email], ['Phone', phone],
            ['Education', education], ['Experience', experience], ['Skills', skills]
        ] as [string, string][]) {
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
