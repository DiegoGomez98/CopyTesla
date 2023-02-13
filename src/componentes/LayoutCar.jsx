import React from 'react';
// import ReactDOM from 'react-dom/client';
import '../stylesheets/LayoutCar.css';
import '../stylesheets/scroll.css';


// EXPORTACIÓN NOMBRADA
// export function LayoutCar() {

  // recurso estático
  // const modelS = new URL(`../../public/assets/img/modelS.jpg`, import.meta.url)

  // const carImg = require.context('../../public/assets/img', true);
  // true se usa para buscar en sub directorios

  // EXPORTACIÓN POR DEFECTO

  const n = 0;

  function LayoutCar(props) {
  return (
    <article className="layout">
      <section className="layout-img">
        <img src={require(`../../public/assets/img/${props.img}.jpg`)} alt="" />
      </section>
      <section className="layout-txt">
        <section className="layout_infoCar">
          <h1 className="layout_infoCar-title"><strong>{props.car}</strong></h1>
          <p className="layout_infoCar-title-p">{props.text}</p>
        </section>
        <section className="layout_buttons">
          <div className='layout_buttons-buy'>
          <a href="!#">Buy Now</a>
          </div>
          <div className='layout_buttons-order'>
            <a href="!#">Custom Order</a>
          </div>
        </section>
      </section>
    </article>
  )
}

export default LayoutCar;