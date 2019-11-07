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

$(document).ready(function() {
	$('#btn_get').click(function() {
		download_get();
	});
});

/*
$(document).ready(function() {
	$('#btn_post').click(function() {
		download_post();
	});
});
*/

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