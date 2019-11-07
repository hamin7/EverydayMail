function setCrawlerModal(obj){
    if(obj){
    }else{
      obj = {};
    }
    $("#webUrl").attr("href", obj.url||"").text(obj.url||"");
    $("#feedTitle").val(obj.title||"");
    $("#htmlText").val("");
    $("#titleSelector").val(obj.titleSelector||"");
    $("#titleProp").val(obj.titleProp||"");
    $("#linkSelector").val(obj.linkSelector||"");
    $("#linkProp").val(obj.linkProp||"");
    $("#dateSelector").val(obj.dateSelector||"");
    $("#dateProp").val(obj.dateProp||"");
    $("#imageSelector").val(obj.imageSelector||"");
    $("#imageProp").val(obj.imageProp||"");
    $("#contentSelector").val(obj.contentSelector||"");
    $("#contentProp").val(obj.contentProp||"");

    $("#feedTitle, #linkSelector, #linkProp, #titleSelector, #titleProp").trigger("change");
    $("#postPanel").children().remove();
  }

$("#getSiteBtn").on("click", function(){
    //var searchUrl = $("#searchWebUrl").val();
    var searchUrl = "https://king10tech.github.io";     // 크롤링 할 사이트의 url.
    /*
    if(searchUrl == ""){        // url이 비어있다면.
      toast(whale.i18n.getMessage("search"), whale.i18n.getMessage("input_crawler_url_msg")); // "�???", "웹사아트 주소�? ?�력?�세??"
      $("#searchWebUrl").focus();
      return;
    }
    */

    setCrawlerModal()

    
    var $btn = $(this);
    $btn.data("original-text", 
    $btn.html()).html('<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Loading...').prop("disabled", true);
    
    $.ajax({
        
        url: searchUrl,     // 위의 searchUrl.
        dataType: "arraybuffer",    // datatype은 arraybuffer.

        // 성공 시.
        success: function(data, textStatus, request) {
          var contentType = request.getResponseHeader('content-type').toLowerCase();    // 인수로 지정한 응답 헤더를 돌려주는 함수, 대문자를 소문자로.
          var charset;
          if(contentType.indexOf("charset") > -1){  // contentType에서 charset의 위치를 찾아 반환. 그게 -1보다 크다면. (있다면)
            charset = contentType.split("charset=")[1]; // charset= 단위로 분할, 1번 한다는 거?
          }
          if(charset == "ms949" || charset == "cp949"){
            charset = "euc-kr";     // 한글 인코딩 처리.
          }
          
          var dataView = new DataView(data);    // dataView라는 객체.
          var docString = "";
          try{
            var decoder = new TextDecoder(charset);
            var decodedString = decoder.decode(dataView);
            docString = decodedString;
          }catch(e){
            var decoder = new TextDecoder();
            var decodedString = decoder.decode(dataView);
            docString = decodedString;
          }
          if(!charset){ // ?�더?? charset ?�보 ?�으�? html meta tag ?�인
            var charsetMatch = docString.match(/<meta[^>]*charset=[\"|\']([^\"]*)[\"|\'][^>]*>/i);
            if(charsetMatch){ // <meta charset="utf-8">
              charset = charsetMatch[1];
            }else{
              var contentTypeMatch = docString.match(/<meta[^>]*http-equiv=[\"|\']Content-Type[\"|\'][^>]*content=[\"]([^\"]*)[\"][^>]*>/i);
              if(contentTypeMatch){ // <meta http-equiv="Content-Type" content="text/html; charset=euc-kr">
                charset = contentTypeMatch[1].split("charset=")[1];
              }
            }
            if(charset){
              try{
                var decoder = new TextDecoder(charset);
                var decodedString = decoder.decode(dataView);
                docString = decodedString;
              }catch(e){
                var decoder = new TextDecoder();
                var decodedString = decoder.decode(dataView);
                docString = decodedString;
              }
            }
          }

          var $html = $("<output/>").html(docString);
          var feedTitle = $html.find("title").text();
          $("#webUrl").attr("href", searchUrl).text(searchUrl);
          $("#myform").val(docString.trim());       // write.html의 myform textarea에 출력해야 함.
          if(feedTitle){
            $("#feedTitle").val(feedTitle);
            $("#feedTitle").removeClass("is-invalid").addClass("is-valid");
          }else{
            $("#feedTitle").removeClass("is-valid").addClass("is-invalid");
          }
          $("#addCrawlerModal").modal("show");
          $btn.html($btn.data("original-text")).prop("disabled", false);
        },
        
        // 실패 시
        error: function(){
          toast(whale.i18n.getMessage("search"), whale.i18n.getMessage("page_not_found")); // "�???", "페이지를 찾을 수 없습니다"
          $btn.html($btn.data("original-text")).prop("disabled", false);
        }
    });

  });