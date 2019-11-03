
$(document).ready(function() {
 
    // 템플릿 추가 버튼 
    document.getElementById("write_new").onmouseover = function () {
        this.src = "icons/plus_light_icon_64.png";
        
    };
    
    document.getElementById("write_new").onmouseout = function () {
        this.src = "icons/plus_icon_64.png";
    };


})

// 체크 박스 모두 체크(flag==0)/해제(flag==1)
var flag_allchecked = 0;
$("#selectAll").click(function () {
    
    if (flag_allchecked==0){
        $("input[name=check]:checkbox").each(function () {
            $(this).attr("checked", true);
        });
        flag_allchecked=1;

    }else{
        $("input[name=check]:checkbox").each(function () {
            $(this).attr("checked", false);
        });
        flag_allchecked=0;
    }
    
});