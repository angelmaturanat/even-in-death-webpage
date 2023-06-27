import React from 'react';
import './styles/App.scss';
import SocialMediaLinks from './components/SocialMediaLinks';

const App: React.FC = () => {
  return (
    <div>
      <div className="app flex h-screen w-full items-center justify-center bg-gray-900 bg-cover bg-center">
        <div className="rounded-xl bg-gray-800 bg-opacity-50 px-16 py-10 shadow-lg backdrop-blur-sm max-sm:px-8 drop-shadow-2xl">
          <div className="text-white">
            <div className="mb-8 flex flex-col items-center">
              <h1 className="text-2xl mb-4">Even In Death</h1>
            </div>
            <div className='items-center'>
              <SocialMediaLinks />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
