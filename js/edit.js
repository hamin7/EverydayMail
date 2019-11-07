$(document).ready(function () {
    // 새로 저장 버튼으로 새로운 myform 만들기.
    $('#btn_save').click(function () {
        
        saveElement();
        //location.href="write.html";
        location.replace("write.html");     // 페이지 이동.
        //location.reload();        // 새로고침
        
        loadElement();
        //$("#myform").html("애용");
        //$(document).ready(function() { alert("첫번째 ready()"); });
        //$(document).ready(function() {
        
        //alert(written_str);
        //});
        //alert(written_str);
        //$("#myform").html(written_str);
    });
});

function saveElement() {
    sessionStorage.setItem('myform', written_str)
    alert("저장완료");
}

function loadElement() {
    var output;
    output = sessionStorage.getItem('myform')
    alert("로드완료");
    $("#myform").html(output);     // write.html의 myform textarea에 written_str 데이터 출력.
}

