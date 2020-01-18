import React from "react";
import "tachyons";

const NavigationBar = props => {
  return (
    <nav class="bt bb tc mw7 center mt4">
      <a
        class="f6 f5-l link bg-animate black-80 hover-bg-lightest-blue dib pa3 ph4-l"
        href="/"
      >
        Home
      </a>
      <a
        class="f6 f5-l link bg-animate black-80 hover-bg-light-green dib pa3 ph4-l"
        href="/portfolio"
      >
        Portfolio
      </a>
      <a
        class="f6 f5-l link bg-animate black-80 hover-bg-light-blue dib pa3 ph4-l"
        href="/shop"
      >
        Shop
      </a>
      <a
        class="f6 f5-l link bg-animate black-80 hover-bg-light-pink dib pa3 ph4-l"
        href="/about"
      >
        About
      </a>
      <a
        class="f6 f5-l link bg-animate black-80 hover-bg-light-yellow dib pa3 ph4-l"
        href="/contact"
      >
        Contact
      </a>
    </nav>
  );
};

export default NavigationBar;
