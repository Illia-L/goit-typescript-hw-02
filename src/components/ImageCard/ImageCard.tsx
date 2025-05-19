import { Image } from '../../App.types';
import css from './ImageCard.module.css';

type Props = {
  image: Image;
  setModalImage: (image: Image) => void;
};

function ImageCard({ image, setModalImage }: Props) {
  return (
    <div
      className={css.container}
      onClick={() => setModalImage(image)}
    >
      <img
        className={css.image}
        src={image.urls.small}
        alt={image.description || ''}
      />
    </div>
  );
}

export default ImageCard;
