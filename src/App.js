import logo from './assets/full.png';
import es from './assets/es.png'
import tg from './assets/tg.png'
import tw from './assets/tw.png'
import './App.css';

function App() {
  return (
    <div className="App">
      <div className='Stars'>
        <div id="stars" />
        <div id="stars2" />
        <div id="stars3" />
      </div>
      <header className="App-header">
        <div className='container'>
          <div className='item'>
            <a href='https://etherscan.io/token/0x9872fcc6cc3ccf7aad36b081b6d5bb0b468b8478'><img src={es} width='60px'/></a>
          </div>
          <div className='item'>
            <a href='https://t.me/+Go3XKiHO0IA0Yzkx'><img src={tg} width='60px'/></a>
          </div>
          <div className='item'>
            <a href='https://twitter.com/GokuEthCoin'><img src={tw} width='60px'/></a>
          </div>
        </div>
        <h1>WELCOME TO UNIVERSE SEVEN</h1>
      </header>
      <body>
        <div className='container'>
          <div className='side'>
            0% BUY TAX
          </div>
          <div>
            <img src={logo} className="App-logo" alt="logo" width='500vw'/>
          </div>
          <div className='side'>
            0% SELL TAX
          </div>
        </div>
        <p className='bottom'>GOKU'S HOME</p>
        <h1>ON THE ETHEREUM BLOCKCHAIN</h1>
        <p className='side'>With my newfound power, I can beat anyone</p>
      </body>
    </div>
  );
}

export default App;
