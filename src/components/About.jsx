import React from "react";

export default function About() {
  return (
    <section className="about">
      <div className="about__container">
        <h2 className="secondary-heading">About</h2>
        <p className="about__para">
          Hi there! I'm a frontend developer with a passion for creating
          engaging user experiences. Recently, I've been diving into the world
          of ReactJS and I'm absolutely loving it. This is my first project with
          the framework. ^ ^
        </p>
      </div>

      <div className="about__container">
        <h2 className="secondary-heading">Interests</h2>
        <p className="about__para">
          Fiction Fanatic. Noob Guitarist. Badminton Player. Anime enthusiast
        </p>
      </div>
    </section>
  );
}
