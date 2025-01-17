import styles from "@/components/banner/BannerAnimation.module.css";

const BannerAnimation: React.FC<BannerAnimationProps> = ({ images, speed = 5000, imageHeight = 300 }) => {
  const style = {
    "--speed": `${speed}ms`,
  } as React.CSSProperties;

  return (
    <div className={styles.inner} style={{ height: `${imageHeight}px` }}>
      <div className={styles.wrapper}>
        {[...Array(3)].map((_, i) => (
          <section className={styles.section} style={style} key={i}>
            {images.map(({ id, image }) => (
              <div
                className={styles.image}
                key={`${id}-${i}`}
                style={{ height: `${imageHeight}px` }}
              >
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
  images: ImageItem[];
  speed?: number;
  imageHeight?: number; // Optional height prop for images
}

interface ImageItem {
  id: string;
  image: string;
}
