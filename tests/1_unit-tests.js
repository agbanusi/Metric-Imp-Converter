/*
*
*
*       FILL IN EACH UNIT TEST BELOW COMPLETELY
*       -----[Keep the tests in the same order!]----
*       (if additional are added, keep them at the very end!)
*/

var chai = require('chai');
var assert = chai.assert;
var ConvertHandler = require('../controllers/convertHandler.js');

var convertHandler = new ConvertHandler();

suite('Unit Tests', function(){
  
  suite('Function convertHandler.getNum(input)', function() {
    
    test('Whole number input', function(done) {
      var input = '32L';
      assert.equal(convertHandler.getNum(input),32);
      done();
    });
    
    test('Decimal Input', function(done) {
      var input='32.2L'
      assert.equal(convertHandler.getNum(input),32.2)
      done();
    });
    
    test('Fractional Input', function(done) {
      var input='1/2L'
      assert.equal(convertHandler.getNum(input),0.5)
      done();
      //done();
    });
    
    test('Fractional Input w/ Decimal', function(done) {
      var input='1/2.5L'
      assert.equal(convertHandler.getNum(input),0.4)
      done();
      //done();
    });
    
    test('Invalid Input (double fraction)', function(done) {
      var input='1/2.5/5L'
      assert.equal(convertHandler.getNum(input),'invalid number')
      done();
      //done();
    });
    
    test('No Numerical Input', function(done) {
      var input='L'
      assert.equal(convertHandler.getNum(input),1)
      done();
      //done();
    }); 
    
  });
  
  suite('Function convertHandler.getUnit(input)', function() {
    
    test('For Each Valid Unit Inputs', function(done) {
      var input = ['gal','l','mi','km','lbs','kg','GAL','L','MI','KM','LBS','KG'];
      input.forEach(function(ele) {
        assert.include(convertHandler.getUnit(ele).toLowerCase(),['gal','l','mi','km','lbs','kg'])
      });
      done();
    });
    
    test('Unknown Unit Input', function(done) {
      var input='Li'
      assert.notInclude(convertHandler.getUnit(input).lowerCase(),['gal','l','mi','km','lbs','kg'])
      done();
      //done();
    });  
    
  });
  
  suite('Function convertHandler.getReturnUnit(initUnit)', function() {
    
    test('For Each Valid Unit Inputs', function(done) {
      var input = ['gal','l','mi','km','lbs','kg'];
      var expect = ['l','gal','km','mi','kg','lbs'];
      input.forEach(function(ele, i) {
        assert.equal(convertHandler.getReturnUnit(ele), expect[i]);
      });
      done();
    });
    
  });  
  
  suite('Function convertHandler.spellOutUnit(unit)', function() {
    
    test('For Each Valid Unit Inputs', function(done) {
      //see above example for hint
      var input = ['gal','l','mi','km','lbs','kg'];
      var expect = ['gallons','litres','miles','kilometres','pounds','kilograms'];
      input.forEach(function(ele, i) {
        assert.equal(convertHandler.spellOutUnit(ele), expect[i]);
      });
      done();
    });
    
  });
  
  suite('Function convertHandler.convert(num, unit)', function() {
    
    test('Gal to L', function(done) {
      var input = [5, 'gal'];
      var expected = 18.9271;
      assert.approximately(convertHandler.convert(input[0],input[1]),expected,0.1); //0.1 tolerance
      done();
    });
    
    test('L to Gal', function(done) {
      var input=[5,'L']
      var expected=1.32086;
      assert.approximately(convertHandler.convert(input[0],input[1]),expected,0.1)
      done()
      //done();
    });
    
    test('Mi to Km', function(done) {
      var input=[5,'Mi']
      var expected=8.0467;
      assert.approximately(convertHandler.convert(input[0],input[1]),expected,0.1)
      done()
      //done();
    });
    
    test('Km to Mi', function(done) {
      var input=[5,'Km']
      var expected= 3.10686;
      assert.approximately(convertHandler.convert(input[0],input[1]),expected,0.1)
      done()
      //done();
    });
    
    test('Lbs to Kg', function(done) {
      var input=[5,'Lbs']
      var expected=2.26796;
      assert.approximately(convertHandler.convert(input[0],input[1]),expected,0.1)
      done()
      //done();
    });
    
    test('Kg to Lbs', function(done) {
      var input=[5,'Kg']
      var expected=11.02312;
      assert.approximately(convertHandler.convert(input[0],input[1]),expected,0.1)
      done()
      //done();
    });
    
  });

});