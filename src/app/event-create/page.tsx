"use client"

import React from 'react';
import Step1Channel from '../../components/CreateEventPage/Step1Channel';
import Step2EventDetail from '@/components/CreateEventPage/Step2EventDetail';
import Step3Category from '@/components/CreateEventPage/Step3Category';
const EventCreatePage: React.FC = () => {
  return (
    <div style={{ padding: '20px' }}>
      <h1>이벤트 생성</h1>
      <Step1Channel />
      <h1>이벤트 상세</h1>
      <Step2EventDetail />
      <h1>이벤트 카테고리</h1>
      <Step3Category />
    </div>
  );
};

export default EventCreatePage;
