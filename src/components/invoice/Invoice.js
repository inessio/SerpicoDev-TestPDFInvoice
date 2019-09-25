
import jsPDF from 'jspdf'
import 'jspdf-autotable'

 const  generateInvoice = (cookiePackage) => {
    var doc = new jsPDF('p', 'pt');
    var res = doc.autoTableHtmlToJson(document.getElementById("my-table"));
    const logoData = 'data:image/png;base64,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'
    doc.addImage(logoData, 'PNG',60,20, 60, 60);
    doc.setFontSize(18)
    doc.setFont('Verdana','normal')
    doc.text('SerpiCookies',120,60)
    doc.text('Website: www.serpicookies.com',60,90)
    doc.autoTable(res.columns, res.data, {margin: {top: 200}});
    // var header = (data)  => {
    //     doc.setFontSize(18);
    //     doc.setTextColor(40);
    //     doc.setFontStyle('normal');
    //     //doc.addImage(headerImgData, 'JPEG', data.settings.margin.left, 20, 50, 50);
    //     // doc.text("Testing Report", data.settings.margin.center, 50);
    //   };

    //   var options = {
    //     beforePageContent: header,
    //     margin: {
    //       top: 80
    //     },
    //     // startY: doc.autoTableEndPosY() + 20
    //   };
    
    //   doc.autoTable(res.columns, res.data, options);
    
      doc.save("invoice.pdf");
}

export default generateInvoice