"use client"

import React from 'react';

interface StepIndicatorProps {
  currentStep: number;
}

const steps = [
  { id: 1, label: '채널 선택' },
  { id: 2, label: '이벤트 정보 입력' },
  { id: 3, label: '카테고리 설정' },
];

const StepIndicator: React.FC<StepIndicatorProps> = ({ currentStep }) => {
  return (
    <div style={{ width: '200px', padding: '20px', borderRight: '1px solid #ddd' }}>
      <h1 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '20px', color: '#1B56FD' }}>
        TICKIT
      </h1>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {steps.map((step) => (
          <li
            key={step.id}
            style={{
              display: 'flex',
              alignItems: 'center',
              marginBottom: '20px',
              color: currentStep === step.id ? '#1B56FD' : '#aaa',
              fontWeight: currentStep === step.id ? 'bold' : 'normal',
            }}
          >
            <div
              style={{
                width: '24px',
                height: '24px',
                borderRadius: '50%',
                border: `2px solid ${currentStep === step.id ? '#1B56FD' : '#ddd'}`,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                marginRight: '10px',
                backgroundColor: currentStep > step.id ? '#1B56FD' : 'transparent',
                color: currentStep > step.id ? '#fff' : '#1B56FD',
              }}
            >
              {currentStep > step.id ? '✔' : step.id}
            </div>
            {step.label}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StepIndicator;
