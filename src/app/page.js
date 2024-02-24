import { Hero, Invitation, ImageGallery, Timeline } from "@/components/export";
import Image from "next/image";
import styles from "./page.module.css";

export const revalidate = 30 // revalidate at most every hour

export default function Home() {
  return (
    <main className={styles.main}>
      <Hero />
      <Invitation />
      <ImageGallery />
     
    </main>
  );
}
