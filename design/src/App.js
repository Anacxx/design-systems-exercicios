import { ChakraProvider,Button, Card } from '@chakra-ui/react'
import { useState } from 'react';
import Perfil from './Perfil';
function App() {
  const usuario = [
  {
    nome: 'Ana',
    profissao:'Estudante'
  },
  {
    nome: 'Noemi',
    profissao: 'Cuidadora de idosos'
  },
  {
    nome: 'Emily',
    profissao: 'estudante'
  }
]
  const [users,setUsers] = useState(usuario)
  return (
    <ChakraProvider>
      {users.map((user) => {
        return(
          <Perfil user = {user}/>
        )
      })}
    </ChakraProvider>
  );
}

export default App;
