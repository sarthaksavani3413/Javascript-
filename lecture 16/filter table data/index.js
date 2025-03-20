var records = [
    { id: 1, name: 'John', email: "john@gmail.com", gender: "male", city: "Surat", hobby: ["cricket", "game playing", "song listening"], salary: 5000, designation: "junior" },
    { id: 2, name: 'Rahul', email: "rahul@gmail.com", gender: "male", city: "Mumbai", hobby: ["football", "reading"], salary: 6000, designation: "senior" },
    { id: 3, name: 'Rohan', email: "rohan@gmail.com", gender: "male", city: "Pune", hobby: ["cricket", "reading"], salary: 7000, designation: "senior" },
    { id: 4, name: 'Ajay', email: "ajay@gmail.com", gender: "male", city: "Delhi", hobby: ["travelling", "reels"], salary: 8000, designation: "junior" },
    { id: 5, name: 'Pooja', email: "pooja@gmail.com", gender: "female", city: "Ahmedabad", hobby: ["volleyball", "music"], salary: 9000, designation: "senior" },
    { id: 6, name: 'Vishal', email: "vishal@gmail.com", gender: "male", city: "Bangalore", hobby: ["cricket", "photography"], salary: 6000, designation: "junior" },
    { id: 7, name: 'Sandeep', email: "sandeep@gmail.com", gender: "male", city: "Kolkata", hobby: ["music", "travelling"], salary: 5000, designation: "junior" },
    { id: 8, name: 'Sahil', email: "sahil@gmail.com", gender: "male", city: "Chennai", hobby: ["reading", "cooking"], salary: 15500, designation: "senior" },
    { id: 9, name: 'Amit', email: "amit@gmail.com", gender: "male", city: "Delhi", hobby: ["football", "gaming"], salary: 6500, designation: "junior" },
    { id: 10, name: 'Manish', email: "manish@gmail.com", gender: "male", city: "Lucknow", hobby: ["cricket", "reading"], salary: 17000, designation: "senior" },

];
var recordview = () => {
    var table = "";
    records.map((val) => {
        table += `
                <tr>
                    <td>${val.id}</td>
                    <td>${val.name}</td>
                    <td>${val.email}</td>
                    <td>${val.gender}</td>
                    <td>${val.city}</td>
                    <td>${val.hobby}</td>
                    <td>${val.salary}</td>
                    <td>${val.designation}</td>
                </tr>
                `
    }),
        document.getElementById(`record`).innerHTML = table;
}
recordview();

var cityFun = () => {
    var city = document.getElementById("search").value;
    var filterRecords = records.filter((val) => val.city == city);
    let err = "";
    if (filterRecords.length == 0) {
        err += `<h3>Record not found</h3>`
        document.getElementById('error').innerHTML = err;
    }
    document.getElementById('search').value = "";
    var tbl = "";
    filterRecords.map((val) => {
        tbl += `
                <tr>
                    <td>${val.id}</td>
                    <td>${val.name}</td>
                    <td>${val.email}</td>
                    <td>${val.gender}</td>
                    <td>${val.hobby}</td>
                    <td>${val.city}</td>
                    <td>${val.salary}</td>
                    <td>${val.designation}</td>
                </tr>
            `
    });
    document.getElementById(`record`).innerHTML = tbl;
}

var salaryFun = () => {
    var StartSalary = document.getElementById("StartSalary").value;
    var EndSalary = document.getElementById("EndSalary").value;
    var filterRecords = records.filter((val) => val.salary >= StartSalary && val.salary <= EndSalary);
    let err = "";
    if (filterRecords.length == 0) {
        err += `<h3>Record not found</h3>`
        document.getElementById('error').innerHTML = err;
    }
    document.getElementById('StartSalary').value = "";
    var tbl = "";
    filterRecords.map((val) => {
        tbl += `
                <tr>
                    <td>${val.id}</td>
                    <td>${val.name}</td>
                    <td>${val.email}</td>
                    <td>${val.gender}</td>
                    <td>${val.hobby}</td>
                    <td>${val.city}</td>
                    <td>${val.salary}</td>
                    <td>${val.designation}</td>
                </tr>
            `
    });
    document.getElementById(`record`).innerHTML = tbl;
}

var genderFun = () => {
    var gender = document.getElementById("gender").value;
    var filterRecords = records.filter((val) => val.gender == gender);
    let err = "";
    if (filterRecords.length == 0) {
        err += `<h3>Record not found</h3>`
        document.getElementById('error').innerHTML = err;
    }
    document.getElementById('gender').value = "";
    var tbl = "";
    filterRecords.map((val) => {
        tbl += `
                <tr>
                    <td>${val.id}</td>
                    <td>${val.name}</td>
                    <td>${val.email}</td>
                    <td>${val.gender}</td>
                    <td>${val.hobby}</td>
                    <td>${val.city}</td>
                    <td>${val.salary}</td>
                    <td>${val.designation}</td>
                </tr>
            `
    });
    document.getElementById(`record`).innerHTML = tbl;
}

designationFun = () => {
    var designation = document.getElementById("designation").value;
    var filterRecords = records.filter((val) => val.designation == designation);
    let err = "";
    if (filterRecords.length == 0) {
        err += `<h3>Record not found</h3>`
        document.getElementById('error').innerHTML = err;
    }
    document.getElementById('designation').value = "";
    var tbl = "";
    filterRecords.map((val) => {
        tbl += `
        <tr>
            <td>${val.id}</td>
            <td>${val.name}</td>
            <td>${val.email}</td>
            <td>${val.gender}</td>
            <td>${val.hobby}</td>
            <td>${val.city}</td>
            <td>${val.salary}</td>
            <td>${val.designation}</td>
        </tr>
    `
    });
    document.getElementById(`record`).innerHTML = tbl;
}

var ResetFun = () => {
    recordview();
}