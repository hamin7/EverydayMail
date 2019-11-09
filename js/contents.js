$(function () {
    
    $('#btn_template').click(function () {
   
        initTemplateList("templateList");
        initTemplateCategory();
        $('#btn_newCategory').hide();
        $('#btn_delCategory').hide();
        
        $("select#picker").change(function () {
            var select_name = $(this).children("option:selected").text();
            $(this).siblings("label").text(select_name);

            if (select_name == "전체")
                initTemplateList();
            else{
                initSelectedList(select_name, "templateList");
                $('.btn_delete').hide();
            }
                

        });
    });
    
});
function initTemplateList(list){
    
    var templateList;
    try { 
        templateList = JSON.parse(localStorage[list]);
    
    } catch (e) {
        insertTemplate();
        insertTemplateCategory();
        templateList = JSON.parse(localStorage[list]);
    }

    var id = 0;
    var str = "";
    templateList.forEach(value => {
        var modified = replaceAll(value.contents, "<br/>", " ");

        str += '<div class="row" id="' + id + '" >  ';
        str += '<div class="row_click" onClick = "move(1,'+ id + ')" >';
        str += '<span class="row_category">' + value.category + '</span>';
        str += '<h4 class="row_title">' + value.title + '</h4>';
        str += '<p class="row_content">' + modified + '</p></div></div>';
        id++;
    })

    $('.template_list').html(str);
   
}

