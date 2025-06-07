import Button from '@mui/material/Button';
import Appbar from '../../components/Appbar/Appbar';

import "./home.scss";

const Home = () => {
  return (
    <div className='home'>
      <Appbar />
      Home Page
      <Button  color='primary'>Hello world</Button>
    </div>
  )
}

export default Home
