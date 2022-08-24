import React, { useState } from "react";
import axios from "axios";
import Result from "./Result";

export default function Dictionary() {
  const [keyword, setKeyword] = useState(null);
  const [result, setResult] = useState(null);

  function handleKeywordChange(e) {
    setKeyword(e.target.value);
  }

  function handleResponse(response) {
    setResult(response.data[0]);
  }

  function search(e) {
    e.preventDefault();
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }

  return (
    <div>
      <form onSubmit={search}>
        <input type="search" onChange={handleKeywordChange} />
      </form>
      <Result result={result} />
    </div>
  );
}
