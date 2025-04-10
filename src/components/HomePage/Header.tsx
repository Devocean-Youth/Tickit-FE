import React from 'react';

const Header = () => {
  return (
    <header className="flex justify-between items-center p-4 bg-[#101012] text-white">
      <h1 className="text-xl font-bold">TickIt</h1>
      <a href="/login" className="text-sm">로그인</a>
    </header>
  );
};

export default Header;
