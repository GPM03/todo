import { removeAllChild } from "./removeAllChild.js";
import { displayTask } from "./displayTask.js";
import { displayNewTaskMenu } from "./displayNewTaskMenu.js";
import { displayEditTaskMenu} from "./displayEditTaskMenu.js";
import { displayRemoveProjectMenu } from "./displayRemoveProjectMenu.js";

function displayProject(project, emptyContainer = true, projectButtons = true) {
    const taskContainer = document.querySelector(".task-container");

    if (emptyContainer) {
        removeAllChild(taskContainer);
    }

    const projectHeader = document.createElement("span");
    const projectTitle = document.createElement("h3");
    projectTitle.textContent = project.title;
    projectTitle.classList.add("project-title");
    const taskListEl = document.createElement("ul");
    taskListEl.classList.add("task-list");

    const taskList = project.getTasks();
    taskList.forEach((task, index) => {
        displayTask(project, task, index, taskListEl);
    });

    projectHeader.appendChild(projectTitle)

    if (projectButtons) {
        const buttonContainer = document.createElement("span");
        const newTaskButton = document.createElement("span");
        newTaskButton.classList.add("button--primary")
        const addIcon = document.createElement("span");
        const addTaskText = document.createElement("span");

        addIcon.classList.add("add-icon");
        addIcon.classList.add("white-icon");
        addTaskText.textContent = "New task";
        newTaskButton.appendChild(addTaskText);
        newTaskButton.appendChild(addIcon);
        newTaskButton.addEventListener("click", ()=> {
            displayNewTaskMenu(project, newTaskButton);
        })

        const editIcon = document.createElement("span");
        editIcon.classList.add("edit-icon");

        editIcon.addEventListener("click", ()=> {
            displayEditTaskMenu(project, editIcon);
        });
        
        const deleteIcon = document.createElement("span");
        deleteIcon.classList.add("delete-icon");

        deleteIcon.addEventListener("click", ()=> {
            displayRemoveProjectMenu(project, deleteIcon);
        })
        
        buttonContainer.appendChild(newTaskButton);
        buttonContainer.appendChild(editIcon);
        buttonContainer.appendChild(deleteIcon);

        buttonContainer.classList.add("project-buttons")
        projectHeader.appendChild(buttonContainer);

    }
    projectHeader.classList.add("project-header");
    taskContainer.appendChild(projectHeader);
    taskContainer.appendChild(taskListEl);
};

export {displayProject}