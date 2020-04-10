/**
 * initialize your data structure here.
 */
var MinStack = function() {
    this.arr = [];  
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
  const last = this.arr[this.arr.length - 1];
  const min = last ? Math.min(last.min, x) : x;
  
  return this.arr.push({ val: x, min });
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    if(this.arr.length) {
        return this.arr.pop();
    }
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.arr[this.arr.length - 1].val || null;
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.arr[this.arr.length - 1].min || null;
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
