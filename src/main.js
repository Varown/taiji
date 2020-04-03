let demo = document.querySelector("#demo");
let style = document.querySelector("#demo1");
let string = `/*您好，我是一名前端工程师
*下面我要开始展示我的技术了
*首先我要准备一个div
**/
#div1{
  border:1px solid red;
  width:400px;
  height:400px;
}
/*接下来我会把div变成一个八卦图
*注意看好了
*首先把div变成一个圆圈
**/
#div1{
    position: relative;
    border-radius: 50%;
    box-shadow:0 0 3px rgba(0,0,0,0.5);
    border:none;
  }
  /*八卦是阴阳图
  */

 #div1{
    background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);
    
  }
/*魔丸就要诞生了，战斗吧
*/
#div1{
  animation: 5s linear infinite  circle;
}
@keyframes circle{
  from{
      transform : rotate(0deg);
  }
  to{
      transform : rotate(360deg);
  }
}
#div1::before{
    top:0;
    left:25%;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 50%);
}
#div1::after{
    bottom: 0px;
    left:25%;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 50%, rgba(255,255,255,1) 50%);
} 
   
`;
let n = 0;
//string = string.replace(/\n/g, "<br>");
let string2 = "";

let step = () => {
  if (string[n] === "\n") {
    string2 += "<br>";
  } else if (string[n] === " ") {
    string2 += "&nbsp";
  } else {
    string2 += string[n];
  }

  demo.innerHTML = string2;
  style.innerHTML = string.substring(0, n);
  window.scrollTo(0, 99999);
  demo.scrollTo(0, 99999);
  n = n + 1;
  if (n < string.length) {
    setTimeout(() => {
      step();
    }, 20);
  }
};

step();
