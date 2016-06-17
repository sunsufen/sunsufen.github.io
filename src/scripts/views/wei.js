var weiTpl = require('../tpl/wei.string');

SPA.defineView('wei', {
  html:weiTpl,
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
          // console.log(res.data2);
          // vm.getlivelist=res.data;
          var data2 = res.data2;
          var tempArr = [];
          for(var i = 0;i < Math.ceil(data2.length); i++){
            tempArr[i] = [];
            tempArr[i]=data2[i];
          }
           vm.getlivelist=tempArr;

        }
      });
    }
  }
});
