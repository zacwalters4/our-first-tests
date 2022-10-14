class Box{
    constructor(height, width) {
        this.height = height || 100
        this.width = width || 100
    }
    calculateArea() {
        return this.height * this.width
    }
    increment(amount, part) {
        if(part === 'width') {
            this.width += amount
        }
        else if(part === 'height') {
            this.height += amount
        }
    }
}
module.exports = Box;
