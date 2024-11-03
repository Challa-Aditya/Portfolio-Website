import React from 'react'

const page = () => {
  return (
    <div className='mt-16 pt-2 px-8 md:px-32 mb-16 relative border-b border-neutral-900 pb-4 lg:mb-35 space-y-8'>
      <div className='p-4 border-solid border-2 border-gray-500 rounded-md w-full h-fit flex max-sm:flex-col'>
        <div className='w-1/4 max-sm:w-full text-white'><img src="/assets/images/project-application-portal.png" className="rounded-xl" ></img></div>
        <div className='w-3/4 sm:ml-6 max-sm:w-full text-white flex flex-col'>
            <h2 className='h-3/5 text-3xl'>Student Project Application Portal</h2>
            <p className='h-2/5'> MERN stack, MongoDb, Firebase</p>
            <p className='h-2/5'>To be used by more than 1600 students every year to apply for academic/research Projects under Professors </p>
        </div>
      </div>

      <div className='p-4 border-solid border-2 border-gray-500 rounded-md w-full h-fit flex max-sm:flex-col'>
      <div className='w-1/4 max-sm:w-full text-white'><img src="/assets/images/stock-prediction.jpg" className="rounded-xl" ></img></div>
        <div className='w-3/4 sm:ml-6 text-white flex flex-col'>
            <h2 className='h-3/5 text-3xl'>Stock Price Prediction using Arima Model</h2>
            <p className='h-2/5'>Python, Scikit-Learn, Power BI</p>
            <p className='h-2/5'>Predicted closing prices of stocks using ARIMA Forecasting taking stationarity and seasonality into consideration with Mean squared error 74.479</p>

        
        </div>
      </div>


      <div className='p-4 border-solid border-2 border-gray-500 rounded-md w-full h-fit flex max-sm:flex-col'>
      <div className='w-1/4 max-sm:w-full text-white'><img src="/assets/images/higher-education.jpg" className="rounded-xl" ></img></div>
        <div className='w-3/4 sm:ml-6 text-white flex flex-col'>
            <h2 className='h-3/5 text-3xl'>Higher Education Prediction Algorithm</h2>
            <p className='h-2/5'>Python, Scikit-learn, Pandas</p>
            <p className='h-2/5'>Developed an ML algorithm predicting admission chances into 100+ universities, enhancing decision-making accuracy for students.</p>

        
        </div>
      </div>


      <div className='p-4 border-solid border-2 border-gray-500 rounded-md w-full h-full flex max-sm:flex-col'>
      <div className='w-1/4 max-sm:w-full text-white'><img src="/assets/images/voice-classification.jpg" className="rounded-xl" ></img></div>
        <div className='w-3/4 sm:ml-6 text-white flex flex-col'>
            <h2 className='h-3/5 text-3xl'>Voice Classification using CNN</h2>
            <p className='h-2/5'>Tensorflow, Streamlit, API</p>
            <p className='h-2/5'>Classifying voices using Spectrogram images of Voice Samples.</p>

        
        </div>
      </div>
    </div>
  )
}

export default page;
