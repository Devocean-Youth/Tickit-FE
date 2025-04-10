"use client"

import React, { useState } from 'react';
import Button from '../Global/Button';

const Step2EventDetail: React.FC = () => {
  const [eventType, setEventType] = useState<'online' | 'offline'>('offline');
  const [category, setCategory] = useState<string>('');

  const handleNext = () => {
    console.log('Proceed to the next step');
  };

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
      <h2 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '20px' }}>
        이벤트 정보를 입력해주세요.
      </h2>
      <div style={{ marginBottom: '20px' }}>
        <label style={{ display: 'block', marginBottom: '8px' }}>이벤트 제목</label>
        <input
          type="text"
          placeholder="이벤트 제목을 입력하세요"
          style={{ width: '100%', padding: '10px', marginBottom: '10px' }}
        />
      </div>
      <div style={{ marginBottom: '20px' }}>
        <label style={{ display: 'block', marginBottom: '8px' }}>이벤트 유형</label>
        <div style={{ display: 'flex', gap: '10px' }}>
          <button
            onClick={() => setEventType('online')}
            style={{
              flex: 1,
              padding: '10px',
              border: `2px solid ${eventType === 'online' ? '#1B56FD' : '#ccc'}`,
              borderRadius: '8px',
              backgroundColor: eventType === 'online' ? '#1B56FD' : 'transparent',
              color: eventType === 'online' ? '#fff' : '#000',
              cursor: 'pointer',
            }}
          >
            온라인 이벤트
          </button>
          <button
            onClick={() => setEventType('offline')}
            style={{
              flex: 1,
              padding: '10px',
              border: `2px solid ${eventType === 'offline' ? '#1B56FD' : '#ccc'}`,
              borderRadius: '8px',
              backgroundColor: eventType === 'offline' ? '#1B56FD' : 'transparent',
              color: eventType === 'offline' ? '#fff' : '#000',
              cursor: 'pointer',
            }}
          >
            오프라인 이벤트
          </button>
        </div>
      </div>
      <div style={{ marginBottom: '20px' }}>
        <label style={{ display: 'block', marginBottom: '8px' }}>카테고리</label>
        <div>
          {['컨퍼런스 · 세미나', '클래스', '모임'].map((cat) => (
            <div key={cat} style={{ marginBottom: '8px' }}>
              <label>
                <input
                  type="radio"
                  name="category"
                  value={cat}
                  checked={category === cat}
                  onChange={() => setCategory(cat)}
                  style={{ marginRight: '8px' }}
                />
                {cat}
              </label>
            </div>
          ))}
        </div>
      </div>
      <div style={{ marginBottom: '20px' }}>
        <label style={{ display: 'block', marginBottom: '8px' }}>이벤트 기간</label>
        <div style={{ display: 'flex', gap: '10px' }}>
          <input
            type="date"
            style={{ flex: 1, padding: '10px' }}
          />
          <input
            type="time"
            style={{ flex: 1, padding: '10px' }}
          />
          <span style={{ alignSelf: 'center' }}>~</span>
          <input
            type="date"
            style={{ flex: 1, padding: '10px' }}
          />
          <input
            type="time"
            style={{ flex: 1, padding: '10px' }}
          />
        </div>
      </div>
      <div style={{ marginBottom: '20px' }}>
        <label style={{ display: 'block', marginBottom: '8px' }}>이벤트 장소</label>
        <input
          type="text"
          placeholder="도로명/지번 주소 검색"
          style={{ width: '100%', padding: '10px', marginBottom: '10px' }}
        />
      </div>
      <Button text="다음" onClick={handleNext} color="point" />
    </div>
  );
};

export default Step2EventDetail;
