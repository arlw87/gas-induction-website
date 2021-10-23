import Classes from "./PDFContent.module.css";

const PDFContent = (props) => {
  const pdfSource = props.media;

  return (
    <div className={Classes.contentPDFContainer}>
      <iframe className={Classes.pdfViewer} src={pdfSource}></iframe>
    </div>
  );
};

export default PDFContent;
