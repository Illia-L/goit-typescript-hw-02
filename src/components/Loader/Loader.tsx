import { BarLoader } from 'react-spinners'
import css from './Loader.module.css'

type Props = {
  isLoading: boolean
}

function Loader({isLoading}: Props) {
  return (
    <div className={css.container}>
      {isLoading && <BarLoader/>}
    </div>
  )
}

export default Loader

