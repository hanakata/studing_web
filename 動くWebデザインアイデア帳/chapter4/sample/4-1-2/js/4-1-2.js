//テキストのカウントアップの設定
var bar = new ProgressBar.Line(splash_text, {//id名を指定
    easing: 'easeInOut',
    strokeWidth: 0.2,//進捗ゲージの太さ
    duration: 1000,//時間指定(1000＝1秒)
    trailWidth: 0.2,//線の太さ
    color: '#555',
    trailColor:'#bbb',
    text: {//テキストの形状を直接指定 
      style: {//天地中央に配置
        position:'absolute',
        left:'50%',
        top:'50%',
        padding:'0',
        margin:'-30px 0 0 0',
        transform:'translate(-50%,-50%)',
        'font-size':'1rem',
        color:'#fff',
      },
      autoStyleContainer: false //自動付与のスタイルを切る
    },
    step: function(state, bar) {
      bar.setText(Math.round(bar.value() * 100) + ' %'); //テキストの数値
    }
  });
  
  //アニメーションスタート
  bar.animate(1.0, function () {//バーを描画する割合を指定します 1.0 なら100%まで描画します
    $("#splash").delay(500).fadeOut(800);//アニメーションが終わったら#splashエリアをフェードアウト
  }); 