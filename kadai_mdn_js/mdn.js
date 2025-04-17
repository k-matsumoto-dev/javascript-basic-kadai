// 現在のタイムスタンプを取得
const now = new Date(); // 引数なし -> インスタンス化時点の日付と時刻
console.log(now.value);

// 年月日を取得
const year = now.getFullYear();
const month = now.getMonth() + 1;   // 0 ~ 11 -> 1 ~ 12
const date = now.getDate();         // 1 ~ 31

// 年月日を出力
console.log(year + '年' + month + '月' + date + '日');

// Date - JavaScript | MDN https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Date