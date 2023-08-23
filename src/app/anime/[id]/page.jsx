import { Navbar } from "@/app/components/Navbar";
import styles from "../../styles/animePage.module.css";
import Image from "next/image";
import Link from "next/link";
import { Stars } from "@/app/components/Stars";

import { PeopleLike } from "@/app/components/PeopleLike";
import { Footer } from "@/app/components/Footer";

const getPopular = async (param) => {
  console.log(param);
  const res = await fetch(`https://api.jikan.moe/v4/anime/${param}/full`);
  const data = await res.json();
  return data.data;
};

export default async function page({ params }) {
  const param = params.id;

  const data = await getPopular(param);
  // console.log(data)

  return (
    <div className={styles.animePage}>
      <Navbar />
      <div className={styles.animeBg}></div>

      <div className={styles.animePageImage}>
        <Image
          src={data?.images?.webp?.large_image_url}
          height={600}
          width={700}
          className={styles.animeImageBg}
          alt={data?.titles[0]?.title}
        />

        <Image
          src={data?.images?.webp?.large_image_url}
          height={600}
          width={600}
          className={styles.animeImage}
          alt={data?.titles[0]?.title}
        />
      </div>


      <div className={styles.animeInfo}>
        <h1 className={styles.animeTitle}>{data?.titles[0]?.title}</h1>

        <div className={styles.animeFullInfo}>
          <div className={styles.animeDetails}>
            <div className={styles.rating}>
              <Stars rating={data?.score} />
              <span>|</span>
              <h2 >{data?.status}</h2>
              <span>|</span>
              <h2>{`Rank : ${
                data?.rank === null ? "Not Rated Yet" : data?.rank
              } `}</h2>
            </div>

            <p>{data?.synopsis}</p>
          <div className={styles.animeGenres}>
            {data?.genres.slice(0,3).map((items) => (
              <h3 key={items?.mal_id}>{items?.name}</h3>
              ))}
          </div>

          </div>

{/* Trailer */}
          <div className={styles.animeTrailerInfo}>
            {data?.trailer?.embed_url ? (
              <iframe
              src={data?.trailer?.embed_url}
              frameBorder="0"
              allowFullScreen
              ></iframe>
              ) : (
                <Image
                src={data?.images?.webp?.large_image_url}
                height={300}
                width={300}
                className={styles.animeTrailer}
                alt={data?.title}
                />
                )}
          </div>
        </div>
      </div>


      {data?.streaming.length > 0 && (
        <div className={styles.streaming}>
          <h2>Streaming On</h2>
          <div className={styles.streamingAll}>
            {data?.streaming.slice(0, 5).map((items) => (
              <div className={styles.streamingServices} key={items.length}>
                <a href={items?.url} target="blank">
                  {items?.name}
                </a>
              </div>
            ))}
          </div>
        </div>
      )}

      <PeopleLike param={param} />

    </div>
  );
}
