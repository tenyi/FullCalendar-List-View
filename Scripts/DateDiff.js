Date.prototype.dateDiff = function(interval, objDate) {
    //若參數不足或 objDate 不是日期物件則回傳 undefined
    if (arguments.length < 2 || objDate.constructor != Date) return undefined;
    switch (interval) {
        //計算秒差 
        case "s": return parseInt((objDate - this) / 1000);
            //計算分差
        case "n": return parseInt((objDate - this) / 60000);
            //計算時差
        case "h": return parseInt((objDate - this) / 3600000);
            //計算日差
        case "d": return parseInt((objDate - this) / 86400000);
            //計算週差
        case "w": return parseInt((objDate - this) / (86400000 * 7));
            //計算月差
        case "m": return (objDate.getMonth() + 1) + ((objDate.getFullYear() - this.getFullYear()) * 12) - (this.getMonth() + 1);
            //計算年差
        case "y": return objDate.getFullYear() - this.getFullYear();
            //輸入有誤
        default: return undefined;
    }
}