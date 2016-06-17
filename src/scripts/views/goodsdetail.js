var goodTpl = require('../tpl/goodsdetail.string');
SPA.defineView('goodsdetail', {
              html:goodTpl,
              plugins: ['delegated'],

              // 绑定事件
              bindActions: {
                'exit':function(){
                  this.hide();
                }
              }
              });
