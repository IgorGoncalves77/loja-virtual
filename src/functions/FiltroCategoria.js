export default function FiltroCategoria(oldArray) {

  var newArray = [];

  for (var i = 0; i < oldArray.length; i++) {
    newArray[i] = oldArray[i].filter[0].value;
  }

  var resultArr = newArray.filter((este, i) => newArray.indexOf(este) === i);
  return resultArr; 

}