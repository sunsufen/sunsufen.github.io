var homeTpl = require('../tpl/home.string');
var Swiper = require('../lib/swiper-3.3.1.min.js');
SPA.defineView('home', {
  html:homeTpl,
  plugins: ['delegated',{
    name:"avalon",
    options:function(vm){
      vm.getlivelist = [];

    }
  }
],
  bindEvents: {
    'beforeShow': function () {
      var vm = this.getVM();
      $.ajax({
        url: '/unique/mock/getlivelist.json',
        success: function (res) {
          var data = res.data;
          var tempArr = [];
          for(var i = 0;i < Math.ceil(data.length/2); i++){
            tempArr[i] = [];
            tempArr[i][0]=data[2*i];
            tempArr[i][1]=data[2*i+1];
          }
           vm.getlivelist=tempArr;

        }
      });
      SPA.open("index");
      this.indexSwiper = new Swiper('#index-swiper', {
        loop: true,
        autoplay:1500,
        autoplayDisableOnInteraction : false,
        pagination: '.swiper-pagination',

        // onSlideChangeStart: function (swiper) {
        //   $('#index-nav li').eq(swiper.activeIndex-1)
        //     .addClass('active').siblings().removeClass('active');
        // }
      })

    }
  }
});
