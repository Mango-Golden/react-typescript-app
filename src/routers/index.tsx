/**
 * @author mango
 * @description page router index
 */

import { Route, Routes } from 'react-router-dom';

import Welcome from '@pages';

import { PageLazyLoader } from '@routers/container';

export default function Routers() {
  return (
    <Routes>
      <Route path="/" element={<Welcome/>}/>
      <Route path="*" element={<PageLazyLoader/>}/>
    </Routes>
  );
}
