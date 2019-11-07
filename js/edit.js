$(document).ready(function () {

    var address = unescape(location.href);
    var params = getUrlParams();
    var id=params.template_id;
 
    initEdit(id);
    

   
    // 새로 저장 버튼으로 새로운 myform 만들기.
    // $('#btn_save').click(function () {
        
    //     // saveElement();
    //     //location.href="write.html";
    //     // location.replace("write.html");     // 페이지 이동.

    //     //location.reload();        // 새로고침
        
    //     // loadElement();
        
    //     //$("#myform").html("애용");
    //     //$(document).ready(function() { alert("첫번째 ready()"); });
    //     //$(document).ready(function() {
        
    //     //alert(written_str);
    //     //});
    // });
    
});

function getUrlParams() {
    var params = {};
    window.location.search.replace(/[?&]+([^=&]+)=([^&]*)/gi, function (str, key, value) { params[key] = value; });
    return params;
}

function saveElement() {
    sessionStorage.setItem('myform', written_str)
    // alert("저장완료");
}

function loadElement() {
    var output;
    output = sessionStorage.getItem('myform')
    // alert("로드완료");
    $("#myform").text("얌");     // write.html의 myform textarea에 written_str 데이터 출력.
}



