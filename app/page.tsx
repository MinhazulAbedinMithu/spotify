import Image from "next/image";
import imgBannerGif from "@/public/Yes.gif";
export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between">
      <Image
        src={imgBannerGif}
        // className={styles.image}
        height={500}
        width={2150}
        alt="Gif banner"
      />
    </main>
  );
}
