"use client"

import React from 'react';
import Image from 'next/image';
import ticket1 from '@/assets/HomePage/ticket1.png';
import ticket2 from '@/assets/HomePage/ticket2.png';
import ticket3 from '@/assets/HomePage/ticket3.png';
import ticket4 from '@/assets/HomePage/ticket4.png';
import ticket5 from '@/assets/HomePage/ticket5.png';

const tickets = [ticket1, ticket2, ticket3, ticket4, ticket5];

const CardSection = () => {
  return (
    <section className="flex flex-col items-center justify-center bg-[#101012] text-white py-16">
      <h2 className="text-[35px] font-bold mb-8 text-center">
        <p>한 장의 티켓에</p>
        <p>현장을 담다</p>
      </h2>
      <button className="w-[430px] h-[98px] top-0 left-0 rounded-[100px] [background:linear-gradient(90deg,rgba(4,112,247,1)_0%,rgba(0,185,173,1)_100%)] text-[35px]">
        이벤트 만들기
      </button>
      <div className="flex justify-center space-x-4 p-4">
        {tickets.map((ticket, index) => (
          <div
            key={index}
            className={`bg-white rounded-lg shadow-lg p-4 flex-shrink-0 transform ${
              index === 0
                ? '-rotate-12'
                : index === 1
                ? '-rotate-6'
                : index === 3
                ? 'rotate-6'
                : index === 4
                ? 'rotate-12'
                : ''
            }`}
          >
            <div className="relative w-[400px] h-[588px]">
              <Image
                src={ticket}
                alt={`티켓 디자인 ${index + 1}`}
                fill
                style={{ objectFit: 'cover' }}
                priority
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CardSection;
