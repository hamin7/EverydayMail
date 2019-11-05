window.addEventListener("load", doFirst, false);

// 페이지 로드 시 doFirst 함수 call.
function doFirst() {
    var button = document.getElementById("button");     // button 지역변수에 html내의 id가 button인 요소 대입.
    button.addEventListener("click", saveData, false)   // button에 리스너 - click 이벤트 발생 시 saveData() 실행.
    display();      // 잘 되는지 실험을 위해. 다른 사이트 나갔다가 돌아오는 경우를 대비해서.

    // 삭제 버튼.
    var button_delete = document.getElementById("button_delete");
    button_delete.addEventListener("click", deleteData, false)
    display();
}

// local storage에 데이터를 저장하는 함수. (key - value)
function saveData() {
    var myform = document.getElementById("myform").value;   // 지역 변수 myform에 html내의 id가 myform 인 놈의 value 대입.
    var myform_title = document.getElementById("myform_title").value;   // myform_title에 위와 같음.
    
    myform = myform.replace(/(?:\r\n|\r|\n)/g, '<br/>');    // 공백 처리.

    localStorage.setItem(myform_title, myform);   // myform_title이 key값, myform이 value값.

    display();      // 잘 되는지 실험을 위해.

    document.getElementById('myform_title').value="";     // myform_title의 value를 빈칸으로 하기.
    document.getElementById('myform').value="";     // myform의 value를 빈칸으로 하기.
}

// local storage에 저장된 데이터를 삭제하는 함수. (key를 기준으로 삭제한다.)
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

/*
var str = document.getElementById("textarea").value;
str = str.replace(/(?:\r\n|\r|\n)/g, '<br/>');
document.getElementById("textarea").value = str;    // 이거 뭐하는 코드?
*/

$(function () {
    $('.btn-add').click(function () {
        insertData();
    });
})


// my form 클래스.
class myform {
    constructor(id, myform_title, myform) {
        this.id = id;
        this.myform_title = myform_title;
        this.myform;
    }
}

// local storage에 myform 객체를 넣는 함수.
function insertData() {
    var myform_title = $('#input_myform_title').val();
    var myform = $('#input_myform').val();

    if (myform_title === "")
        alert('입력해 주시죠?');
    else {
        var myformList;
        try {
            myformList = JSON.parse(localStorage["myformList"]);
        } catch (e) {
            myformList = new Array();
        }

        myform = myform.replace(/(?:\r\n|\r|\n)/g, '<br/>');

        var newItem = new myform(myformList.length, myform_title, myform);
        myformList.push(newItem);
        localStorage.setItem("myformList", JSON.stringify(myformList));

        //
        display();

        location.reload();
    }
}

function initList() {
    var str = '<ul class="myform-list">';

    try {
        var id = 0;
        $('#list-msg').text('');
        const myform_title = JSON.parse(localStorage["myformList"]);

        const start = '<li><label class="container" id="myform_title-';
        const start2 = '">';

        const end = '"></li>';

        myformList.forEach(value => {
            str += start + id + start2 + "<span class=\"myform-text\" id=\"myform-text-" + id + "\">" + value.myform_title + value.myform + "</span>" + id + end;
            id++;
        });
    } catch (e) {
        $('#list-msg').text('애용!');
    }

    str += '<li>\n' +
        '       <input type="text" placeholder="여기에 제목을 입력하세요" id="input_myform_title">\n' +
        '       <input type="text" placeholder="여기에 글을 입력하세요" id="input_myform">\n' +
        '       <input type="button" id="add-myform" class="btn-add">\n' +
        '       </li></ul>';

    $('myform-list').html(str);

    setLineThrough();
}

function setLineThrough() {
    let id = 0;
    try {
        const myformList = JSON.parse(localStorage["myformList"]);

        myformList.forEach(value => {
            $('#myform-text-${id}').css("text-decoration", "line-through");

            id++
        });
    } catch (e) {}
}