var yy = {
  /**
   * 字符串
   */
  /**
   * 获取字符串长度,英文一个字符,中文两个字符
   * @param {字符串}  str
   */
  getStrLength: function(str) {
    try {
      var length = 0;
      for (var i = 0; i < str.length; i++) {
        if (str.charCodeAt(i) > 127 || str.charCodeAt(i) == 94) {
          length += 2;
        } else {
          length += 1;
        }
      }
      return length;
    } catch (err) {
      if (this.getType(str) !== "String") {
        console.error("getStrLength error,", "str type must be String.");
      }
    }
  },
  /**
   * 替换字符串
   * @param {字符串} str
   * @param {需要替换的字符} replaceStr
   */
  replaceStr: function(str, targerStr, replaceStr) {
    try {
      var reg = new RegExp(targerStr, "g");
      return str.replace(reg, replaceStr);
    } catch (err) {
      if (this.getType(str) !== "String") {
        console.error("replaceStr error,", "str type must be String.");
      }
    }
  },
  /**
   * 裁剪字符串
   * @param {原字符串} str
   * @param {裁剪开始位置} startStr
   * @param {裁剪结束位置} endStr
   */
  cropStr: function(str, startStr, endStr) {
    console.log(str);
    console.log(str.substring(str.indexOf(startStr), str.lastIndexOf(endStr)));
  },

  /**
   * 获取类型
   * @param {类型} object
   */
  getType(object) {
    var str = Object.prototype.toString.call(object);
    var type = str.substring(str.indexOf(" ") + 1, str.lastIndexOf("]"));
    return type;
  }
};
