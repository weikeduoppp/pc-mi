/**
 * Created by Administrator on 2017/1/3 0003.
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
            })
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

/*banner-main*/
    (
        function(){
            var $pic = $('#banner .b-main .b-m-pic li');
            var $tab = $('#banner .b-main .b-m-tab li');
            var $btn = $('#banner .b-main .b-m-btn .btn')
            var length = $pic.length;
            var index = 0;

            $pic.eq(0).show();
            $tab.eq(0).addClass("on");

            $tab.click(function(){
                if( index != $(this).index() ){  //���˵������
                    $pic.eq(index).fadeOut();  //��ǰͼƬ��ʧ
                    $tab.eq(index).removeClass("on");  //��ǰ��ť��ʽ��ʧ
                    index = $(this).index();
                    $pic.eq(index).fadeIn();
                    $tab.eq(index).addClass("on");
                }
            });

            $btn.click(function(){
                var i = $(this).index();   // 0||1  ����
                $pic.eq(index).fadeOut();
                $tab.eq(index).removeClass("on");
                if( i ){
                    index++;
                    index%=length;  //��ͬ ����index=lengthʱ ��index = 0 ;
                }else{
                    index--;
                    if(index<0)index=length-1;
                }
                $pic.eq(index).fadeIn();
                $tab.eq(index).addClass("on");
            })
        }
    )();

/*banner-nav*/
    (
        function(){
            var $info = $('#banner .b-nav .firstLi .info');
            var $firstLi = $('#banner .b-nav .firstLi');
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
            })
        }
    )();

/* star */

    (
        function(){
            var $btn = $('#star .s_btn span');
            var $ul = $('#star .s-show');
            var index = false;
            var timer = null;
            $btn.click(function(){
                var i = $(this).index();
                if(!!i!=index){ //!!һ������������ı��ʽǿ��ת��Ϊ�������͵����ݣ�boolean����Ҳ����ֻ����true����false;
                    clearInterval(timer);
                    index = !!i;   //ת�� true����false;
                    $(this).removeClass('able').siblings().addClass('able');
                    $ul.stop().animate({
                        marginLeft: -i*1226 + "px"
                    },500);
                    auto();
                }
            });
            auto();
            function auto(){
                timer = setInterval(function(){
                    index = !index;
                    var x = index-0;   //���� ʹindex=0||1
                    $btn.eq(x).removeClass('able').siblings().addClass('able');
                    $ul.stop().animate({
                        marginLeft: -x*1226 + "px"
                    },500);
                },5000)
            }

        }
    )();

/* match */
(function(){
    var $tab = $('#match .m_title ul li');
    var $ul = $('#match .m_c_right ul');
    var $li = $ul.find('li');
    $tab.eq(0).addClass("hover");
    $ul.eq(0).show().siblings().hide();
    $tab.mouseenter(function(){
        $(this).addClass("hover").siblings().removeClass('hover');
        $ul.eq($(this).index()).show().siblings().hide();
    });
    $li.hover(function(){
        $(this).find('.comments').stop().animate({
            bottom:0
        },200)
    },function(){
        $(this).find('.comments').stop().animate({
            bottom:-75+"px"
        },200)
    })
})();

/*neirong*/
    (
        function(){
            var $li1 = $('#neirong li.li1');
            var li1Width = $li1.width();
            var $link = $('#neirong li.li2 p.link a');
            var clickTime = 0;
            $li1.hover(function(){
                $(this).find('.btn div').stop().fadeIn(200);
            },function(){
                $(this).find('.btn div').stop().fadeOut(200);
            }).each( function(){
                var $tabLi = $(this).find(".tab li");
                var index = 0;
                var $btn = $(this).find('.btn div');
                $tabLi.eq(0).addClass("on").siblings().removeClass("on");
                $tabLi.click(function(){
                    $(this).addClass("on").siblings().removeClass("on");
                    index = $(this).index();
                    $(this).parents("li.li1").find('ul.ul2').stop().animate({marginLeft:-index*li1Width+"px"},300)
                });
                $btn.click(function(){
                    if( new Date()-clickTime>=300 ){
                        clickTime = new Date();
                        $(this).index()?index++:index--;
                        index = Math.min(index,$tabLi.length-1);
                        index = Math.max(index,0);
                        $tabLi.eq(index).addClass("on").siblings().removeClass("on");
                        $(this).parents("li.li1").find('ul.ul2').stop().animate({marginLeft:-index*li1Width+"px"},300);
                        //index��СΪ0 �����Ϊ$tabLi.length-1;
                    }
                }).each(function(){   //��ť�� >< ����ѡ��
                    this.onselectstart = function(){return false};
                });
            } );
            $link.each(function(){
                var color = $(this).parents("li.li1").css('border-top-color');
                $(this).css({
                    borderColor : color,
                    color : color
                }).hover(function(){
                    $(this).css({
                        backgroundColor : color,
                        color : "#fff"
                    })
                },function(){
                    $(this).css({
                        backgroundColor : "#fff",
                        borderColor : color,
                        color : color
                    })
                })
            })
    })();

/*vedio*/
    (
        function(){
            var $play = $('#video .v_content ul li a.img');
            var $cover = $("#video .v_cover");
            $play.click(function(){
                $cover.fadeIn(100);
                $cover.append(
                    '<div class="main">'+
                    '<div class="m_title">'+ $(this).siblings('.title').html() +'<span class="close"> x </span></div>'+
                    '<div class="play">'+
                    '<embed src="http://player.video.qiyi.com/67089aea6e02f74444e51af14f7aca7f/0/0/w_19rqpqie4d.swf-albumId=1803006609-tvId=1803006609-isPurchase=0-cnId=21" allowFullScreen="true" quality="high" width="800" height="540" align="middle" allowScriptAccess="always" type="application/x-shockwave-flash"></embed>'+
                    '</div>'+
                    '</div>'
                );
                $cover.find('.main').css({marginTop:"-600px",opacity:'0'}).stop().animate({
                    marginTop: '-300px',
                    opacity: 1
                })
            });
            $cover.on('click','span.close',function(){
                $(this).parents('.main').animate({
                    marginTop: "-600px"
                },200,function(){
                    $(this).fadeOut(100);
                    $cover.fadeOut(100);
                })
            })
    })();