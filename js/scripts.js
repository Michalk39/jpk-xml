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


// var counter = 5;
// var jpkrow = `<div class="row">
//                 <div class="col-1 px-1 text-center">${counter}</div>
//                 <input class="col-2 px-1 form-control" type="text" name="${counter}NrKontrahenta" placeholder="Numer Kontrahenta">
//                 <input class="col-2 px-1 form-control" type="text" name="${counter}NazwaKontrahenta" placeholder="Nazwa Kontrahenta">
//                 <input class="col-2 px-1 form-control" type="text" name="${counter}AdresKontrahenta" placeholder="Adres Kontrahenta">
//                 <input class="col-1 px-1 form-control" type="text" name="${counter}DowodSprzedazy" placeholder="Dowod Sprzedazy">
//                 <input class="col-1 px-1 form-control" type="date" name="${counter}DataWystawienia" placeholder="Data Wystawienia">
//                 <input class="col-1 px-1 form-control" type="date" name="${counter}DataSprzedazy" placeholder="Data Sprzedazy">
//                 <input class="col-1 px-1 form-control" type="number" name="${counter}K_19" placeholder="K_19">
//                 <input class="col-1 px-1 form-control" type="number" name="${counter}K_20" placeholder="K_20">
//               </div>`;

var jpkform = document.getElementById('jpk_rows');

function addRow() {
  jpkform.insertAdjacentHTML('beforeend', jpkrow);

}

function addRows(rows) {
  for (var i=0; i<rows; i++) {
    
    var jpkrow = `<div class="row">
                <div class="col-1 px-1 text-center">${i+1}</div>
                <input class="col-2 px-1 form-control" type="text" name="[${i}]NrKontrahenta" placeholder="Numer Kontrahenta">
                <input class="col-2 px-1 form-control" type="text" name="[${i}]NazwaKontrahenta" placeholder="Nazwa Kontrahenta">
                <input class="col-2 px-1 form-control" type="text" name="[${i}]AdresKontrahenta" placeholder="Adres Kontrahenta">
                <input class="col-1 px-1 form-control" type="text" name="[${i}]DowodSprzedazy" placeholder="Dowod Sprzedazy">
                <input class="col-1 px-1 form-control" type="date" name="[${i}]DataWystawienia" placeholder="Data Wystawienia">
                <input class="col-1 px-1 form-control" type="date" name="[${i}]DataSprzedazy" placeholder="Data Sprzedazy">
                <input class="col-1 px-1 form-control" type="number" name="[${i}]K_19" placeholder="K_19">
                <input class="col-1 px-1 form-control" type="number" name="[${i}]K_20" placeholder="K_20">
              </div>`;

    jpkform.insertAdjacentHTML('beforeend', jpkrow);
  }

}

var generateButton = document.getElementById('generate_form');

generateButton.onclick = function() {
  var sellRowsQuantity = document.getElementById('rows_sell').value;
  addRows(sellRowsQuantity);
}

window.onload = function() {
  setCurrentDatetime();
  setBoundaryMonthDays();

};
