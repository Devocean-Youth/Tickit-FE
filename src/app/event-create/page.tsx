"use client"

import React from 'react';
import Step1Channel from '../../components/CreateEventPage/Step1Channel';

const EventCreatePage: React.FC = () => {
  return (
    <div style={{ padding: '20px' }}>
      <h1>이벤트 생성</h1>
      <Step1Channel />
    </div>
  );
};

export default EventCreatePage;
