$(".web .navigation-content:nth-child(2)").hover(
  function () {
    $(".profile-banner").addClass("hover");
    $(".profile-banner img.banner-image").hide();

    $(".banner-hover-2").css("display", "flex");
    
  },
  function () {
    $(".profile-banner").removeClass("hover");
    $(".profile-banner img.banner-image").show();
    $(".banner-hover-2").css("display", "none");
  }
);

$(".web .navigation-content.cs").hover(
  function () {
    $(".profile-banner").addClass("hover");
    $(".profile-banner img.banner-image").hide();

    $(".banner-hover-3").css("display", "flex");
  },
  function () {
    $(".profile-banner").removeClass("hover");
    $(".profile-banner img.banner-image").show();
    $(".banner-hover-3").css("display", "none");
  }
);

$(".input-message").keyup(function () {
  if ($(this).val()) {
    $("button.send").addClass("active");
  } else {
    $("button.send").removeClass("active");
  }
});

$(".send-dm input").keyup(function () {
  if ($(this).val()) {
    $(".send-dm button").addClass("active");
  } else {
    $(".send-dm button").removeClass("active");
  }
});
$(".send-dm-mobile input").keyup(function () {
  if ($(this).val()) {
    $(".send-dm-mobile button").addClass("active");
  } else {
    $(".send-dm-mobile button").removeClass("active");
  }
});

function closeViewMedia(el) {
  
  $("body").css("overflow-y", "scroll");

  if(el == 1) {
    $(".view-media-container").fadeOut();
    $(".comment-list").empty();
    $('.media-cont').empty();
  }

  if(el == 2) {
    $(".send-message").slideUp();
    $(".message-list").empty();
  }

  if(el == 3) {
    $(".view-media-container-mobile").fadeOut();
    $(".mobile-wrapper .media-content").empty();
    $('.mobile-wrapper .media').empty();
  }
  if(el == 4) {
    $(".view-chat-container-mobile").fadeOut();
    $(".mobile-chat-list").empty();
  }

  if(el == 5) {
    $(".view-follower-container-mobile").fadeOut();
  }

  $('.like.active, heart.active').removeClass('active');
}

