import React, { useState } from "react";
import axios from "axios";
import Result from "./Result";
import "./Dictionary.css";
import Photos from "./Photos";

export default function Dictionary() {
  const [keyword, setKeyword] = useState(null);
  const [result, setResult] = useState(null);
  const [photos, setPhotos] = useState(null);

  function handleKeywordChange(e) {
    setKeyword(e.target.value);
  }

  function handleResponse(response) {
    setResult(response.data[0]);
  }

  function handlePexelsResponse(response) {
    setPhotos(response.data.photos);
  }

  function search(e) {
    e.preventDefault();
    const apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);

    const pexelsApiKey = `563492ad6f917000010000018d0133edc6a7456fa4b8f5d95e2f452f`;
    const pexelsUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=9`;
    const headers = { Authorization: `Bearer ${pexelsApiKey}` };
    axios.get(pexelsUrl, { headers: headers }).then(handlePexelsResponse);
  }

  return (
    <div className="dictionary">
      <section>
        <h1>What word do you want to look up?</h1>
        <form onSubmit={search}>
          <input type="search" onChange={handleKeywordChange} />
        </form>
        <div className="hint">Suggested words: wine, car, exaggerate...</div>
      </section>
      <Result result={result} />
      <Photos photos={photos} keyword={keyword} />
    </div>
  );
}
