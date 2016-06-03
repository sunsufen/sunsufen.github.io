// 引入模板
var tplGuide = require('../tpl/guide.string');

// 定义一个视图
SPA.defineView('guide', {
  html: tplGuide,

  // 添加插件
  plugins: ['delegated'],

  // 绑定事件
  bindActions: {
    'goto.index': function () {
      SPA.open('index');
      var mySwiper = new Swiper ('.swiper-container', {
          autoplay:1500,
          autoplayDisableOnInteraction : false,
          loop: true,
          pagination: '.swiper-pagination',

        });
    }
  }
});
