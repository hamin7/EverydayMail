$(function () {
    
    $('#btn_template').click(function () {
        initTemplateList();

    });
});
function initTemplateList(){
    
    var templateList;
    try { 
        templateList = JSON.parse(localStorage["templateList"]);
    
    } catch (e) {
        insertTemplate();
        templateList = JSON.parse(localStorage["templateList"]);
    }

    var id = 0;
    var str = "";
    templateList.forEach(value => {
        var modified = replaceAll(value.contents, "<br/>", " ");

        str += '<div class="row" id="' + id + '" >  ';
        str += '<div class="row_click" onClick = "move(' + id + ')" >';
        str += '<span class="row_category">' + value.category + '</span>';
        str += '<h4 class="row_title">' + value.title + '</h4>';
        str += '<p class="row_content">' + modified + '</p></div></div>';
        id++;
    })

    $('.template_list').html(str);
   
}
function insertTemplate() {

    var templateList = new Array();

    templateList.push(new myform(0, "대학생용","성적 문의 메일", "안녕하세요 OOO교수님!<br/>저는 OOO을 수강하고 있는 OO학과 OO학번 OOO 입니다.<br/>다름이 아니라, 이번 학기 수업 성적이 제가 예상한 것보다 낮아 어떤 부분이 부족했는지 알고 싶어 메일 드렸습니다.<br/>중간고사, 기말고사 점수는 확인을 하였고, 레포트나 조별과제에서 점수가 많이 깎인 것 같습니다.부족한 부분 알려주시면 앞으로 더 보완하고 싶습니다! < br />바쁘신 와중에 시간 내주셔서 정말 감사드리고, 한 학기동안 좋은 수업 해 주셔서 많이 배웠습니다.<br/>다시 한번 감사드립니다! <br/>OOO드림."));
    templateList.push(new myform(1, "대학생용","출석 인정 문의 메일", "안녕하세요 OOO교수님!<br/>저는 OOO을 수강하고 있는 OO학과 OO학번 OOO 입니다.<br/>다름이 아니라 예비군 훈련 참석으로 인하여 OO일 OO시 수업 참석이 어려울 것 같습니다.<br/>예비군 중대에서 훈련 참석 필증을 발급해 준다고 합니다.<br/>혹시 이를 제출 하면 출석 인증이 가능할까요?<br/>확인해 주시면 제출하도록 하겠습니다.<br/>다시 한번 감사드립니다! <br/>OOO드림."));
    templateList.push(new myform(2, "대학생용","상담 문의 메일", "안녕하세요 OOO교수님!<br/>저는 OOO을 수강하고 있는 OO학과 OO학번 OOO 입니다.<br/>다름이 아니라 팀 프로젝트 과제에 대하여 상담을 받고 싶습니다.<br/>저번에 피드백 주신 내용을 바탕으로 팀원들과 함께 개선을 하였고, 이에 대해 교수님의 의견을 여쭙고 싶습니다.<br/>혹시 면담 가능한 시간을 여쭤봐도 괜찮을까요?<br/>가능하신 시간 알려주시면 방문하도록 하겠습니다.<br/>다시 한번 감사드립니다! <br/>OOO드림."));
    templateList.push(new myform(3, "대학생용","출석 인정 문의 메일", "저는 OOO을 수강하고 있는 OO학과 OO학번 OOO 입니다.<br/>다름이 아니라, 이번 학기 수업 성적이 제가 예상한 것보다 낮아 어떤 부분이 부족했는지 알고 싶어 메일 드렸습니다.<br/>중간고사, 기말고사 점수는 확인을 하였고, 레포트나 조별과제에서 점수가 많이 깎인 것 같습니다.부족한 부분 알려주시면 앞으로 더 보완하고 싶습니다! < br />바쁘신 와중에 시간 내주셔서 정말 감사드리고, 한 학기동안 좋은 수업 해 주셔서 많이 배웠습니다.<br/>다시 한번 감사드립니다! <br/>OOO드림."));

    localStorage.setItem("templateList", JSON.stringify(templateList));

     
}