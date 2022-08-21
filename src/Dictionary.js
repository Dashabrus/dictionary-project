import React, { useState } from "react";

export default function Dictionary() {
  const [keyword, setKeyword] = useState(null);

  function handleKeywordChange(e) {
    setKeyword(e.target.value);
  }

  function search(e) {
    e.preventDefault();
    alert(`Searching for "${keyword}" definition`);
  }

  return (
    <form onSubmit={search}>
      <input type="search" onChange={handleKeywordChange} />
    </form>
  );
}
