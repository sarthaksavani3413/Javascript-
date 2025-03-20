var record = [];
var viewTask = () => {
    var tbl = "";
    record.map((val, index) => {
        tbl += `
                    <tr>
                        <td>${val?.taskid}</td>
                        <td>${val?.taskname}</td>
                    </tr>
                `
    })
    document.getElementById('todolist').innerHTML = tbl;
}
viewTask();
var addTask = () => {
    var task = document.getElementById('task').value;
    var dup = record.filter((val) => {
        return val.taskname == task

    })
    if (dup.length == 1) {
        alert("Task is already exists");
        document.getElementById('task').value = "";
        return false;
    }
    var obj = {
        taskid: parseInt(Math.random() * 1000000),
        taskname: task
    }
    record.push(obj)
    document.getElementById('task').value = "";
    alert("task successfully add");
    viewTask();
}