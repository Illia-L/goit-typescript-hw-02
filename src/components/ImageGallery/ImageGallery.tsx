import css from './ImageGallery.module.css';
import ImageCard from '../ImageCard/ImageCard';
import { Image } from '../../App.types';

type Props = {
  images: Image[];
  setModalImage: (image: Image) => void;
};

function ImageGallery({ images, setModalImage }: Props) {
  return (
    <ul className={css.list}>
      {images.map(image => (
        <li
          className={css.item}
          key={image.id}
        >
          <ImageCard
            image={image}
            setModalImage={setModalImage}
          />
        </li>
      ))}
    </ul>
  );
}

export default ImageGallery;
