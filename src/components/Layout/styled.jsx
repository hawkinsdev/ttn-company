import styled from 'styled-components'

export const Container = styled.section`
    width:100%;
    height: 100vh; 
`
export const Nav = styled.nav`
    display: flex;
    align-items: center;
    justify-content: right;
    width:100%;
    height: 8%;
    color: #FFFFFF;
    border-bottom: solid 0px lightgrey;
    box-shadow: 0 0 18px #1717193b;
    position: absolute;
    background: #E3EBF3;
`
export const IconNav = styled.img`
    width: ${({width}) => width ? width : '35px'} ;
    height: ${({height}) => height ? height : '35px'};
    cursor: pointer;
    padding: 10px;
`
export const Sidebar = styled.aside`
    width: 4%;
    height: 100%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    background: #2D4857;
    box-shadow: 6px 6px 14px -6px rgba(0, 63, 128, 0.12), 0px 8px 32px -4px rgba(0, 63, 128, 0.1);
    color: white;
`
export const MainContainer = styled.section`
    width:100%;
    height: 100%;
    display:flex;
`
export const Main = styled.main`
    width:100%;
    height: 99vh;
    display: flex;
    align-items: center;
    justify-content: left;
    overflow: scroll;
    background: #ffffff;
`
export const Top = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 10%;
    color: white;  
    margin-top: 70px
`

export const Middle = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 60%;
`

export const Bottom = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 10%;
`

export const IconButton = styled.img`
    width: 70%;
    height: 35px;
    cursor: pointer;
    margin-top: 30px;
`




