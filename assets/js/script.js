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