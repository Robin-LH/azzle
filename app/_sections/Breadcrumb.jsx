"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

function Breadcrumb({ title }) {
  const path = usePathname();

  return (
    <>
      <section id="section-breadcrumb">
        <div className="breadcrumb-wrapper">
          <div className="global-container">
            <div className="breadcrumb-block">
              <h1 className="breadcrumb-title capitalize w-full">{title}</h1>
              <ul className="breadcrumb-nav capitalize">
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>{path.split("/").pop().replace("%20", " ")}</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Breadcrumb;
