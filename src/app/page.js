import Image from "next/image";
import styles from "./page.module.css";
import MainLayout from "@/components/layouts/MainLayout";
import HomePage from "@/components/home";

export default function Home() {
  return (
    <>
    <MainLayout>
      <HomePage/>
    </MainLayout>
    
    </>
  );
}
