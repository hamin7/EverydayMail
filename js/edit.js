
// 새로 저장 버튼으로 새로운 myform 만들기.
$('#btn_save').click(function () {
    if(!storageSupport()) {
        return false;
    }
    //window.sessionStorage.setItem('')
    location.href="write.html";
    //$("#myform").html(written_str);
})