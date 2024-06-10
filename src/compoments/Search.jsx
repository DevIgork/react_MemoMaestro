import React from "react";
import { MdSearch } from "react-icons/md";
import { useTranslation } from 'react-i18next';

const Search = ({ handleSearchNote }) => {
  const { t } = useTranslation();
  return (
    <div className="search">
      <MdSearch className="search-icons" size="1.3em" />
      <input onChange={(event) => handleSearchNote(event.target.value)} type="text" placeholder={t("search_placeholder")} />
    </div>
  );
};

export default Search;
