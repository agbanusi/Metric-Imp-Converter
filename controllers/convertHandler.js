/*
*
*
*       Complete the handler logic below
*       
*       
*/

function ConvertHandler() {
  
  this.getNum = function(input) {
    let re=/(?<=[0-9.]+)/
    let unit = input.split(re)
    var result,count,join; 
    unit.pop()
    join=unit.join('')
    count=join.split('').filter((i)=>i==='/').length
    
    if(unit.length>0 && count<2){
      try{result=eval(join)}
      catch(error){result='invalid number'}
    }
    else if(count>=2){
      result='invalid number'
    }
    else{
      result=1
    }
    
    return result;
  };
  
  this.getUnit = function(input) {
    let re=/(?<=[0-9]+)/
    let unit = input.split(re)
    var result = unit.pop();
    
    return result;
  };
  
  this.getReturnUnit = function(initUnit) {
    var result;
    switch(initUnit.toLowerCase()){
      case 'gal': result='L';break;
      case 'l'  : result='gal';break;
      case 'km' : result='mi';break;
      case 'mi' : result='km';break;
      case 'lbs': result='kg';break;
      case 'kg' : result='lbs';break;
      default: result='invalid unit';
    }
    
    
    return result;
  };

  this.spellOutUnit = function(unit) {
    var result;
    switch(unit.toLowerCase()){
      case 'gal': result='gallons';break;
      case 'l'  : result='Litres';break;
      case 'km' : result='kilometres';break;
      case 'mi' : result='miles';break;
      case 'lbs': result='pounds';break;
      case 'kg' : result='kilograms';break;
      default: result='invalid unit';
    }
    return result;
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    var result;
    if(initNum=='invalid number'){result=initNum}
    else{switch(initUnit.toLowerCase()){
      case 'gal': result=+(initNum*galToL).toFixed(5);break;
      case 'l'  : result=+(initNum/galToL).toFixed(5);break;
      case 'km' : result=+(initNum/miToKm).toFixed(5);break;
      case 'mi' : result=+(initNum*miToKm).toFixed(5);break;
      case 'lbs': result=+(initNum*lbsToKg).toFixed(5);break;
      case 'kg' : result=+(initNum/lbsToKg).toFixed(5);break;
      default: result='invalid unit'
    }}
    return result;
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    if(returnUnit==='invalid unit'){var result='Error- '+initNum+initUnit}
    else if(returnNum=='invalid number'){var result='Error'}
    else{var result = initNum+' '+this.spellOutUnit(initUnit)+' converts to '+returnNum+' '+this.spellOutUnit(returnUnit);
        }
    return result;
  };
  
}

module.exports = ConvertHandler;
