// 페이지 로드 시 doFirst 함수 call.
function doFirst() {
    var button = document.getElementById("button");     // button 지역변수에 html내의 id가 button인 요소 대입.
    button.addEventListener("click", saveData, false)   // button에 리스너 - click 이벤트 발생 시 saveData() 실행.
    display();      // 잘 되는지 실험을 위해. 다른 사이트 나갔다가 돌아오는 경우를 대비해서.

    var button_delete = document.getElementById("button_delete");
    button_delete.addEventListener("click", deleteData, false)
    display();
}

function saveData() {
    var myform = document.getElementById("myform").value;   // 지역 변수 myform에 html내의 id가 myform 인 놈의 value 대입.
    var myform_title = document.getElementById("myform_title").value;   // myform_title에 위와 같음.
    
    myform = myform.replace(/(?:\r\n|\r|\n)/g, '<br/>');    // 공백 처리.

    localStorage.setItem(myform_title, myform);   // myform_title이 key값, myform이 value값.

    display();      // 잘 되는지 실험을 위해.

    document.getElementById('myform_title').value="";     // myform_title의 value를 빈칸으로 하기.
    document.getElementById('myform').value="";     // myform의 value를 빈칸으로 하기.
}

function deleteData() {
    var myform = document.getElementById("myform").value;
    var myform_title = document.getElementById("myform_title").value;

    myform = myform.replace(/(?:\r\n|\r|\n)/g, '<br/>');

    localStorage.removeItem(myform_title, myform);

    display();

    document.getElementById('myform_title').value="";
    document.getElementById('myform').value="";
}

function display() {
    var bottombox = document.getElementById("bottombox");
    bottombox.innerHTML = "";       // bottombox를 빈 공간으로 만들기. 
    for(var x = 0; x < localStorage.length; x++){     // localStorage에 저장돼 있는 갯수만큼 돌림.
        var a = localStorage.key(x);          // a에 key값.
        var b = localStorage.getItem(a);      // b에 key값에 대한 value값 넣기.
        bottombox.innerHTML += a+" - "+b+"<br/>";      // innerhtml.
    }
}
window.addEventListener("load", doFirst, false);

/*
var str = document.getElementById("textarea").value;
str = str.replace(/(?:\r\n|\r|\n)/g, '<br/>');
document.getElementById("textarea").value = str;    // 이거 뭐하는 코드?
*/