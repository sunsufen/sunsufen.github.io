var listTpl = require('../tpl/list.string');

SPA.defineView('list', {
  html:listTpl,
  plugins: ['delegated'],


  bindActions:{
    'tab':function(){
var nav = $(".navlist");
var lis = nav.children();
var liLen = lis.length;
var div = $("#tablist");
var uls=div.children();
var ulLen=uls.length;



      for(var i = 0; i < liLen;i++){
        lis[i].index = i;
        lis[i].onclick = function(){
          for(var j = 0; j < liLen;j++){
            lis[j].className = '';
            uls[j].className = '';
          }
          lis[this.index].className = 'navactive';
          uls[this.index].className = 'tabactive';
        }
      }
    }
  }

});
