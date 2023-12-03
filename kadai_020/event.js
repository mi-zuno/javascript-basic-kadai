const button = document.getElementById("btn");

const textChange = () => {
  const clickBtn = (document.getElementById("text").innerText =
    "ボタンをクリックしました");
};

button.addEventListener("click", textChange);
