import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import "./style.css";
import { useNavigate } from "react-router";
import { QueryKeys } from "../../../constants/QueryKeys";
import { getAPiData } from "../../../http/api";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isSearchOpen, setIsSearchOpen] = useState(true); 

  const fetchData = async () => {
    let filter = `/shoprights?populate=*`; // Remove pagination temporarily

    if (searchTerm) {
      filter += `&filters[desc][$contains]=${encodeURIComponent(searchTerm)}`;
    }

    console.log("Fetching:", filter);
    const response = await getAPiData(filter);
    console.log("API Response:", JSON.stringify(response, null, 2));

    return response?.data || []; // Ensure array
  };

  const closeSearchOverlay = () => {
    setIsSearchOpen(false); // Simply set visibility to false
  };

  const { data: shopData = [], isLoading, isError, error } = useQuery({
    queryKey: [QueryKeys.SHOPRIGHTS, searchTerm],
    queryFn: fetchData,
    enabled: !!searchTerm,
    staleTime: 0, // Ensure fresh data
  });

  
  if (!isSearchOpen) return null;

  return (
    <div className="main-search-active inside">

<div className="close-search-overlay">
       <button className="close-overlay-btn" onClick={closeSearchOverlay}>
          ✖ 
        </button>
      </div>
      <div className="sidebar-search-icon">
        <button className="search-close">
          <span className="icofont-close-circled"></span>
        </button>
      </div>
      <div className="sidebar-search-input">
        <div className="header-search-container form-search">
          <form
            action="/search"
            method="get"
            role="search"
            className="header-search-box animated jackInTheBox"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              id="Search"
              type="search"
              name="q"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="header-search-field input-text"
              placeholder="Search our store"
            />
            <button type="submit">
              <i className="icofont-search-2"></i>
            </button>
          </form>
        </div>

        <div id="predictive-search" className="predictive-search-results">
          {isLoading && <p>Loading...</p>}
          {isError && <p>Error: {error?.message || "Something went wrong"}</p>}
          {shopData.length > 0 ? (
            <ul className="predictive-search__results-list">
              {shopData.map((item) => (
                <li key={item.id} className="predictive-search__list-item">
                  <a href={`/products/${item.id}`} className="predictive-search__item">
                    <img
                      src={`http://localhost:1337${item?.image?.url}`}
                      alt={item?.desc || "No description"}
                      width="50"
                    />
                    <div className="predictive-search__item-content">
                      <span className="predictive-search__item-heading">
                        {item?.desc || "No description"}
                      </span>
                      <div className="price-box">
                        <span className="price-regular">
                          {item?.discountprice ? `$${item.discountprice}` : "Price not available"}
                        </span>
                      </div>
                    </div>
                  </a>
                </li>
              ))}
            </ul>
          ) : searchTerm && !isLoading ? (
            <p>No results found</p>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Search;
