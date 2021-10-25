import Classes from "./PDFContent.module.css";
import { useMediaQuery } from "react-responsive";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilePdf } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const PDFContent = (props) => {
  const pdfSource = props.media;

  const isMobile = useMediaQuery({
    query: "(max-width: 767px)",
  });

  return (
    <div className={Classes.contentPDFContainer}>
      {!isMobile && (
        <iframe className={Classes.pdfViewer} src={pdfSource}></iframe>
      )}
      {isMobile && (
        <React.Fragment>
          <h2>Click the PDF icon to download</h2>
          <FontAwesomeIcon icon={faFilePdf} />
        </React.Fragment>
      )}
    </div>
  );
};

export default PDFContent;
