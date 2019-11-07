/*
$(document).ready(function() { 
    $('#btn_crawl').click(function() {  //#btn_crawl이란 아이디 클릭시 
        $('#myform').load('https://king10tech.github.io');  //#content에 데이타를 부른다.
        alert("불러왔슈");
        return false; }); 
    });
*/


function download_get() {   // 이미 세팅된 네이버 모바일의 주소를 가져옴 
	var str_url = $('#input_url').val();    // 네이버 모바일의 소스를 가져와 textArea에 삽입 
	var jqxhr = $.get(str_url, function(data) {
		$('#textvw').val(data);
	});
}

function download_post() {      // 이미 세팅된 사이트의 주소를 가져옴 
	var str_url = $('#input_url').val();    // 사이트의 소스를 가져와 textArea에 삽입 
	var jqxhr = $.post(str_url, function(data) {
		$('#textvw').val(data);
	});
}

$(document).ready(function() {
	$('button').click(function() {  // 이름을 주지 않았기 때문에 index순서에 의해서 값을 가져옴 
		switch($('button').index(this)) {
		case 0:
			download_get();
			break;
		case 1:
			download_post();
			break;
		}
	});
});


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
    } )
} );