import React, { useState, useEffect } from 'react';
import { Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Particle from '../Particle';
import { AiOutlineDownload } from 'react-icons/ai';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
const pdfen = process.env.PUBLIC_URL + './PhamHuyDang_EN.pdf';
const pdfvn = process.env.PUBLIC_URL + './PhamHuyDang_VN.pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function ResumeNew() {
  const [width, setWidth] = useState(1200);
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  function changePage(offset) {
    setPageNumber((prevPageNumber) => prevPageNumber + offset);
  }

  function previousPage() {
    changePage(-1);
  }

  function nextPage() {
    changePage(1);
  }

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        <Row
          style={{
            justifyContent: 'center',
            position: 'relative',
            gap: '10px',
          }}
        >
          <Button
            variant="primary"
            href={pdfvn}
            target="_blank"
            style={{ maxWidth: '250px' }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV (Tiếng Việt)
          </Button>
          <Button
            variant="primary"
            href={pdfen}
            target="_blank"
            style={{ maxWidth: '250px' }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV (English)
          </Button>
        </Row>

        <Row
          className="resume"
          style={{ justifyContent: 'center', marginTop: '20px' }}
        >
          <div style={{ textAlign: 'center' }}>
            <Document
              file={pdfen}
              onLoadSuccess={onDocumentLoadSuccess}
              className="d-flex justify-content-center"
            >
              <Page
                pageNumber={pageNumber}
                scale={width > 786 ? 1.7 : 0.6}
                style={{ margin: '0 auto' }}
              />
            </Document>

            {numPages > 1 && (
              <div style={{ marginTop: '20px', textAlign: 'center' }}>
                <p>
                  Page {pageNumber} of {numPages}
                </p>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    gap: '10px',
                  }}
                >
                  <Button
                    type="button"
                    disabled={pageNumber <= 1}
                    onClick={previousPage}
                    variant="outline-primary"
                  >
                    Previous
                  </Button>
                  <Button
                    type="button"
                    disabled={pageNumber >= numPages}
                    onClick={nextPage}
                    variant="outline-primary"
                  >
                    Next
                  </Button>
                </div>
              </div>
            )}
          </div>
        </Row>

        <Row
          style={{
            justifyContent: 'center',
            position: 'relative',
            marginTop: '20px',
            gap: '10px',
          }}
        >
          <Button
            variant="primary"
            href={pdfvn}
            target="_blank"
            style={{ maxWidth: '250px' }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV (Tiếng Việt)
          </Button>
          <Button
            variant="primary"
            href={pdfen}
            target="_blank"
            style={{ maxWidth: '250px' }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV (English)
          </Button>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
