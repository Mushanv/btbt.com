			var box = document.getElementsByClassName("box_big")[0];
			var spot = document.getElementsByClassName("spot_list");
			var block = document.getElementsByClassName("main-lun")[0];
			var btn_left = document.getElementsByClassName("btn_left")[0];
			var btn_right = document.getElementsByClassName("btn_right")[0];
			
			var time = null;
			spot[0].style.background= "rgba(91,91,91,0.7)";
			var count = 0;//轮播下面的数字
			showTime();
			
			//鼠标进入时停止计时
			block.onmouseenter = function(){
				clearInterval(time);//清除循环
				
				
			}
			//鼠标出来时计时器打卡
			block.onmouseleave = function(){
				showTime();
				
			}
			//点击事件
			for(var i = 0;i<spot.length;i++){
				spot[i].index = i;
				spot[i].onmouseenter = function(){
					spot[count].style.background = "rgba(255,255,255,0.3)";
					this.style.background = "rgba(91,91,91,0.7)";
					count = this.index;
					box.style.marginLeft = (count*-1499+"px");
					
				}
			}
			
			//轮播图左侧
			btn_right.onclick = function(){
				mate();
				
			}
			//右侧
			btn_left.onclick = function(){
				spot[count].style.background = "rgba(255,255,255,0.3)";
				count--;
				if(count<0){
					box.className = "box_big";
					count = box.children.length -1;
					box.style.marginLeft = "-4497px";
				}
				setTimeout(function(){
					box.className = "box_big nav";
					box.style.marginLeft = (-1349*count)+"px";
					spot[count].style.background="rgba(91,91,91,0.7)";
					
				},2000)
			}
			//计时器
			function showTime(){
				time = setInterval(function(){
					mate();
					
				},2000)
				
			}
			
			function mate(){
				box.className = "box_big nav";
				spot[count].style.background="rgba(255,255,255,0.3)";
				count++;
				spot[count>box.children.length-1?0:count].style.background="rgba(91,91,91,0.7)";
				box.style.marginLeft=(count*-1449)+"px";
				setTimeout(function(){
					if(count>box.children.length-1){
						count = 0;
						box.className = "box_big";
						box.style.marginLeft = "0px";
						
						
					}
				},2000)
				
				
			}