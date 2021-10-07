/* (PC・モバイル版共通)
 * ナビゲーションメニュー第2階層
--------------------------------- */
$(function(){
    $(".menu-item").mouseover(function(){
        /* ナビゲーションメニューを開く */
        $(this).children(".sub-menu").stop().slideDown(200);
    });
    $(".menu-item").mouseout(function(){
        /* ナビゲーションメニューを閉める */
        $(".sub-menu").stop().slideUp(50);  /* 50以下にすると閉めるときにちらつく */
    });
});

/* slideToggleで記載した場合 -> メニューの開閉速度が同じになるので今回は使用しない */
// $(function(){
//     $(".menu-item").hover(function(){
//         $(this).children(".sub-menu").stop().slideToggle(200);
//     });
// });

/* (PC版)
 * ナビゲーションメニューを上部に固定
--------------------------------- */
$(window).resize(function(){
    /* 現在のwindow幅を取得 */
    var curWidth = $(window).width();
    var desktopWidth = 1184;    /* PC版の横幅の境界値 */

    if (desktopWidth <= curWidth) {
        /* PC版の横幅だったら、モバイル版で付与していたopen/closeクラスを削除 */
        $('.Nav_body').addClass("close").removeClass('close');
        if($(".Nav_body").css("display")=="none"){
            $(".Nav_body").css({
                'display':  'block' 
            });
        }
    }else{
        /*  モバイル版の横幅 かつ ウィンドウサイズ変更時は一度メニューを閉じる
            クリックの処理は開閉処理で実施 */
        $(".Nav_btn a").removeClass("open").addClass("close");
        $(".Nav_body").addClass("close").removeClass("open").slideUp("fast");
        $(".Nav_body li.menu-item-has-children").removeClass("open").addClass("close");
        $(".Nav ul.sub-menu").slideUp("fast").removeClass("open").addClass("close");
        $(this).addClass("close").removeClass("open").html("<span>メニューを開く</span>");
    }
});


/* (モバイル版)
 * ナビゲーションメニュー第2階層
 * 開閉処理
--------------------------------- */
$(function(){
    $(".Nav_btn a").click(function(){
        if($(".Nav_body").css("display")=="none"){
            $(".Nav_body").addClass("open").removeClass("close").slideDown("fast");
            $(this).removeClass("close").addClass("open").html("<span>メニューを閉じる</span>");
        }else{
            $(".Nav_body").addClass("close").removeClass("open").slideUp("fast");
            $(".Nav_body li.menu-item-has-children").removeClass("open").addClass("close");
            $(".Nav ul.sub-menu").slideUp("fast").removeClass("open").addClass("close");
            $(this).addClass("close").removeClass("open").html("<span>メニューを開く</span>");
        }
    });
});

/* (モバイル版)
 * ナビゲーションメニュー第2階層
 * 開閉時の「+」⇔「-」表示処理
--------------------------------- */
$(function(){
    $(".Nav_body li.menu-item-has-children").each(function(){
        var submenu=$(this).find("ul.sub-menu");
        var allsubmenu=$(".Nav ul.sub-menu");
        var allbtn=$(".Nav_body li.menu-item-has-children");
        $(this).addClass("close");$(submenu).addClass("close");
        $(this).hover(function(){
            if($(this).hasClass("open")){
                $(this).removeClass("open").addClass("close");
                $(submenu).hide().removeClass("open").addClass("close");
            }else{
                $(allsubmenu).hide().removeClass("open").addClass("close");
                $(allbtn).removeClass("open").addClass("close");$(submenu).slideDown("fast").removeClass("close").addClass("open");
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

    $('.ToHead_layer2').css(
        'transform', 'translateY(' + scrollTop + 'px)'
    );
});
