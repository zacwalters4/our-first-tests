const chai = require('chai');
const expect = chai.expect;
const Box = require('../src/Box');

describe('Box', function() {
    it('should have a default height and width of 100', function() {
        var box = new Box() 
        expect(box.height).to.equal(100)
        expect(box.width).to.equal(100)
    })
    it('should be accept arguments for height and width', function() {
        var newBox = new Box(20, 20)
        expect(newBox.height).to.equal(20)
        expect(newBox.width).to.equal(20)
    }) 
    it('should be able to calculate the area', function() {
        var areaBox = new Box()
        expect(areaBox.calculateArea()).to.equal(10000)
        var awesomeBox = new Box(30, 30)
        expect(awesomeBox.calculateArea()).to.equal(900)
    })
    it('should be able to increase height', function () {
        var bigBox = new Box() 
        expect(bigBox.height).to.equal(100)
        bigBox.increment(10, 'height')
        expect(bigBox.height).to.equal(110)
    })
    it('should be able to increase height', function () {
        var bigBox = new Box() 
        expect(bigBox.width).to.equal(100)
        bigBox.increment(10, 'width')
        expect(bigBox.width).to.equal(110)
    })

})  

