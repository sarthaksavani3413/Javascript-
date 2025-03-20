var cnt = 0;

var btn = document.getElementById('minus');
btn.disabled = true;

setInterval(() => {
    cnt++;
    document.getElementById(`cnt`).innerHTML = cnt;
    if (cnt > 0) {
        btn.disabled = false;
    }
}, 1000);

var increment = () => {
    cnt++;
    document.getElementById(`cnt`).innerHTML = cnt;
    if (cnt > 0) {
        btn.disabled = false;
    }
}
var decrement = () => {
    cnt--;
    document.getElementById(`cnt`).innerHTML = cnt;
    if (cnt == 0) {
        btn.disabled = true;
    }
}