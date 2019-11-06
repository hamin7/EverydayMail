
// 새로 저장 버튼으로 새로운 myform 만들기.
$('#btn_save').click(function () {
    //location.href="write.html";
    location.replace("write.html");
    //location.reload();        // 새로고침
    
    //$("#myform").html("애용");
    //$(document).ready(function() { alert("첫번째 ready()"); });
    $(document).ready(function() { 
        $("#myform").show();
        $("#myform").html(written_str);     // write.html의 myform textarea에 written_str 데이터 출력.
        alert(written_str);
    });
    //alert(written_str);
    //$("#myform").html(written_str);
})