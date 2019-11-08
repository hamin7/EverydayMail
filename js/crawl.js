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

// Cafeteria
function food() {
    function parseResult(html) {
      const dataToSave = {};
  
      const fragment = document.createElement('DIV');
      fragment.innerHTML = html;
  
      const ths = fragment.querySelectorAll('.foodView-view table th');
      ths.forEach((th) => {
        let value = '';
        const title = th.innerHTML;
        if (title.includes('운영시간')) {
          value = th.closest('tr').querySelector('td pre').innerHTML;
          dataToSave.mealTime = value;
        } else if (title.includes('식당명')) {
          value = th.closest('tr').querySelector('td').innerHTML;
          dataToSave.name = value;
        } else if (title.includes('위치')) {
          value = th.closest('tr').querySelector('td').innerHTML;
          dataToSave.location = value;
        }
      });

        whale.storage.local.set({
        data: dataToSave,
      });
      
    }
  
    function fetchUrl() {
      fetch(`http://www.hanyang.ac.kr/web/www/re1`)
        .then(result => result.text())
        .then(html => parseResult(html));
    }
  
    fetchUrl();
}
  
whale.runtime.sendMessage('food', () => {});

(function init() {
    whale.storage.local.get((result) => {
        
    })
});
  
$(document).ready(function() {
    $('#btn_ajax').click(function() {
        food();
        alert("크롤링 및 파싱 됨");
    })
});

$(document).ready(function() {
    $('#btn_shaw').click(function() {
        alert("보여줄게오");
    })
});