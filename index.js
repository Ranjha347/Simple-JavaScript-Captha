let fonts = ["cursive", "sans-serif", "serif", "monospace"];
let captcha_value = "";
let span = document.getElementById("span");
let input = document.getElementById("input");
let btn = document.getElementById("btn");
let btn2 = document.getElementById("btn2");


function generateCaptcha() {
          let value = btoa(Math.random() * 1000000000);
          value = value.substr(0, 5 + Math.random() * 3);
          captchaValue = value;
          // console.log(value)
};

function setCaptcha() {
          let html = captchaValue.split("").map((char) => {
                    let rotate = -20 + Math.trunc(Math.random() * 30)
                    let font = Math.trunc(Math.random() * fonts.length);
                    return `<span style="transform:rotate(${rotate}deg);font-family:${fonts[font]}">
                                                  
                                                  ${char}
                                                  
                                                  </span>`
          }).join("");
          span.innerHTML = html;
}
btn.addEventListener('click', function (e) {
          generateCaptcha();
          setCaptcha();
})
generateCaptcha();
setCaptcha();


btn2.addEventListener('click', function (e) {
          if (input.value === captchaValue) {
                    console.log('ok');
          } else {
                    console.log('wrong captcha');
          }
})