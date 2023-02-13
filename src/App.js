import './App.css';

// EXPORTACIÓN POR DEFECTO
import LayoutCar from './componentes/LayoutCar';

// EXPORTACIÓN NOMBRADA
// import { LayoutCar } from './componentes/LayoutCar';

function App() {
  return (
    <div className="App">
      <LayoutCar 
      car ='Model 3'
      text='Schedule a Demo Drive'
      img='model3' />

      <LayoutCar 
      car ='Model Y'
      text='Schedule a Demo Drive'
      img='modelY' />

      <LayoutCar 
      car ='Model S'
      text='Schedule a Demo Drive'
      img='modelS' />

      <LayoutCar 
      car ='Model X'
      text='Schedule a Demo Drive'
      img='modelX' />

      <LayoutCar 
      car ='Solar Panels'
      text='Lowest Cost Solar Panels in America'
      img='solarPanels' />
      
      <LayoutCar 
      car ='Solar Roof'
      text='Produce Clean Energy From Your Roof'
      img='solarRoof' />
    </div>
  );
}

export default App;
