
$(function () {
    initList('myformList');
    initCategory();

    $('#btn_insert').click(function () {
        insertData();    
    });

    $('#clearList').click(function () {
        deleteAll();
    });
    
    $('.btn_delete').click(function () {  
        deleteItem($(this).parents("div").prop("id"));   
    });
    

    $('#btn_newCategory').click(function () {
        var newCategory = prompt("추가할 카테고리를 입력하세요");
        if (newCategory != null){
            if (newCategory == "")
                alert("내용을 입력해주세요");
            else{   
                $("#category").append('<option value="' + newCategory + '">' + newCategory+ '</option>');
                $("#picker").append('<option value="' + newCategory + '">' + newCategory + '</option>');

                insertCategory(newCategory);
                alert("'" + newCategory + "' 카테고리가 추가되었습니다");
            }    
        }
    });
    $('#btn_delCategory').click(function () {
        var select_name = $("select#picker").children("option:selected").text();
        deleteCategory(select_name);
    });
    

    $("select#picker").change(function () {
        var select_name = $(this).children("option:selected").text();
        $(this).siblings("label").text(select_name);

        if(select_name=="전체") 
            initList("myformList");
        else
            initSelectedList(select_name, "myformList");

        $('.btn_delete').click(function () {
            deleteItem($(this).parents("div").prop("id"));
        });

    });

    //삭제대상
    $('#clearCategory').click(function () {
        localStorage.removeItem("categoryList");
    });
    $('#clearTemplate').click(function () {
        localStorage.removeItem("templateList");
    });
    

})


class myform {
    constructor(id, category, title, contents) {
        this.id = id;
        this.category = category;
        this.title = title;
        this.contents= contents;
    }
}

function insertData() {
    
    var myform_title = $('#myform_title').val();
    var myform_category = $('#category option:selected').val();
    var myform_contents = $('#myform, #result').val();
    myform_contents = myform_contents.replace(/(?:\r\n|\r|\n)/g, '<br/>');
    
    if (myform_title == "" || myform_contents=="")
        alert('제목을 입력해주세요');
    else {
        var myformList;
        try {
            myformList = JSON.parse(localStorage["myformList"]);
        } catch (e) {
            myformList = new Array();
        }
        
        myformList.push(new myform(myformList.length, myform_category, myform_title, myform_contents));
        localStorage.setItem("myformList", JSON.stringify(myformList));

        location.replace("index.html");
    
    }
}
function initList(list){

    var str ="";
    try{
        
        var id = 0;
        var myformList = JSON.parse(localStorage[list]);
        
        myformList.forEach(value => {
            
            var modified = replaceAll(value.contents,"<br/>", " ");
            
            str += '<div class="row" id="'+id+'" > <img class="btn_delete" src="icons/remove_icon_32.png" /> ';
            str += '<div class="row_click" onClick = "move(0,'+ id + ')" >';
            str += '<span class="row_category">' + value.category + '</span>';
            str += '<h4 class="row_title">' + value.title +'</h4>';
            str += '<p class="row_content">' + modified +'</p></div></div>';
            id++;
        })
        
        if (myformList.length == 0)
            str += '<div class="row">목록이 비어있습니다<br/>하단의 버튼을 눌러 새로운 템플릿을 작성하세요</div>'; 
    }catch(e){  
        str += '<div class="row">목록이 비어있습니다<br/>하단의 버튼을 눌러 새로운 템플릿을 작성하세요</div>'; 
    }

    $('.template_list').html(str);
}


function initSelectedList(category, list){
    var flag = (list == "myformList")? 0:1;
  
    var str = "";
    try {
        var id = 0;
        var myformList = JSON.parse(localStorage[list]);

        myformList.forEach(value => {
            if(value.category == category){
                var modified = replaceAll(value.contents, "<br/>", " ");

                str += '<div class="row" id="' + id + '" > <img class="btn_delete" src="icons/remove_icon_32.png" />';
                str += '<div class="row_click" onClick = "move(' + flag +','+ id + ')" >';
                str += '<span class="row_category">' + value.category + '</span>';
                str += '<h4 class="row_title">' + value.title + '</h4>';
                str += '<p class="row_content">' + modified + '</p></div></div>';
                
            }
            id++;
        })
        
    } catch (e) {
    }

    $('.template_list').html(str);
}

function initCheckList(list, id) {

    var data_arr = JSON.parse(localStorage[list]);
    var title = data_arr[id].title;
    var contentSplit = data_arr[id].contents.split('<br/>');
    
    var str = "";
    for (var i in contentSplit) {
        str += '<input type="checkbox" id="line'+i +'"  class="chk" name="chk" checked="true"/> ';
        str += '<label for="line' + i + '"><input type="text" id="text_line' + i + '" value="' + contentSplit[i] + '"></label>';
    }
    $('.comment_title').append(title);
    $('#check_list').html(str);
}


function deleteItem(num) {

    var deleteItem = confirm("해당 템플릿이 삭제됩니다.\n계속하시겠습니까?");
    if (deleteItem) {
        var data_arr = JSON.parse(localStorage["myformList"]);
        data_arr.splice(num, 1);

        var id = 0;
        data_arr.forEach(value => {
            value.id = id;
            id++;
        });

        localStorage.setItem("myformList", JSON.stringify(data_arr));

        location.reload();
    }
    
}

function deleteAll(){
    var deleteAll = confirm("작성한 모든 템플릿과 카테고리가 삭제됩니다.\n계속하시겠습니까?");
    if(deleteAll){
        localStorage.removeItem("myformList");
        localStorage.removeItem("categoryList");

        location.reload();
    }
}

function insertCategory(category) {
    
    try {
        categoryList = JSON.parse(localStorage["categoryList"]);
    } catch (e) {
        categoryList = new Array();
    }
    categoryList.push(category);
    localStorage.setItem("categoryList", JSON.stringify(categoryList));

    
}

function initCategory() {

    var str = "";
    try {
        const categoryList = JSON.parse(localStorage["categoryList"]);

        for(var i=0 ;i<categoryList.length;i++){
            str += '<option value="' + categoryList[i] + '">' + categoryList[i]+'</option>';
        }      

    } catch (e) {
        
    }
    $('#category').append(str);
    $('#picker').append(str);
}

function deleteCategory(name){
    if(name=="전체" || name=="분류 없음")
        alert("기본 카테고리는 삭제할 수 없습니다");
    else{
        var deleteCategory = confirm("'" + name + "' 카테고리가 삭제됩니다.\n계속하시겠습니까?");
        try {
            var template_arr = JSON.parse(localStorage["myformList"]);
            for (var i = 0; i < template_arr.length; i++) {
                if (template_arr[i].category == name) {
                    alert("해당 카테고리에 템플릿이 존재하여 삭제할 수 없습니다");
                    deleteCategory = false;
                    break;
                }
            }
        } catch (e) {

        }    
        
        if (deleteCategory) {
            try {
                var data_arr = JSON.parse(localStorage["categoryList"]);

                for (var i = 0; i < data_arr.length; i++) {
                    if (data_arr[i] == name) {
                        data_arr.splice(i, 1);
                    }
                }

                localStorage.setItem("categoryList", JSON.stringify(data_arr));
                location.reload();
            } catch (e) {
            }
        }
    } 
    
    
}
