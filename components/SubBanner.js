'use client';

import React from 'react';
import Link from 'next/link';

const SubBanner = ({ title, description, breadcrumb, breadcrumbParent }) => {
  return (
    <div className="padding-rl float-left w-100">
      <section className="float-left w-100 sub-banner-con position-relative br-20">
        <div className="container">
          <div className="sub-banner-content-con text-center">
            <h1 className="sub-heading1">{title}</h1>
            <p className="">{description}</p>

            <div className="breadcrumb-con d-inline-block">
              <ol className="breadcrumb mb-0">
                <li className="breadcrumb-item"><Link href="/">Home</Link></li>
                {breadcrumbParent ? (
                  <li className="breadcrumb-item">
                    <Link href={breadcrumbParent.href}>{breadcrumbParent.label}</Link>
                  </li>
                ) : null}
                <li className="breadcrumb-item active" aria-current="page">{breadcrumb}</li>
              </ol>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SubBanner;
