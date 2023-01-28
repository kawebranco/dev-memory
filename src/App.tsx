import * as C from './App.styles';
import logoImage from './assets/devmemory_logo.png';

function App() {

  return (
    <div>
      <C.Container> 
        <C.Info> 
          <C.LogoLink href=''>
            <img src={logoImage} width="200" alt="" />
          </C.LogoLink>

          <C.InfoArea>
            ...
          </C.InfoArea>

          <C.Button>Reiniciar</C.Button>

        </C.Info>
        <C.GridArea>

        </C.GridArea>
      </C.Container>
    </div>
  )
}

export default App
