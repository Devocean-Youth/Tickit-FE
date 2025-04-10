"use client"

import React, { useState } from 'react';
import Button from '../Global/Button';

const categories = [
  'IT/기술', '스타트업', '커리어', '취미', '마케팅', '비즈니스',
  '디자인', '음식&음료', '프로그래밍', '홈&라이프스타일', '여행',
  '자기계발', '스포츠', '금융', '건강', '파티', '독서',
];

const Step3Category: React.FC = () => {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  const handleCategoryClick = (category: string) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(selectedCategories.filter((cat) => cat !== category));
    } else if (selectedCategories.length < 3) {
      setSelectedCategories([...selectedCategories, category]);
    }
  };

  const handleComplete = () => {
    console.log('Selected Categories:', selectedCategories);
    // Handle completion logic
  };

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
      <h2 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '20px' }}>
        이벤트의 카테고리를 설정해 주세요.
      </h2>
      <div style={{ marginBottom: '20px' }}>
        <label style={{ display: 'block', marginBottom: '8px' }}>이벤트 카테고리</label>
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '8px',
            padding: '10px',
            border: '1px solid #ccc',
            borderRadius: '8px',
            marginBottom: '10px',
          }}
        >
          {selectedCategories.map((category) => (
            <span
              key={category}
              style={{
                backgroundColor: '#1B56FD',
                color: '#fff',
                padding: '5px 10px',
                borderRadius: '16px',
                display: 'inline-flex',
                alignItems: 'center',
              }}
            >
              {category}
              <button
                onClick={() => handleCategoryClick(category)}
                style={{
                  marginLeft: '8px',
                  background: 'transparent',
                  border: 'none',
                  color: '#fff',
                  cursor: 'pointer',
                }}
              >
                ✕
              </button>
            </span>
          ))}
        </div>
        <p style={{ fontSize: '12px', color: '#888' }}>
          최대 3개의 카테고리를 설정할 수 있어요.
        </p>
      </div>
      <div style={{ marginBottom: '20px' }}>
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '10px',
          }}
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => handleCategoryClick(category)}
              style={{
                padding: '10px 16px',
                border: `2px solid ${selectedCategories.includes(category) ? '#1B56FD' : '#ccc'}`,
                borderRadius: '8px',
                backgroundColor: selectedCategories.includes(category) ? '#1B56FD' : 'transparent',
                color: selectedCategories.includes(category) ? '#fff' : '#000',
                cursor: 'pointer',
              }}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
      <div style={{ marginBottom: '20px' }}>
        <label style={{ display: 'block', marginBottom: '8px' }}>이벤트 소개</label>
        <textarea
          placeholder="이벤트에 대한 간단한 소개를 입력하세요."
          style={{
            width: '100%',
            padding: '10px',
            border: '1px solid #ccc',
            borderRadius: '8px',
            height: '100px',
          }}
        />
      </div>
      <Button text="완료하기" onClick={handleComplete} color="point" />
    </div>
  );
};

export default Step3Category;
