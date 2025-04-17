// クリックされたか
let clicked = false;

// テキスト要素
const textElement = document.getElementById('text');
// クリック時のイベント
const eventOnclick = () => {
    // 一度もクリックされていない場合
    if (clicked == false) {
        // 2秒後にテキストの内容を変更
        setTimeout(() => {
            textElement.textContent = "ボタンをクリックしました";
        }, 2000);
        
        // クリックしたことを記録
        clicked = true;
    }
}

// ボタンへイベントを設定
const btn = document.getElementById('btn');
btn.addEventListener('click', eventOnclick);