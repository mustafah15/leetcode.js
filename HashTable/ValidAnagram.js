/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

var isAnagram = function(s, t) {
  const arr_s = new Map();
  const arr_t = new Map();
  if(s.length !== t.length) {
    return false;
  }

  for (let i = 0; i < s.length; i++) {
    arr_s.set(s[i], arr_s.get(s[i]) ? arr_s.get(s[i]) + 1 : 1 );
  }

  for (let i = 0; i < t.length; i++) {
    arr_t.set(t[i], arr_t.get(t[i]) ? arr_t.get(t[i]) + 1 : 1  );
  }


  for(let i = 0; i < s.length; i++)
  {
    let value_s = arr_s.get(s[i]);
    let value_t = arr_t.get(s[i]);      

    if(value_s !== value_t) {
      return false;
    }
  }

  return true;
};
