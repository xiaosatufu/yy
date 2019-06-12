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
      } else {
        console.error(err.message);
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
      } else {
        console.error(err.message);
      }
    }
  },
  /**
   * 裁剪字符串
   * @param {原字符串} str
   * @param {裁剪开始位置} start
   * @param {裁剪结束位置} end 只获取最后一次出现的位置
   *
   */
  cropStr: function(str, start, end) {
    try {
      var startType = this.getType(start);
      var endType = this.getType(end);
      if (startType === "String" && endType === "String") {
        return str.substring(str.indexOf(start) + 1, str.lastIndexOf(end));
      } else if (startType === "Number" && endType === "String") {
        return str.substring(start, str.lastIndexOf(end));
      } else if (startType === "String" && endType === "Number") {
        return str.substring(str.indexOf(start) + 1, end);
      } else {
        return str.substring(start, end);
      }
    } catch (err) {
      if (this.getType(str) !== "String") {
        console.error("cropStr error,", "str type must be String.");
      } else {
        console.error(err.message);
      }
    }
  },
  /**
   * 去除空格
   * @param {字符串} str
   * @param {1-全部,2-前后,3-前,4-后} type
   */
  trim: function(str, type) {
    try {
      var typeHandler = {
        "1": function() {
          str = str.replace(/\s+/g, "");
        },
        "2": function() {
          str = str.replace(/(^\s*)|(\s*$)/g, "");
        },
        "3": function() {
          str = str.replace(/(^\s*)/g, "");
        },
        "4": function() {
          str = str.replace(/(\s*$)/g, "");
        }
      };
      typeHandler[type]();
      return str;
    } catch (err) {
      if (this.getType(str) !== "String") {
        console.error("trim error,", "str type must be String.");
      } else {
        console.error(err.message);
      }
    }
  },
  /**
   *
   * @param {字符串} str
   * @param {1-全部大写,2-全部小写,3-首字母大写,4-首字母小写,5-大写转小写,小写转大写} type
   */
  caseConversion: function(str, type) {
    // var string;
    var typeHandler = {
      "1": function() {
        str = str.toUpperCase();
      },
      "2": function() {
        str = str.toLowerCase();
      },
      "3": function() {
        str =
          str.substring(0, 1).toUpperCase() + str.substring(1).toLowerCase();
      },
      "4": function() {
        str =
          str.substring(0, 1).toLowerCase() + str.substring(1)
      },
      "5": function() {
          var itemTxt = ''
          str.split('').forEach(function(item){
              if (/^([a-z]+)/.test(item)) {
                  itemTxt += item.toUpperCase()
              } else {
                  itemTxt += item.toLowerCase()
              }
          })
          str = itemTxt
      }
    };
    typeHandler[type]();
    return str;
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
