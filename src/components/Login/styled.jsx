import styled from 'styled-components';
import Banner from '../../assets/banner.png'
//S -> Section
export const Container = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    height: 100vh;
    background-color:#e3ebf3;
    @media (max-width: 1024px) {
        background-image: none;  
    }
`
export const SLogin = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    width: 40%;
    background: #f7f9fb;
    height: 80vh;
    box-shadow: 6px 6px 14px -6px rgba(0, 63, 128, 0.12), 0px 8px 32px -4px rgba(0, 63, 128, 0.1);
    border-radius: 25px;
    @media (max-width: 1024px) {
        width: 100%;
    }
`
export const SBanner = styled.div`
    display: flex;
    width: 40%;
    height: 80vh;
    background-image: url(${Banner});
    background-repeat: no-repeat;
    background-size: cover;
`
export const Title = styled.h1`
    width: 70%;
    height: 52px;
    font-family: 'PT Sans Caption';
    font-style: normal;
    font-weight: 700;
    font-size: 40px;
    line-height: 52px;
    color: #2D4857;
    margin-bottom: 40px;
`
export const FromGroup = styled.div`
    width: 100%;
    height: ${({height}) =>height ? height : '15vh' } ;
    display: flex;
    flex-direction: column;
    align-items: center;
`
export const Input = styled.input`
    box-sizing: border-box;
    height: 40px;
    background: #FFFFFF;
    border: 1px solid #BECCFF;
    border-radius: 10px;
    width: ${({width}) => width ? width : '70%'} ;
    &:focus {
        color: #808191;
        outline: none;
        box-shadow: 0px 0px 2px #007bff;;
    }
`
export const Label = styled.span`
    width: 70%;
    height: 16px;
    font-family: 'PT Sans Caption';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    display: flex;
    align-items: center;
    color: #2D4857;
`
export const Button = styled.button`
    border: none;
    border-radius: 3px;
    height: 40px;
    width: 70%;
    background:#2d4857;
    color: white;
    cursor: pointer;
    font-size: 15px;
    font-weight: bold;
    border-radius: 5px;
`