$("div.portfolio-content").click(function () {
  var attr = $(this).attr("data");

  if (window.innerWidth > 1023) {
    $(".view-media-container").fadeIn().css("display", "flex");
    $("body").css("overflow-y", "hidden");

    switch (attr) {
      case "1":
        $(".comment-list").append(`<li class="comment-item">
                                      <img class="comment-profile" src="./assets/image/profile/profile.png" alt="">
                                      <div class="comment-wrapper-item">
                                          <p class="username">coka_rabbit <span class="mini-comment">ABOUT</span></p>
                                          <span class="comment-text">
                                              Comfort toys, which were once treasured and loved by their little owners,<br>are now discarded in landfills.<br>As little children grow older, they will outgrow their toys,<br>replacing them with more mature and distinguished priorities.<br><br>Now In landfills,comfort toys surrounded by trash attract negativity<br>and feel restless without their owners' affection.<br>They just sit there missing and looking back to the bygone days.<br><br>It was Coka, the landfill site manager,<br>who felt pity for the comfort toys and decided to take action.<br>Coka’s goal was to help them find their owners to see the comfort toys rejoice again.<br><br>Coka's first step was to set up a social media account where he could share<br>pictures and stories about each toy.<br>In hopes to help the abandoned toys rekindle with their owners,<br>Coka starts sharing the pictures on social media.<br><br>Here's the first one! Please meet Coka Rabbit!
                                          </span>
                                      </div>
                                  </li>`);
        $('.media-cont').append(`<img src="./assets/image/profile/gal-1.png" alt="">`);
        break;
      case "2":
        $(".comment-list").append(`<li class="comment-item">
                                      <img class="comment-profile" src="./assets/image/profile/profile.png" alt="">
                                      <div class="comment-wrapper-item">
                                          <p class="username">coka_rabbit <span class="mini-comment">STORY</span></p>
                                          <span class="comment-text">
                                          Hi, everyone!<br>I used to belong to Lilly before I was abandoned.<br><br>When I was with Lilly, we used to do everything together because<br>she was too scared without me! I was there when her parents made her<br>brush her teeth, when she had to eat the vegetables that she hated,<br>or when she went to the hospital and had to be brave with needles.<br>I was always there for her! …. until Lilly decided she didn't need me anymore.<br><br>Lilly grew up, learned to do things on her own,<br>and stopped bringing me everywhere.<br>That was when Lilly left me and I ended up in this landfill where I met Coka.<br><br>I'm filthy now from living here.<br>Lilly's stitches on me have now completely burst and torn.<br>My garments have been destroyed by the garbage.<br><br>Will Lilly still remember me? I want to meet her so badly..<br>Coka promised to return me to her. Is that true?<br>Will Lilly find me? Will she still love me as much as she did when she was younger?<br><br>Does she want to see me????? Do you know Lilly????? Please help me find her!
                                          </span>
                                      </div>
                                  </li>`);
        $('.media-cont').append(`<img src="./assets/image/profile/gal-2.png" alt="">`);
        break;
      case "3":
        $(".comment-list").append(`<li class="comment-item">
                                      <img class="comment-profile" src="./assets/image/profile/profile.png" alt="">
                                      <div class="comment-wrapper-item">
                                          <p class="username">coka_rabbit <span class="mini-comment">ROAD MAP</span></p>
                                          <span class="comment-text">
                                          1. NFT Holders will be granted full commercial rights for<br>&nbsp;&nbsp;&nbsp;&nbsp;providing Coka Rabbit with a new home.<br><br>2. The Coka Friends social media accounts<br>&nbsp;&nbsp;&nbsp;&nbsp;will be opened for all Coka Rabbit lovers!<br><br>3. Do you want to find out about the upcoming Coka Friends?<br>&nbsp;&nbsp;&nbsp;&nbsp;Follow Coka Friends on social media to get early access and<br>&nbsp;&nbsp;&nbsp;&nbsp;details about the Coka Friends NFTs.<br><br>4. It's time to reveal the next Coka Friend! The 2nd NFT project is scheduled.<br><br>5. Giveaways when reaching the target number of followers.<br><br>6. Can’t get enough of Coka Rabbit?<br>&nbsp;&nbsp;&nbsp;&nbsp;A cute merch selection of Coka Rabbit NFTs is on the way!
                                          </span>
                                      </div>
                                  </li>`);
        $('.media-cont').append(`<img src="./assets/image/profile/gal-3.png" alt="">`);
        break;
      case "4":
        $(".comment-list").append(`<li class="comment-item">
                                        <img class="comment-profile" src="./assets/image/profile/profile.png" alt="">
                                        <div class="comment-wrapper-item">
                                            <p class="username">coka_rabbit <span class="mini-comment">LOL!!!!!</span></p>
                                        </div>
                                    </li>
                                    <li class="comment-item">
                                        <img class="comment-profile" src="./assets/image/profile/profile-coka.png" alt="">
                                        <div class="comment-wrapper-item">
                                            <p class="username">coka <span class="mini-comment-other">Don't freak out just because they are different in their looks!</span></p>
                                        </div>
                                    </li>`);
        $('.media-cont').append(`<img src="./assets/image/profile/gal-4.png" alt="">`);
        
        break;
      case "5":
        $(".comment-list").append(`<li class="comment-item">
                                      <img class="comment-profile" src="./assets/image/profile/profile.png" alt="">
                                      <div class="comment-wrapper-item">
                                          <p class="username">coka_rabbit <span class="mini-comment">TEAM</span></p>
                                      </div>
                                    </li>
                                    <li class="comment-item">
                                      <img class="comment-profile" src="./assets/image/profile/profile-pepe.png" alt="">
                                      <div class="comment-wrapper-item">
                                          <p class="username">coka_pepe <span class="mini-comment-other">Product manager</span></p>
                                      </div>
                                  </li>
                                  <li class="comment-item">
                                    <img class="comment-profile" src="./assets/image/profile/profile-chris.png" alt="">
                                    <div class="comment-wrapper-item">
                                        <p class="username">coka_chris <span class="mini-comment-other">Art Director</span></p>
                                    </div>
                                  </li>
                                  <li class="comment-item">
                                    <img class="comment-profile" src="./assets/image/profile/profile-adam.png" alt="">
                                    <div class="comment-wrapper-item">
                                        <p class="username">coka_Adam <span class="mini-comment-other">lIlustrator</span></p>
                                    </div>
                                  </li>
                                  <li class="comment-item">
                                    <img class="comment-profile" src="./assets/image/profile/profile-melissa.png" alt="">
                                    <div class="comment-wrapper-item">
                                        <p class="username">coka_Melissa <span class="mini-comment-other">Story Director</span></p>
                                    </div>
                                  </li>
                                  <li class="comment-item">
                                    <img class="comment-profile" src="./assets/image/profile/profile-taylor.png" alt="">
                                    <div class="comment-wrapper-item">
                                        <p class="username">coka_Taylor <span class="mini-comment-other">Marketing Manager</span></p>
                                    </div>
                                  </li>`);
        $('.media-cont').append(`<img src="./assets/image/profile/gal-5.png" alt="">`);
        break;
      case "6":
        $(".comment-list").append(`<li class="comment-item">
                                      <img class="comment-profile" src="./assets/image/profile/profile.png" alt="">
                                      <div class="comment-wrapper-item">
                                          <p class="username">coka_rabbit <span class="mini-comment">🧙</span></p>
                                      </div>
                                  </li>`);

        $('.media-cont').append(`<video src="./assets/video/profile/vid-1.mp4" controls autoplay muted loop ></video>`);
        break;
      case "7":
        $(".comment-list").append(`<li class="comment-item">
                                      <img class="comment-profile" src="./assets/image/profile/profile.png" alt="">
                                      <div class="comment-wrapper-item">
                                          <p class="username">coka_rabbit <span class="mini-comment">🚗💨💨😎</span></p>
                                      </div>
                                  </li>`);
        $('.media-cont').append(`<img src="./assets/image/profile/gal-7.png" alt="">`);
        break;
      case "8":
        $(".comment-list").append(`<li class="comment-item">
                                      <img class="comment-profile" src="./assets/image/profile/profile.png" alt="">
                                      <div class="comment-wrapper-item">
                                          <p class="username">coka_rabbit <span class="mini-comment">alone 😢</span></p>
                                      </div>
                                  </li>
                                  <li class="comment-item">
                                    <img class="comment-profile" src="./assets/image/profile/profile-coka.png" alt="">
                                    <div class="comment-wrapper-item">
                                        <p class="username">coka <span class="mini-comment-other">I'll be there ASAP!!!</span></p>
                                    </div>
                                  </li>`);
        $('.media-cont').append(`<video src="./assets/video/profile/vid-2.mp4" controls autoplay muted loop ></video>`);
        break;
      case "9":
        $(".comment-list").append(`<li class="comment-item">
                                      <img class="comment-profile" src="./assets/image/profile/profile.png" alt="">
                                      <div class="comment-wrapper-item">
                                          <p class="username">coka_rabbit <span class="mini-comment">Happy Birthday To Coka!😜</span></p>
                                      </div>
                                  </li>`);
        $('.media-cont').append(`<img src="./assets/image/profile/gal-9.png" alt="">`);
        break;
      default:
      // code block
    }
  } else {
    $(".view-media-container-mobile").fadeIn();
    $("body").css("overflow-y", "hidden");

    switch (attr) {
      case "1":
        $('.mobile-wrapper .media').append(`<img src="./assets/image/profile/gal-1.png" alt="">`);
        $('.mobile-wrapper .media-content').append(`<div class="username">Rabbit&nbsp;&nbsp;&nbsp;</div>
        <p class="context">Comfort toys, which were once treasured and loved by their little owners,<br>are now discarded in landfills.<br>As little children grow older, they will outgrow their toys,<br>replacing them with more mature and distinguished priorities.<br><br>Now In landfills,comfort toys surrounded by trash attract negativity<br>and feel restless without their owners' affection.<br>They just sit there missing and looking back to the bygone days.<br><br>It was Coka, the landfill site manager,<br>who felt pity for the comfort toys and decided to take action.<br>Coka’s goal was to help them find their owners to see the comfort toys rejoice again.<br><br>Coka's first step was to set up a social media account where he could share<br>pictures and stories about each toy.<br>In hopes to help the abandoned toys rekindle with their owners,<br>Coka starts sharing the pictures on social media.<br><br>Here's the first one! Please meet Coka Rabbit!</p>`)
        break;
      case "2":
        $('.mobile-wrapper .media').append(`<img src="./assets/image/profile/gal-2.png" alt="">`);
        $('.mobile-wrapper .media-content').append(`<div class="username">Rabbit&nbsp;&nbsp;&nbsp;</div>
        <p class="context">Hi, everyone!<br>I used to belong to Lilly before I was abandoned.<br><br>When I was with Lilly, we used to do everything together because<br>she was too scared without me! I was there when her parents made her<br>brush her teeth, when she had to eat the vegetables that she hated,<br>or when she went to the hospital and had to be brave with needles.<br>I was always there for her! …. until Lilly decided she didn't need me anymore.<br><br>Lilly grew up, learned to do things on her own,<br>and stopped bringing me everywhere.<br>That was when Lilly left me and I ended up in this landfill where I met Coka.<br><br>I'm filthy now from living here.<br>Lilly's stitches on me have now completely burst and torn.<br>My garments have been destroyed by the garbage.<br><br>Will Lilly still remember me? I want to meet her so badly..<br>Coka promised to return me to her. Is that true?<br>Will Lilly find me? Will she still love me as much as she did when she was younger?<br><br>Does she want to see me????? Do you know Lilly????? Please help me find her!</p>`);
        break;
      case "3":
        $('.mobile-wrapper .media').append(`<img src="./assets/image/profile/gal-3.png" alt="">`);
        $('.mobile-wrapper .media-content').append(`<div class="username">Road Map&nbsp;&nbsp;&nbsp;</div>
        <p class="context">1. NFT Holders will be granted full commercial rights for<br>&nbsp;&nbsp;&nbsp;&nbsp;providing Coka Rabbit with a new home.<br><br>2. The Coka Friends social media accounts<br>&nbsp;&nbsp;&nbsp;&nbsp;will be opened for all Coka Rabbit lovers!<br><br>3. Do you want to find out about the upcoming Coka Friends?<br>&nbsp;&nbsp;&nbsp;&nbsp;Follow Coka Friends on social media to get early access and<br>&nbsp;&nbsp;&nbsp;&nbsp;details about the Coka Friends NFTs.<br><br>4. It's time to reveal the next Coka Friend! The 2nd NFT project is scheduled.<br><br>5. Giveaways when reaching the target number of followers.<br><br>6. Can’t get enough of Coka Rabbit?<br>&nbsp;&nbsp;&nbsp;&nbsp;A cute merch selection of Coka Rabbit NFTs is on the way!</p>`);
        break;
      case "4":
        $('.mobile-wrapper .media').append(`<img src="./assets/image/profile/gal-4.png" alt="">`);
        $('.mobile-wrapper .media-content').append(`<div class="username">Coka_rabbit&nbsp;&nbsp;&nbsp;<span>LOL!!!!!</span></div>
        <div class="username">Coka&nbsp;&nbsp;&nbsp;<span>Don't freak out just because they are different in their looks!</span></div>`);
        break;
      case "5":
        $('.mobile-wrapper .media').append(`<img src="./assets/image/profile/gal-5.png" alt="">`);
        $('.mobile-wrapper .media-content').append(`<div class="username">Rabbit&nbsp;&nbsp;&nbsp;</div>
        <div class="username">coka_pepe&nbsp;&nbsp;&nbsp;<span>Product manager</span></div>
        <div class="username">coka_chris&nbsp;&nbsp;&nbsp;<span>Art Director</span></div>
        <div class="username">coka_Adam&nbsp;&nbsp;&nbsp;<span>lIlustrator</span></div>
        <div class="username">coka_Melissa&nbsp;&nbsp;&nbsp;<span>Story Director</span></div>
        <div class="username">coka_Taylor&nbsp;&nbsp;&nbsp;<span>Marketing Manager</span></div>`);
        break;
      case "6":
        $('.mobile-wrapper .media').append(`<video src="./assets/video/profile/vid-1.mp4" controls autoplay muted poster="./assets/image/profile/gal-6.png"></video>`);
        $('.mobile-wrapper .media-content').append(`<div class="username">Coka_rabbit&nbsp;&nbsp;&nbsp;<span>Can you see me?? HA HA HA</span></div>`);
        break;
      case "7":
        $('.mobile-wrapper .media').append(`<img src="./assets/image/profile/gal-7.png" alt="">`);
        $('.mobile-wrapper .media-content').append(`<div class="username">Rabbit&nbsp;&nbsp;&nbsp;<span>🚗💨💨😎</span></div>`);
        break;
      case "8":
        $('.mobile-wrapper .media').append(`<video src="./assets/video/profile/vid-2.mp4" controls autoplay muted poster="./assets/image/profile/gal-8.png"></video>`);
        $('.mobile-wrapper .media-content').append(`<div class="username">Rabbit&nbsp;&nbsp;&nbsp;<span>Always i'm waiting for ... U</span></div>`);
        break;
      case "9":
        $('.mobile-wrapper .media').append(`<img src="./assets/image/profile/gal-9.png" alt="">`);
        $('.mobile-wrapper .media-content').append(`<div class="username">Rabbit&nbsp;&nbsp;&nbsp;<span>Happy Birthday To Coka!😜</span></div>`);
        break;
      default:
      // code block
    }
  }
});

