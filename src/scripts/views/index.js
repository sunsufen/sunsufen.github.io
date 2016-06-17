
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
    views: ['home', 'wei', 'my','list','shopcar','goodsdetail'],
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
    'switch.swiper': function (e) {
      this.setActive($(e.el));
      this.indexSwiper.slideTo($(e.el).index()+1);
    },
    'goto.detail': function () {
      SPA.open('detail');
    },

      'goto.goodsdetail': function () {
          console.log(1);
        SPA.open('goodsdetail');

      },

    'switch.view': function (e) {
      // 视图切换方法
      this.modules.content.launch(e.data.tag);
      this.setActive($(e.el));
    },

    'exit': function () {
      SPA.back('index');
    },
    'switch-my':function () {
      SPA.open('dialog', {
        name:"actionsheet",
        width:280,
        height:500
      })

    }
  }



});
