import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'
import Header from './components/Header';
import Img from './components/assets/imagenes/Img';
import {Galeria, Parrafo_cards}  from './components/Galeria_cards';
import Footer from './components/Footer';
import './App.css';

function App() {
  return <>
  <Header ruta_img={Img.img1} ruta_img2={Img.img2} />
  <Galeria 
  galeria_img1={Img.g1} texto_1={"harry potter and the philosopher's stone"} dcg_1={Img.des1} galeria_img2={Img.g2}  texto_2="harry potter and the chamber of secrets" dcg_2={Img.des2} galeria_img3={Img.g3} texto_3="harry potter and the chamber of secrets" dcg_3={Img.des3} galeria_img4={Img.g4} texto_4="harry potter and the goblet of fire"  dcg_4={Img.des4}  galeria_img5={Img.g5} texto_5={"harry potter and the order of the phoenix"} dcg_5={Img.des5} galeria_img6={Img.g6} texto_6="harry potter and the half-blood prince" dcg_6={Img.des6} texto_7="PROXIMAMENTE" galeria_img7={Img.g7}
  galeria_img8={Img.g8}   galeria_img9={Img.g9}
  />
  <Parrafo_cards/>
  <Footer/>
   
   
  </>


 
}

export default App;
