module.exports = function reverse (n) {
    let y = Math.abs(n)
    let a = String(y)
    var b = a.split("");
    var arr = b.reverse();
    var aar = arr.join("");
    var res = Number(aar);
    return res;
}