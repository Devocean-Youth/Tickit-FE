"use client"

import React, { useState } from 'react';
import Button from '../Global/Button';

const Step1Channel: React.FC = () => {
  const [isCreatingChannel, setIsCreatingChannel] = useState(false);

  const handleCreateChannel = () => {
    setIsCreatingChannel(true);
  };

  const handleNext = () => {
    // Handle the "Next" button logic
    console.log('Next step');
  };

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
      {!isCreatingChannel ? (
        // Existing channel selection view
        <>
          <h2>채널을 선택해주세요.</h2>
          <p>선택한 채널에 이벤트가 개설됩니다.</p>
          <select style={{ width: '100%', padding: '10px', marginBottom: '20px' }}>
            <option value="channel1">GDGOC (https://tickit.kr/gdgoc/event)</option>
            {/* Add more options dynamically */}
          </select>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <Button text="새 채널 개설하기" onClick={handleCreateChannel} color="white" />
            <Button text="다음" onClick={handleNext} color="point" />
          </div>
        </>
      ) : (
        // New channel creation view
        <>
          <h2>채널 정보를 입력해 주세요.</h2>
          <div style={{ marginBottom: '20px' }}>
            <label>채널명</label>
            <input
              type="text"
              placeholder="김규현님의 채널"
              style={{ width: '100%', padding: '10px', marginBottom: '10px' }}
            />
          </div>
          <div style={{ marginBottom: '20px' }}>
            <label>채널 ID</label>
            <input
              type="text"
              placeholder="https://tickit.kr/Channel ID"
              style={{ width: '100%', padding: '10px', marginBottom: '10px' }}
            />
          </div>
          <div style={{ marginBottom: '20px' }}>
            <label>채널에 대한 설명</label>
            <textarea
              placeholder=""
              style={{ width: '100%', padding: '10px', height: '80px' }}
            />
          </div>
          <div style={{ marginBottom: '20px', display: 'flex', alignItems: 'center' }}>
            <div
              style={{
                width: '80px',
                height: '80px',
                borderRadius: '50%',
                backgroundColor: '#f0f0f0',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                marginRight: '10px',
              }}
            >
              {/* Placeholder for profile image */}
              <span>+</span>
            </div>
            <Button text="채널 프로필 업로드" onClick={() => console.log('Upload')} color="white" />
          </div>
          <Button text="다음" onClick={handleNext} color="point" />
        </>
      )}
    </div>
  );
};

export default Step1Channel;
