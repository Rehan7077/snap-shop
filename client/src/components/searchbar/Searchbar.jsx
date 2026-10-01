import { useNavigate, useSearchParams } from "react-router-dom";
import { useState } from "react";
import "./Searchbar.css";

export const Searchbar = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const query = searchParams.get("q");

  const [urlQuery, setUrlQuery] = useState(query || "");

  const handleSearch = () => {
    if (!urlQuery.trim()) return;

    navigate(`/products?q=${encodeURIComponent(urlQuery)}`);
  };

  return (
    <div className="hero-search">
      <input
        type="text"
        value={urlQuery}
        onChange={(e) => setUrlQuery(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleSearch();
          }
        }}
      />
      <button
        onClick={handleSearch}
        aria-label="Compare Prices"
        className="btn-primary"
      >
        Search Products
      </button>
    </div>
  );
};
