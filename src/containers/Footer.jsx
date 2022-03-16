import React from "react";
import Link from "../components/Link";
import './Footer.jsx'
import { SHOW_ACTIVE, SHOW_ALL, SHOW_COMPLETE } from "../redux/constants";

const Footer = () => {
  return (
    <div>
      <Link filter={SHOW_ALL}>All</Link>
      <Link filter={SHOW_ACTIVE}>Active</Link>
      <Link filter={SHOW_COMPLETE}>Complete</Link>
    </div>
  );
};

export default Footer;
