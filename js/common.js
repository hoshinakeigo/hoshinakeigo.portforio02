

$('.slick01').slick({
    dots: true,
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: true,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: true,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  });

  $(function() {
    $('.mainMenu a').on('click', function(event) {
        $('#menu-btn-check').prop('checked', false);
    });
});

$(function() {
    // 変数にクラスを入れる
    var btn = $('.pageScrollBtn');
    
    //スクロールしてページトップから100に達したらボタンを表示
    $(window).on('load scroll', function(){
      if($(this).scrollTop() > 100) {
        btn.addClass('active');
      }else{
        btn.removeClass('active');
      }
    });
  
    //スクロールしてトップへ戻る
    btn.on('click',function () {
      $('html').animate({
        scrollTop: 0
      });
    });
  });


$(function() {
    // 変数にクラスを入れる
    var btn = $('.mainMenu');
    
    //スクロールしてページトップから100に達したらボタンを表示
    $(window).on('load scroll', function(){
      if($(this).scrollTop() > 200) {
        btn.addClass('active');
      }else{
        btn.removeClass('active');
      }
    });
  });

$(function() {

    // 一旦hide()で隠してフェードインさせる
    $('.topImage').hide().fadeIn('slow');

});

$(function(){
  $('.inview').on('inview', function (event, isInView) {
    if (isInView) {
      $(this).stop().addClass('is-show');
    }
  });
});
