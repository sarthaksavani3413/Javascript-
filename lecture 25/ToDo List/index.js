let allTask = localStorage.getItem('tasks') ? JSON.parse(localStorage.getItem('tasks')) : []

const addtask = () => {
    document.getElementById('edit').style.display = "none";
    document.getElementById('add').style.display = "block";
    let task = document.getElementById('task').value;
    localStorage.setItem('tasks', JSON.stringify(allTask));
    let taskList = JSON.parse(localStorage.getItem('tasks'));
    document.getElementById('task').value = "";

    let obj = {
        id: Math.floor(Math.random() * 100000),
        task: task,
        status: 'pending'
    }

    let dup = allTask.some((val) => val.task == task);
    if (dup) {
        alert("Task already exists.");
        document.getElementById('task').value = "";
        return false;
    }
    allTask.push(obj)
    localStorage.setItem('tasks', JSON.stringify(allTask));
    let tasklist = JSON.parse(localStorage.getItem('tasks')).value;
    alert(`Task added successfully!`);
    // console.log(allTask);
    viewTask();
}

const deleteTask = (id) => {
    let taskList = JSON.parse(localStorage.getItem('tasks')) || [];
    let index = taskList.findIndex((val) => val.id == id);
    if (index !== -1) {
        taskList = taskList.filter((tasks) => tasks.id !== id);
        localStorage.setItem('tasks', JSON.stringify(taskList));
        allTask = taskList;
        viewTask();
        alert("Task deleted successfully!");
        document.getElementById('task').value = "";
    }
};

const viewTask = () => {
    let tbl = "";
    allTask.forEach((val, index) => {
        tbl += `
                <tr>
                    <td>${val.id}</td>
                    <td>${val.task}</td>
                    <td>
                    <button class="btn btn-danger" onclick="deleteTask(${val.id})">Delete</button>
                    <button class="btn btn-info" onclick="editTask(${val.id},'${val.task}')">Edit</button>
                    <select id='status_${val.id}' onchange="changestatus(${val.id})">
                        <option>---select status---</option>
                        <option>success</option>
                        <option>pending</option>
                        <option>cancel</option>
                    </select>
                    </td>
                    <td>`

        if (val.status == 'success') {
            tbl += `<button class="btn btn-success">${val.status}</button>`
        } else if (val.status == 'pending') {
            tbl += `<button class="btn btn-warning">${val.status}</button>`
        } else if (val.status == 'cancel') {
            tbl += `<button class="btn btn-danger">${val.status}</button>`
        }

        tbl += `</td>
            </tr>  
            `
    });
    document.getElementById("onlytask").innerHTML = tbl;
};

const alldata = () => {
    localStorage.removeItem('tasks');
    allTask = [];
    viewTask();
    alert("All tasks successfully cleared !")
    document.getElementById('task').value = "";
}

const editTask = (id, task) => {
    document.getElementById('add').style.display = "none";
    document.getElementById('edit').style.display = "block";
    document.getElementById('task').value = task;
    document.getElementById('id').value = id;
}

const edittask = () => {
    let id = document.getElementById('id').value;
    let task = document.getElementById('task').value;
    let taskList = JSON.parse(localStorage.getItem('tasks')) || [];
    let index = taskList.findIndex((val) => val.id == id);
    if (index !== -1) {
        taskList[index].task = task;
        localStorage.setItem('tasks', JSON.stringify(taskList));
        allTask = taskList;
        viewTask();
        alert("Task updated successfully!");
        document.getElementById('task').value = "";
        document.getElementById('id').value = "";
    }
}

const changestatus = (id) => {
    let status = document.getElementById(`status_${id}`).value;
    console.log(status);

    if (status) {
        let taskList = JSON.parse(localStorage.getItem('tasks')) || [];
        let index = taskList.findIndex((task) => task.id == id);

        if (index !== -1) {
            taskList[index].status = status;
            localStorage.setItem('tasks', JSON.stringify(taskList));
            allTask = taskList;
            viewTask();
            alert("Status successfully updated!");
        }
    }
};