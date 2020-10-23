//loadされたときにfadeoutクラス(透明にする)を適用外にする
$(window).on('load', function() {
    $('body').removeClass('fadeout');
});