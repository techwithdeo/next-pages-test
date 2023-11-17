import React from "react";
import Link from "next/link";

import styles from "../page.module.css";

export default function Contact() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          Current: &nbsp;
          <code className={styles.code}>/contact</code>
        </p>
      </div>

      <div className={styles.grid}>
        <Link href="/" className={styles.card}>
          <h2>
            Home <span>-&gt;</span>
          </h2>
          <p>Go to /</p>
        </Link>

        <Link href="/docs" className={styles.card}>
          <h2>
            Docs <span>-&gt;</span>
          </h2>
          <p>Go to /docs</p>
        </Link>
      </div>
    </main>
  );
}
