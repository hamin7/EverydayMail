$(function () {
    
    $('#btn_template').click(function () {
        initTemplateList();

    });
});
function initTemplateList(){
    var str = "";
    try {
        var id = 0;
        const templateList = JSON.parse(localStorage["templateList"]);

        templateList.forEach(value => {
            var modified = replaceAll(value.contents, "<br/>", " ");

            str += '<div class="row" id="' + id + '" >  ';
            str += '<div class="row_click" onClick = "move(' + id + ')" >';
            str += '<span class="row_category">' + value.category + '</span>';
            str += '<h4 class="row_title">' + value.title + '</h4>';
            str += '<p class="row_content">' + modified + '</p></div></div>';
            id++;
        })

      
    } catch (e) {
        
        insertTemplate();
    }
    $('.template_list').html(str);
}
function insertTemplate() {

    var templateList = new Array();

<<<<<<< HEAD
    var newItem = new myform(0, "대학생용","성적 문의 메일", "저는 OOO을 수강하고 있는 OO학과 OO학번 OOO 입니다.<br/>다름이 아니라, 이번 학기 수업 성적이 제가 예상한 것보다 낮아 어떤 부분이 부족했는지 알고 싶어 메일 드렸습니다.<br/>중간고사, 기말고사 점수는 확인을 하였고, 레포트나 조별과제에서 점수가 많이 깎인 것 같습니다.부족한 부분 알려주시면 앞으로 더 보완하고 싶습니다! < br />바쁘신 와중에 시간 내주셔서 정말 감사드리고, 한 학기동안 좋은 수업 해 주셔서 많이 배웠습니다.<br/>다시 한번 감사드립니다! <br/>OOO드림.");
    templateList.push(newItem);
    var newItem = new myform(1, "야옹", "성적 문의 메일", "저는 OOO을 수강하고 있는 OO학과 OO학번 OOO 입니다.<br/>다름이 아니라, 이번 학기 수업 성적이 제가 예상한 것보다 낮아 어떤 부분이 부족했는지 알고 싶어 메일 드렸습니다.<br/>중간고사, 기말고사 점수는 확인을 하였고, 레포트나 조별과제에서 점수가 많이 깎인 것 같습니다.부족한 부분 알려주시면 앞으로 더 보완하고 싶습니다! < br />바쁘신 와중에 시간 내주셔서 정말 감사드리고, 한 학기동안 좋은 수업 해 주셔서 많이 배웠습니다.<br/>다시 한번 감사드립니다! <br/>OOO드림.");
    templateList.push(newItem);
=======
    templateList.push(new myform(0, "대학생용","성적 문의 메일", "저는 OOO을 수강하고 있는 OO학과 OO학번 OOO 입니다.<br/>다름이 아니라, 이번 학기 수업 성적이 제가 예상한 것보다 낮아 어떤 부분이 부족했는지 알고 싶어 메일 드렸습니다.<br/>중간고사, 기말고사 점수는 확인을 하였고, 레포트나 조별과제에서 점수가 많이 깎인 것 같습니다.부족한 부분 알려주시면 앞으로 더 보완하고 싶습니다! < br />바쁘신 와중에 시간 내주셔서 정말 감사드리고, 한 학기동안 좋은 수업 해 주셔서 많이 배웠습니다.<br/>다시 한번 감사드립니다! <br/>OOO드림."));
    templateList.push(new myform(1, "대학생용","출석 인정 문의 메일", "저는 OOO을 수강하고 있는 OO학과 OO학번 OOO 입니다.<br/>다름이 아니라, 이번 학기 수업 성적이 제가 예상한 것보다 낮아 어떤 부분이 부족했는지 알고 싶어 메일 드렸습니다.<br/>중간고사, 기말고사 점수는 확인을 하였고, 레포트나 조별과제에서 점수가 많이 깎인 것 같습니다.부족한 부분 알려주시면 앞으로 더 보완하고 싶습니다! < br />바쁘신 와중에 시간 내주셔서 정말 감사드리고, 한 학기동안 좋은 수업 해 주셔서 많이 배웠습니다.<br/>다시 한번 감사드립니다! <br/>OOO드림."));

>>>>>>> 92c694acdfd7497bea0d96d8d583ccd972fff97b
    localStorage.setItem("templateList", JSON.stringify(templateList));

    location.replace("index.html");
    
}