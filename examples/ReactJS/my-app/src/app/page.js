"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { useState } from "react";

export default function Home() {

  const [reversedName, setReversedName] = useState("");

  const someValue = "Hello World";

  const reverseName = (e) => {
    const inputValue = e.target.value;
    const reversedName = inputValue.split("").reverse().join("");
    setReversedName(reversedName);
  }

  return (
    <>
      <h1 className={styles.title}>Welcome to Next.js!</h1>
      <p>{someValue}</p>
      <input type="text" placeholder="Type here" onInput={reverseName} />
      <div>{ reversedName} </div>
    </>
  );
}