$("button.send").click(function () {

  var comment = $('.input-message').val();
  $(".comment-list").append("<li class='comment-item'>" + 
                              "<img class='comment-profile' src='./assets/image/profile/user.jpg' alt=''>" + 
                              "<div class='comment-wrapper-item'>" +
                                "<p class='username'>Visitor <span class='mini-comment-other'>"+comment+"</span></p>" +
                              "</div>" +
                            "</li>");

  $('.input-message').val('');
  $(".comment-list").scrollTop($(".comment-list")[0].scrollHeight);
  $('.input-message').keyup();
});

$('.message-but').click(function(){
  $('.send-message').slideDown();
    setTimeout(function() { 
      $(".message-list").append('<li class="message-item">There are a total of 10,000 Coka Rabbit NFTs</li>');
    }, 1000);
});

$(".send-dm button").click(function () {
  var messageSent = $('.send-dm input').val();

  $(".message-list").append("<li class='message-item sent'>"+messageSent+"</li>");

  if($('.message-list li').length == 2) {
    setTimeout(function() { 
      $(".message-list").append(`<li class="message-item">Follow Coka Rabbit's official social media accounts 
      for the latest news and updates.</li>`);
    }, 1500);
  }

  $('.send-dm input').val('');
  $(".message-list").scrollTop($(".message-list")[0].scrollHeight);
  $('.send-dm input').keyup();
});

