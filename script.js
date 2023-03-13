
let btns = document.getElementsByClassName('btn');
let result = document.getElementById('result')

for (let btn of btns) {
    btn.addEventListener('click',function (){
        result.innerHTML += this.value;
    })
}
    function equal() {
    let res = result.innerHTML;
    result.innerHTML = eval(res);
}
function clean() {
    result.innerHTML = " ";
}

