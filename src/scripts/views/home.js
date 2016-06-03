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
        url: '/api/getlivelist.php',
        success: function (res) {
          // console.log(res.data);
          // vm.getlivelist=res.data;
          var data = res.data;
          var tempArr = [];
          for(var i = 0;i < Math.ceil(data.length/2); i++){
            tempArr[i] = [];
            tempArr[i][0]=data[2*i];
            tempArr[i][1]=data[2*i+1];
          }
           vm.getlivelist=tempArr;

        }
      })
    }
  }
});
