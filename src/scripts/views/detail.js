// 引入模板
var tplDetail = require('../tpl/detail.string');

// 定义一个视图
SPA.defineView('detail', {
  html: tplDetail,

  // 添加插件
  plugins: ['delegated'],

  // 绑定事件
  bindActions: {
    'goto.detail': function () {
      SPA.open('detail');
      // var mySwiper = new Swiper ('.swiper-container', {
      //     autoplay:1500,
      //     autoplayDisableOnInteraction : false,
      //     loop: true,
      //     pagination: '.swiper-pagination',
      //   });
    }
  }
});
