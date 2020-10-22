//潛點首屏 頁籤
$(function(){
    $("a.spotText").on("click", function(s){
        s.preventDefault();
    
        $(this).closest(".spotListBlock").find("a.spotText").removeClass("-iAmHere");
        $(this).addClass("-iAmHere");
        
        $("div.spotarea").removeClass("-iAmHere");
        $("div.spotarea." + $(this).attr("data-target")).addClass("-iAmHere");
    });
});





//即時氣象頁籤功能
$(function(){
    $("a.weathers").on("click", function(w){
        w.preventDefault();
    
        $(this).closest(".weather_list").find("a.weathers").removeClass("-clickNow");
        $(this).addClass("-clickNow");
        
        $("div.weather_block").removeClass("-clickNow");
        $("div.weather_block." + $(this).attr("data-target")).addClass("-clickNow");
    });
});






//踩點－會員只能點擊一次
var spotImgHereList = document.getElementById("spotImgHereList");
var hereAddBtn = document.querySelectorAll(".hereAddBtn");

function addOneImg(index){
    let newLi = document.createElement('li');
    let image = document.createElement('img');
    image.src = `../../img/spot/spotGiLittle-03.png`;
    newLi.appendChild(image);
    spotImgHereList.appendChild(newLi);
    hereAddBtn[index].style.backgroundColor = "#221814";
    hereAddBtn[index].style.border = "#221814";
    alert('感謝您的點擊，讓此潛點更加熱門');
    // hereAddBtn.removeEventListener("click",addOneImg ,false);
};

for(let i =0;i<hereAddBtn.length;i++){
    hereAddBtn[i].addEventListener("click",function(){
        addOneImg(i)
    });
}


// for(var i = 0;i < lisLen;i++){
// 	//var存在变量提升, lis[i].index = i 为事先存储元素的索引值。若不写，打印的元素索引值会一直是元素的总长度。
// 	lis[i].index = i;//想省略这句，在for循环中，可用es6中的let替换var
// 	lis[i].onclick = function(){
// 		console.log(this.index);//元素索引值
// 	}


// hereAddBtn.addEventListener("click",addOneImg ,false);
// function check(){
//     hereAddBtn.addEventListener("click",addOneImg ,false);
// };

// $(hereAddBtn).click( function check(){
//     if ($(this).css("backgroundColor"," =#221814")){
//         console.log("sdf");
//     }else{
//         console.log("123");

//     }
// });

//檢舉功能
$(function(){
  
    $("i.fa-exclamation-circle").on("click", function(){
      $(".reportMsg").addClass("-sentRepor");
    });
    
    // 關閉
    $(".reportMsgBtn_close").on("click", function(){
      $(".reportMsg").addClass("-opacity-zero");
      
      //移除相關 class
      setTimeout(function(){
        $(".reportMsg").removeClass("-sentRepor -opacity-zero");
        $(".reportMsgBtn_close").removeClass("-sentRepor -opacity-zero");
      }, 1000);
    });
    
  });


//潛點內頁-rwd 頁籤介紹
$(function(){
    $("a.spotRefrList").on("click", function(rs){
        rs.preventDefault();
    
        $(this).closest(".spotRefreTab_rwd").find("a").removeClass("spotShow");
        $(this).closest("a").addClass("spotShow");
        
        $("section").removeClass("spotShow");
        $("section." + $(this).attr("data-target")).addClass("spotShow");
    });
});


