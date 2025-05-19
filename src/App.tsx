import { useEffect, useRef, useState } from 'react';
import ImageGallery from './components/ImageGallery/ImageGallery';
import * as api from './components/images-api';
import SearchBar from './components/SearchBar/SearchBar';
import LoadMoreBtn from './components/LoadMoreBtn/LoadMoreBtn';
import { Toaster } from 'react-hot-toast';
import ImageModal from './components/ImageModal/ImageModal';
import Loader from './components/Loader/Loader';
import ErrorMessage from './components/ErrorMessage/ErrorMessage';
import Modal from 'react-modal'
import { Image, Page, Search } from './App.types';

Modal.setAppElement('#root');

function App() {
  const [images, setImages] = useState<Image[]>([]);
  const [search, setSearch] = useState<Search>('');
  const [page, setPage] = useState<Page>(1);
  const [modalImage, setModalImage] = useState<Image | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const pagesCountRef = useRef<number>(0);

  useEffect(() => {
    if (!search) return;

    addNextImages();
  }, [search, page]);

  async function addNextImages() {
    try {
      setIsLoading(true);
      setIsError(false);

      const response = await api.getImages(search, page);

      pagesCountRef.current = response.total_pages;
      setImages(imgs => [...imgs, ...response.results]);
    } catch (err) {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  }

  function onSubmit(search: string): void {
    pagesCountRef.current = 0;
    setImages([]);
    setSearch(search);
    setPage(1);
  }

  function onLoadMore() {
    setPage(p => p + 1);
  }

  const shouldShowLoadMoreBtn =
    images.length > 0 && page < pagesCountRef.current;

  return (
    <>
      <div>
        <Toaster
          toastOptions={{
            error: { iconTheme: { primary: '#FFC107', secondary: '#fff' } },
          }}
          position='top-right'
        />
      </div>

      <SearchBar onSubmit={onSubmit} />

      {isError ? (
        <ErrorMessage />
      ) : (
        <>
          <ImageGallery
            images={images}
            setModalImage={setModalImage}
          />

          {shouldShowLoadMoreBtn && <LoadMoreBtn onLoadMore={onLoadMore} />}
        </>
      )}

      <Loader isLoading={isLoading} />

      <ImageModal
        modalImage={modalImage}
        setModalImage={setModalImage}
      />
    </>
  );
}

export default App;
