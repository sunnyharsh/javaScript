window.addEventListener('load' , init);

function init(){
    document.getElementById("call").addEventListener('click' , serverCall)
}

function serverCall(){
    const Http=new XMLHttpRequest();
    var url="https://raw.githubusercontent.com/sunnyharsh/angular2/master/address.json";
    Http.open("GET" , url);
    Http.send();

    Http.onreadystatechange=function(){
        if(this.readyState==4 && this.status==200){
            console.log(Http.responseText);
        }
    }
}