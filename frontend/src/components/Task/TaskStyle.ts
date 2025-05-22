import styled from "styled-components";

const Container = styled.div`
    height: 50px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Content = styled.div`
    height: 80%;
    width: 80%;
    background-color: #F4E7E1;
    border-radius: 10px;
    display: flex;
    align-items: center;
`

const Title = styled.div`
    display: flex;
    flex-grow: 1;
    margin-left: 10px;
`

const TrashButton = styled.div`
    background-color: #FC1E3E;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 5px;
    margin-right: 10px;
    border-radius: 10px;
    cursor: pointer;
`

export const TaskStyled = {
    Container,
    Content,
    Title,
    TrashButton
}