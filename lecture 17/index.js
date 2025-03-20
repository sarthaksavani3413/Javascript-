var record = [];
var taskview = () => {
    var tbl = "";
    record.map((val, index) => {
        tbl += `
                <tr>
                <td>${val?.id}</td>
                <td>${val?.name}</td>
                </tr>
        `
    })
    document.getElementById(`addTask`).innerHTML = tbl;
}
var todolist = () => {
    var task = document.getElementById(`task`).value;
    var dub = record.filter((val) => {
        return val.id === task
    })
    if (dub.length == 1) {
        alert("Task already exists");
        document.getElementById(`task`).value = "";
        return false;
    }
    var object = {
        id : parseInt(Math.random()*100000),
        name : task
    }
    record.push(object)
    document.getElementById(`task`).value = "";
    alert("task added");
    taskview();
}