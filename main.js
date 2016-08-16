$(document).ready(function(){
  var qrObject;
  var qrLot;
  var expDate;
  var image;

  $('#qrScan').change(function() {
    qrObject = $('#qrScan').val();
    qrObject = JSON.parse(qrObject);
    expDate = qrObject.expDate;
    var indexOfT = expDate.indexOf('T');
    if(indexOfT !== -1){
      expDate = expDate.slice(0, indexOfT);
    }

    qrLot = qrObject.lot

    '<body><div id="barcode">' + JsBarcode("#barcode", expDate, {
      width:1,
      height:40
    }) + '</div></body>';
  })

  $('.qrPrint').click(function () {

    var w = window.open();
    w.document.write(
    `<html><head><body><div>${$("#eanBarcode").html()}</div></body></html>`
    );
    w.print();
    w.close();
  })

})
