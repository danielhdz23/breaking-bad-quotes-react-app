import React, { useState, useEffect, useRef } from "react";

const QuotesWithHooks = () => {
  const isMounted = useRef(true);
  const [state, setState] = useState({
    data: [],
    loading: true,
    error: null,
  });
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    return () => {
      isMounted.current = false;
    };
  }, []);

  useEffect(() => {
    setState({ ...state, loading: true });
    fetch(`https://www.breakingbadapi.com/api/quotes/${counter}`)
      .then((response) => response.json())
      .then((resp) => {
        console.log(resp);
        isMounted.current &&
          setState({
            loading: false,
            error: null,
            data: resp,
          });
      });
  }, [counter]);

  const increment = (factor = 1) => setCounter(counter + factor);

  return (
    <>
      <h1>BreakingBad Quotes</h1>
      <hr />
      {state.loading ? (
        <div className="alert alert-info text-center">Loading...</div>
      ) : (
        state.data.length > 0 && (
          <blockquote className="blockquote text-right">
            <p className="mb-0">{state.data[0].quote}</p>
            <footer className="blockquote-footer">
              {state.data[0].author}
            </footer>
          </blockquote>
        )
      )}
      {!state.loading && (
        <button className="btn btn-dark btn-block" onClick={() => increment(1)}>
          Next Quote
        </button>
      )}
    </>
  );
};

export default QuotesWithHooks;
