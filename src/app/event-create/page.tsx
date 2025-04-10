"use client"

import React from 'react';
import Step1Channel from '../../components/CreateEventPage/Step1Channel';
import Step2EventDetail from '@/components/CreateEventPage/Step2EventDetail';

const EventCreatePage: React.FC = () => {
  return (
    <div style={{ padding: '20px' }}>
      <h1>이벤트 생성</h1>
      <Step1Channel />
      <h1>이벤트 상세</h1>
      <Step2EventDetail />
    </div>
  );
};

export default EventCreatePage;
