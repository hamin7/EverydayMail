$(function () {
    $('#btn_insert').click(function () {
        insertData();
    });
})


// my form 클래스.
class myform {
    constructor(id, category, title, contents) {
        this.id = id;
        this.category = category;
        this.title = title;
        this.myform;
    }
}

// local storage에 myform 객체를 넣는 함수.
function insertData() {
    var myform_title = $('#input_myform_title').val();
    var myform = $('#input_myform').val();

    myform = myform.replace(/(?:\r\n|\r|\n)/g, '<br/>');

    if (myform_title == "")
        alert('입력해 주시죠?');
    else {
        var myformList;
        try {
            myformList = JSON.parse(localStorage["myformList"]);
        } catch (e) {
            myformList = new Array();
        }

        var newItem = new myform(myformList.length, cateogry, myform_title, myform);
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