import React from "react";

const About = () => {
  return (
    <div class="my-5 px-5 mx-auto">
      <div class="g-3 row row-cols-lg-2 row-cols-sm-1 row-cols-1">
        <div class="col">
          <img
            src="https://miro.medium.com/max/1024/1*ma3ghDtxhV0Je0BCR3XdrQ.jpeg"
            class="img-fluid"
            alt=""
          />
        </div>
        <div class="d-flex flex-column justify-content-center col">
          <h5 class="text-success">About Adventour</h5>
          <h3>The Best Travel Agency Company.</h3>
          <p class="text-muted">
          Traveling is one of the best ways to learn more about yourself. Every day traveling brings a new set of issues and opportunities. The way you handle those also gives you insight into who you are. You'll come home knowing yourself better, and with a fresh perspective on what you want out of life. According to neuroscientists, when we travel, we rewire our brains. This is because new experiences are the key to building new neural pathways in the brain. By rewiring your brain, you become more creative and accepting of new ideas. This is why travel makes you happy .
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
