import { useEffect, useState } from 'react';
import { BeatLoader } from 'react-spinners';

import cipher_3 from '../assets/images/cipher_3.png';
import cover_img from '../assets/images/cover_img.jpg';
import moriarty_gif from '../assets/images/moriarty_gif.gif';
import paget_1 from '../assets/images/paget_1.jpg';
import paget_2 from '../assets/images/paget_2.jpg';
import paget_3 from '../assets/images/paget_3.jpg';
import paget_4 from '../assets/images/paget_4.jpg';
import paget_5 from '../assets/images/paget_5.jpg';
import paget_6 from '../assets/images/paget_6.jpg';
import paget_7 from '../assets/images/paget_7.jpg';
import paget_8 from '../assets/images/paget_8.jpg';
import miss_me from '../assets/images/sherlocked-miss-me.gif';
import techroyal_logo from '../assets/images/techroyal_logo.png';
import watson_no from '../assets/images/watson_no.gif';
import wrong_gif from '../assets/images/wrong_gif.gif';
import fall_gif from '../assets/images/reichenbach_gif.gif';
import naitik_nahta from '../assets/images/members/naitik_nahta.jpg';
import sai_sritam_sarangi from '../assets/images/members/sai_sritam_sarangi.png';
import sounak_saha from '../assets/images/members/sounak_saha.jpg';
import shubham_nayak from '../assets/images/members/shubham_nayak.jpg';
import soumen_das from '../assets/images/members/soumen_das.jpg';
import swadhin_chakra from '../assets/images/members/swadhin_chakra.jpg';
import vaashkar_paul from '../assets/images/members/vaashkar_paul.jpg';
import boibhav from '../assets/images/members/boibhav_chakraborty.jpg';

import styles from '../styles/ImagePreloader.module.css';

const imageUrls = [
  cipher_3,
  cover_img,
  moriarty_gif,
  paget_1,
  paget_2,
  paget_3,
  paget_4,
  paget_5,
  paget_6,
  paget_7,
  paget_8,
  miss_me,
  techroyal_logo,
  watson_no,
  wrong_gif,
  fall_gif,
  naitik_nahta,
  sai_sritam_sarangi,
  soumen_das,
  vaashkar_paul,
  shubham_nayak,
  swadhin_chakra,
  sounak_saha,
  boibhav,
];

const ImagePreloader = ({ children }) => {
  const [imagesLoaded, setImagesLoaded] = useState(false);

  useEffect(() => {
    const preloadImages = async () => {
      try {
        const promises = imageUrls.map((url) => {
          return new Promise((resolve, reject) => {
            const img = new Image();
            img.src = url;
            img.onload = resolve;
            img.onerror = () =>
              reject(new Error(`Failed to load image: ${url}`));
          });
        });

        await Promise.all(promises);

        setImagesLoaded(true);
      } catch (error) {
        console.error('Error preloading images:', error);
      }
    };
    preloadImages();
  }, []);

  return (
    <div>
      {!imagesLoaded && (
        <div className={styles.loading_root}>
          <div className={styles.loading_container}>
            <BeatLoader className={styles.loading_spinner} color="#3b3486" />
          </div>
        </div>
      )}
      {imagesLoaded && children}{' '}
    </div>
  );
};

export default ImagePreloader;
