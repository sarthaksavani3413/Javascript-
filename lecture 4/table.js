var age = [20, 21, 22];
var tbl = `
             <thead class="fc">
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Gmail ID</th>
                    <th>Age</th>
                    <th>image</th>
                </tr>
                <tbody class="fc">
                    <tr>
                        <td>1</td>
                        <td>Sarthak</td>
                        <td>Savani@gmil.com</td>
                        <td>${age[0]}</td>
                        <td>
                         <img src="https://th.bing.com/th/id/OIG1.wQ7nqzXG6LLji1s3MrOP" width="50"height="50">
                        </td>
                    </tr>
                <tbody class="fc">
                    <tr>
                        <td>2</td>
                        <td>Ravi</td>
                        <td>Ravi@gmil.com</td>
                        <td>${age[1]}</td>
                        <td>
                         <img src="https://media.istockphoto.com/id/1403500817/photo/the-craggies-in-the-blue-ridge-mountains.jpg?s=612x612&w=0&k=20&c=N-pGA8OClRVDzRfj_9AqANnOaDS3devZWwrQNwZuDSk=" width="50"height="50">
                        </td>
                    </tr>
                </tbody>
                 <tbody class="fc">
                    <tr>
                        <td>3</td>
                        <td>Ramesh</td>
                        <td>Ramesh@gmil.com</td>
                        <td>${age[2]}</td>
                        <td>
                         <img src="https://www.shutterstock.com/image-photo/calm-weather-on-sea-ocean-600nw-2212935531.jpg" width="50"height="50">
                        </td>
                    </tr>
                </tbody>
            </thead>
            `
console.log(tbl);

document.getElementById("audio").innerHTML = tbl;

var a = 10;
var b = 20;

console.log(3 >= 5);
