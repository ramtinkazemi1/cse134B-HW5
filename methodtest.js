
window.addEventListener(`DOMContentLoaded`, init);
function init(){
    document.getElementById("bt2").addEventListener("click",getFunc);
    document.getElementById("bt1").addEventListener("click",postFunc);
    document.getElementById("bt3").addEventListener("click",putFunc);
    document.getElementById("bt4").addEventListener("click",deleteFunc);
    const today = new Date();
    console.log(`Initialized at ${today}`);

}

export function getFunc() {

    const temp = new FormData(document.getElementById("test_form"));
    const xhr = new XMLHttpRequest();
    xhr.onload = function(){
        document.getElementById("response").innerHTML = JSON.stringify(JSON.parse(xhr.responseText), null, 4);
    }
    xhr.open(`GET`, `https://httpbin.org/get`);
    xhr.send(temp);
}


export function postFunc(){
    console.log(`time to post`);
    const temp = new FormData(document.getElementById("test_form"));
    const xhr = new XMLHttpRequest();

    xhr.onload = function() {
        document.getElementById("response").innerHTML = JSON.stringify(JSON.parse(xhr.responseText), null, 4);
    }
    xhr.open("POST", "https://httpbin.org/post");
    xhr.send(temp);
}

export function putFunc(){
    console.log(`time to put`);
    const temp = new FormData(document.getElementById("test_form"));
    const xhr = new XMLHttpRequest();

    xhr.onload = function() {
        document.getElementById("response").innerHTML = JSON.stringify(JSON.parse(xhr.responseText), null, 4);
    }
    xhr.open("PUT", "https://httpbin.org/put");
    xhr.send(temp);
}

export function deleteFunc(){
    console.log(`time to delete`);
    const temp = new FormData(document.getElementById("test_form"));
    const xhr = new XMLHttpRequest();

    xhr.onload = function() {
        document.getElementById("response").innerHTML = JSON.stringify(JSON.parse(xhr.responseText), null, 4);
    }
    xhr.open("DELETE", "https://httpbin.org/delete");
    xhr.send(temp);
}