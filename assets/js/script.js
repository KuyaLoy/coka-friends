$( ".web .navigation-content:nth-child(2)" ).hover(
  function() {
    $('.profile-banner').addClass('hover');
    $('.profile-banner img.banner-image').hide();

    $('.banner-hover-2').css("display","flex");

  }, function() {
    $('.profile-banner').removeClass( "hover" );
    $('.profile-banner img.banner-image').show();
    $('.banner-hover-2').css("display","none");
  }
);

$( ".web .navigation-content.cs" ).hover(
  function() {
    $('.profile-banner').addClass('hover');   
    $('.profile-banner img.banner-image').hide();

    $('.banner-hover-3').css("display","flex");
    

  }, function() {
    $('.profile-banner').removeClass( "hover" );
    $('.profile-banner img.banner-image').show();
    $('.banner-hover-3').css("display","none");
  }
);


$('.input-message').keyup(function(){
  if($(this).val()){
      $('button.send').addClass("active");
  }else{
      $('button.send').removeClass("active");
  }
});

  function closeViewMedia() {
    $('.view-media-container').fadeOut();
    $('body').css('overflow-y','scroll')
  }
  $('div.portfolio-content').click(function(){
    if(window.innerWidth > 1023) {
      $('.view-media-container').fadeIn().css('display','flex');
      $('body').css('overflow-y','hidden');
    }
  });
  $('button.send').click(function(){
    alert('messange sent!!!');
  });
