

var addlist = [];


//checked된 값 가져오기
function value_check(){
   $('input[type="checkbox"]:checked,input[type="radio"]:checked').each(function (index) {
        if (index != 0) {
            addlist += ' / ';
        }
        addlist += $(this).val();
    }); 
    alert(addlist);
}


function add(){
    var sum = document.form.sum;
}
    



