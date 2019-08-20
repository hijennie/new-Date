
var kits = {};


//获取当前日期
kits.getTime = function(){

        let date = new Date();
        let year = date.getFullYear();
        let month = date.getMonth() + 1;
        month = month < 10 ? '0' + month : month;
        let day = date.getDate();
        day = day < 10 ? '0' + day : day;
        let hours = date.getHours();
        hours = hours < 10 ? '0' + hours : hours;
        let minutes = date.getMinutes();
        minutes = minutes < 10 ? '0' + minutes : minutes;
        let second = date.getSeconds();
        second = second < 10 ? '0' + second : second;
    
        return year + '-' + month + '-' + day + ' ' + hours + ':' + minutes + ':' + second;
        
}


//获取随机数
kits.getRandom = function(n,m){
    let random = Math.floor(Math.random() * (m + 1 - n) + n);
    return random;
}



//获取随机rgb
kits.getRandomRgb = function(){
    function getrandom(n,m){
        var random = Math.floor(Math.random() * (m + 1 - n) + n);
        return random;
       }
       var r = getrandom(0,255);
       var g = getrandom(0,255);
       var b = getrandom(0,255);
       return 'rgb(' + r + ',' + g + ',' + b + ')';
}


// 封装一个十六进制的随机颜色
kits.getColor =function(){
    //定义字符串变量colorValue存放可以构成十六进制颜色值的值
    var colorValue="0,1,2,3,4,5,6,7,8,9,a,b,c,d,e,f";
    //以","为分隔符，将colorValue字符串分割为字符数组["0","1",...,"f"]
    var colorArray = colorValue.split(",");
     var color="#";//定义一个存放十六进制颜色值的字符串变量，先将#存放进去
      //使用for循环语句生成剩余的六位十六进制值
     for(var i=0;i<6;i++){
          //colorArray[Math.floor(Math.random()*16)]随机取出
         // 由16个元素组成的colorArray的某一个值，然后将其加在color中，
         //字符串相加后，得出的仍是字符串
          color += colorArray[Math.floor(Math.random()*16)];
     }
     return color;
  }