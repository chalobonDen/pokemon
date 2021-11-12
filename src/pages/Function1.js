import React, { useState } from 'react';
import '../App.css';

const Function1 = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const onClick = () => {
    if (input.length !== 0) {
      const arr_new = input.split(`,`).map((item) => {
        return parseInt(item, 10);
      });
      setInput('');
      Result(arr_new);
    } else {
      setInput('');
      Result();
    }
  };

  const Result = (arr_new) => {
    const arr = Array.from(new Set(arr_new));

    if (arr) {
      if (arr.length === 1) {
        return setResult(arr[0]);
      } else {
        const max_array = Math.max(...arr);
        arr.splice(arr.indexOf(max_array), 1);
        return setResult(Math.max(...arr));
      }
    } else {
      return setResult('null');
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

      <p>Result is : {result}</p>
    </div>
  );
};

export default Function1;
