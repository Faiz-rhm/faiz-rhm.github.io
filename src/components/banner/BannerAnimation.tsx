import styles from "@/components/banner/BannerAnimation.module.css";

const BannerAnimation: React.FC<BannerAnimationProps> = ({ images, speed = 5000 }) => {
  const style = {
    "--speed": `${speed}ms`,
  } as React.CSSProperties;

  return (
    <div className={styles.inner}>
      <div className={styles.wrapper}>
        {[...Array(3)].map((_, i) => (
          <section className={styles.section} style={style} key={i}>
            {images.map(({ id, image }) => (
              <div className={styles.image} key={`${id}-${i}`}>
                <img src={image} alt={`Image ${id}`} />
              </div>
            ))}
          </section>
        ))}
      </div>
    </div>
  );
};


export { BannerAnimation };

interface BannerAnimationProps {
  images: ImageItem[]; // Array of ImageItem objects
  speed?: number; // Optional, defaults to 5000
}

interface ImageItem {
  id: string; // or number if the id is numeric
  image: string; // URL of the image
}
