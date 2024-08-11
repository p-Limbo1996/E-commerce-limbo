import React from "react";
import "./DescriptionBox.css";

const DescriptionBox = () => {
  return (
    <div className="descriptionbox" data-aos="fade-top">
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews (122)</div>
      </div>
      <div className="descriptionbox-description"  >
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est
          perspiciatis non dolores tempore modi deleniti hic optio dolore
          mollitia illum.Lorem ipsum dolor sit amet, consectetur adipisicing
          elit. Est perspiciatis non dolores tempore modi deleniti hic optio
          dolore mollitia illum.Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Est perspiciatis non dolores tempore modi deleniti
          hic optio dolore mollitia illum.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta,
          tempore. Excepturi deserunt quibusdam quae sapiente nemo mollitia
          nobis voluptas, odio, ab consectetur hic facere eos aliquid voluptates
          qui ducimus modi!
        </p>
      </div>
    </div>
  );
};

export default DescriptionBox;
