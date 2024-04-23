const chars = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "m", "n", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

/**
 * 获取/设置localStorage
 */
export const localStorage = function(name, value) {
    if (value != undefined) {
        // set
        value ? window.localStorage.setItem(name, JSON.stringify(value)) : window.localStorage.removeItem(name);
    } else {
        // get
        let v = window.localStorage.getItem(name);
        return v ? JSON.parse(v) : '';
    }
}

/**
 * 生成随机字符串（首位不为数字）
 * @param len
 * @return {string} 数字和字符
 */
export const RandomCode = function(len = 8) {
    let n = chars.length;
    let code = '';
    if (len <= 0) len = 8;
    while (len > 0) {
        let index = code == '' ?
            (10 + parseInt(Math.random() * (n - 10))) :
            parseInt(Math.random() * n);
        code += chars[index];
        len--;
    }
    return code;
};