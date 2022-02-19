import { NavLink, Routes, Route, Navigate } from 'react-router-dom';

const LazyLayout = () => {
  return (
    <div>
      <h1>LazyLayout Page</h1>
      <ul>
        <li>
          <NavLink to="lazy1">Lazy1</NavLink>
        </li>
        <li>
          <NavLink to="lazy2">Lazy2</NavLink>
        </li>
        <li>
          <NavLink to="lazy3">Lazy3</NavLink>
        </li>
      </ul>

      <Routes>
        <Route path="lazy1" element={<h2>lazy 1</h2>} />
        <Route path="lazy2" element={<h2>lazy 2</h2>} />
        <Route path="lazy3" element={<h2>lazy 3</h2>} />
        {/* <Route path="*" element={<h2>404</h2>} /> */}
        <Route path="*" element={<Navigate replace to="lazy1" />} />

      </Routes>
    </div>
  );
};
export default LazyLayout;
