import React from 'react';
import MainHeader from '../organisms/mainHeader';
import TemplateMainPage from '../templates/templateMainPage';
import TemplateErrorPage from '../templates/templateErrorPage';

const MainPage: React.FC = () => {
  return (
    localStorage.getItem('token') ? (
      <>
        {/* Header */}
        <MainHeader />

        {/* Main Content */}
        <TemplateMainPage />
      </>
    ) : (
      <TemplateErrorPage
        type='401'
        errorMessage='Unauthorized access. Please log in to continue.'
      />
    )
  );
}

export default MainPage;