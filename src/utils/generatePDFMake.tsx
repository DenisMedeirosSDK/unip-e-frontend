import pdfPrinter from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
import { TDocumentDefinitions, Content } from 'pdfmake/interfaces';

export function generatePDFMake(data: Content) {
  pdfPrinter.vfs = pdfFonts.pdfMake.vfs;

  const docDefinition: TDocumentDefinitions = {
    pageSize: 'A4',
    pageOrientation: 'portrait',
    pageMargins: [100, 40, 80, 60],
    defaultStyle: { fontSize: 12 },
    content: [data],
    footer: [
      {
        text: 'UNIP - Universitária Paulista',
        alignment: 'center',
        bold: true,
      },
    ],
  };

  pdfPrinter.createPdf(docDefinition).download();
}
