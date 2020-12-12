import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';

import s from './ImageGallery.module.scss';
export default function ImageGallery() {
  return (
    <ul className={s.ImageGallery}>
      <ImageGalleryItem />
    </ul>
  );
}
