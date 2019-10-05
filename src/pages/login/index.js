import React, {useState} from 'react'; 
import api from '../../services/api'; 

export default function Login({history}){
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  async function handleSubmit(e){
    e.preventDefault();
  
  const response = await api.post('/session',{
    name,
    email
  });
  const { _id } = response.data;
  localStorage.setItem('user', _id);

  history.push('/dashboard')
}

  return(
    <>
        <p>
          Oferaça <strong>sport</strong> para programadores e encontre <strong>talentos</strong> para sua empresa
        </p>
        
        <form onSubmit={handleSubmit}>
        <label htmlFor="nome">NOME</label>
          <input 
            type="nome" 
            name="nome" 
            id="nome" 
            placeholder="Digite seu nome"
            onChange={e => setName(e.target.value)}
            value={name}
          />
          <label htmlFor="email">E-EMAIL*</label>
          <input 
            type="email" 
            name="email" 
            id="email" 
            placeholder="Seu melhor e-mail"
            onChange={e => setEmail(e.target.value)}
            value={email}
          />
          <button className="btn" type="submit">Entrar</button>
        </form>
    </>
  )
};