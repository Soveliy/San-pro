var reviews = new Swiper('.reviews__slider .swiper-container', {
    spaceBetween: 20,
   
    autoHeight:true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    navigation: {
        nextEl: '.swiper-button-next2',
        prevEl: '.swiper-button-prev2',
      },
      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 2,

        },
        1024: {
          slidesPerView: 3,
        },
      },
      pagination: {
        el: '.swiper-pagination2',
        dynamicBullets: true,
      },
  });

  var gallery = new Swiper('.gallery__slider .swiper-container', {
    slidesPerView: 3,
      slidesPerColumn: 2,
      spaceBetween: 20,
      pagination: {
        el: '.swiper-pagination1',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next1',
        prevEl: '.swiper-button-prev1',
      },
      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 2,

        },
        1024: {
          slidesPerView: 3,
        },
      }
  });
  var gallery = new Swiper('.applicability__grid-mobile-slider .swiper-container', {
    slidesPerView: 1,
      spaceBetween: 0,
      pagination: {
        el: '.swiper-pagination3',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next3',
        prevEl: '.swiper-button-prev3',
      },
    
  });
 
    
  // $('.call-block__button,.footer__button,.services-template__button').click(function(){
  //   $("#call-modal").arcticmodal()
  //    });
  
     $(".numbox").mask("+7 (999) 999 99 99");
  
  

    $(function () {
      $("#filter__range").slider({
       min: 1,
       max: 20,
       values: [4,10],
       range: true,
       stop: function(event, ui) {
         $("input#priceMin").val($("#filter__range").slider("values",0));
         $("input#priceMax").val($("#filter__range").slider("values",1));
   
         $('.price-range-min.value').html($("#filter__range").slider("values",0));
         $('.price-range-max.value').html($("#filter__range").slider("values",1));
       },
       slide: function(event, ui){
         $("input#priceMin").val($("#filter__range").slider("values",0));
         $("input#priceMax").val($("#filter__range").slider("values",1));
   
         $('.price-range-min.value').html($("#filter__range").slider("values",0));
         $('.price-range-max.value').html($("#filter__range").slider("values",1));
       }
     });
   
     $("input#priceMin").on('change', function(){
       var value1=$("input#priceMin").val();
       var value2=$("input#priceMax").val();
       if(parseInt(value1) > parseInt(value2)){
         value1 = value2;
         $("input#priceMin").val(value1);
         $('.price-range-min.value').html(value1);
       }
       $("#filter__range").slider("values", 0, value1);
       $('.price-range-min.value').html(value1);
     });
   
     $("input#priceMax").on('change', function(){
       var value1=$("input#priceMin").val();
       var value2=$("input#priceMax").val();
       if (value2 > 20000) { value2 = 20000; $("input#priceMax").val(35000)}
       if(parseInt(value1) > parseInt(value2)){
         value2 = value1;
         $("input#priceMax").val(value2);
         $('.price-range-max.value').html(value2);
       }
       $("#filter__range").slider("values",1,value2);
       $('.price-range-max.value').html(value2);
     });
   
     $('.ui-slider-handle:eq(0)').append('<span class="price-range-min value">' + $('#filter__range').slider('values', 0 ) + '</span>');
     $('.ui-slider-handle:eq(1)').append('<span class="price-range-max value">' + $('#filter__range').slider('values', 1 ) + '</span>');
   });


   $(function () {
    $("#filter__range2").slider({
     min: 1,
     max: 20,
     values: [4,10],
     range: true,
     stop: function(event, ui) {
       $("input#priceMin2").val($("#filter__range2").slider("values",0));
       $("input#priceMax2").val($("#filter__range2").slider("values",1));
 
       $('.price-range-min.value').html($("#filter__range2").slider("values",0));
       $('.price-range-max.value').html($("#filter__range2").slider("values",1));
     },
     slide: function(event, ui){
       $("input#priceMin2").val($("#filter__range2").slider("values",0));
       $("input#priceMax2").val($("#filter__range2").slider("values",1));
 
       $('.price-range-min.value').html($("#filter__range2").slider("values",0));
       $('.price-range-max.value').html($("#filter__range2").slider("values",1));
     }
   });
 
   $("input#priceMin2").on('change', function(){
     var value1=$("input#priceMin2").val();
     var value2=$("input#priceMax2").val();
     if(parseInt(value1) > parseInt(value2)){
       value1 = value2;
       $("input#priceMin2").val(value1);
       $('.price-range-min.value').html(value1);
     }
     $("#filter__range2").slider("values", 0, value1);
     $('.price-range-min.value').html(value1);
   });
 
   $("input#priceMax2").on('change', function(){
     var value1=$("input#priceMin2").val();
     var value2=$("input#priceMax2").val();
     if (value2 > 20000) { value2 = 20000; $("input#priceMax2").val(35000)}
     if(parseInt(value1) > parseInt(value2)){
       value2 = value1;
       $("input#priceMax2").val(value2);
       $('.price-range-max.value').html(value2);
     }
     $("#filter__range2").slider("values",1,value2);
     $('.price-range-max.value').html(value2);
   });
 
   $('.ui-slider-handle:eq(0)').append('<span class="price-range-min value">' + $('#filter__range').slider('values', 0 ) + '</span>');
   $('.ui-slider-handle:eq(1)').append('<span class="price-range-max value">' + $('#filter__range').slider('values', 1 ) + '</span>');
 });



$(".callback-button").click(function(){
  $("#callback-modal").arcticmodal();
});
$(".selection-button").click(function(){
  $("#selection-modal").arcticmodal();
});

$(".characteristic-item__head").click(function(){
  $(".characteristic-item").removeClass("active")
  $(this).parent().addClass("active");
  $(".characteristic-item__body").fadeOut();
  $(this).next().slideToggle();
});
$(".characteristic-item__close").click(function(){
  $(this).parent().slideToggle();
});

$(".principle-of-work__show-more").click(function(){
  $(this).toggleClass("js-active");
  $(this).parent().toggleClass("js-active");
});

