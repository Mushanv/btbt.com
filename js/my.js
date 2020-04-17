$(function(){	
	//自动播放
	var num = 0;
	var timer = null;
	function gogogo(){	
		timer = setInterval(function(){	
			youqie()
		},2000);
	};
	gogogo();
	
	//点击角标切换图片
	
		//角标鼠标移上图片切换，给当前加类名，兄弟们除类名
	$('.banner ol li').click(function(e) {
		var index = $(this).index();
		num = index;
		fllow()
	});
	
	//整体鼠标移上，清除动画，让左右按钮显示 鼠标移出，自动播放，让左右按钮隐藏
	//鼠标移上所有身上清除自动播放动画
	$('.banner').hover(function(e) {
		clearInterval(timer);
		$('.banner span').show();
    },function(){	
		$('.banner span').hide();
		clearInterval(timer);
		gogogo()
	});
	
	
	//左右点击切换图片
		//右切换
	$('.right').click(function(e) {
        youqie()
    });
		//左切换
	$('.left').click(function(e) {
        num--;
		if(num<0){num = 3}
		fllow()
    });
	
	
	function youqie(){	
		num++;
		if(num>3){num=0;}
		fllow()
	}
	
	function fllow(){	
		$('.banner ul li').eq(num).fadeIn().siblings().hide();
		$('.banner ol li').eq(num).addClass('current').siblings().removeClass();
	}

        		var num01=0;
        		var timer01;
        		function gogo(){
	        		timer01=setInterval(function(){
	        			num01=num01+1;
	        			if(num01>4){
	        				num01=0;
	        			}
	        			$('.f_main .right ul').css('left', -952*num01 +'px');
                        $('.f_main .right ol li').eq(num01).addClass('current').siblings('').removeClass('current');

	        		},2000);
                    
        		}
        		gogo();
        		// 鼠标移入移出控制定时器的开始和暂停
        		$('.f_main .right').hover(function() {
        			clearInterval(timer01)
        		}, function() {
        			gogo();
        		});

                // 点击索引的时候
                $('.f_main .right ol li').click(function(event) {
                    var suoyin=$(this).index();
                    num01=suoyin;
                    // 把点击的值传递给num01,让轮播和点击链接起来。
                    $('.f_main .right ul').css('left', -952*suoyin +'px');
                    $(this).addClass('current');
                    $(this).siblings('').removeClass('current');
                });
	
});



var indexa = ['images/1.jpg','images/2.jpg','images/3.jpg','images/4.jpg','images/5.jpg']
var i = 0;
var b;
function lunhuan(){
	if(i>4){
		i = 0;
	}
	b = document.getElementById('asd');
	b.src = indexa[i]
	i++;
    setTimeout("lunhuan()",1000)
}


         //    $(function(){
        	// 	$('.prolist li').mouseover(function(event) {
        	// 		$(this).children('.shade').stop().fadeIn(500)
        	// 		$(this).css('border-color', '#ff6700');
         //            $(this).children().children('img').stop().fadeTo(500,0.6)
        	// 	});
        	// 	$('.prolist li').mouseout(function(event) {
        	// 		$(this).children('.shade').stop().fadeOut(500)
        	// 		$(this).children().children('img').stop().fadeTo(500,1)
        	// 		$(this).css('border-color', '#fff');
        	// 	});
        	// })