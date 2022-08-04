import styled from 'styled-components'

export const ContentMain = styled.div`
    width: 90%;
    height: 100%;
    background: #ffffff;
    margin-top: 100px;
    margin-left: 50px;
`
export const TitleHeader = styled.div`   
    display: flex;
    align-items: center;
    justify-content: ${({justifyContent}) => justifyContent ? justifyContent : 'space-between'};
    width: 100%;
    height: 52px;
    font-family: 'PT Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 40px;
    line-height: 52px;
    color: #293253;
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
export const ButtonAdd = styled.div`
    width: 100%;
    font-family: 'PT Sans Caption';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
    color: #293253;
    display: flex;
    align-items: center;
    justify-content: right;
    padding: 5px;
    cursor: pointer;
`
export const Icon = styled.img`
    width:  ${({width}) =>  width ? width : '15px'};
    height: ${({height}) =>  height ? height : '15px'};
    cursor: pointer;
    :hover {
        color: #293253;
    }
`
export const CardTable = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 100%;
    height: 100%;
    padding: 10px;
    box-shadow: 2px 2px 12px 2px rgba(0, 63, 128, 0.08), 2px 4px 8px 2px rgba(0, 63, 128, 0.04);
    border-radius: 18px;    
`
export const Acordeon = styled.div`
    display: flex;
    align-items: center;
    padding: 10px;
    justify-content: right;
    background: #E3EBF3;
    border-radius: 8px;
    width: 98%;
    height: 100%;
`
export const AcordeonBody = styled.div`
    background: #E3EBF3;
    border-radius: 0px 0px 8px 8px;
    display: flex;
    flex-wrap: wrap;
    width: 99.7%;
    height: 100%;
    margin-top: -7px;
    paddign: 10px;
`
export const IconArrow = styled.img`
    width: 1%;
    height: 1%;
    cursor: pointer;
`

export const InputAcordeon = styled.input`
    margin: 10px;
    width: 20%;
    height: 30px;
    background: #FFFFFF;
    border: 0.5px solid #D9DDDF;
    border-radius: 8px;
    color: #B4BBBE;
    ::placeholder {
        color: #B4BBBE;
    }
`
export const SelectAcordeon = styled.select`
    margin: 10px;
    width: 20%;
    height: 30px;
    background: #FFFFFF;
    border: 0.5px solid #D9DDDF;
    border-radius: 8px;
    color: #B4BBBE;
`
export const OptionAcordeon = styled.option``

export const Table = styled.table`
    margin-top: 10px;
    width: 100%;
`
export const THead = styled.thead``
export const TBody = styled.tbody``
export const Th = styled.th`
    font-family: 'PT Sans Caption';
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 18px;
    color: #C1C4D1;
`
export const Tr = styled.tr`
    height: 40px;
    padding: 10px;
`
export const Td = styled.td`
    text-align: center;
    font-family: 'PT Sans Caption';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
    color: #293253;
`

//ModalDetail
export const ModalContent = styled.div`
    width: 190vh;
    height: 100vh;
    z-index: 1;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
`
export const ModalBody = styled.div`
    width: 753px;
    height: 70%;
    box-shadow: 8px 8px 18px -6px rgba(0, 63, 128, 0.12), 0px 12px 42px -4px rgba(0, 63, 128, 0.12);
    border-radius: 14px;
    background-color: white;
`
export const ModalItem = styled.div`
    display: flex;
    justify-content: ${({justifyContent}) =>  justifyContent ? justifyContent : 'space-between'};
    padding: 10px;
    width: 98%;
    height: ${({height}) =>  height ? height : '10%'};
`
export const ModalButtonClose = styled.div`
    text-align: center;
    vertical-align: middle;
    width: 20px;
    height: 20px;
    cursor: pointer;
    border-radius: 50%;
    &:hover {
        color: #6E85E9;
    }
`

export const ModalTitle = styled.h1`
    font-family: 'PT Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 31px;
    color: #293253;
`

export const ModalInput = styled.input`
    width: 48%;
    height: 43px;
    background: #FFFFFF;
    border: 0.5px solid  #D9DDDF;
    border-radius: 8px;
    ::placeholder{
        color: #B4BBBE;
    }
`
export const ModalSelect = styled.select`
    width: ${({width}) => width ? width : '100%'};
    height: 43px;
    background: #FFFFFF;
    border: 0.5px solid  #D9DDDF;
    border-radius: 8px;
    color: #B4BBBE;
`
export const ModalOption = styled.option``

export const ModalTextArea = styled.textarea`
    width: 100%;
    height: 120px;
    background: #FFFFFF;
    border: 0.5px solid  #D9DDDF;
    border-radius: 8px;
    ::placeholder{
        color: #B4BBBE;
    }
`

export const ModalButton = styled.button`
    width: 175px;
    height: 46px;
    background: #293253;
    border-radius: 7px;
    font-family: 'PT Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 26px;
    color: #FFFFFF;
    border: none;
    cursor: pointer;
`

//RegisterIncident

export const RegisterContentMain = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 90%;
    height: 100%;
    margin-top: 20px;
    margin-left: 50px;
`

export const CardStepper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 80%;
    height: 112px;
    background: #FAFAFA;
    box-shadow: 6px 6px 14px -6px rgba(0, 63, 128, 0.12), 0px 8px 32px -4px rgba(0, 63, 128, 0.1);
    border-radius: 14px;
`

export const CardStepContent = styled.div`
    display: flex;
    flex-direction: column;
    padding: 20px;
    margin-top: 20px;
    width: 80%;
    height: 55%;
    background: #FFFFFF;
    box-shadow: 6px 6px 14px -6px rgba(0, 63, 128, 0.12), 0px 8px 32px -4px rgba(0, 63, 128, 0.1);
    border-radius: 14px;
`
export const AlingButton = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 20%;
`
export const FormGroup = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 100%;
    height: 100%;
`

