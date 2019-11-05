
$(document).ready(function() {
 

});

$("#write_new").mouseover(function () {
    $(this).prop('src', 'icons/plus_light_icon_64.png');
});
$("#write_new").mouseout(function () {
    $(this).prop('src', 'icons/plus_icon_64.png');
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



$("#btn_copy").hide();
$("#btn_NaverMail").hide();
// 편집한 내용 보여주기
$("#btn_complete").click(function(){
    var written_str = "";
    var line_id;
    $("input[name='chk']:checked").each(function () {
        line_id = $(this).attr("id");
        written_str +=  $("input[id='text_" + line_id + "']").val() +'\n';
    });

    
    $("#edit_box").hide();
    $("#btn_complete").hide();
    $("#btn_cancel").hide();
    $("#result").show();
    $("#result").html(written_str);
    $("#btn_NaverMail").show();
    $("#btn_copy").show();
    $(".content_description").text("마지막으로 다듬어보세요!");

});


//클립보드로 복사하기
$('#btn_copy').click(function () {
    var copytext = $('#result').html();
    copytext = replaceAll(copytext, "<br>", "\n");
    copyToClipboard(copytext);
    alert("클립보드로 복사되었습니다.");

});

function replaceAll(str, searchStr, replaceStr) {
    return str.split(searchStr).join(replaceStr);
}

function copyToClipboard(val){
    var text = document.createElement("textarea");
    document.body.appendChild(text);
    text.value = val;
    text.select();

    try {
        document.execCommand('copy');
        
    } catch (e) {
        console.log("document.execCommand('copy');를 지원하지 않는 브라우저입니다.");
    }
    document.body.removeChild(text);
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