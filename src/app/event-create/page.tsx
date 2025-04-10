"use client"

import React, { useState } from 'react';
import Step1Channel from '../../components/CreateEventPage/Step1Channel';
import Step2EventDetail from '@/components/CreateEventPage/Step2EventDetail';
import Step3Category from '@/components/CreateEventPage/Step3Category';
import StepIndicator from '@/components/CreateEventPage/StepIndicator';

const EventCreatePage: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <Step1Channel />;
      case 2:
        return <Step2EventDetail />;
      case 3:
        return <Step3Category />;
      default:
        return null;
    }
  };

  const handleNextStep = () => {
    if (currentStep < 3) setCurrentStep(currentStep + 1);
  };

  return (
    <div style={{ display: 'flex' }}>
      <StepIndicator currentStep={currentStep} />
      <div style={{ flex: 1, padding: '20px' }}>
        <h1>이벤트 생성</h1>
        {renderStep()}
        {currentStep < 3 && (
          <button
            onClick={handleNextStep}
            style={{
              marginTop: '20px',
              padding: '10px 20px',
              backgroundColor: '#1B56FD',
              color: '#fff',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
            }}
          >
            다음
          </button>
        )}
      </div>
    </div>
  );
};

export default EventCreatePage;
