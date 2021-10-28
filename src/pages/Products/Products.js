import React from 'react';
import InfoSection from '../../components/InfoSection/InfoSection';
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from './Data';

const Products = () => {
  return (
    <>
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjTwo} />
      <InfoSection {...homeObjThree} />
      <InfoSection {...homeObjFour} />
    </>
  );
}

export default Products;