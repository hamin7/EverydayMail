
$(function () {
    initList();

    $('#btn_insert').click(function () {
        insertData();
    });

    $('#clearList').click(function () {
        deleteAll();
    });
    
    
})


// my form 클래스.
class myform {
    constructor(id, category, title, contents) {
        this.id = id;
        this.category = category;
        this.title = title;
        this.contents= contents;
    }
}

// local storage에 myform 객체를 넣는 함수.
function insertData() {
    var myform_title = $('#myform_title').val();
    var myform_category = "분류 없음";
    var myform_contents = $('#myform').val();

    myform_contents = myform_contents.replace(/(?:\r\n|\r|\n)/g, '<br/>');

    if (myform_title ==  "")
        alert('제목을 입력해주세요');
    else {
        var myformList;
        try {
            myformList = JSON.parse(localStorage["myformList"]);
        } catch (e) {
            myformList = new Array();
        }
        
        var newItem = new myform(myformList.length, myform_category, myform_title, myform_contents);
        myformList.push(newItem);
        localStorage.setItem("myformList", JSON.stringify(myformList));
        
    }
}
function initList(){

    var str ="";

    try{
        var id = 0;
        const myformList = JSON.parse(localStorage["myformList"]);
        
        myformList.forEach(value => {
            str += '<div class="row"> <a href="edit.html">';
            str += '<h3 class="row_title">' + value.title +'</h3>';
            str += '<p class="row_category">'+ value.category + '</p>';
            str += '<p class="row_content">' + value.contents +'</p>';
            str += '</a> </div>';
            id++;
        })
        $('.content_description').text("템플릿을 눌러 메일을 작성해보세요");
    }catch(e){
        
    }

    $('.template_list').html(str);
}

function deleteAll(){
    var deleteAll = confirm("작성한 모든 템플릿이 삭제됩니다.\n계속하시겠습니까?");
    if(deleteAll){
        localStorage.removeItem("myformList");

        location.reload();
    }
}
