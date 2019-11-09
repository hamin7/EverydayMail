
$(document).ready(function () {

    $('#btn_ajax').click(function () {
        alert("크롤링 및 파싱 됨");
        crawl();

    });
    $('#btn_show').click(function () {
        alert("보여줄게오");
    });
    $('#btn_get').click(function () {
        download_get();

    });
});


/*
$(document).ready(function() { 
    $('#btn_crawl').click(function() {  //#btn_crawl이란 아이디 클릭시 
        $('#myform').load('https://king10tech.github.io');  //#content에 데이타를 부른다.
        alert("불러왔슈");
        return false; }); 
    });
*/


function download_get() {   // 이미 세팅된 네이버 모바일의 주소를 가져옴 
	var str_url = $('#input_url').val();    // 
	var jqxhr = $.get(str_url, function(data) {
		$('#textvw').val(data);
	});
}

/*
function download_post() {      // 
	var str_url = $('#input_url').val();    // 
	var jqxhr = $.post(str_url, function(data) {
		$('#textvw').val(data);
	});
}
*/


/*
$(document).ready(function() {
	$('#btn_post').click(function() {
		download_post();
	});
});
*/

/*
function download() {        
    var str_url = $('#input_url').val();
    $.ajax( {
        url:str_url,
        success:function(data) {
            $('#textvw').val(data);	
            alert(data);
        }
    });
}
$(document).ready(function() {
    $('#btn_crawl').click(function() {
        download();
    })
});
*/

/*
$(document).ready(function() {
    $('#btn_ajax').click(function() {
        $.ajax({
            url: "http://bizmail.yesform.com/list/list.php?div=A12B22",
        }).done(function(data) {
            $('#textvw').val(data);
            alert(data);
        })
    })
})
*/

//var url = "http://bizmail.yesform.com/list/list.php?div=A12B22";
//var url = "https://king10tech.github.io"

/*
var params = "uid=11"

$(document).ready(function() {
    $('#btn_ajax').click(function() {
        $.ajax({
            url: "https://king10tech.github.io",
            }).done(function(data) {
                $('#textvw').val(data);
            })
    })
});
*/

// Crawling
function crawl() {

   
    function parseResult(html) {
        alert(1);
    //   const dataToSave = {};

      
  
    //   const fragment = document.createElement('DIV');
    //   fragment.innerHTML = html;

      
        
    //   const divs = fragment.querySelectorAll('.panel clearfix');
        
    //   divs.forEach((div) => {
    
          
    //     let value = '';
    //     // const title = h4.innerHTML;
    //     value = div.closest('h4').innerHTML;
        
    //     // dataToSave.title = value;

    //     // let value = '';
    //     // value = div.closest('.panel-body').innerHTML;
    //     // dataToSave.body = value;
        
        
        
    //   });

    //     whale.storage.local.set({
    //     data: dataToSave,
    //   });
      
    }
  
    function fetchUrl() {
    
        fetch(`http://bizmail.yesform.com/list/list.php`, headers: {
            "Content-type": "application/json; charset=UTF-8"
        })
        .then(result => result.text())
        .then(html => parseResult(html));

        
    }
  
    fetchUrl();
}
  

