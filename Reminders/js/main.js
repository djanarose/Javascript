// This is a sample Javascript project
const newTask  = document.querySelector("#new-task-input");
const addTaskBtn = document.querySelector(".add-task-btn");
const clearCompletedBtn = document.querySelector(".clear-completed-btn");
const taskList = document.querySelector(".task-list");
const taskTemplate = document.querySelector("#task-template");
let id = 1;

newTask.addEventListener("keyup", (e) => {
	if (e.keyCode === 13 && inputValid()) {
		addTask();
	}
});

addTaskBtn.addEventListener("click", () => {
	if (inputValid()) {
		addTask();
	}
});

clearCompletedBtn.addEventListener("click", () => {
	const tasks = document.querySelectorAll(".task");
	tasks.forEach(task => {
		const checked = task.querySelector("input").checked;
		if (checked) {
			task.remove();
		}
	})
})

function inputValid() {
	return newTask.value !== '';
}

function addTask() {
	const taskElement = document.importNode(taskTemplate.content, true);
	const checkbox = taskElement.querySelector("input");
	checkbox.id = id;
	const label = taskElement.querySelector("label");
	label.htmlFor = id;
	label.append(newTask.value);
	taskList.appendChild(taskElement);
	newTask.value = '';
	id++;
}