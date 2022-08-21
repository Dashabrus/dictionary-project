import React, { useState } from "react";
import axios from "axios";

export default function Dictionary() {
  const [keyword, setKeyword] = useState(null);

  function handleKeywordChange(e) {
    setKeyword(e.target.value);
  }

  function handleResponse(response) {
    console.log(response);
  }

  function search(e) {
    e.preventDefault();
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }

  return (
    <form onSubmit={search}>
      <input type="search" onChange={handleKeywordChange} />
    </form>
  );
}
