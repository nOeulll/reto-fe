import React, { useEffect, useState } from 'react';
import PhotoHorizontal from './PhotoHorizontal';
import PhotoVertical from './PhotoVertical';
import { basicAlbumData } from './data/basicAlbumData';

const MainPhotoList = ({ horizontalToggle }) => {
  return (
    <>
      {
        horizontalToggle ?
        <PhotoHorizontal 
          photoData={basicAlbumData}
        />
          :
        <PhotoVertical
          photoData={basicAlbumData}
        />
      }
    </>
  );
};

export default MainPhotoList;