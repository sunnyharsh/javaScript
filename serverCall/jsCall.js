window.addEventListener('load' , init);

function init(){
    document.getElementById("call").addEventListener('click' , serverCall)
}

function serverCall(){
    console.log("server call");
    serverUrl = "https://raw.githubusercontent.com/sunnyharsh/angular2/master/address.json";
    console.log("server call done");
    fetch(serverUrl).then(done).catch(fail);
}
function done(response){
    console.log("server call done1");
    response.json().then(printData);
}

function printData(data){
    console.log("Data is ",data);
    var div = document.querySelector("#result");
    for(let i= 0 ; i<data.length; i++){
        var para = document.createElement("p");
        para.innerHTML = data[i].id +" "+data[i].name +" "+data[i].price;
        div.appendChild(para);
    }
}
function fail(error){
    console.log("Error is ",error);

}