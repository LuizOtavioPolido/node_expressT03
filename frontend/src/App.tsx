import { BrowserRouter, Route, Routes } from 'react-router'
import './App.css'
import ListagemTarefa from './paginas/ListagemTarefa/ListagemTarefa'
import Tarefa from './paginas/Tarefa/Tarefa'

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path='/listagemTarefa' element={<ListagemTarefa />}/>
      <Route path='/tarefa' element={<Tarefa />}/>
      <Route path='/tarefa/:id' element={<Tarefa />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
