// jsを記述する際はここに記載していく
//マウスストーカー用のdivを取得
const stalker = document.getElementById("mouse-stalker");

//上記のdivタグをマウスに追従させる処理
document.addEventListener("mousemove", function (e) {
  stalker.style.transform =
    "translate(" + e.clientX + "px, " + e.clientY + "px)";
});
// 参考　https://codepen.io/ddryo-the-encoder/pen/BaBYZdW

const buttondesign1 = document.getElementById("buttondesign1");

buttondesign1.addEventListener("click", () => {
  alert(
    "セカイを変えるチーズを作ろう！\nチーズ職人養成学校「チーズアカデミーTOKYO」が待っています！"
  );
});

const buttondesign2 = document.getElementById("buttondesign2");

buttondesign2.addEventListener("click", () => {
  alert(
    "お申し込みありがとうございました！\n３営業日以内にご連絡させていただきます。\n緊急連絡先：dummy@cheeseacademy.tokyo"
  );
});
