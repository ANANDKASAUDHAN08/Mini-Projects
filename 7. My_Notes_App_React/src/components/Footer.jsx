import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>COPYRIGHT &#169; {year} by AK_0811</p>
    </footer>
  );
}

export default Footer;
