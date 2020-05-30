import React from "react";
import img1 from "../../../img/img1.jpg";
import img2 from "../../../img/img2.jpg";
import img3 from "../../../img/img3.jpg";

const Carousel = () => {
  return (
    <div id="carousel" className="carousel slide" data-ride="carousel">
      <ol className="carousel-indicators">
        <li data-target="#carousel" data-slide-to="0" className="active"></li>
        <li data-target="#carousel" data-slide-to="1"></li>
        <li data-target="#carousel" data-slide-to="2"></li>
      </ol>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={img1} alt="Construction" />
          <div className="overlay">
            <div className="carousel-caption">
              <h3>We Are Certified Builders</h3>

              <h1 className="second_heading">General Construction Services</h1>
              <p>
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                aut fugit, sed quia consequuntur magni dolores eos qui ratione
                voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem
                ipsum quia dolor sit amet, consectetur, adipisci velit,
              </p>
              <a className="btn know_btn">know more</a>
              <a className="btn know_btn">view project</a>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <img src={img2} alt="Construction" />
          <div className="overlay">
            <div className="carousel-caption">
              <h3>We Are Certified Builders</h3>

              <h1 className="second_heading">Building Consultant Services</h1>
              <p>
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                aut fugit, sed quia consequuntur magni dolores eos qui ratione
                voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem
                ipsum quia dolor sit amet, consectetur, adipisci velit,
              </p>
              <a className="btn know_btn">know more</a>
              <a className="btn know_btn">view project</a>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <img src={img3} alt="Construction" />
          <div className="overlay">
            <div className="carousel-caption">
              <h3>We Are Certified Builders</h3>

              <h1 className="second_heading">Property Developers</h1>
              <p>
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                aut fugit, sed quia consequuntur magni dolores eos qui ratione
                voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem
                ipsum quia dolor sit amet, consectetur, adipisci velit,
              </p>
              <a className="btn know_btn">know more</a>
              <a className="btn know_btn">view project</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
