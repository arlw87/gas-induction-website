import Classes from "./PDFContent.module.css";

const PDFContent = () => {
  const pdfSource = "/media/non-clinical/PDF/exam-advice-presentation.pdf";

  return (
    <div className={Classes.contentPDFContainer}>
      <iframe className={Classes.pdfViewer} src={pdfSource}></iframe>
    </div>
  );
};

export default PDFContent;
