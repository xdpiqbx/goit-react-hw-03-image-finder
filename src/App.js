import { Component } from 'react';
import Searchbar from './components/Searchbar/Searchbar';
import ImageGallery from './components/ImageGallery/ImageGallery';
import Loader from 'react-loader-spinner';
import Button from './components/Button';

class App extends Component {
  render() {
    return (
      <div>
        <Searchbar />
        <ImageGallery />
        <Loader type="RevolvingDot" color="#00BFFF" height={100} width={100} />
        <Button />
      </div>
    );
  }
}

export default App;

//https://github.com/goitacademy/react-homework/tree/master/homework-03/image-finder
