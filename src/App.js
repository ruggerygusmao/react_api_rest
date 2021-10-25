import { useState } from 'react';
import './App.css';
import api from './servidor/api';

function App() {

  const [login, setLogin] = useState("");
  const [img, setImg] = useState("");
  const [seguidor, setSeguidor] = useState("");
  const [seguindo, setSeguindo] = useState("");
  const [bio, setBio] = useState("");

   api.get('/ruggerygusmao')
  .then(function (response){
     setImg(response.data.avatar_url);
     setLogin(response.data.login);
     setSeguidor(response.data.followers);
     setSeguindo(response.data.following);
     setBio(response.data.bio);
  })
  .catch(function(error){
    console.log(error);
  })

  return (
    <div className="App">
      <header className="App-header">
        <p className="img">
          <img src={img} alt="imagem" />
        </p>
       <h4 className="user">UserName: {login}</h4>
          <ul>
            <li>Seguidores: {seguidor}</li>
            <li>Seguidores: {seguindo}</li>  
          </ul>

          <p className="bio">{bio}</p>
      </header>
    </div>
  );
}

export default App;
