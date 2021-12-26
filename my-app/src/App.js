import logo from './logo.svg';
import './App.css';
import SimpleImageSlider from "react-simple-image-slider"

function App() {
  const images = [
    { url: "./Images/slika 2.png" },
    { url: "./Images/slika 3.png" },
    { url: "./Images/tabela 2.png" }
  ];
  return (
    <div className="App">
     <SimpleImageSlider
                    width={896}
                    height={504}
                    images={images}
                /> 

    </div>
     );
    }

export default App;
