import React, { useState, useEffect } from 'react'; /* les hooks useState, pour l'état du composant et useEffect pour les effets */
import '../styles/Carousel.css'; /* Style.css pour la mise en forme du composant carrousel */

function Carousel({ slides }) { /* slides = props */
  const [currentSlide, setCurrentSlide] = useState(0); /* currenslide est l'état ou state que useState 
                                                      initialise à zéro et setCurrenslide met à jour le state via useEffect */

  useEffect(() => { /* ici useEffect est utilisé comme minuteur toutes les 5 secondes, l'image changera grâce à setCurrenSlide 
                    ou encore la fonction useEffect qui met à jour le state currenSlide*/
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides]); /* le tableau slides est réinitialisé à chaque changement d'image grâce à useEffect */

  const countNumberNext = () => {
    setCurrentSlide((currentSlide + 1) % slides.length);
  }
  const countNumberPrev = () => {
    setCurrentSlide((currentSlide - 1 + slides.length) % slides.length);
  }

  return ( /* Ensuite est retourné en interface utilisateur un tableau d'image où currensSlide est l'index et slides, props, est la liste */
    <div className="carousel">
      <div className='counter'>{`${currentSlide + 1}/${slides.length}`}</div>
      <img
        src={slides[currentSlide]}
        alt={`Slide ${currentSlide}`}
      />
      <button
        className="arrowLeft" /* Bouton de navigation gauche et le gestinnaire d'évènements onClick au lieu et place du addEventListener */
        onClick={countNumberNext}
      >
        &#8592; 
      </button>
      <button
        className="arrowRight"
        onClick={countNumberPrev}
      >
        &#8594;
      </button>
    </div>
  );
}



export default Carousel; /* Exporation du carrousel pour pouvoir le réutliser ailleurs */ 
/* &#859, Entité de caractère numérique représentant la flèche gauche */

