require('./lib/spa.min.js');
require('./views/index.js');
require('./views/guide.js');
require('./views/detail.js');
require('./views/home.js');
require('./views/wei.js');
require('./views/list.js');
require('./views/shopcar.js');
require('./views/my.js');

// require('/footballSNS/src/scripts/lib/swiper-3.3.1.min.js');

// 配置视图的信息
// var indexView = SPA.util.storage('isVisited') ? 'index' : 'guide';
// SPA.config({
//   indexView: indexView
// });

SPA.config({
  indexView: 'guide'//第一次访问进入的页面；
});
