import React from 'react';
// import ProductData from '../ProductData';
import styles from './ProdDetails.module.css';

const ProdDetails = (props) => {
  const colorOptions = props.data.colorOptions.map((item, pos) => {
    return (
      <img
        key={pos}
        src={item.imageUrl}
        onClick={() => props.onClickColor(pos)}
        className={props.sItem === pos ? styles.imgSelected : styles.imgUnSel}
      />
    );
  });

  const ProdFunction = props.data.featureList.map((item, pos) => {
    // const stl = styles.ProdFunction.button2;

    return (
      <button
        className={props.sFeature === pos ? styles.btn2 : styles.btn1}
        onClick={() => props.onClickFeature(pos)}
      >
        {item}
      </button>
      // </div>
    );
  });

  return (
    <div className={styles.ProdDetails}>
      <h2>{props.data.title}</h2>
      <p>{props.data.description}</p>

      <div>
        <h3>Select Color</h3>
        <div className={styles.ProdCategory}>{colorOptions}</div>
      </div>

      {/* <div className={styles.ProdFunction}> */}
      <div>
        <h3>Select Feature</h3>
        {ProdFunction}
      </div>
    </div>
  );
};

export default ProdDetails;
