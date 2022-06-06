'use strict'
$(function(){
  // header dropdown
  $(".main_gnb").mouseover(function(){
    $(".submenu").css("display","block").css("background","#fff");
    $(".gnbRight").css("display","block").css("background","#f3f3f3");
  });
  $(".main_gnb").mouseout(function(){
    $(".submenu").css("display","none");
    $(".gnbRight").css("display","none");
  });

});
