import React from 'react'
import Link from 'next/link';

const Navigation = () => {
  return (
    <>
      <div className="main-menu">
        <nav id="mobile-menu">
          <ul>
            <li className="active">
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/aboutus">About Us</Link>
            </li>
            <li>
              <Link href="/services">Services</Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default Navigation