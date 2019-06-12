var yy = {
    /**
     * 字符串
     */
    /**
     * 获取字符串长度,英文一个字符,中文两个字符
     * @param {str} 字符串 
     */
    getStrLength:function(str){
        var length = 0;
        for(var i = 0;i<str.length;i++) {
            if (str.charCodeAt(i)>127 || str.charCodeAt(i)==94) {
                length +=2
            } else {
                length +=1
            }
        }
        return length
    },
    

}