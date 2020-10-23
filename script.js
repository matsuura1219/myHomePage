//.getElementsByTagNameでは数に指定したタグ名を持つ全ての要素のノードの集合(NodeList)を返す
//bodyタグは1つしか存在しないがNodeListで返却されるため、要素番号に0を指定する
//var body = document.getElementsByTagName("body")[0];

/*アニメーションの時間*/
const animationTime = 500;
/*画面遷移にかかる時間*/
const moveTime = 600;
//最初に表示される画面をタッチしたかどうかを判別するフラグ
var displayMainScreen = true;

//closeのテキストを非表示にする
$("#close").hide();

//最初、選択ボタンは非表示にする
$(".map").hide();

//window.onclickを作動させるかどうかのフラグ
var touchButton = false;

//body部分をクリックしたときに呼ばれる関数
window.onclick = function() {

    if (!touchButton) {

        if (displayMainScreen) {
            displayMainScreen = false;
            //最初の画面が表示されているとき
            //700msで選択ボタンをフェードインさせる
            $('.map').fadeIn(animationTime);
            //スライドショーを非表示にする
            $.backstretch("destroy");
            //button.innerHTML = "Close";
            $("#menu").fadeOut(animationTime);
            $("#close").fadeIn(animationTime);


        } else {
            displayMainScreen = true;
            //選択ボタンを隠す
            //700msで選択ボタンをフェードアウトさせる
            $('.map').fadeOut(animationTime);
            //スライドショーを表示する
            animationImg();
            //button.innerHTML = "Menu";
            $("#menu").fadeIn(animationTime);
            $("#close").fadeOut(animationTime);

        }

        touchButton = false;
    }
}

//文字にアニメーションをつけるメソッド
function animationText() {

    ityped.init(document.querySelector("#ityped"), {
        //strings: ['Hello World!!  ', 'Welcome to my memorandum!'], //表示させたい文字の設定 区切りはカンマ 
        strings: ['Hello Everyone', 'Welcome to' + '\n' + 'My Website'], //表示させたい文字の設定 区切りはカンマ 
        startDelay: 200, //アニメーション開始までの遅延、大きいほど遅れる
        typeSpeed: 100, //表示させるスピード、大きいほどゆっくり
        loop: false, //ループ
        backSpeed: 80, //戻るスピード
        backDelay: 150, //戻る時間指定
        showCursor: false, //カーソル表示
        //cursorChar: "|", //カーソルとして表示するテキスト
    })

}

//背景画像を画面全体に表示させ、スライドショーを表示するメソッド
function animationImg() {

    $.backstretch([
        "img/uww2019.JPG",
        "img/a.JPG"
    ], {
        duration: 2000,
        fade: 1000
    });
}

//loadされたときに呼び出すメソッド
window.onload = animationText();
window.onload = animationImg();
//loadされたときにfadeoutクラス(透明にする)を適用外にする
$(window).on('load', function() {
    $('body').removeClass('fadeout');
});

//storyのdiv
var story = document.getElementById("story");
var introduction = document.getElementById("introduction");


story.onclick = function() {

    touchButton = true;

    //bodyにfadeoutクラス(非透明にする)を適用
    $('body').addClass('fadeout');

    setTimeout(function() {
        window.location = "story.html"; // 0.8秒後に取得したURLに遷移
    }, moveTime);
}


introduction.onclick = function() {

    window.location.href = "introduction.html";

}