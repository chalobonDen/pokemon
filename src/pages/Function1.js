import React, { useState } from 'react';
import '../App.css';

const Function1 = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');
  const [myArray, setMyArray] = useState([]);

  const onClick = () => {
    if (input.length !== 0) {
      const arr_new = input.split(`,`).map((item) => {
        return parseInt(item, 10);
      });
      setInput('');
      Result(arr_new);
      setMyArray(arr_new);
    } else {
      setInput('');
      Result();
      setMyArray('');
    }
  };

  const Result = (arr_new) => {
    const arr = Array.from(new Set(arr_new)).filter((item) => !isNaN(item));

    if (arr) {
      if (arr.length === 0) {
        return setResult('null');
      } else if (arr.length === 1) {
        return setResult(arr[0]);
      } else {
        const max_array = Math.max(...arr);
        arr.splice(arr.indexOf(max_array), 1);
        return setResult(Math.max(...arr));
      }
    }
  };

  return (
    <div className="array-function">
      <h3>Array Second Max</h3>
      <div className="array-form">
        <input
          className="array-input"
          type="text"
          onChange={(e) => setInput(e.target.value)}
          value={input}
          placeholder="Ex. 1,2,3,4"
        />
        <button onClick={onClick}>Click</button>
      </div>
      <p>
        Array : {myArray.length > 0 ? '[' : ''}
        {myArray.length > 0
          ? myArray.map((val, i) => {
              return (
                <span key={i}>
                  {val}
                  {i === myArray.length - 1 ? '' : ','}
                </span>
              );
            })
          : 'please enter number'}
        {myArray.length > 0 ? ']' : ''}
      </p>
      <p>{result ? `Result is : ${result}` : ''}</p>
    </div>
  );
};

export default Function1;
