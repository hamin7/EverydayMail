
$(document).ready(function() {
 

});

$("#write_new").mouseover(function () {
    $(this).prop('src', 'icons/plus_light_icon_64.png');
});
$("#write_new").mouseout(function () {
    $(this).prop('src', 'icons/plus_icon_64.png');
});

$(".dropdown").mouseover(function () {
    $('#dropbtn_img').prop('src', 'icons/settings_black_icon_32.png');
});
$(".dropdown").mouseout(function () {
    $('#dropbtn_img').prop('src', 'icons/settings_icon_32.png');
});


// checkbox 전체 선택 및 해제 
$("#selectAll").click(function () {
    
    if ($("#selectAll").is(":checked")){
        $(".chk").prop("checked",true);  
    }else{
        $(".chk").prop("checked", false);
    }
});

// checkbox 한 개 선택 해제시 전체선택 체크박스 해제 
$(".chk").click(function () {
    if ($("input[name='chk']:checked").length == $("input[name='chk']").length ){
        $("#selectAll").prop("checked",true);
    }
    else{
        $("#selectAll").prop("checked", false);
    }
});

var written_str = "";       // 전역변수로 선언.

$("#btn_copy").hide();
$("#btn_save").hide();
$("#btn_NaverMail").hide();
// 편집한 내용 보여주기
$("#btn_complete").click(function(){
    var line_id;
    $("input[name='chk']:checked").each(function () {
        line_id = $(this).attr("id");
        written_str +=  $("input[id='text_" + line_id + "']").val() +'\n';
    });

    
    $("#edit_box").hide();
    $("#btn_complete").hide();
    $("#btn_cancel").hide();
    $("#result").show();    // result라는 id를 가진 textarea를 띄운다.
    $("#result").html(written_str);     // result textarea에 written_str을 띄움.
    $("#btn_NaverMail").show();
    $("#btn_save").show();
    $("#btn_copy").show();
    $(".content_description").text("마지막으로 다듬어보세요!");

});

var move = function (num) {
    location.href = "edit.html?template_id=" + num;
};

//클립보드로 복사하기
$('#btn_copy').click(function () {
    $('#result').select();
    try {
        document.execCommand('copy');
        alert("클립보드로 복사되었습니다.");
    } catch (e) {
        alert("document.execCommand('copy');를 지원하지 않는 브라우저입니다.");
    }
});


function replaceAll(str, searchStr, replaceStr) {
    return str.split(searchStr).join(replaceStr);
}


//의도하지 않은 페이지 전환 방지
window.addEventListener(`dragover`, (evt = event) => {
    evt.preventDefault();
    evt.dataTransfer.effectAllowed = `none`;
    evt.dataTransfer.dropEffect = `none`;
}, false);

window.addEventListener(`drop`, (evt = event) => {
    evt.preventDefault();
    evt.dataTransfer.effectAllowed = `none`;
    evt.dataTransfer.dropEffect = `none`;
}, false);