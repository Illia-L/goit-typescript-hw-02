import css from './LoadMoreBtn.module.css';

type Props = {
  onLoadMore: () => void;
};

function LoadMoreBtn({ onLoadMore }: Props) {
  return (
    <button
      className={css.button}
      onClick={onLoadMore}
      type='button'
    >
      Load more
    </button>
  );
}

export default LoadMoreBtn;
