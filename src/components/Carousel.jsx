import React from "react";
import img1 from "../img/img1.jpg";
import img2 from "../img/img2.jpg";
import img3 from "../img/img3.jpg";

const Carousel = () => {
  return (
    <section>
      <div id="carousel" class="carousel slide" data-ride="carousel">
        <ol class="carousel-indicators">
          <li data-target="#carousel" data-slide-to="0" class="active"></li>
          <li data-target="#carousel" data-slide-to="1"></li>
          <li data-target="#carousel" data-slide-to="2"></li>
        </ol>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src={img1} alt="Construction" />
            <div class="overlay">
              <div class="carousel-caption">
                <h3>We Are Certified Builders</h3>
                <h1>Construction Services</h1>
                <h1 class="second_heading">Creative & Professional</h1>
                <p>
                  Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
                  odit aut fugit, sed quia consequuntur magni dolores eos qui
                  ratione voluptatem sequi nesciunt. Neque porro quisquam est,
                  qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
                  velit,
                </p>
                <a class="btn know_btn">know more</a>
                <a class="btn know_btn">view project</a>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <img src={img2} alt="Construction" />
            <div class="overlay">
              <div class="carousel-caption">
                <h3>We are Builders</h3>
                <h1>Construction Services</h1>
                <h1 class="second_heading">Creative & Professional</h1>
                <p>
                  Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
                  odit aut fugit, sed quia consequuntur magni dolores eos qui
                  ratione voluptatem sequi nesciunt. Neque porro quisquam est,
                  qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
                  velit,
                </p>
                <a class="btn know_btn">know more</a>
                <a class="btn know_btn">view project</a>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <img src={img3} alt="Construction" />
            <div class="overlay">
              <div class="carousel-caption">
                <h3>We are Builders</h3>
                <h1>Construction Services</h1>
                <h1 class="second_heading">Creative & Professional</h1>
                <p>
                  Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
                  odit aut fugit, sed quia consequuntur magni dolores eos qui
                  ratione voluptatem sequi nesciunt. Neque porro quisquam est,
                  qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
                  velit,
                </p>
                <a class="btn know_btn">know more</a>
                <a class="btn know_btn">view project</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Carousel;
