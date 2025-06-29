import React from 'react';
import InfoBar from './components/InfoBar';
import RightPane from './components/RightPane';
import { TabProvider } from './context/TabContext';
import { useThemeStore } from './store/useThemeStore';

const App = () => {
  const {theme} = useThemeStore();
  return (
    <TabProvider>
      <div className="min-h-screen flex" data-theme={theme}>
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
