簡化教學 ：
不懂怎麼用的 請去看看_demo.scss

請參考index.html一起服用

3.頁籤 
  @include tab;

4.次要按鈕  
  @include other-button();

5.燈箱
    請依序最外層設
    .lightbox-block{
        @include lightbox-block();
    }
    .lightbox{
        @include lightbox();
    }
    .button_closeBox{
        @include button_closeBox;
    }
    .inlightbox-form{
        @include inlightbox-form;
    }



6.input  請記得用form表單包
    
    6-1 type="radio" => input-text($w:150px,$h:30px);
    6-2 type="radio" => @include input-radio;
    6-3 type="checkbox" => @include input-checkbox($w:25px,$h:30px);
    6-4 type="submit" => @include input-submit($w:150px,$h:30px);
    6-5 type="password" => @include input-password($w:150px,$h:30px);
    6-6 type="number" => @include input-number($w:150px,$h:30px);
    6-7 type="date" => @include input-date($w:150px,$h:30px);

7.

8.卡片之間的距離 
    @include cards($w:300px);

9.rwd部分
 /*-----------------------寫法---------------------
//直接引用公式 
        .class{
            @include breakpoint(填入斷點數字，拜託“不要”“不要”“不要”加單位){ 開始寫你要的樣式 }
            例：
            @include breakpoint( 1200 ){ display:none }           
        }
＊如果你還是覺得看不懂，可以直接複製下面整串到你要的class名稱裡面，已經幫你寫好所有斷點

.class名稱{
    //正常情況寫這邊
    @include breakpoint (1200) {
        //在1200px區間做變化寫這邊
    }
    @include breakpoint (992) {
        //在991px區間做變化寫這邊  
    }
    @include breakpoint (767) {
        //在768px區間做變化寫這邊
    }
    @include breakpoint (577) {
        //在576px區間做變化寫這邊
    }
    @include breakpoint (376) {
        //在375px區間做變化寫這邊
    }
}






