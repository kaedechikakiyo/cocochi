
$(function(){
   $(".header-sp-icon-wrap").click(function(){ /*このクラスをクリックすると中身の動きを行う*/
        if($(".header-sp-icon-wrap").hasClass("is-open")){
            $(".header-sp-nav").css("display","none");
            $(".header-sp-icon-wrap").removeClass("is-open");
        }
        else{
        $(".header-sp-nav").css("display","block");
        $(".header-sp-icon-wrap").addClass("is-open");/*addClass=クラス追加＋クリックすると追加される*/
            
        }

   });
});

$(function() {
    var headNav = $("header");
    //scrollだけだと読み込み時困るのでloadも追加
    $(window).on('load scroll', function () {
        //現在の位置が500px以上かつ、クラスfixedが付与されていない時
        if($(this).scrollTop() > 500 && headNav.hasClass('fixed') == false) {
            //headerの高さ分上に設定
            headNav.css({"top": '-100px'});
            //クラスfixedを付与
            headNav.addClass('fixed');
            //位置を0に設定し、アニメーションのスピードを指定
            headNav.animate({"top": 0},600);
        }
        //現在の位置が300px以下かつ、クラスfixedが付与されている時にfixedを外す
        else if($(this).scrollTop() < 300 && headNav.hasClass('fixed') == true){
            headNav.removeClass('fixed');
        }
    });
});

$(function(){
    function animation(){
      $('.fadeInUp').each(function(){
        //ターゲットの位置を取得
        var target = $(this).offset().top;
        //スクロール量を取得
        var scroll = $(window).scrollTop();
        //ウィンドウの高さを取得
        var windowHeight = $(window).height();
        //ターゲットまでスクロールするとフェードインする
        if (scroll > target - windowHeight){
          $(this).css('opacity','1');
          $(this).css('transform','translateY(0)');
        }
      });
    }
    animation();
    $(window).scroll(function (){
      animation();
    });
  });

  $(function() {
    var topBtn = $('.scroll-top');
    //ボタンを非表示にする
    topBtn.hide();
    //スクロールしてページトップから100に達したらボタンを表示
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
　　　　　　　//フェードインで表示
            topBtn.fadeIn();
        } else {
　　　　　　　//フェードアウトで非表示
            topBtn.fadeOut();
        }
    });
    //フッター手前でボタンを止める（ここを追加する）
    $(window).scroll(function () {
        var height = $(document).height(); //ドキュメントの高さ 
        var position = $(window).height() + $(window).scrollTop(); //ページトップから現在地までの高さ
        var footer = $("footer").height(); //フッターの高さ
        if ( height - position  < footer ) { 
            topBtn.css({
              position : "absolute",
              top : -100
            });
        } else { 
            topBtn.css({
              position : "fixed",
              top: "auto"
            });
        }
    });
    //スクロールしてトップへ戻る
    topBtn.click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 500);
        return false;
    });
});

$(function() {
  $('.single-item').slick(); 
});

(function($){

  $(function(){
     $(window).scroll(function(){
        var scr = $(window).scrollTop();
        if(scr > 1){
           $('.header-logo-wrap').addClass('mini');
        }else{
           $('.header-logo-wrap').removeClass('mini');
        }
     })
  })
  })(jQuery);

  (function($){

    $(function(){
       $(window).scroll(function(){
          var scr = $(window).scrollTop();
          if(scr > 1){
             $('header').addClass('mini');
          }else{
             $('header').removeClass('mini');
          }
       })
    })
    })(jQuery);


  var mvh = $('.main-visual').height();

  $(window).scroll(function() {
    var top = $(window).scrollTop();
    if (mvh < top) {
      $('header').css('background-color', 'white');
      } else {
      $('header').css('background-color', 'transparent');
    }
  });



  var mvh = $('.midashi').height();

  $(window).scroll(function() {
    var top = $(window).scrollTop();
    if (mvh < top) {
      $('header').css('background-color', 'white');
      } else {
      $('header').css('background-color', 'transparent');
    }
  });


  // $(function(){
  //   ScrollReveal().reveal('.what-list li');
  // });

  // $(function(){
  //   var 任意の変数名= {
  //             delay: 800,

  //             duration: 1000,
      
  //             distance: '100px', //要素の移動距離
      
  //             origin: 'bottom' //要素が移動してくる方向
  //         };
      
  //         ScrollReveal().reveal('.what-list li');
      
  // });


  $(function(){
    $('#slick01').slick({
    autoplay: true, //自動再生
    dots: true, //ドットインジケータの表示
    arrows: false
    
    });
    });

    $(function(){
      $('#slick02').slick({
      autoplay: true, //自動再生
      dots: true, //ドットインジケータの表示
      arrows: false
      });
      });

      $(function(){
        $('#slick03').slick({
        autoplay: true, //自動再生
        dots: true, //ドットインジケータの表示
        arrows: false
        });
        });


$(function() {
  $('#slick04').on('init', function(event, slick) {
    $(this).append('<div class="slick-counter"><span class="current"></span> / <span class="total"></span></div>');
    $('.current').text(slick.currentSlide + 1);
    $('.total').text(slick.slideCount);
  })
  .slick({
    // option here...
  })
  .on('beforeChange', function(event, slick, currentSlide, nextSlide) {
    $('.current').text(nextSlide + 1);
  });
});


$(function() {
  $('#slick05').on('init', function(event, slick) {
    $(this).append('<div class="slick-counter"><span class="current"></span> / <span class="total"></span></div>');
    $('.current').text(slick.currentSlide + 1);
    $('.total').text(slick.slideCount);
  })
  .slick({
    // option here...
  })
  .on('beforeChange', function(event, slick, currentSlide, nextSlide) {
    $('.current').text(nextSlide + 1);
  });
});


$(function() {
  $('#slick06').on('init', function(event, slick) {
    $(this).append('<div class="slick-counter"><span class="current"></span> / <span class="total"></span></div>');
    $('.current').text(slick.currentSlide + 1);
    $('.total').text(slick.slideCount);
  })
  .slick({
    // option here...
  })
  .on('beforeChange', function(event, slick, currentSlide, nextSlide) {
    $('.current').text(nextSlide + 1);
  });
});

ScrollReveal().reveal('.work img',{    
  duration: 800, // アニメーションの完了にかかる時間
  viewFactor: 0.3, // 0~1,どれくらい見えたら実行するか
  reset: false,   // 何回もアニメーション表示するか
  distance: '10%'
  });


ScrollReveal().reveal('.what-list li',{    
  duration: 800, // アニメーションの完了にかかる時間
  viewFactor: 0.3, // 0~1,どれくらい見えたら実行するか
  reset: false,   // 何回もアニメーション表示するか
  distance: '10%'
  });

