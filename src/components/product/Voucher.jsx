import jsPDF from "jspdf";

export const Voucher = (netPayment) => {
  const currentDate = new Date();
  const formattedDate = currentDate.toDateString();
  const handleGeneratePDF = () => {
    const doc = new jsPDF();
    doc.setFontSize(18);
    doc.text("overCRM", 20, 30);
    doc.setFontSize(10);
    doc.text("Cahier: Mr Admin", 20, 35);
    doc.text("Customer:Walking Customer", 20, 40);
    doc.text(`Date: ${formattedDate}`, 20, 45);
    doc.text(`Amaount : ${netPayment}`, 20, 50);
    doc.text("Thank you", 105, 90, null, null, "center");

    // Save the PDF
    const pdfDataUri = doc.output("datauristring");
    const newWindow = window.open();
    newWindow.document.write(
      '<iframe src="' + pdfDataUri + '" width="100%" height="100%"></iframe>'
    );
  };

  return handleGeneratePDF();
};
