/**
 * Created by Administrator on 2017/1/6 0006.
 */
/*header*/
(
    function () {
        var $buy = $('#header .h-m-r-buy');
        var $buyA = $buy.find('a.buy');
        var $buyHide = $buy.find('.hide');
        $buy.hover(function () {
            $buyA.addClass('hover');
            $buyHide.stop().slideDown(300);
        }, function () {
            $buyHide.stop().slideUp(300,function(){
                $buyA.removeClass('hover');
            });
        })
    }
)();

/*nav-main*/
(
    function(){
        var $product = $('#nav .n-main .product');
        var $navHide =  $('#nav .nav-hide');
        var $ul = $('#nav .nav-hide .n-h-main ul');
        $product.hover(function () {
            $navHide.stop().slideDown(200);
            $ul.eq( $(this).index() ).show().siblings().hide();
            //    siblings()-同胞元素
        }, function () {
            $navHide.stop().slideUp();
        });
        $navHide.hover(function () {
            $(this).stop().slideDown(200);
        }, function () {
            $(this).stop().slideUp();
        });

    }
)();

/*nav-search*/
(
    function () {
        var $input = $('#nav .n-search .n-s-input input');
        var $search = $('#nav .n-search');
        var $hide = $('#nav .n-search .n-s-input .hide');
        var $tip = $('#nav .n-search .n-s-input a.tip');
        //$input.focus(function () {
        //    $search.addClass('focus');
        //}).blur(function () {
        //    $search.removeClass('focus');
        //});
        //简化 on()添加多个事件处理程序。toggleClass-切换  ,fadeToggle-显示切换
        $input.on('focus blur', function () {
            $search.toggleClass('focus');
            $hide.fadeToggle(100);
            $tip.fadeToggle(200);
        })
    }
)();

/*hide-nav*/
(
    function(){
        var $info = $('#hide .b-nav .firstLi .info');
        var $firstLi = $('#hide .b-nav .firstLi');
        $info.each(function(){
            var $li =  $(this).find("li");
            var length = $li.length;
            var width = $li.width();
            var height = $li.height();
            var col = Math.ceil( length / 6);  //显示几列    6行li
            $(this).width( col*width );    //每个的.info的宽度
            $li.each(function(i){           //每个li排列
                var x = Math.floor(i/6);      //
                var y = i % 6;      // 余数，  1%6 = 1 ； 2%6= 2；
                $(this).css({
                    left: x*width+ "px",
                    top: y*height+ "px"
                });
            })
        });
        $firstLi.hover(function(){
            $(this).find('.info').show();
        },function(){
            $(this).find('.info').hide();
        });
        var $classification = $('#nav .n-main li.classification');
        var $navigation = $('#hide');
        $classification.hover(function(){
            $navigation.show();
        },function(){
            $navigation.hide();
        });
        $navigation.hover(function(){
            $(this).show();
        },function(){
            $(this).hide();
        })
    }
)();