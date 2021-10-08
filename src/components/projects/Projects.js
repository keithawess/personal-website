import React from "react";
import ProjectDisplay from "./components/ProjectDisplay";
import gameroom from "../../shared/img/gameroom.png";
import cookieDelivery from "../../shared/img/cookie-delivery.png";

function Projects() {
  return (
    <div>
      <div className="text-center text-large">
        <strong>Projects</strong>
      </div>
      <div className="flex flex-wrap justify-space-evenly width-full">
        <ProjectDisplay
          img={gameroom}
          title="Gameroom"
          description="This is a collection of various games I've decided to try to tackle. Uses a couple simple API to make a gaming buddy. Currently features Heads or Tails, Rock Paper Scissors, Tic Tac Toe, and Mastermind. Please allow a few moments while the heroku server spins up."
          link="https://kwess-gameroom.herokuapp.com/"
        />
        <ProjectDisplay
          img={cookieDelivery}
          title="Cookie Delivery"
          description="Cookie based minigame. I had a lot of fun making the character creation page and making my own images. Please allow a few moments while the heroku server spins up."
          link="https://kwess-cookie-delivery.herokuapp.com/"
        />
      </div>
    </div>
  );
}

export default Projects;
