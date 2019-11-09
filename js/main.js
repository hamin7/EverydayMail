$(document).ready(function() {
    
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

    
    $("select#category").change(function () {
        var select_name = $(this).children("option:selected").text();
        $(this).siblings("label").text(select_name);

    });

});


var move = function (num) {
    location.href = "edit.html?template_id=" + num;
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