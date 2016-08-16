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
    expDate = expDate.slice(0, indexOfT);
    qrLot = qrObject.lot

    image = JsBarcode("#barcode", expDate);
    console.log(image);
    image;
    image = '<body><div id="barcode">' + image + '</div></body>';
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
