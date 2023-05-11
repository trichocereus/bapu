import logo from './assets/full.png';
import es from './assets/es.png'
import tg from './assets/tg.png'
import tw from './assets/tw.png'
import db from './assets/db.png'
import dx from './assets/dx.png'
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
          <div className='item'>
            <a href='https://www.dextools.io/app/en/ether/pair-explorer/0x1dbf244d47651d40ecbeb791d2a3856572d5e47b'><img src={dx} width='55px'/></a>
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
        <h1>GOKU'S HOME</h1>
        <h1>ON THE ETHEREUM BLOCKCHAIN</h1>
        <div className='container'>
          <div className='item2' >
            <img src={db} width='150vw'/>
          </div>
          <div className='item2'>
            <img src={db} width='150vw'/>
          </div>
          <div className='item2'>
            <img src={db} width='150vw'/>
          </div>
        </div>
        <p className='title'>Welcome, fellow Dragon Ball Z enthusiasts!</p>
        <p className='main'>
          Prepare to embark on an exciting new adventure that combines the power of Dragon Ball Z with the technology of the Ethereum blockchain.
        </p>
        <p className='main2'>
          We understand that being based means more than just staying true to the principles of blockchain technology. It means having the strength of character and the fortitude to remain grounded in the face of adversity. $GOKU coin represents the unyielding spirit of the Dragon Ball Z multiverse - the same spirit that drives our community to innovate and push the boundaries of what's possible.
        </p>
        <img src={db} width='150vw'/>
        <p className='main'>
          By buying $GOKU coin, you can become part of a community that is not only passionate about the Dragon Ball Z multiverse but also dedicated to harnessing its power to achieve something greater than ourselves. So come join us on this epic adventure, and let's unlock the full potential of the dragon, together.
        </p>
        <p className='title2'>CONTRACT RENOUNCE COMING SOON!</p>
      </body>
    </div>
  );
}

export default App;
