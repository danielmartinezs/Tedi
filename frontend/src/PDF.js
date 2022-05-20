PDFDocument=require('pdfkit');

function crearPDF(){
    const doc=newPDFDocument();
    doc.on('data',dataCallBack);
    doc.on('end',endCallBack);
    doc.fontSize(25).text('Some Heading');
    doc.end();
}
module.exports={crearPDF};

//parte backend o en otro archivo tambien se puede

const express=requiere('express');
const pdfServicio=requiere('aqui va la ruta del lo de arriba');

const router=express.Router();

router.get('/invoice',(req,res,next)=>{
    const stream=res.writeHead(200,{
        'Content-Type':'application/pdf',
        'Content-Disposition':'attachment;filename=invoice.pdf'
    });

    pdfServicio.crearPDF(
        (chunk)=> stream.write(chunk),
        ()=>stream.end()
    );

});


