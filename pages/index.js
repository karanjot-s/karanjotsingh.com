import { Navbar } from "../components/Navbar";
import styles from "../styles/index.module.scss";
import Container from "../components/util/Container";
import Intro from "../components/Intro";
import Button from "../components/util/Button";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const router = useRouter();

  const projects = [
    {
      name: "Flappy Bird",
      link: "/projects/flappy-bird",
      image: "/images/projects/flappyBird.png",
    },
    {
      name: "Tic Tac Toe",
      link: "/projects/tic-tac-toe",
      image: "/images/projects/tictactoe.png",
    },
    {
      name: "KSDrive",
      link: "/projects/ksdrive",
      image: "/images/projects/KSDrive.png",
    },
  ];

  return (
    <div className={styles.bg}>
      <div className={styles.main}>
        <div className={`main-container`}>
          <Navbar current="home" />
          <div className={styles.introBack}>
            <div />
          </div>
          <div className={styles.intro}>
            <Intro className={styles.introText} />
            <div className={styles.subText}>Scroll to know about me</div>
            <div className={styles.subIcon}>&darr;</div>
          </div>
          <Container className={styles.about} color="black" bg="yellow">
            <div className={styles.aboutText}>
              <h1>WHO AM I</h1>
              <p>
                I&apos;m Karanjot Singh, I&apos;m a Python and a Web Developer.
                I can create frontend apps with Vanilla HTML, CSS & JS, React
                using NEXTJS, Bootstrap, TailwindCSS, SASS and more. I can also
                create backends and API with Django, Flask and FastAPI. I&apos;m
                also good at python programming with libraries such as openCV,
                selenium, pygame and more. I am also comfortable working with
                Firebase. I always believe in practicals, i.e. creating
                projects.
              </p>
            </div>
            <div className={styles.aboutImg}>
              <img src="/images/portrait.png" alt="me" />
            </div>
          </Container>

          <Container className={styles.projects} color="black" bg="blue">
            <div className={styles.projectsHead}>
              <h1>A Few of my Projects</h1>
              <img src="/images/rocket.svg" />
            </div>
            <div className={styles.projectsContent}>
              {projects.map((project, key) => {
                return (
                  <div key={key} className={styles.project}>
                    <div className={styles.projectContent}>
                      <div className={styles.projectImg}>
                        <Image
                          src={project.image}
                          alt="project1"
                          width={500}
                          height={500}
                          layout="responsive"
                        />
                      </div>
                      <div className={styles.projectHover}>
                        <div className={styles.projectText}>
                          <h1>{project.name}</h1>
                          <Button
                            color="white"
                            bg="blue"
                            bgClassName={styles.projectBtn}
                            onClick={() => {
                              router.push(project.link).then((_) => {});
                            }}
                          >
                            View Project
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <Button
              color="black"
              bg="yellow"
              onClick={() => {
                router.push("/projects");
              }}
            >
              View More
            </Button>
          </Container>

          <Container className={styles.youtube} color="white" bg="red">
            <img
              className={styles.youtubeTriangle}
              src="/images/triangle.svg"
            />
            <h1>Youtube</h1>
            <div className={styles.youtubeContent}>
              <img src="/images/youtube.png" alt="youtube" />
              <p>
                Code infinite is a youtube channel all about learning
                programming. Here I teach the things I know in the way I would
                like to learn. I try my best to teach the best way I can.
              </p>
            </div>
            <Button
              color="white"
              bg="green"
              onClick={() => {
                window.open(
                  "https://www.youtube.com/channel/UCsI_4RAaiFSGEWeoT4wxjOA",
                  "_blank"
                );
              }}
            >
              View channel
            </Button>
          </Container>

          <Container className={styles.tutorial} color="black" bg="white">
            <h1>Written Tutorials</h1>
            <div className={styles.tutorialContent}>
              <img src="/images/books.svg" alt="youtube" />
              <p>
                I also create written tutorials for the same content as on
                youtube and more. This for later reference of the viewers and
                for those who prefer written tutorials rather than video.
              </p>
            </div>
            <Button
              color="white"
              bg="blue"
              onClick={() => {
                router.push("/tutorials");
              }}
            >
              View them
            </Button>
          </Container>

          <Container
            className={styles.contact}
            id="contact"
            color="white"
            bg="black"
          >
            <div className={styles.socialsDiv}>
              <h2>Wanna know more about me?</h2>
              <div className={styles.socials}>
                <a
                  href="https://www.instagram.com/_karanjot_s/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.social}
                >
                  <img src="/images/instagram.svg" alt="insta" />
                </a>
                <a
                  href="https://www.facebook.com/karanjot.singh.1217/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.social}
                >
                  <img src="/images/facebook.svg" alt="fb" />
                </a>
                <a
                  href="https://twitter.com/_karanjot_s"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.social}
                >
                  <img src="/images/twitter.svg" alt="twitter" />
                </a>
                <a
                  href="https://www.linkedin.com/in/karanjot-s/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.social}
                >
                  <img src="/images/linkedin.svg" alt="linkedin" />
                </a>
                <a
                  href="https://github.com/karanjot-s"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.social}
                >
                  <img src="/images/github.svg" alt="github" />
                </a>
                <a
                  href="mailto:karanjot2409@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.social}
                >
                  <img src="/images/mail.svg" alt="mail" />
                </a>
              </div>
            </div>
            <Button
              color="black"
              bg="yellow"
              onClick={() => {
                router.push("/contact");
              }}
            >
              Contact me
            </Button>
          </Container>
        </div>
      </div>
      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <h2>Karanjot Singh</h2>
          <Link href="#">Scroll to top</Link>
        </div>
      </footer>
    </div>
  );
}
