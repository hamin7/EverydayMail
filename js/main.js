$(document).ready(function() {
    
    $("#write_new_link").mouseover(function () {
        $('#write_new').prop('src', 'icons/plus_light_icon_64.png');
        var tip = $(this).attr('title');

        $(this).attr('title','');   // 브라우저에서 제공하는 기본 툴 팁을 끔.
        $(this).append('<div id="tooltip"><div class="tipBody">' + tip + '</div></div>');    // css와 연동하기 위해 html 태그 추가.
    }).mousemove(function(e){
        // 마우스가 움직일 때 툴 팁이 따라 다니도록 위치값 업데이트.
        $('#tooltip').css('top', e.pageY + 10);
        $('#tooltip').css('left', e.pageX + 10);
    }).mouseout(function(){
        // 위에서 껐던 브라우저에서 제공하는 기본 툴 팁 복원.
        $(this).attr('title', $('.tipBody').html());
        $(this).children('div#tooltip').remove();
        //$('#write_new').prop('src', 'icons/plus_icon_64.png');
        $('#write_new').prop('src', 'icons/plus_icon_64.png');
    });

    $('#btn_template').mouseover(function(){
        $('#dropbtn_img_template').prop('src', 'icons/list_black_icon_32.png');
        var tip = $(this).attr('title');

        $(this).attr('title','');   // 브라우저에서 제공하는 기본 툴 팁을 끔.
        $(this).append('<div id="tooltip"><div class="tipBody">' + tip + '</div></div>');    // css와 연동하기 위해 html 태그 추가.
    }).mousemove(function(e)
    {
        // 마우스가 움직일 때 툴 팁이 따라 다니도록 위치값 업데이트.
        $('#tooltip').css('top', e.pageY + 10);
        $('#tooltip').css('left', e.pageX + 10);
    }).mouseout(function()
    {
        // 위에서 껐던 브라우저에서 제공하는 기본 툴 팁 복원.
        $(this).attr('title', $('.tipBody').html());
        $(this).children('div#tooltip').remove();
        $('#dropbtn_img_template').prop('src', 'icons/list_icon_32.png');
    });

    $("#dropbtn_img").mouseover(function () {
        $('#dropbtn_img').prop('src', 'icons/settings_black_icon_32.png');
    });
    $("#dropbtn_img").mouseout(function () {
        $('#dropbtn_img').prop('src', 'icons/settings_icon_32.png');
    });

    $("select#category").change(function () {
        var select_name = $(this).children("option:selected").text();
        $(this).siblings("label").text(select_name);
    });
});


var move = function (list, num) {
    location.href = "edit.html?list="+list+"&template_id=" + num;
};

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