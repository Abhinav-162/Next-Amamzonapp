import React from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons';

export default function Nav() {
  return (
    <div className="py-4 px-8 bg-white-700 text-2C308 flex justify-between font-size: 16px font-family:Robot-Bold">
      <div className="mx-2 mb-2 bg-purple-700 py-2 px-4 rounded-md text-white">
        <Link href="/">Lakshya Mart</Link>
      </div>
      <div className="font-semibold flex flex-wrap justify-center font-size:30px">
        <div className="semibold py-2 px-2">
          <Link href="/">Home</Link>
        </div>
        <div className="py-2 px-2">
          <Link href="/">Products</Link>
        </div>
        <div className="py-2 px-2">
          <Link href="/">About</Link>
        </div>
        <div className="py-2 px-2">
          <Link href="/">Contact</Link>
        </div>
        <div className="py-2 px-2">
          <Link href="/">My Account</Link>{' '}
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <FontAwesomeIcon icon={faShoppingBag}></FontAwesomeIcon>{' '}
        </div>
      </div>
    </div>
  );
}
