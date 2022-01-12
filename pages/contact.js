import React, { useRef } from "react";
import { useRouter } from "next/router";
import Base from "../components/Base";
import Container from "../components/util/Container";
import styles from "../styles/contact.module.scss";
import Button from "../components/util/Button";

export default function Contact() {
  const router = useRouter();
  const name = useRef();
  const email = useRef();
  const title = useRef();
  const message = useRef();
  const sendMsg = () => {
    const body = `${message.current.value}%0A%0A${name.current.value}%0A${email.current.value}
    `;
    router.push(
      `mailto://karanjot2409@gmail.com?subject=${title.current.value}&body=${body}`
    );
  };

  return (
    <Base contact={false}>
      <Container color={"black"} bg={"yellow"} className={styles.main}>
        <h1>Contact Me</h1>
        <form action="">
          <div className={`${styles.input}`}>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              ref={name}
              placeholder="Enter your name"
            />
          </div>
          <div className={`${styles.input}`}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              ref={email}
              placeholder="Enter you Email ID"
            />
          </div>
          <div className={`${styles.input}`}>
            <label htmlFor="title">Title</label>
            <input
              type="text"
              id="title"
              ref={title}
              placeholder="Enter the Title for Message"
            />
          </div>
          <div className={`${styles.input} ${styles.msg}`}>
            <label htmlFor="msg">Message</label>
            <textarea
              id="msg"
              ref={message}
              rows={5}
              placeholder="Enter your message"
            />
          </div>

          <Button
            color={"white"}
            bg={"blue"}
            onClick={(e) => {
              e.preventDefault();
              sendMsg();
            }}
            // type="submit"
          >
            Submit
          </Button>
        </form>
      </Container>
    </Base>
  );
}
