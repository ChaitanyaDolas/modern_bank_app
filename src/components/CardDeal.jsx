import { card } from '../assets';
import styles, { layout } from '../style';
import Button from './Button';

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>Find a better card deal <br className='sm:block hidden' /> in two easy steps.</h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>We thrive to provide better card services than any other international banks. We also offer great offers and deals on your online shopping.</p>
      <Button styles='mt-10' />
    </div>

    <div className={layout.sectionImg}>
      <img src={card} alt="card" className='w-[100%] h-[100%]'/>
    </div>
  </section>
)


export default CardDeal