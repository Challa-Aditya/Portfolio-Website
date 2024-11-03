import PdfViewer from '@/components/PdfViewer';

const PdfViewerPage = () => {
  const pdfUrl = '/assets/text/Aditya_Challa_resume.pdf'; // Adjust the path to your PDF file

  return (
    <div className='flex flex-col items-center space-y-4 mt-16 pt-1 px-6 relative border-b border-neutral-900 pb-4 lg:mb-35'>
      <div className='w-auto'><PdfViewer pdfUrl={pdfUrl} /></div>
      
      <a href='/assets/text/Aditya_challa_resume_fr.pdf' download='Aditya Resume'><button className='py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-gray-700 sm:w-fit
           hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-primary-300'>Download Resume</button></a>
    </div>
  );
};

export default PdfViewerPage;