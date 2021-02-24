import { Button } from'./components/Button' //Importa o button dentro do componente App

import './styles/global.css';

function App() {
  return (
    <div>Hello world
    <p><Button color="blue">
      Botão 1
    </Button>
    </p>
    <Button color="green">
      Botão 2
    </Button>
    </div>
  );
}

export default App;
