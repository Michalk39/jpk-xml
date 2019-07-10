function setCurrentDatetime() {
  var dataInput = document.getElementById('DataWytworzeniaJPK');
  dataInput.value = new Date().toISOString();
}

function setBoundaryMonthDays() {
  var date = new Date(), y = date.getFullYear(), m = date.getMonth();
  var first = new Date(y, m, 1);
  var last = new Date(y, m + 1, 0);

  var firstDay = (first.getDate() > 9) ? first.getDate() : "0" + first.getDate();
  var firstMonth = (first.getMonth() > 9) ? first.getMonth() : "0" + first.getMonth();

  var firstDayFormated = first.getFullYear() + '-' + firstMonth + '-' +  firstDay;

  var lastDay = (last.getDate() > 9) ? last.getDate() : "0" + last.getDate();
  var lastMonth = (last.getMonth() > 9) ? last.getMonth() : "0" + last.getMonth();

  var lastDayFormated = last.getFullYear() + '-' + lastMonth + '-' +  lastDay;

  var dataOdInput = document.getElementById('DataOd');
  var dataDoInput = document.getElementById('DataDo');

  dataOdInput.value = firstDayFormated;
  dataDoInput.value = lastDayFormated;
}

function myFunction() {
  document.getElementById("code").innerHTML = "It works!";
}

window.onload = function() {
  setCurrentDatetime();
  setBoundaryMonthDays();
  

};
