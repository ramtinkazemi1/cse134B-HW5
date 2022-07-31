
window.addEventListener(`DOMContentLoaded`, init);
function init(){
    document.getElementById("getBtn").addEventListener("click",requestGet);
    document.getElementById("postBtn").addEventListener("click",requestPost);
    document.getElementById("putBtn").addEventListener("click",requestPut);
    document.getElementById("deleteBtn").addEventListener("click",requestDelete);
    const today = new Date();
    console.log(`Initialized at ${today}`);

}

export function requestGet() {
    console.log(`time to get`);  
    const temp = new FormData(document.getElementById("act"));
    const xhr = new XMLHttpRequest(); 
    xhr.onload = function(){
        document.getElementById("response").innerHTML = JSON.stringify(JSON.parse(xhr.responseText), null, 4);
    }
    xhr.open(`GET`, `https://httpbin.org/get`);
    xhr.send(temp);
}


export function requestPost(){
    console.log(`time to post`);  
    const temp = new FormData(document.getElementById("act"));
    const xhr = new XMLHttpRequest();

    xhr.onload = function() {
        
        document.getElementById("response").innerHTML = JSON.stringify(JSON.parse(xhr.responseText), null, 4);
    }
    xhr.open("POST", "https://httpbin.org/post");
    xhr.send(temp);
}

export function requestPut(){
    console.log(`time to put`);  
    const temp = new FormData(document.getElementById("act"));
    const xhr = new XMLHttpRequest();

    xhr.onload = function() {
        document.getElementById("response").innerHTML = JSON.stringify(JSON.parse(xhr.responseText), null, 4);
    }
    xhr.open("PUT", "https://httpbin.org/put");
    xhr.send(temp);
}

export function requestDelete(){
    console.log(`time to delete`);  
    const temp = new FormData(document.getElementById("act"));
    const xhr = new XMLHttpRequest();

    xhr.onload = function() {
        document.getElementById("response").innerHTML = JSON.stringify(JSON.parse(xhr.responseText), null, 4);
    }
    xhr.open("DELETE", "https://httpbin.org/delete");
    xhr.send(temp);
}