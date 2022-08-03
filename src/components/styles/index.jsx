import styled from 'styled-components'
import Fondo from '../../assets/b3.jpg'


export const ContentMain = styled.div``
    
export const HeaderMain = styled.div`
    background: #a89797;
    background-image:url(${Fondo}) ;
    background-size: cover ;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    height: 45vh;
    width: 100%;
`

export const BodyMain = styled.div`
    background: #fff;
    height: auto;
    width: 100%;
`
export const ButtonCustom = styled.label`
    border: 1px solid #ccc;
    display: inline-block;
    padding: 6px 12px;
    cursor: pointer;
    background-color: #54C8E8;
    border-radius: 3px;
    width: 38%;
    cursor: pointer;
    box-shadow: 0 14px 26px -12px rgb(169 169 169 / 42%), 0 4px 23px 0 rgb(0 0 0 / 12%), 0 8px 10px -5px rgb(169 169 169 / 20%);
`
export const ButtonFile = styled.input`
    display: none;
    
`
export const LinkA = styled.a`
    text-decoration: none;
    color: #3e7c8e;
    &:hover {
        color: #0056b3;
    }
`