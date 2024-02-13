import Card from '../components/ui/Card';
import Hr from '../components/ui/Hr';

import styles from './route-styles/About.module.css';

import soumen from '../assets/images/members/soumen_das.jpg';
import swadhin from '../assets/images/members/swadhin_chakra.jpg';
import sounak from '../assets/images/members/sounak_saha.jpg';
import vaashkar from '../assets/images/members/vaashkar_paul.jpg';
import shubham from '../assets/images/members/shubham_nayak.jpg';
import naitik from '../assets/images/members/naitik_nahta.jpg';
import sritam from '../assets/images/members/sai_sritam_sarangi.png';
import swadhin_sarangi from '../assets/images/members/swadhin_sarangi.jpg';
import boibhav from '../assets/images/members/boibhav_chakraborty.jpg';

import Box from '../components/ui/Box';

const members = [
  {
    id: 1,
    name: 'Soumen Das',
    ig_link:
      'https://www.instagram.com/stunner_creature?igsh=MWJrbmV5cWZvbmE0MA',
    linkedin_link:
      'https://www.linkedin.com/in/soumen-das-64469b281?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
    twitter_link: '/dead-end',
    img: soumen,
  },
  {
    id: 2,
    name: 'Swadhin Chakra',
    ig_link: 'https://www.instagram.com/swadhin_8_8?igsh=ZndzbzN0emR5eGFq',
    linkedin_link:
      'https://www.linkedin.com/in/swadhin-kumar-chakra-a39832250/',
    twitter_link: '/dead-end',
    img: swadhin,
  },
  {
    id: 3,
    name: 'Vaashkar Paul',
    ig_link:
      'https://www.instagram.com/the_numb_paradox?utm_source=qr&igsh=N2tsYngwcXRxMDlj',
    linkedin_link:
      'https://www.linkedin.com/in/vaashkar-paul-212bba20b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
    twitter_link: 'https://x.com/Vaashkar?t=Ns5arge38t-5k9MoZWy4Sg&s=08',
    img: vaashkar,
  },
  {
    id: 4,
    name: 'Sounak Saha',
    ig_link: 'https://www.instagram.com/sahasounak12',
    linkedin_link:
      'https://www.linkedin.com/in/sounak-saha-095459253?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app',
    twitter_link: 'https://x.com/sounak22271386?s=21',
    img: sounak,
  },
  {
    id: 5,
    name: 'Sai Sritam Sarangi',
    ig_link:
      'https://www.instagram.com/s_r_i_t_a_m_s_a_r_a_n_g_i?igsh=MWZyMzMwYmllcGU0Mg',
    linkedin_link:
      'https://www.linkedin.com/in/sai-sritam-sarangi-207080202?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
    twitter_link: 'https://x.com/0160S73342?t=4hSiJckszi227mpdQPv1BQ&s=09',
    img: sritam,
  },
  {
    id: 6,
    name: 'Shubham Nayak',
    ig_link: 'https://www.instagram.com/_asteri_x_/',
    linkedin_link:
      'https://www.linkedin.com/in/shubhamnayak014?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
    twitter_link:
      'https://twitter.com/shubhamnayak446?t=6zO1z-IGGkf0t8D881sXpw&s=09',
    img: shubham,
  },
  {
    id: 7,
    name: 'Naitik Nahta',
    ig_link: 'https://www.instagram.com/naitik_nahta/',
    linkedin_link: 'https://in.linkedin.com/in/naitik-nahta-707b6b247',
    twitter_link: 'https://twitter.com/NaitikNahta',
    img: naitik,
  },
  {
    id: 8,
    name: 'Boibhav Chakraborty',
    ig_link: 'https://www.instagram.com/buffering_humor?igsh=aGhmdm96NWc2NnZz',
    linkedin_link: 'https://www.linkedin.com/in/boibhav-chakraborty-4b2461245/',
    twitter_link: 'https://x.com/BoibhavC?t=ZEjSG2lLpezFBGXF2EU02g&s=08',
    img: boibhav,
  },
  {
    id: 9,
    name: 'Swadhin Sarangi',
    ig_link:
      'https://www.instagram.com/acassianswadhin10?igsh=NnRlZm84MHZnc3N2',
    linkedin_link:
      'https://www.linkedin.com/in/swadhin-sarangi-20243a286?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
    twitter_link: 'https://x.com/SwadhinSar74838?t=BNCrFWVWUixtDennHbWHGg&s=09',
    img: swadhin_sarangi,
  },
];

const About = () => {
  return (
    <div className={styles.about_page}>
      <div className={styles.about_container}>
        <Card>
          <div className={styles.member_lists}>
            <h2>OUR MEMBERS</h2>
            <Hr />
            <div className={styles.members_container}>
              <ul className={styles.members_list}>
                {members.map((member) => {
                  return (
                    <li key={member.id}>
                      <Box member={member} />
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default About;
