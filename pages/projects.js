import React, { useEffect, useRef } from "react";
import Base from "../components/Base";
import Button from "../components/util/Button";
import Container from "../components/util/Container";
import styles from "../styles/projects.module.scss";
import Image from "next/image";
import { useRouter } from "next/router";

export default function Projects() {
  const mousemove = useRef();
  const router = useRouter();

  const projects = [
    {
      id: "flappy-bird",
      name: "Flappy Bird",
      desc: "It is the flappy bird game you already know. I have made it using pygame in python but it is an exe file which can run on any computer and and does not depend on python. Just enjoy the game.",
      img: "/images/projects/flappyBird.png",
      github: "https://github.com/karanjot-s/Flappy-Bird-By-Karanjot-Singh",
      button: {
        text: "Download",
        link: "https://github.com/karanjot-s/Flappy-Bird-By-Karanjot-Singh/releases/download/1.0/FlappyBirdByKaranjotSingh.rar",
      },
    },
    {
      id: "tic-tac-toe",
      name: "Tic Tac Toe",
      desc: "A Tic Tac Toe web app. You can play with your friends. Its made with AngularJS and TailwindCSS hosted on firebase. It is also a PWA i.e. you can install it on any device. Just go to link and click on install tic-tac-toe button.",
      img: "/images/projects/tictactoe.png",
      github: "https://github.com/karanjot-s/AngularTicTacToe",
      button: {
        text: "Visit",
        link: "https://tictactoe-41295.web.app/",
      },
    },
    {
      id: "ksdrive",
      name: "KSDrive",
      desc: "KSDrive is a google drive clone made using React and Firebase. Its a production ready website with backend and frontend ready. Visit it, signup and start try uploading some documents.",
      img: "/images/projects/KSDrive.png",
      github: "https://github.com/karanjot-s/KSDrive",
      button: {
        text: "Visit",
        link: "https://ksdrive-prod.web.app/",
      },
    },
    {
      id: "notepad",
      name: "Python Notepad",
      desc: "A notepad app for windows. It is made using tkinter in python. To run it you need to install python, then install the tkinter package and just run the program. It contains all basic features like cut copy paste. It also has dark mode.",
      img: "/images/projects/notepad.png",
      github: "https://github.com/karanjot-s/Notepad-By-Karanjot-Singh",
      button: {
        text: "Download",
        link: "https://github.com/karanjot-s/Notepad-By-Karanjot-Singh/releases/download/v1.0/Notepad.rar",
      },
    },
  ];

  useEffect(() => {
    const handleMouse = (e) => {
      var x = e.clientX;
      var y = e.clientY;
      var distX = window.innerWidth / 2 - x;
      var distY = window.innerHeight / 2 - y;

      var percenX = distX / window.innerWidth;
      var percenY = distY / window.innerHeight;

      mousemove.current.style.transform = `translate(${percenX}%, ${percenY}%)`;
    };
    window.addEventListener("mousemove", handleMouse);

    return () => {
      window.removeEventListener("mousemove", handleMouse);
    };
  });

  return (
    <Base page={"projects"}>
      <div className={styles.introBack}>
        <div className={styles.base} />
      </div>
      <div className={styles.introBackCover} />

      <div className={styles.intro}>
        <div className={styles.mousemove} ref={mousemove}>
          <img src="/images/Person.svg" />
        </div>

        <div className={styles.introText}>
          <h1>My Projects</h1>
          <p>
            Scroll to view them <span>↓</span>
          </p>
        </div>
      </div>

      {projects.map((project, key) => {
        return key % 2 === 0 ? (
          <Container
            id={project.id}
            key={key}
            className={styles.project}
            color={"white"}
            bg={"blue"}
          >
            <div className={styles.projectImg}>
              <Image
                src={project.img}
                alt={project.name}
                width={500}
                height={500}
                layout="responsive"
              />
            </div>
            <div className={styles.projectText}>
              <h3>{project.name}</h3>
              <p>{project.desc}</p>
              <div className={styles.btns}>
                <Button
                  color={"white"}
                  bg={"green"}
                  onClick={() => {
                    window.open(project.github, "_blank");
                  }}
                >
                  Github
                </Button>
                <Button
                  color={"black"}
                  bg={"yellow"}
                  onClick={() => {
                    window.open(project.button.link, "_blank");
                  }}
                >
                  {project.button.text}
                </Button>
              </div>
            </div>
          </Container>
        ) : (
          <Container
            id={project.id}
            key={key}
            className={`${styles.project} ${styles.alt}`}
            color={"black"}
            bg={"yellow"}
          >
            <div className={styles.projectImg}>
              <Image
                src={project.img}
                alt={project.name}
                width={500}
                height={500}
                layout="responsive"
              />
            </div>
            <div className={styles.projectText}>
              <h3>{project.name}</h3>
              <p>{project.desc}</p>
              <div className={styles.btns}>
                <Button
                  color={"white"}
                  bg={"green"}
                  onClick={() => {
                    window.open(project.github, "_blank");
                  }}
                >
                  Github
                </Button>
                <Button
                  color={"white"}
                  bg={"blue"}
                  onClick={() => {
                    window.open(project.button.link, "_blank");
                  }}
                >
                  {project.button.text}
                </Button>
              </div>
            </div>
          </Container>
        );
      })}
    </Base>
  );
}
