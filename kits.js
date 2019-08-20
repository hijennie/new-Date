
var kits = {};
//获取随机数
kits.getRandom = function(n,m){
    let random = Math.floor(Math.random() * (m + 1 - n) + n);
    return random;
}

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

//获取随机rgb