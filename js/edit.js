$(function () {
   

    var params = getUrlParams();
    var id= params.template_id;
    var list_flag = params.list;
 
    if(list_flag == 0) 
        initCheckList("myformList",id);
    else if (list_flag == 1)
        initCheckList("templateList", id);

    $("#selectAll").click(function () {

        if ($("#selectAll").is(":checked")) {
            $(".chk").prop("checked", true);
        } else {
            $(".chk").prop("checked", false);
        }
    });


    $(".chk").click(function () {
        if ($("input[name='chk']:checked").length == $("input[name='chk']").length) {
            $("#selectAll").prop("checked", true);
        }
        else {
            $("#selectAll").prop("checked", false);
        }
    });

    $("#btn_copy").hide();
    $("#btn_reSave").hide();

    // 편집한 내용 보여주기
    $("#btn_complete").click(function () {
        var written_str = "";
        $("input[name='chk']:checked").each(function () {
            var line_id = $(this).attr("id");
            written_str += $("input[id='text_" + line_id + "']").val() + '\n';
        });

        $("#edit_box").hide();
        $("#btn_complete").hide();
        $("#btn_cancel").hide();
        $("#result").show();
        $("#result").html(written_str);
        $("#btn_reSave").show();
        $("#btn_copy").show();
        $(".content_description").text("마지막으로 다듬어보세요!");

    });


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

    
    
});

function getUrlParams() {
    var params = {};
    window.location.search.replace(/[?&]+([^=&]+)=([^&]*)/gi, function (str, key, value) { params[key] = value; });
    return params;
}


