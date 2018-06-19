var inputLabel = document.getElementById('inputLabel');
function push(obj){
  var push = obj.innerHTML;
  if ( push == '='){
    inputLabel.innerHTML = eval(inputLabel.innerHTML);
  } else if ( push == 'AC') {
    inputLabel.innerHTML = '0';
  } else {
    if ( inputLabel.innerHTML == '0'){
      inputLabel.innerHTML = push;
    } else {
      inputLabel.innerHTML += push;
    }
  }
}
