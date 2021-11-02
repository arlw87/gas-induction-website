import Classes from "./PDFContent.module.css";
import { useMediaQuery } from "react-responsive";
import React from "react";
import Link from "next/link";

const PDFContent = (props) => {
  const pdfSource = props.media;

  console.log(pdfSource);

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
          <Link href={pdfSource} passHref>
            <img src="/media/images/pdf_icon.png" alt="PDF Icon" />
          </Link>
        </React.Fragment>
      )}
    </div>
  );
};

export default PDFContent;
