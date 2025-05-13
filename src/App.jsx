import React from 'react';
import InfoBar from './components/InfoBar';
import RightPane from './components/RightPane';
import { TabProvider } from './context/TabContext';

const App = () => {
  return (
    <TabProvider>
      <div className="min-h-screen flex bg-gray-100">
        {/* Sidebar */}
        <InfoBar />

        {/* Main Content */}
        <div className="flex-1 md:ml-72 w-full">
          <RightPane />
        </div>
      </div>
    </TabProvider>
  );
};

export default App;
