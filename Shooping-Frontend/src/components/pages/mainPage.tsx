import React from 'react';
import MainHeader from '../organisms/mainHeader';
import TemplateMainPage from '../templates/templateMainPage';

const MainPage: React.FC = () => {
  return (
    <>
        {/* Header */}
        <MainHeader />
        {/* Main Content */}
        <TemplateMainPage />
    </>
  );
}

export default MainPage;