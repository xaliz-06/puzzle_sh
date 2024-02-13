import styles from './Box.module.css';

const Box = ({ member }) => {
  return (
    <div className={styles.box_container}>
      <div className={styles.img_container}>
        <img src={member.img} alt="member_img" className={styles.profile_img} />
        <div className={styles.icons_container}>
          <a href={member.ig_link} target="_blank">
            <i className="fa-brands fa-instagram"></i>
          </a>
          <a href={member.linkedin_link} target="_blank">
            <i className="fa-brands fa-linkedin"></i>
          </a>
          <a href={member.twitter_link} target="_blank">
            <i className="fa-brands fa-x-twitter"></i>
          </a>
        </div>
      </div>
      <div className={styles.member_details}>
        <h3>{member.name}</h3>
      </div>
    </div>
  );
};

export default Box;
