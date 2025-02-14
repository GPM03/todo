import { newProject } from "./newProject.js";
import { removeAllChild } from "./removeAllChild.js";
import { projectList } from "./projectList.js";
import { display } from "./display.js";
import { windowPopUp } from "./windowPopUp.js";

function displayNewProjectMenu(button) {
    const window = document.querySelector(".window");
    removeAllChild(window);
    
    const windowForm = document.createElement("form");
    windowForm.setAttribute("autocomplete", "off");
    windowForm.addEventListener("submit", (e)=> {
        e.preventDefault();
    })

    const heading = document.createElement("h2");
    heading.classList.add("window-heading");
    heading.textContent = "New project";

    const newProjectLabel = document.createElement("label");
    newProjectLabel.textContent = "Type new project name:";
    newProjectLabel.setAttribute("for", "new-project");

    const newProjectInput = document.createElement("input");
    newProjectInput.required = true;
    newProjectInput.classList.add("project-input");
    newProjectInput.setAttribute("type", "text");
    newProjectInput.setAttribute("id", "new-project");
    newProjectInput.setAttribute("placeholder","must be 1-50 characters long");
    newProjectInput.setAttribute("minlength", "1");
    newProjectInput.setAttribute("maxlength", "50");
    
    const newProjectButton = document.createElement("button");
    newProjectButton.classList.add("done-button");
    newProjectButton.classList.add("button--primary");
    newProjectButton.textContent = "Add project";

    newProjectButton.addEventListener("click", () => {
        if (newProjectInput.value) {
            const addNewProject = newProject(newProjectInput.value);
            projectList.push(addNewProject);

            localStorage.setItem("projectList", JSON.stringify(projectList));

            display.projectList();
            display.setCurrentTab(()=> {
                display.project(addNewProject);
            });
            display.currentTab();
            window.classList.add("hide");
        }
    })

    windowForm.appendChild(heading);
    windowForm.appendChild(newProjectLabel);
    windowForm.appendChild(newProjectInput);
    windowForm.appendChild(newProjectButton);
    window.appendChild(windowForm);

    windowPopUp.show(button);
}

export {displayNewProjectMenu}