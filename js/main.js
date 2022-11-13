let scrolling = $('#navyscrol').offset().top
console.log(scrolling);



$(window).scroll(function(){
   if($(window).scrollTop() > 70){
    $('.changeNav').css('backgroundColor','#0078ff')
   }else {
    $('.changeNav').css('backgroundColor','transparent')
   }  
   if($(window).scrollTop() >130 ){
    $('#topBtn').fadeIn(2000)
  }else{
      $('#topBtn').fadeOut(1000) 
  }
})


$('#topBtn').click(function(){
    $('body,html').animate({scrollTop: 0} , 1000)
})
