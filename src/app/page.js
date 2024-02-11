import { Hero, Invitation, ImageGallery, Timeline } from "@/components/export";
import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <Hero />
      <Invitation />
      <ImageGallery />
     
    </main>
  );
}
