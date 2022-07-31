window.addEventListener(`DOMContentLoaded`, init);
export function getFunc() {

    const mvt = new FormData(document.getElementById("test_form"));
    const cst = new XMLHttpRequest();
    cst.onload = function(){
        document.getElementById("response").innerHTML = JSON.stringify(JSON.parse(cst.responseText), null, 4);
    }
    cst.open(`GET`, `https://httpbin.org/get`);
    cst.send(mvt);
}


export function postFunc(){

    const mvt = new FormData(document.getElementById("test_form"));
    const cst = new XMLHttpRequest();

    cst.onload = function() {
        document.getElementById("response").innerHTML = JSON.stringify(JSON.parse(cst.responseText), null, 4);
    }
    cst.open("POST", "https://httpbin.org/post");
    cst.send(mvt);
}

function init(){
    document.getElementById("bt2").addEventListener("click",getFunc);
    document.getElementById("bt1").addEventListener("click",postFunc);
    document.getElementById("bt3").addEventListener("click",putFunc);
    document.getElementById("bt4").addEventListener("click",deleteFunc);

}

export function putFunc(){

    const mvt = new FormData(document.getElementById("test_form"));
    const cst = new XMLHttpRequest();

    cst.onload = function() {
        document.getElementById("response").innerHTML = JSON.stringify(JSON.parse(cst.responseText), null, 4);
    }
    cst.open("PUT", "https://httpbin.org/put");
    cst.send(mvt);
}

export function deleteFunc(){

    const mvt = new FormData(document.getElementById("test_form"));
    const cst = new XMLHttpRequest();

    cst.onload = function() {
        document.getElementById("response").innerHTML = JSON.stringify(JSON.parse(cst.responseText), null, 4);
    }
    cst.open("DELETE", "https://httpbin.org/delete");
    cst.send(mvt);
}