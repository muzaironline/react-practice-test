import React from 'react';
import styles from './ProdPreview.module.css';

const ProdPreview = (props) => {
  const selection = props.sItem;
  const feature = props.sFeature;
  const currHour = new Date().getHours();
  const currMin = new Date().getMinutes();

  return (
    <div className={styles.ProdPreview}>
      {/* {featureSelect} */}
      <img src={props.data.colorOptions[selection].imageUrl} />
      {feature ? (
        <div className={styles.Heartbeat}>
          <i class="fas fa-heartbeat"></i>
          <div className={styles.p2}>78</div>
        </div>
      ) : (
        <div className={styles.Time}>
          {currHour}:{currMin}
        </div>
      )}
    </div>
  );
};
export default ProdPreview;
