import { color } from '@mui/system';
import React from 'react';
import Nav from './Nav';

export default function Layout({ children }) {
  return (
    <div>
      <Nav />
      {children}
      <style jsx global>
        {'body {color: #7600ba} p {color: black} h1 {color: black}'}
      </style>
    </div>
  );
}
