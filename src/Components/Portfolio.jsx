/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/project.jpg";

const imageAltText = "Project Image";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Spotify Clone ",
    description:
      "A Spotify clone built with HTML, CSS, JavaScript. This project is a simplified version of the popular music streaming service. Spotify. It allows users to play songs, play previous and next songs, increase/decrease/mute volume of songs. It is a responsive website.",
    url: "https://github.com/mugdhaz31/spotify_clone.git",
  },
  {
    title: "To-Do-List",
    description:
      "This To-Do List App is a simple and intuitive task management application that allows users to efficiently organize their daily activities. Users can add tasks, delete tasks, and mark tasks as complete. Each task is timestamped with the date and time when it was added and completed, providing a clear record of your productivity.",
    url: "https://github.com/microsoft/web-dev-for-beginners",
  },
  {
    title: "Amazon Clone",
    description:
      "Developed an Amazon clone project using HTML and CSS.",
    url: "https://github.com/mugdhaz31/Amazon_Clone.git",
  },
  {
    title: "Dlyan Estate",
    description:
      "Dlyan Estate is a visionary real estate project focused on creating sustainable and modern living spaces that blend comfort, innovation, and community.",
    url: "https://github.com/mugdhaz31/Dylan_Estates.git",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Projects</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
