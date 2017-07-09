/**
 * Created by Administrator on 2017/1/7 0007.
 */
/**
 * Created by Administrator on 2017/1/6 0006.
 */
/*header*/
(
    function(){
        var $home = $('#header .h-main .h-logo');
        var $userA = $('#header .h-right ul.user li a');
        var $ul = $('#header ul.user li ul.hide');
        $home.hover(function(){
            $(this).stop().animate({
                backgroundPosition: 0
            },200)
        },function(){
            $(this).stop().animate({
                backgroundPosition: 0 -50+"px"
            },200)
        });
        $userA.hover(function(){
            $ul.stop().slideDown(200);
        },function(){
            $ul.stop().slideUp(200);
        });
        $ul.hover(function(){
            $(this).stop().slideDown(200);
        },function(){
            $(this).stop().slideUp(200);
        })
    }
)();

/*content*/
(
    function(){
        var $color = $('#content .r-content .choose');
        var $capacity = $('#content .r-content .capacity');
        var $li = $('#content .i-c-left ul li');
        var i = 0;
        $li.eq(0).show().siblings().hide();
        $capacity.eq(0).addClass('on');
        $color.click(function(){
            if(i != $(this).index()-4){
                $(this).addClass('on').siblings().removeClass('on');
                i = $(this).index()-4;
                $li.eq(i).show().siblings().hide();
                $capacity.eq(0).addClass('on');
            }
        })
    }
)();

/*full*/

(
    function(){
        $(window).scroll(function(){   /*¹öÂÖÊÂ¼þ*/
            var T = $('#full .f-note').offset().top - $(this).scrollTop() < 0;
            var $fixed = $("#full .f-nav");
            if( T ){
                $fixed.addClass('on');
            }else{
                $fixed.removeClass('on');
            }
        });

    }
)();

/*full-true-nav*/
(
    function(){
        var $tab = $('#full .f-n-tab li');
        var $pic = $('#full .f-true-nav .f-n-pic li');
        var $btnLeft = $("#full .f-n-btn.left ");
        var $btnRight = $("#full .f-n-btn.right ");
        var index = 0;
        var timer = null;
        var length = $tab.length;
        var $Clear = $('#full .f-true-nav');
        $tab.click(function(){
            $(this).addClass('on').siblings().removeClass('on');
            index = $(this).index();
            $pic.eq(index).fadeIn().siblings().fadeOut();
        });
        $btnLeft.click(function(){
            index--;
            if(index<0)index=length-1;
            implement();
        });
        $btnRight.click(function(){
            index++;
            index%=length;
            implement();
        });
        auto();
        function auto(){
            timer = setInterval(function(){
                index++;
                index%=length;
                implement();
            },3000)
        }
        function implement(){
            $tab.eq(index).addClass('on').siblings().removeClass('on');
            $pic.eq(index).fadeIn().siblings().fadeOut();
        }
        $Clear.hover(function(){
            clearInterval(timer);
        },auto)
    }
)();