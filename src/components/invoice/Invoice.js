
import jsPDF from 'jspdf'
import 'jspdf-autotable'

 const  generateInvoice = (cookiePackage) => {
    var doc = new jsPDF('p', 'pt');

    var res = doc.autoTableHtmlToJson(document.getElementById("my-table"));
    doc.autoTable(res.columns, res.data, {margin: {top: 80}});
    var header = (data)  => {
        doc.setFontSize(18);
        doc.setTextColor(40);
        doc.setFontStyle('normal');
        //doc.addImage(headerImgData, 'JPEG', data.settings.margin.left, 20, 50, 50);
        doc.text("Testing Report", data.settings.margin.center, 50);
      };

      var options = {
        beforePageContent: header,
        margin: {
          top: 80
        },
        startY: doc.autoTableEndPosY() + 20
      };
    
      doc.autoTable(res.columns, res.data, options);
    
      doc.save("table.pdf");
}

export default generateInvoice