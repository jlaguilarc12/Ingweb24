import logo from './logo.svg';
import './App.css';
import Testimonio from './componentes/Testimonio';

function App() {
  return (
    <div className='App'>
      <h1>Página de testimonios de la IU Digital</h1>
      <Testimonio 
        nombre='Jose Aguilar'
        imagen='jose.jpg'
        cargo='Ingeniero desarrollador aws'
        empresa='GNS'
        testimonio='La universidad es una institución de gra valor, aporte y muestra de conocimiento y fortalecimiento del departamento.'
      />
      <Testimonio 
        nombre='Jose Aguilar'
        imagen='jose.jpg'
        cargo='Ingeniero desarrollador aws'
        empresa='GNS'
        testimonio='La universidad es una institución de gra valor, aporte y muestra de conocimiento y fortalecimiento del departamento.'
      />
      <Testimonio 
        nombre='Jose Aguilar'
        imagen='jose.jpg'
        cargo='Ingeniero desarrollador aws'
        empresa='GNS'
        testimonio='La universidad es una institución de gra valor, aporte y muestra de conocimiento y fortalecimiento del departamento.'
      />
      <Testimonio 
        nombre='Jose Aguilar'
        imagen='jose.jpg'
        cargo='Ingeniero desarrollador aws'
        empresa='GNS'
        testimonio='La universidad es una institución de gra valor, aporte y muestra de conocimiento y fortalecimiento del departamento.'
      />
    </div>
  );
}

export default App;
