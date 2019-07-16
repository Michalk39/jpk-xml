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

var jpkFormSell = document.getElementById('jpk_rows_sell');
var jpkFormBuy = document.getElementById('jpk_rows_buy');

function addSellRows(rows) {
  for (var i=0; i<rows; i++) {
    
    var jpkSellRow = `<div class="row">
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

    jpkFormSell.insertAdjacentHTML('beforeend', jpkSellRow);
  }

}

function addBuyRows(rows) {
  for (var i=0; i<rows; i++) {
    
    var jpkBuyRow = `<div class="row">
                        <div class="col-1 px-1 text-center">${i+1}</div>
                        <input class="col-2 px-1 form-control" type="text" name="[${i}]NrDostawcy" placeholder="NrDostawcy">
                        <input class="col-2 px-1 form-control" type="text" name="[${i}]NazwaDostawcy" placeholder="NazwaDostawcy">
                        <input class="col-2 px-1 form-control" type="text" name="[${i}]AdresDostawcy" placeholder="AdresDostawcy">
                        <input class="col-1 px-1 form-control" type="text" name="[${i}]DowodZakupu" placeholder="DowodZakupu">
                        <input class="col-1 px-1 form-control" type="text" name="[${i}]DataZakupu" placeholder="DataZakupu">
                        <input class="col-1 px-1 form-control" type="date" name="[${i}]DataWplywu" placeholder="DataWplywu">
                        <input class="col-1 px-1 form-control" type="number" name="[${i}]K_45" placeholder="K_45">
                        <input class="col-1 px-1 form-control" type="number" name="[${i}]K_46" placeholder="K_46">
                    </div>`;

      jpkFormBuy.insertAdjacentHTML('beforeend', jpkBuyRow);
  }

}

var generateButton = document.getElementById('generate_form');

generateButton.onclick = function() {
  var sellRowsQuantity = document.getElementById('rows_sell').value;
  addSellRows(sellRowsQuantity);
  var buyRowsQuantity = document.getElementById('rows_buy').value;
  addBuyRows(buyRowsQuantity);
}

window.onload = function() {
  setCurrentDatetime();
  setBoundaryMonthDays();

};
