import { Link } from 'react-router-dom';
import Card from '../ui/Card';

import styles from './Excerpt.module.css';

const Excerpt = () => {
  return (
    <div className={styles.excerpt_container}>
      <Card>
        <div className={styles.excerpt_text_box}>
          <h1 className={styles.header}>
            Excerpt from{' '}
            <span className={styles.special}>
              <i>&apos;The Adventure of the Dancing Men&apos;</i>
            </span>{' '}
            <span className={styles.special_text}>(1903)</span> by Arthur{' '}
            <span className={styles.special_text}>Conan</span> Doyle
          </h1>
          <p className={styles.excerpt_text}>
            HOLMES had been seated for some hours in silence with his long, thin
            back curved over a chemical vessel in which he was brewing a
            particularly malodorous product. His head was sunk upon his breast,
            and he looked from my point of view like a strange, lank bird, with
            dull grey plumage and a black top-knot. <br />
            <br />
            “So, Watson,” said he, suddenly, “you do not propose to invest in
            South African securities?” I gave a start of astonishment.
            Accustomed as I was to Holmes’s curious faculties, this sudden
            intrusion into my most intimate thoughts was utterly inexplicable.{' '}
            <br />
            <br />
            “How on earth do you know that?” I asked. He wheeled round upon his
            stool, with a steaming test-tube in his hand and a gleam of
            amusement in his deep-set eyes. <br />
            <br />
            “Now, Watson, confess yourself utterly taken aback,” said he. “I
            am.” <br />
            <br />
            “I ought to make you sign a paper to that effect.” <br />
            <br />
            “Why?” <br />
            <br />
            “Because in five minutes you will say that it is all so absurdly
            simple.” <br />
            <br />
            “I am sure that I shall say nothing of the kind.” <br />
            <br />
            “You see, my dear Watson”—he propped his test-tube in the rack and
            began to lecture with the air of a professor addressing his
            class—“it is not really difficult to construct a series of
            inferences, each dependent upon its predecessor and each simple in
            itself. If, after doing so, one simply knocks out all the central
            inferences and presents one’s audience with the starting-point and
            the conclusion, one may produce a startling, though possibly a
            meretricious, effect. Now, it was not really difficult, by an
            inspection of the groove between your left forefinger and thumb, to
            feel sure that you did NOT propose to invest your small capital in
            the goldfields.” <br />
            <br />
            “I see no connection.” <br />
            <br />
            “Very likely not; but I can quickly show you a close connection.
            Here are the missing{' '}
            <Link
              to="https://en.wikipedia.org/wiki/Julius_Caesar"
              target="_blank"
              className={styles.special_link}
            >
              links
            </Link>{' '}
            of the very simple chain: 1. You had chalk between your left finger
            and thumb when you returned from the club last night. 2. You put
            chalk there when you play billiards to steady the cue. 3. You never
            play billiards except with Thurston. 4. You told me four weeks ago
            that Thurston had an option on some South African property which
            would expire in a month, and which he desired you to share with him.
            5. Your cheque-book is locked in my drawer, and you have not asked
            for the key. 6. You do not propose to invest your money in this
            manner.”
            <br />
            <br />
            “How absurdly simple!” I cried.
          </p>
        </div>
      </Card>
    </div>
  );
};

export default Excerpt;
