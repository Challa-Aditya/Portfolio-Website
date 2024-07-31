// components/PdfViewer.js
'use client';
import { useEffect, useRef, useState } from 'react';
import * as pdfjsLib from 'pdfjs-dist';
import 'pdfjs-dist/web/pdf_viewer.css';

pdfjsLib.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjsLib.version}/pdf.worker.min.js`;

const PdfViewer = ({ pdfUrl }) => {
  const [pdfDocument, setPdfDocument] = useState(null);
  const [isRendering, setIsRendering] = useState(false);
  const canvasRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const loadPdf = async () => {
      const loadingTask = pdfjsLib.getDocument(pdfUrl);
      const pdf = await loadingTask.promise;
      setPdfDocument(pdf);
    };

    loadPdf();
  }, [pdfUrl]);

  useEffect(() => {
    const renderPage = async () => {
      if (!pdfDocument || isRendering) return;

      setIsRendering(true);
      const page = await pdfDocument.getPage(1);
      const viewport = page.getViewport({ scale: 1 });
      const canvas = canvasRef.current;
      const context = canvas.getContext('2d');
      const container = containerRef.current;

      // Set canvas size based on container size
      canvas.width = container.clientWidth*2.5;
      canvas.height = (canvas.width * viewport.height) / viewport.width;

      const scaledViewport = page.getViewport({
        scale: canvas.width / viewport.width,
      });

      const renderContext = {
        canvasContext: context,
        viewport: scaledViewport,
      };

      await page.render(renderContext).promise;
      setIsRendering(false);
    };

    renderPage();
  }, [pdfDocument]);

  return (
    <div ref={containerRef} style={{ width: '100%', overflow: 'auto' }}>
      <canvas ref={canvasRef} style={{ width: '100%' }} />
    </div>
  );
};

export default PdfViewer;
