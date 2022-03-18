import React from "react";
import Link from "../components/Link";
import './Footer.jsx'
import { Filter } from "../constants/constants";

const Footer = () => {
  return (
    <div>
      <Link filter={Filter.SHOW_ALL}>All</Link>
      <Link filter={Filter.SHOW_ACTIVE}>Active</Link>
      <Link filter={Filter.SHOW_COMPLETE}>Complete</Link>
    </div>
  );
};

export default Footer;
