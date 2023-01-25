import React, { useState } from 'react';

export const QuotesList = () => {
  const [quotesArr, setQuotesArr] = useState([]);
  const [quotesArrToImp, setQuotesArrToImp] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const getData = async () => {
    if (quotesArr.length !== 0) return;
    const rsp = await fetch('https://breakingbadapi.com/api/quotes/');
    const data = await rsp.json();
    setQuotesArr(data);
    setQuotesArrToImp(data);
  };

  const getDataById = async (number) => {
    const arrFiltered = await quotesArr.filter(
      (arr) => arr.quote_id === parseInt(number)
    );

    arrFiltered.length === 0
      ? setQuotesArrToImp([])
      : setQuotesArrToImp(arrFiltered);
  };

  const onInputChange = ({ target }) => {
    setInputValue(target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    if (inputValue <= 0) return;
    getDataById(inputValue.trim());
    setInputValue('');
  };

  return (
    <>
      <h1 className="text-center">Breaking bad Quotes</h1>
      <hr />

      <div className="alert alert-success">
        <p className="lead text-center">
          Press{' '}
          <strong
            style={{ cursor: 'pointer' }}
            className="link-info"
            onClick={getData}
          >
            here
          </strong>{' '}
          to get data to Breaking bad API
        </p>
      </div>

      <div className="container">
        {quotesArr.length !== 0 && (
          <>
            <form onSubmit={(event) => onSubmit(event)}>
              <div className="input-group mb-3">
                <span className="input-group-text">#</span>
                <input
                  type="number"
                  className="form-control"
                  placeholder="Num. de cita"
                  value={inputValue}
                  onChange={onInputChange}
                />
                <button
                  type="button"
                  className="btn btn-warning input-group-text"
                  onClick={() => setQuotesArrToImp(quotesArr)}
                >
                  Restart
                </button>
              </div>
            </form>
          </>
        )}

        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
          {quotesArrToImp.map(({ quote_id, quote, author }) => {
            return (
              <div className="col" key={quote_id}>
                <div className="alert alert-info">
                  <blockquote className="blockquote text-end">
                    <p className="mb-1">{quote}</p>
                    <footer className="blockquote-footer mt-4">{author}</footer>
                  </blockquote>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
