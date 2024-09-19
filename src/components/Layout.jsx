import React from 'react';

export default function Layout({ children }) {
  return (
    <>
      <header className="header"></header>
      <main>{children}</main>
    </>
  );
}
