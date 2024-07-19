import React from 'react'
import Link from 'next/link';
import { usePathname } from "next/navigation";

const Navigation = () => {
   const pathname = usePathname();
  return (
    <div data-testid="main-nav">
      <div className="main-menu">
        <nav id="mobile-menu">
          <ul>
            <li>
              <Link href="/" className={pathname == "/" ? "active" : ""}>
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/aboutus"
                className={pathname == "/aboutus" ? "active" : ""}
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                href="/services"
                className={pathname == "/services" ? "active" : ""}
              >
                Services
              </Link>
            </li>
            <li>
              <Link href="/faq" className={pathname == "/faq" ? "active" : ""}>
                FAQ
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Navigation