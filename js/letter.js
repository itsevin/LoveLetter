// 用户设备判断，重定向手机用户到新页面
if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
  window.location.href = "mobile.html";
}

window.addEventListener('DOMContentLoaded', function () {
  alert('请按 F11 或 Fn + F11 进入全屏模式');
});

let heart = document.querySelector('.heart');
let card = document.querySelector('.card');
let box = document.querySelector('#box');

heart.addEventListener('click', function () {
  card.setAttribute("style", "opacity:0");
  let x = document.createElement("audio");
  x.setAttribute("src", "mp3/music.mp3");
  x.setAttribute("autoplay", "autoplay");
  x.setAttribute("loop", "loop");

  // 打字效果
  fetch('letter.json')
    .then(response => response.json())
    .then(data => {
      let str = data.text;
      let strp = '';
      let i = 0;

      function print() {
        if (str[i] === '\n') {
          document.getElementById("box").innerHTML = strp + "<br><br>|";
          strp += "<br><br>";
        } else {
          strp += str[i];
          box.innerHTML = strp + '|';
        }
        i++;
      }

      let printid = setInterval(() => {
        print();
        if (i === str.length)
          clearInterval(printid);
      }, 190);

      // 在文字打印完毕后执行跳转
      setTimeout(() => {
        let link = document.createElement('a');
        link.href = "http://gd.people.com.cn/n2/2023/1002/c123932-40592117.html";
        link.target = "_blank";
        link.click();
      }, (str.length + 1) * 190 + 5000); // 将延时设置为文字打印完成后的时间
    })
    .catch(error => {
      console.error('Error:', error);
    });

  // 背景出现
  function appearBackground() {
    setTimeout(() => {
      box.style.opacity = 1;
    }, 1500);
  }

  appearBackground();
});