import React from 'react';
import InfoBar from './components/InfoBar';
import RightPane from './components/RightPane';
import { TabProvider } from './context/TabContext';

const App = () => {
  return (
    <TabProvider>
      <div className="min-h-screen flex bg-gray-100">
        {/* Sidebar */}
        <div className="md:block w-72 fixed top-0 left-0 h-full z-40">
          <InfoBar />
        </div>

        {/* Main Content */}
        <div className="flex-1 md:ml-72 w-full">
          <RightPane />
        </div>
      </div>
    </TabProvider>
  );
};

export default App;
