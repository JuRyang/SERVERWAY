//위시리스트 배열
var wishList=[];

//위시리스트 생성자
function save_wishList(cnt, name, price){
    this.cnt=cnt;
    this.name=name;
    this.price=price;
}

save_wishList.prototype.makeHtml=function(index){
    console.log(this.cnt+' : '+this.name+' : '+this.price);
    
    var wishListHtml='';
    wishListHtml+='<tr>';
    wishListHtml+=' <td>'+index+'</td>';
    wishListHtml+=' <td>'+this.cnt+'</td>';
    wishListHtml+=' <td>'+this.name+'</td>';
    wishListHtml+=' <td>'+this.price+'</td>';
    wishListHtml+=' <td><a href="javascript:delMenu('+index+')">삭제</a></td>';
    wishListHtml+='</tr>';
}

window.onload=function(){
    if(localStorage.getItem('wishList')==null){
        localStorage.setItem('wishList', JSON.stringify(wishList));
    }else{
        wishList=JSON.parse(localStorage.getItem('wishList'));
        
        console.log(wishList);
        
        setlist();
    }
}

//테이블 정렬
function setlist(){
    
}

//위시리스트 메뉴 삭제
function delMenu(index){
    var delChk=confirm('해당 메뉴를 선택취소하시겠습니까?');
    
    if(delChk){
        wishList.splice(index, 1);
        
        localStorage.setItem('wishList', JSON.stringify(wishList));
        
        alert('메뉴가 선택취소되었습니다.');
        
        setlist();
    }
}

/*위시리스트 수량 버튼*/
function fn_count(type, select_menu){
    var $input=$(select_menu).parent("td").find("input[name='menu_count']");
    var count=Number($input.val());
    
    if(type=='plus'){
        $input.val(Number(count)+1);
    }else{
        if(count>1) $input.val(Number(count)-1);
    }
}