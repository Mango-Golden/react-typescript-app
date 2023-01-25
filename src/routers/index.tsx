/**
 * @author mango
 * @description page router index
 */

import { BrowserRouter, Route, Routes } from "react-router-dom";

import Welcome from "@pages";

import { PageLazyLoader } from "./container";

export default function Routers () {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome/>}/>
        <Route path="*" element={<PageLazyLoader/>}/>
      </Routes>
    </BrowserRouter>
  )
}
