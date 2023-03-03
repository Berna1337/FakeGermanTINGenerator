import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
	return (
		<>
			<Head>
				<title>German TIN Generator</title>
				<meta name="description" content="German TIN Generator" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main className={styles.main}>
				<h1 className={styles.description}>German TIN Generator</h1>
				<div className={styles.code}>
					<div className={styles.card}>
						<p className={styles.description}>
							How many TINs would you like to generate?
						</p>
						<span></span>
						<input className={styles.description}></input>
						<span></span>
						<button className={styles.description}>Generate</button>
					</div>
				</div>

				<div className={styles.grid}>
					<div className={styles.card}>
						<a
							href=""
							className={styles.code}
							target="_blank"
							rel="noopener noreferrer"
						>
							<h2 className={inter.className}>
								Code <span>-&gt;</span>
							</h2>
							<p className={inter.className}>Feel free to contribute!</p>
						</a>
					</div>
					<div></div>
					<div className={styles.content}>
						<p className={styles.description}>
							The TINs appear to be valid when testing with taxid.pro but I'm
							not sure if everything is correct feel free to reach out.
						</p>
					</div>
				</div>
			</main>
		</>
	);
}
