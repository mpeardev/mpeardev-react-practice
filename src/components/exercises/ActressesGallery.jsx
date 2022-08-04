import React, { useState } from 'react';
import actresses from '../../data/actresses';

export const ActressesGallery = () => {
  const [actressesArr, setActressesArr] = useState(actresses);
  const [btnCountriesArr, setBtnCountriesArr] = useState([]);

  const getActressesByCountry = (p) => {
    const arrFiltered = actresses.filter(({ country }) => country === p);
    setActressesArr(arrFiltered);
  };

  actresses.map((girl) => {
    return btnCountriesArr.push(girl.country);
  });

  const impBtnFilteredArr = [...new Set(btnCountriesArr)];

  return (
    <>
      <h1 className="text-center">Actresses Gallery</h1>
      <hr />

      <div className="album py-4 bg-light">
        <div className="m-3">
          {impBtnFilteredArr.map((e) => {
            return (
              <span
                key={e}
                className="badge text-bg-dark m-1"
                style={{ cursor: 'pointer' }}
                onClick={() => getActressesByCountry(e)}
              >
                {e}
              </span>
            );
          })}
          <span
            className="badge text-bg-dark m-1"
            style={{ cursor: 'pointer' }}
            onClick={() => setActressesArr(actresses)}
          >
            All
          </span>
        </div>

        <div className="container">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-5">
            {actressesArr.map((actress) => {
              return (
                <div className="col" key={actress.id}>
                  <div className="card shadow-sm overflow-hidden">
                    <img src={actress.img} alt={actress.name} />
                    <div className="card-body">
                      <h5 className="card-title">{actress.name}</h5>
                    </div>

                    <ul className="list-group list-group-flush">
                      <li className="list-group-item">{actress.date}</li>
                      <small className="list-group-item">
                        {actress.country}
                      </small>
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};
