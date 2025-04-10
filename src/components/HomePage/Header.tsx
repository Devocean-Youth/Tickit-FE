import React from 'react';

const Header = () => {
  return (
    <header className="flex justify-between items-center p-4 bg-[#101012] text-white">
      <h1 className="text-xl font-bold">TickIt</h1>
      <div className="flex gap-4">
        <a href="/event-create" className="text-sm">이벤트 만들기</a>
        <a href="/login" className="text-sm">로그인</a>
      </div>
    </header>
  );
};

export default Header;
