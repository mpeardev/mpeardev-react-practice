import React from 'react';
import { Link } from 'react-router-dom';

export const Main = () => {
  return (
    <>
      <h1 className="text-center">Navigate List</h1>
      <hr />

      <p>All exercises:</p>
      <ul className="list-group">
        <li className="list-group-item">
          <Link to="actresses">Actresses Gallery</Link>
        </li>
        <li className="list-group-item">
          <Link to="quotes">Quotes List</Link>
        </li>
        <li className="list-group-item">
          <Link to="forms">Form Types</Link>
        </li>
        <li className="list-group-item">
          <Link to="tictac">Tic-Tac</Link>
        </li>
      </ul>
    </>
  );
};
