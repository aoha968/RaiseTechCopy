/* (共通)
 * windowサイズ変更処理
--------------------------------- */
$(window).resize(function(){
	var windowWidth=window.innerWidth;
	var point=1200;
	var timer=false;
	if(timer!==false){
		clearTimeout(timer);
	}
	timer=setTimeout(function(){
		if(windowWidth<=point){
			$("body").addClass("spn").removeClass("pc");
			$(".Nav__body").addClass("close").removeClass("open").slideUp("fast");
			$(".Nav__btn a").addClass("close").removeClass("open").html("<span>メニューを開く</span>");
			$(".Nav__body li.menu-item-has-children").removeClass("open").addClass("close");
			$(".Nav ul.sub-menu").slideUp("fast").removeClass("open").addClass("close");
		}else{
			$("body").addClass("pc").removeClass("spn");
			$(".Nav__body").removeClass("open close").css("display","block");
			$(".Nav__btn a").removeClass("open close").html("<span>メニューを閉じる</span>");
			$(".Nav__body li.menu-item-has-children").removeClass("open").addClass("close");
			$(".Nav ul.sub-menu").slideUp("fast").removeClass("open").addClass("close");
		}
	},50);
});

/* (PC版)
 * ナビゲーションメニュー第1階層
 * hover処理
--------------------------------- */
$(window).on('load',function(){
	var w = window.innerWidth;
    var point = 1200;
	if(w <= point){
		$("body").addClass("spn").removeClass("pc");
		$(".Nav__btn a").addClass("close").removeClass("open").html("<span>メニューを開く</span>");
	}else{
		$("body").addClass("pc").removeClass("spn");
		$(".Nav__btn a").removeClass("open close").html("<span>メニューを閉じる</span>");
	}
});

/* (モバイル版)
 * ナビゲーションメニュー第1階層
 * 開閉処理(三 ⇔ ✕)
--------------------------------- */
$(function(){
	$(".Nav__btn a").click(function(){
		if($(".Nav__body").css("display")=="none"){
			$(".Nav__body").addClass("open").removeClass("close").slideDown("fast");
			$(this).removeClass("close").addClass("open").html("<span>メニューを閉じる</span>");
		}else{
			$(".Nav__body").addClass("close").removeClass("open").slideUp("fast");
			$(".Nav__body li.menu-item-has-children").removeClass("open").addClass("close");
			$(".Nav ul.sub-menu").slideUp("fast").removeClass("open").addClass("close");
			$(this).addClass("close").removeClass("open").html("<span>メニューを開く</span>");
		}
	});
});

/* (モバイル版)
 * ナビゲーションメニュー第2階層
 * hover処理
--------------------------------- */
$(function(){
	$(".Nav__body li.menu-item-has-children").each(function(){
		var submenu=$(this).find("ul.sub-menu");
		var allsubmenu=$(".Nav ul.sub-menu");
		var allbtn=$(".Nav__body li.menu-item-has-children");
		$(this).addClass("close");
		$(submenu).addClass("close");
		$(this).hover(function(){
			if($(this).hasClass("open")){
				$(this).removeClass("open").addClass("close");
				$(submenu).hide().removeClass("open").addClass("close");
			}else{
				$(allsubmenu).hide().removeClass("open").addClass("close");
				$(allbtn).removeClass("open").addClass("close");
				$(submenu).slideDown("fast").removeClass("close").addClass("open");
				$(this).removeClass("close").addClass("open");
			}
		});
	});
});

/* (PC・モバイル版共通)
 * 背景のパララックス効果
--------------------------------- */
$(window).on('scroll', function(){
    var scrollTop = $(this).scrollTop(); /* スクロール量観測 */
    scrollTop = scrollTop / 5;           /* 除算する値が大きいほど移動量が小さくなる */

    $('.TopHead__layer2').css(
        'transform', 'translateY(' + scrollTop + 'px)'
    );
});


/* Headerにクラスの付与/解除(未使用)
--------------------------------- */
// $(window).on("scroll",function(){
// 	var scroll=$(window).scrollTop();
// 	if(scroll>0){$('.Header').addClass('is_fixed');
// 	}else{
// 		$('.Header').removeClass('is_fixed');
// 	}
// });