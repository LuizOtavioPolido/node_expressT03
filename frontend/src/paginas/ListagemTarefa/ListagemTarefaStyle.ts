import styled from "styled-components";

const Container = styled.div`
    background-color: #DDDDDD;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

const Card = styled.div`
    width: 30%;
    height: 50%;
    display: flex;
    flex-direction: column;
    background-color: #2A4759;
    border-radius: 10px;
    padding: 5px;
    box-shadow: 3px 2px 19px 1px #2A4759;
`

const DivBotao = styled.div`
    height: 10%;
    width: 100%;
    display: flex;
    justify-content: flex-end;
`

const BotaoAdicionar = styled.button`
    max-height: 100%;
    max-width: 100%;
    background-color: #F0F1C5;
    outline: none;
    border: none;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`

const ItemLista = styled.div`
    width: 100%;
    height: 50px;
    background-color: #f00;
`

export const ListagemTarefaStyled = {
    Container,
    Card,
    DivBotao,
    BotaoAdicionar,
    ItemLista
}