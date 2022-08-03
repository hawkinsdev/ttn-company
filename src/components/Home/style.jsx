import styled from 'styled-components'


export const ContentMain = styled.div`
    width: 90%;
    height: 100%;
    margin-top: 100px;
    margin-left: 50px;
`
export const TitleHeader = styled.h1`
    margin-top: 50px;
    width: 183px;
    height: 52px;
    bottom: 672px;
    font-family: 'PT Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 40px;
    line-height: 52px;
    display: flex;
    align-items: flex-end;
    color: #293253;
`
export const BodyMain = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    background: #fff;
    height: auto;
    width: 100%;
`

export const Card = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: auto;
    margin-top: 20px;
`
export const CardBox = styled.div`
    display: flex;
    align-items: center;
    padding: 10px;
    flex-direction: column;
    justify-content: space-between;
    width: ${({width}) => width ? width : 'auto'};
    height: ${({height}) => height ? height : 'auto'};
    background: #FFFFFF;
    box-shadow: 2px 2px 12px 2px rgba(0, 63, 128, 0.08), 2px 4px 8px 2px rgba(0, 63, 128, 0.04);
    border-radius: 15px;
`

export const CardContent = styled.div`
    margin-right: 30px;
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    gap: 10px;
    width: 20%;
    height: 85px;
    background: #FFFFFF;
    border: 2px solid ${({ active, color }) => active ? color : 'none'} ;
    box-shadow: 2px 2px 12px 2px rgba(0, 63, 128, 0.08), 2px 4px 8px 2px rgba(0, 63, 128, 0.04);
    border-radius: 15px;
    flex: none;
    order: 0;
    flex-grow: 0;
`

export const CardSummary = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: space-between;
`
export const CardValue = styled.div``

export const Text = styled.span`
    font-family: 'PT Sans Caption';
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 16px;
    color: ${({color}) => color ? color : '#808191'};
    flex: none;
    order: 0;
    align-self: stretch;
    flex-grow: 0;
`
export const TextValue = styled.span`
    font-family: 'Manrope';
    font-style: normal;
    font-weight: 700;
    font-size: 40px;
    line-height: 55px;
    display: flex;
    align-items: center;
    color: #86878B;
    flex: none;
    order: 1;
    align-self: stretch;
    flex-grow: 0;
`

export const CardChartBar = styled.div`
    display: flex;
    flex-direction: column; 
    align-items: center;
    padding: 10px;
    width: 47%;
    height: 264px;
    border-radius: 15px;
    background: #FFFFFF;
    box-shadow: 2px 2px 12px 2px rgba(0, 63, 128, 0.08), 2px 4px 8px 2px rgba(0, 63, 128, 0.04);
`
export const TitleCharbar = styled.span`
    width: 100%;
    font-family: 'Manrope';
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 25px;
    color: #B1B2BA;
    flex: none;
    order: 0;
    flex-grow: 0;
`

export const ItemPlans = styled.div`
    display: flex;
    align-items: center;
    padding: 3px;
    width: 127px;
    height: 25px;
    background: ${({ active, color }) => active ? '#FDD0D0' : ''}};
    color: ${({ active }) => active ? 'white' : '#A0A1A8'}; //
    border-radius: 24px;
    flex: none;
    order: 0;
    flex-grow: 0;
`

export const Circle = styled.div`
    width: 12px;
    height: 12px;
    background: ${({ active, bgColor }) => active ? '#FDD0D0' : bgColor};
    flex: none;
    order: 0;
    flex-grow: 0;
    border-radius: 50%;
    margin-right: 10px;
`

export const CardFlex = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    width: 40%;
    height: 200px;
`
export const FlexItem = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
    width: 100%;
    height: 20%;
    border-radius: 15px;
    background: #FFFFFF;
    box-shadow: 2px 2px 12px 2px rgba(0, 63, 128, 0.08), 2px 4px 8px 2px rgba(0, 63, 128, 0.04);
`

export const TextFlex = styled.span`
    font-family: 'Manrope';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 19px;
    color: #A0A1A8;
`

export const CardDoughnut = styled.div`
    width: 60px;
    height: 70px;
`
export const CardBar = styled.div`
    width: 100%;
    height: 90%;
`