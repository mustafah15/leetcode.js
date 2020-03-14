/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    let lena = a.length - 1;
    let lenb = b.length - 1;
    const res = [];
    let carry = 0;
    
    while(lena >= 0 || lenb >= 0 || carry > 0){
        let va = 0;
        let vb = 0;
            
        if(lena >= 0){
            a.charAt(lena) === '0' ? va = 0 : va = 1;
            lena--;
        }

        if(lenb >= 0){
            b.charAt(lenb) === '0' ? vb = 0 : vb = 1;
            lenb--;
        }
    
        if(va+vb+carry > 1){
            res.push((va+vb+carry - 2));
            carry = 1;
        }else {
            res.push(va+vb+carry);
            carry = 0;
        }

    }

    return res.reverse().join('').toString();
};