$(".send-dm-mobile button").click(function () {
  var messageSent = $('.send-dm-mobile input').val();

  $(".mobile-chat-list").append("<li class='mobile-chat-item sent'>"+messageSent+"</li>");

  if($('.mobile-chat-list li').length == 2) {
    setTimeout(function() { 
      $(".mobile-chat-list").append(`<li class='mobile-chat-item'>Follow Coka Rabbit's official social media accounts 
      for the latest news and updates.</li>`);
    }, 1500);
  }

  $('.send-dm-mobile input').val('');
  //$(".message-list").scrollTop($(".message-list")[0].scrollHeight);
  $('.send-dm-mobile input').keyup();
});

function activeToggle(el){
  $(el).toggleClass('active');
}


var $temp = $("<input>");
var $url = $(location).attr('href');

function shareLinks() {
  $("body").append($temp);
  $temp.val($url).select();
  document.execCommand("copy");
  $temp.remove();

  $('.share-links').fadeIn();

  setTimeout(function() { 
    $('.share-links').fadeOut();
  }, 1500);
}

$('.chat-me').click(function(){
  $('.view-chat-container-mobile ').fadeIn();
  $("body").css("overflow-y", "hidden");

  setTimeout(function() { 
    $(".mobile-chat-list").append('<li class="mobile-chat-item">There are a total of 10,000 Coka Rabbit NFTs</li>');
  }, 1000);
});

$('.buy-cokastagram').click(function(){
  if (window.innerWidth < 1024) {
    $("body").css("overflow-y", "hidden");
    $('.view-follower-container-mobile ').fadeIn();
  }
});

// $(document).mouseup(function (e) {
//   if ($(e.target).closest(".view-ff-container").length === 0) {
//       $(".view-ff-container").hide();
//   }
// });