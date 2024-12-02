import { ExperiencePoint } from "./ClassLibrary.js";


document.addEventListener('DOMContentLoaded', () => {

    const element = document.getElementById("experience-list");

    try {
        if(!element) {
            throw new Error("Error: could not find element")
        }

        const education1 = new ExperiencePoint(
            "Masters Degree in Computer Science",
            2020,
            2023,
            "DTU",
            "Masters Degree in Computer Science at DTU, specializing in Security and Algorithms. Thesis: A Software Defined Approach to Mobile Internet of Things.",
            ["C#, Unity, Python, OMFX, C, Java"]
        );

        const education2 = new ExperiencePoint (
            "Bachelor of Science: Computer Science and Informatics",
            2016,
            2020,
            "Roskilde University",
            "Hum.Tek: Computer Science and Informatics. Bachelor Project: Virtual Reality Learning Tool.",
            ["C#, Java, Unity, Python, Arduino, C, Software Engineering"]
        )

        const educationPoints = [education1, education2]

        educationPoints.forEach(function(education) {
            element.insertAdjacentHTML("beforeend", 
            `<li>
            <h3> ${education.title}</h3>
            <p>${education.yearStart} - ${education.yearEnd}</p>
            <p>${education.institution}</p>
            <p>${education.description}</p>
            </li>`
            )
        })

    } catch(Error) {
        console.error(Error);
        
    }
});
