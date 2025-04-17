// テキスト要素
const textElement = document.getElementById('text');
// クリック時のイベント
const eventOnclick = () => {
    // テキストの内容を変更
    textElement.textContent = "ボタンをクリックしました";
}
// ボタンへイベントを設定
const btn = document.getElementById('btn');
btn.addEventListener('click', eventOnclick);