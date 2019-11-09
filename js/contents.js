$(function () {
    
    $('#btn_template').click(function () {
        initTemplateList();
        initTemplateCategory();

        $("select#picker").change(function () {
            alert(1);
            var select_name = $(this).children("option:selected").text();
            $(this).siblings("label").text(select_name);

            if (select_name == "전체")
                initTemplateList();
            else
                initSelectedTemplateList(select_name);

        

        });
    });
    
});
function initTemplateList(){
    
    var templateList;
    try { 
        templateList = JSON.parse(localStorage["templateList"]);
    
    } catch (e) {
        insertTemplate();
        insertTemplateCategory();
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
function initSelectedTemplateList(category){
    

    var str = "";
    try {
        var id = 0;
        var templateList = JSON.parse(localStorage["templateList"]);

        myformList.forEach(value => {
            if (value.category == category) {
                var modified = replaceAll(value.contents, "<br/>", " ");

                str += '<div class="row" id="' + id + '" >';
                str += '<div class="row_click" onClick = "move(' + id + ')" >';
                str += '<span class="row_category">' + value.category + '</span>';
                str += '<h4 class="row_title">' + value.title + '</h4>';
                str += '<p class="row_content">' + modified + '</p></div></div>';

            }
            id++;
        })

    } catch (e) {

    }

    $('.template_list').html(str);

}
function insertTemplate() {

    var templateList = new Array();

    templateList.push(new myform(0, "대학생용","성적 문의 메일", "안녕하세요 OOO교수님!<br/>저는 OOO을 수강하고 있는 OO학과 OO학번 OOO 입니다.<br/>다름이 아니라, 이번 학기 수업 성적이 제가 예상한 것보다 낮아 어떤 부분이 부족했는지 알고 싶어 메일 드렸습니다.<br/>중간고사, 기말고사 점수는 확인을 하였고, 레포트나 조별과제에서 점수가 많이 깎인 것 같습니다.부족한 부분 알려주시면 앞으로 더 보완하고 싶습니다! < br />바쁘신 와중에 시간 내주셔서 정말 감사드리고, 한 학기동안 좋은 수업 해 주셔서 많이 배웠습니다.<br/>다시 한번 감사드립니다! <br/>OOO드림."));
    templateList.push(new myform(1, "대학생용","출석 인정 문의 메일", "안녕하세요 OOO교수님!<br/>저는 OOO을 수강하고 있는 OO학과 OO학번 OOO 입니다.<br/>다름이 아니라 예비군 훈련 참석으로 인하여 OO일 OO시 수업 참석이 어려울 것 같습니다.<br/>예비군 중대에서 훈련 참석 필증을 발급해 준다고 합니다.<br/>혹시 이를 제출 하면 출석 인증이 가능할까요?<br/>확인해 주시면 제출하도록 하겠습니다.<br/>다시 한번 감사드립니다! <br/>OOO드림."));
    templateList.push(new myform(2, "대학생용","상담 문의 메일", "안녕하세요 OOO교수님!<br/>저는 OOO을 수강하고 있는 OO학과 OO학번 OOO 입니다.<br/>다름이 아니라 팀 프로젝트 과제에 대하여 상담을 받고 싶습니다.<br/>저번에 피드백 주신 내용을 바탕으로 팀원들과 함께 개선을 하였고, 이에 대해 교수님의 의견을 여쭙고 싶습니다.<br/>혹시 면담 가능한 시간을 여쭤봐도 괜찮을까요?<br/>가능하신 시간 알려주시면 방문하도록 하겠습니다.<br/>다시 한번 감사드립니다! <br/>OOO드림."));
    templateList.push(new myform(3, "업무메일","회의 일정 공유", "안녕하세요 OOO팀 OOO입니다<br/>OOO 툴 도입 관련 OOO팀 회의를 진행하고자 합니다.<br/><br/>1. 일시: OOOO년 OO월 OO일 오후 OO시 ~ OO시<br/>2. 장소: O층 OO회의실<br/>3. 참석자: OO팀 전원 및 OO팀 실무 담당자.<br/>    * 부득이하게 참석이 어려우신 경우, 회신부탁드립니다.<br/>4. 안건: OOO 툴 사용법 및 활용 방안.<br/><br/>하기 첨부된 자료는 금년도 개발 환경 개선을 위해<br/>OO팀 내부에서 작성된 자료입니다.<br/>회의에 앞서, 활용 방안에 대한 피드백은<br/>O월 OO일 오전 OO시까지 회신 부탁드립니다.<br/><br/>감사합니다<br/>OOO 드림.</br>"));
    templateList.push(new myform(4, "영어메일","배송 지연 확인 요청 메일", "Dear customer service<br/>My name is 이름 and I am contacting you regarding my order #오더번호<br/>I would like to inquire about the status of my order.<br/>Please let me know what the estimated delivery day would be and tracking number if it shipped out.<br/>Please do not hesitate to write me back if you need any additional information.<br/>I greatly appreciate your immediate attention and respond to this matter.<br/>Thank you in advance and I look foward to hear back from you soon.<br/>"));
    templateList.push(new myform(5, "영어메일","배송 주소 수정 요청 메일", "Hi there, my order number is #오더번호.<br/>When I made my order I have given the wrong shipping address so is it possible to change the shipping address as below?<br/>[변경할 받을 주소지 영문으로 작성]<br/>I am so sorry.. I will appreciate it if I can amend it please.. Thanks..<br/>"));
    templateList.push(new myform(6, "영어메일","환불이 지연될 경우 요청 메일", "I'm e-mailing you for my order #주문 오더넘버  placed on 주문 날짜.<br/>I got an email confirmation of making a refund on this order, but I haven't got a refund yet.<br/>Please, take care of this matter promptly. Thank you.<br/>"));
    templateList.push(new myform(7, "영어메일","상품을 주문 후 전체 취소를 해야할 경우", "메일 제목 :<br/>Request for cancellation of order #상품 주문 오더번호<br/>메일 내용 :<br/>Dear. Customer Service.<br/>Hi, my name is 본인 영문 이름 and my order number is #취소하려는 오더번호.<br/>I'm afraid i must cancel this order<br/>because i accidentally purchased wrong items.<br/>i will place an another order once the cancellation process is completed.<br/>please let me know when it is done.<br/>I really appreciate your efforts on this<br/>"));
    templateList.push(new myform(8, "영어메일","상품을 주문 후 부분 취소를 해야할 경우", "메일 제목 :<br/>Request for partial cancellation of order #취소하려는 오더번호.<br/>메일 내용 :<br/>Dear. Customer Service.<br/>Hi, my name is 본인 영문 이름 and my order number is #취소하려는 오더번호.<br/>I am afraid I must cancel some items from this order, because I accidentally purchased wrong items.<br/>The list of items I'd like to cancel is in the below.  and I'd like to purchase the rest.<br/>1. 취소할 상품명A<br/>2. 취소할 상품명B<br/>Pleae let me know if partial cancellation cannot be done.<br/>I really appreciate your efforts on this.<br/>Thanks.<br/>"));
    

    localStorage.setItem("templateList", JSON.stringify(templateList));
     
}
function initTemplateCategory() {

    var str = '<option value="전체" selected="selected">전체</option>';
    try {
        const categoryList = JSON.parse(localStorage["templateCategoryList"]);

        for (var i = 0; i < categoryList.length; i++) {
            str += '<option value="' + categoryList[i] + '">' + categoryList[i] + '</option>';
        }

    } catch (e) {

    }

    $('#picker').html(str);
}
function insertTemplateCategory(category) {

    
    templateCategoryList = new Array();
    
    templateCategoryList.push("대학생용");//추가

    localStorage.setItem("templateCategoryList", JSON.stringify(templateCategoryList));


}