function insertTemplate() {

    var templateList = new Array();

    templateList.push(new myform(0, "대학생용","성적 문의 메일", "안녕하세요 OOO교수님!<br/>저는 OOO을 수강하고 있는 OO학과 OO학번 OOO 입니다.<br/>다름이 아니라, 이번 학기 수업 성적이 제가 예상한 것보다 낮아 어떤 부분이 부족했는지 알고 싶어 메일 드렸습니다.<br/>중간고사, 기말고사 점수는 확인을 하였고, 레포트나 조별과제에서 점수가 많이 깎인 것 같습니다.부족한 부분 알려주시면 앞으로 더 보완하고 싶습니다!<br/>바쁘신 와중에 시간 내주셔서 정말 감사드리고, 한 학기동안 좋은 수업 해 주셔서 많이 배웠습니다.<br/>다시 한번 감사드립니다! <br/>OOO드림."));
    templateList.push(new myform(1, "대학생용","출석 인정 문의 메일", "안녕하세요 OOO교수님!<br/>저는 OOO을 수강하고 있는 OO학과 OO학번 OOO 입니다.<br/>다름이 아니라 예비군 훈련 참석으로 인하여 OO일 OO시 수업 참석이 어려울 것 같습니다.<br/>예비군 중대에서 훈련 참석 필증을 발급해 준다고 합니다.<br/>혹시 이를 제출 하면 출석 인증이 가능할까요?<br/>확인해 주시면 제출하도록 하겠습니다.<br/>다시 한번 감사드립니다! <br/>OOO드림."));
    templateList.push(new myform(2, "대학생용","상담 문의 메일", "안녕하세요 OOO교수님!<br/>저는 OOO을 수강하고 있는 OO학과 OO학번 OOO 입니다.<br/>다름이 아니라 팀 프로젝트 과제에 대하여 상담을 받고 싶습니다.<br/>저번에 피드백 주신 내용을 바탕으로 팀원들과 함께 개선을 하였고, 이에 대해 교수님의 의견을 여쭙고 싶습니다.<br/>혹시 면담 가능한 시간을 여쭤봐도 괜찮을까요?<br/>가능하신 시간 알려주시면 방문하도록 하겠습니다.<br/>다시 한번 감사드립니다! <br/>OOO드림."));
    templateList.push(new myform(3, "업무메일","회의 일정 공유", "안녕하세요 OOO팀 OOO입니다<br/>OOO 툴 도입 관련 OOO팀 회의를 진행하고자 합니다.<br/><br/>1. 일시: OOOO년 OO월 OO일 오후 OO시 ~ OO시<br/>2. 장소: O층 OO회의실<br/>3. 참석자: OO팀 전원 및 OO팀 실무 담당자.<br/>    * 부득이하게 참석이 어려우신 경우, 회신부탁드립니다.<br/>4. 안건: OOO 툴 사용법 및 활용 방안.<br/><br/>하기 첨부된 자료는 금년도 개발 환경 개선을 위해<br/>OO팀 내부에서 작성된 자료입니다.<br/>회의에 앞서, 활용 방안에 대한 피드백은<br/>O월 OO일 오전 OO시까지 회신 부탁드립니다.<br/><br/>감사합니다<br/>OOO 드림."));
    templateList.push(new myform(4, "영어메일","배송 지연 확인 요청 메일", "Dear customer service<br/>My name is 이름 and I am contacting you regarding my order #오더번호<br/>I would like to inquire about the status of my order.<br/>Please let me know what the estimated delivery day would be and tracking number if it shipped out.<br/>Please do not hesitate to write me back if you need any additional information.<br/>I greatly appreciate your immediate attention and respond to this matter.<br/>Thank you in advance and I look foward to hear back from you soon."));
    templateList.push(new myform(5, "영어메일","배송 주소 수정 요청 메일", "Hi there, my order number is #오더번호.<br/>When I made my order I have given the wrong shipping address so is it possible to change the shipping address as below?<br/>[변경할 받을 주소지 영문으로 작성]<br/>I am so sorry.. I will appreciate it if I can amend it please.. Thanks.."));
    templateList.push(new myform(6, "영어메일","환불이 지연될 경우 요청 메일", "I'm e-mailing you for my order #주문 오더넘버  placed on 주문 날짜.<br/>I got an email confirmation of making a refund on this order, but I haven't got a refund yet.<br/>Please, take care of this matter promptly. Thank you."));
    templateList.push(new myform(7, "영어메일","상품을 주문 후 전체 취소를 해야할 경우", "메일 제목 :<br/>Request for cancellation of order #상품 주문 오더번호<br/>메일 내용 :<br/>Dear. Customer Service.<br/>Hi, my name is 본인 영문 이름 and my order number is #취소하려는 오더번호.<br/>I'm afraid i must cancel this order<br/>because i accidentally purchased wrong items.<br/>i will place an another order once the cancellation process is completed.<br/>please let me know when it is done.<br/>I really appreciate your efforts on this"));
    templateList.push(new myform(8, "영어메일","상품을 주문 후 부분 취소를 해야할 경우", "메일 제목 :<br/>Request for partial cancellation of order #취소하려는 오더번호.<br/>메일 내용 :<br/>Dear. Customer Service.<br/>Hi, my name is 본인 영문 이름 and my order number is #취소하려는 오더번호.<br/>I am afraid I must cancel some items from this order, because I accidentally purchased wrong items.<br/>The list of items I'd like to cancel is in the below.  and I'd like to purchase the rest.<br/>1. 취소할 상품명A<br/>2. 취소할 상품명B<br/>Pleae let me know if partial cancellation cannot be done.<br/>I really appreciate your efforts on this.<br/>Thanks."));
    templateList.push(new myform(9, "영어메일","트레킹 번호를 알고 싶을때", "Hi there,<br/>I have ordered from you with order #주문 오더번호, but still have not received the items yet.<br/>Have you actually sent out the items yet?<br/>Please provide me with a trackable tracking number, if you actually have sent out the package already.<br/>I am starting to feel annoyed so please respond quickly before I make any further claims.<br/>Thanks."));
    templateList.push(new myform(10, "영어메일","유리병이 파손된 경우", "Dear Customer Service,<br/>I received my order today.<br/>상품명 영어 product bottle is broken and there are little pieces broken glass all over the box.<br/>Please check the attached images file.<br/>Don't think your company packed this package properly.<br/>Please issue me a refund.<br/>Thanks."));
    templateList.push(new myform(11, "영어메일","유리병이 밀봉이 파손된 경우", "Dear Customer Service,<br/>I received my order today.<br/>one of the items seal is broken.<br/>Please check the attached image file.<br/>I don’t think I can use this item.<br/>I have this product in South Korea now, it will cost for returning the item.<br/>So, I need a refund or credit on my account.<br/>thank you.")); 
    templateList.push(new myform(12, "영어메일","리턴 테이블 요청 메일", "Hi there, my order number is #000000.<br/>I want to return my goods so could you please send me the return label as soon as possible?<br/>My email address is 나의 메일 주소 Thanks.")); 
    templateList.push(new myform(13, "영어메일","상품을 반품후에 신용카드 취소 요청 메일", "Dear.<br/>My order number is #주문오더번호 and I returned the product because you had sent wrong product to me.<br/>Now I found that the returned product has been arrived at your side.<br/>Therefore I want to cancel my payment with credit card as soon as possible.<br/>Please let me know when I can check my payment cancellation with credit card.<br/>Hope I can get rapid replay.<br/>Regards."));
    templateList.push(new myform(14, "영어메일","주문 취소후 사용했던 쿠폰 재사용 요청 메일", "메일 제목 :<br/>Title : After Cancellation of orders I want reuse the coupon<br/>메일 내용 :<br/>hello.<br/>My name is 영어이름. and order number #주문오더번호<br/>I'm sorry but<br/>I'm please cancel my order & card transaction<br/>I will send it back to you, so please cancel the card transaction.<br/>And I would like to reuse the coupon  I used when I ordered.<br/>Since the order has been cancelled, I think I can use the coupons again.<br/>Please check my requests and answer to me.<br/>My email is 본인 메일주소<br/>Thank you."));
    templateList.push(new myform(15, "영어메일","상품을 주문하였는데 다른 상품이 배송이 된 경우", "Dear. Custmer Service,<br/>My order number is #주문한 오더넘버<br/>I ordered 본인이 주문했던 상품정보(사이즈,색상 기타등등) 영문으로 자세히 기재<br/>but I received the wrong item, 잘못 배송이된 상품정보 내용 영문으로 기재<br/>please send me the right item to the following address.<br/>다시 배송받을 주소지<br/>or you can give me a refund if it is not available anymore.<br/>I attached the image. check it out.<br/>Thank you.")); 
    templateList.push(new myform(16, "영어메일","주문을 한후에 주문 계정(주문번호)를 찾을수 없을 때", "I placed an order, and my credit card was also approved.<br/>However, I can't find the account which I used for placing an order.<br/>The last 4 digit number of my credit card is #카드 맨 뒤 4자리. and the approval number is #승인번호<br/>Could you check this out and send me an email confirmation of my order to the following email address?<br/>나의 이메일주소<br/>Please, take care of this matter promptly. Thank you.")); 
    templateList.push(new myform(17, "영어메일","상품을 수령했는데 제품이 누락됐을 경우 환불 요청", "메일 제목 :<br/>Request refund for missing items, order number #주문 오더넘버<br/>메일 내용 :<br/>Dear. Custmer Service,<br/>My order number is #주문 오더넘버<br/>I received package today, I found there are missing items.<br/>I ordered 주문상품A, 주문상품B, 주문상품C<br/>누락된 주문상품A, 누락된 주문상품B are missing.<br/>please check this out, and refund to my credit card.<br/>Thank you."));
    templateList.push(new myform(18, "영어메일","상품을 수령했는데 파손이나 결함이 발생했을 때", "Dear customer service<br/>My name is 나의 영문이름 and I am contacting you regarding my order #주문 오더번호<br/>I recived a (damaged(파손)/defective(결함) 둘중 해당사항 단어 사용) item for my order.<br/>The name of the item is 상품이름. I am attching the picture of the item. Please let me know how this issue could be resolved.<br/>Please do not hesitate to write me back if you need any additional information.<br/>I greatly appreciate your immediate attention and respond to this matter.<br/>Thank you in advance and I look foward to hear back from you soon.")); 
    templateList.push(new myform(19, "영어메일","배송되기 전에 색상/사이즈를 변경하고자 할 때 요청 메일", "I am e-mailing you for my order<br/>#주문 오더번호 placed on 주문 날짜.<br/>- 사이즈 변경시<br/>I want to change 상품명 in size from 원래 주문했던 사이즈 to 바꾸고 싶은 사이즈.<br/>- 색상 변경시<br/>I would like to change the 상품명 in color from 원래 주문했던 색상 to 바꾸고 싶은 색상.<br/>Please check on this matter and let me know.<br/>thanks.")); 
    templateList.push(new myform(20, "영어메일","배송비를 냈는데, 프리쉽 코드가 떴을 때 요청 메일", "I'm e-mailing you for my order #주문 오더번호 placed on 주문 날짜<br/>I placed an order, and paid for shipping fee. However, it is possible to get a free-shipping now.<br/>Could you apply the free-shipping to my order please?<br/>I would like to get a refund on the shipping fee. Thank you.")); 
    templateList.push(new myform(21, "영어메일","빌링주소가 잘못됐다는 메일을 받았을 때", "Dear. Customer Service,<br/>Hi, thanks for notifying me about the issue regarding my Billing Address. I appreciate it.<br/>I completed the payment process with my credit card issued by a bank in Korea and I presume that is the reason my order was not completed.<br/>The billing address I provided is not the correct one.<br/>Since your payment system only provides the format for U.S. Addresses, I was not able to submit my Korean billing address.<br/>Here is my Billing Address in the below :<br/>Billing Address<br/>영어로 한국 주소<br/>I'm sure this will work just fine. If you have any other problems, please let me know.<br/>Thank You.")); 
    templateList.push(new myform(22, "업무메일","저녁 미팅 요청(영어 메일)", "To : 받는 사람 이름<br/>From : 보내는 사람 이름<br/>Date : July 2, 10:00am<br/>Subject : Dinner Meeting<br/><br/>Dear Jon,<br/>I’ve reserved a table at Sunmmerby’s at 7:00 tonight so that we have some dinner as we work on the presentation for tomorrow’s 9:00 a.m. computer training session.<br/>And I’ve asked Chris Miles to join us since he’ll give a similar talk next week.<br/><br/>I’ll be in the office until 5:00p.m. today, so call me by then to confirm that you can meet me tonight.<br/>If I’m not at the desk, please leave a message with Nathan Cadman or any of the other assistants.<br/><br/>Your faithfully,<br/>보내는 사람 이름.")); 
    templateList.push(new myform(23, "업무메일","연구소 안전관리 및 안전교육 리마인더 입니다.", "안녕하세요! OOO 입니다.<br/>이번 분기에도 역시 온라인 안전교육을 이수하라는 공문이 내려왔습니다. <br/><br/>2019년 12월 31일까지  http://safetyedu.OOOOOOOO.co.kr에서 안전교육을 받아주시면 됩니다.<br/>선택 과목은 편하신대로 2가지 선택하여 진행 해 주시면 됩니다.<br/>자세한 내용은 첨부파일 및 아래 메일 내용을 참조해 주시기 바랍니다.<br/><br/>온라인 안전교육은 신입 연구원 안전교육과 별개로 진행되며, 신입 연구원 안전교육을 받으신 분들도 모두 추가로 이수해 주셔야 합니다.<br/><br/>감사합니다!<br/><br/>OOO 올림.")); 
    
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
    
    templateCategoryList.push("대학생용");
    templateCategoryList.push("업무메일");
    templateCategoryList.push("영어메일");

    localStorage.setItem("templateCategoryList", JSON.stringify(templateCategoryList));

}