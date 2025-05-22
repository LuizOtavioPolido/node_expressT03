import styled from "styled-components";

const Container = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Card = styled.div`
    width: 30%;
    height: 50%;
    display: flex;
    flex-direction: column;
    background-color: #129990;
    border-radius: 10px;
    padding: 5px;
    box-shadow: 3px 2px 19px 1px #129990;
    justify-content: center;
    align-items: center;
    gap: 20px;
`

const Input = styled.input`
    height: 35px;
    width: 80%;
    border-radius: 10px;
    border: none;
`

const Select = styled.select`
    height: 35px;
    width: 80%;
    border-radius: 10px;
    border: none;
`

const Button = styled.button`
    background-color: #DDDDDD;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 8px;
    border: 1px solid #B2C6D5;
    border-radius: 10px;
    cursor: pointer;
`

export const TarefaStyled = {
    Container,
    Card,
    Input,
    Select,
    Button
}