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
            //    siblings()-ͬ��Ԫ��
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
        //�� on()��Ӷ���¼��������toggleClass-�л�  ,fadeToggle-��ʾ�л�
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
            var col = Math.ceil( length / 6);  //��ʾ����    6��li
            $(this).width( col*width );    //ÿ����.info�Ŀ��
            $li.each(function(i){           //ÿ��li����
                var x = Math.floor(i/6);      //
                var y = i % 6;      // ������  1%6 = 1 �� 2%6= 2��
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