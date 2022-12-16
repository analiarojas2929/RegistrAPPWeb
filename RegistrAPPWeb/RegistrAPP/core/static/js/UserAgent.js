//var browserName = (function (agent) {        switch (true) {
//    case agent.indexOf("edge") > -1: return "MS Edge";
  //  case agent.indexOf("edg/") > -1: return "Edge ( chromium based)";
    //case agent.indexOf("opr") > -1 && !!window.opr: return "Opera";
 //   case agent.indexOf("chrome") > -1 && !!window.chrome: return "Chrome";
   // case agent.indexOf("trident") > -1: return "MS IE";
    //case agent.indexOf("firefox") > -1: return "Mozilla Firefox";
    //case agent.indexOf("safari") > -1: return "Safari";
    //default: return "other";
//}
//})(window.navigator.userAgent.toLowerCase());

//document.querySelector("h1").innerText="You are using "+ browserName +" browser"; 

let navegador = navigator.userAgent;
        if (navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/BlackBerry/i) || navigator.userAgent.match(/Windows Phone/i) || window.innerWidth <= 780) {
            alert("Toma Pop-Up, por entrar con un dispositivo móvil");
       } else {
          alert("No estás usando un móvil");
     }

       //let navegador = navigator.userAgent;
        //if (navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/BlackBerry/i) || navigator.userAgent.match(/Windows Phone/i)) {
          //  console.log("Estás usando un dispositivo móvil!!");
        //} else {
          //  console.log("No estás usando un móvil");
        //}