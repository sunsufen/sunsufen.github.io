
var indexTpl = require('../tpl/index.string');
var tplDetail = require('../tpl/detail.string');
// var Swiper = require('../lib/swiper-3.3.1.min.js');
SPA.defineView('index', {
  html: indexTpl,

  plugins: ['delegated'],


  // 子视图的嵌套定义
  modules: [{
    name: 'content',
    container: '.m-index-container',
    views: ['home', 'wei', 'my','list','shopcar'],
    defaultTag: 'home'//默认显示home页
  }],

  // 初始化视图属性和方法
  init: {
    indexSwiper: null,
    setActive: function (obj) {
      obj.addClass('active').siblings().removeClass('active');
    }
  },

  bindActions: {
    // 'switch.swiper': function (e) {
    //   this.setActive($(e.el));
    //   this.indexSwiper.slideTo($(e.el).index()+1);
    // },
    'goto.detail': function () {
      SPA.open('detail');
    },

    'switch.view': function (e) {
      // 视图切换方法
      this.modules.content.launch(e.data.tag);
      this.setActive($(e.el));
    },

    'exit': function () {
      SPA.back('index');
    }
  },

  bindEvents: {
    'beforeShow': function () {
      this.indexSwiper = new Swiper('#index-swiper', {
        loop: true,
        autoplay:1500,
        autoplayDisableOnInteraction : false,
        pagination: '.swiper-pagination',

        // onSlideChangeStart: function (swiper) {
        //   $('#index-nav li').eq(swiper.activeIndex-1)
        //     .addClass('active').siblings().removeClass('active');
        // }
      });
    }
  }
});
// 轮播
// var Swiper = require('../lib/swiper-3.3.1.min.js');
// window.onload = function () {
// var mySwiper = new Swiper ('.swiper-container', {
//     autoplay:1500,
//     autoplayDisableOnInteraction : false,
//     loop: true,
//     pagination: '.swiper-pagination',
//   });
// };
