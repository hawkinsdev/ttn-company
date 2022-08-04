import React from 'react'
import PropTypes from 'prop-types'
import { Nav, Container, MainContainer, Sidebar, Main,
    Top, Middle, Bottom , IconButton, IconNav } from './styled'
import IconReact from '../../assets/icons/react.png'
import IconDashboard from '../../assets/icons/dashboard.png'
import IconIncidents from '../../assets/icons/incidents.png'
import IconLogout from '../../assets/icons/logout.png'
import IconAccount from '../../assets/icons/account.png'
import IconNotification from '../../assets/icons/notification.png'
import { Link } from 'react-router-dom'

export const LayoutV = ({ children, Logout, userInfo }) => {
    return (
        <Container>
            <Nav>
                {userInfo?.name}
                <IconNav src={IconNotification} width={20} height={20}/>
                <IconNav src={IconAccount}/>
            </Nav>
            <MainContainer>
                <Sidebar>
                    <Top>
                        <IconButton src={IconReact}/>
                    </Top>
                    <Middle>
                        <Link to={'/home'}>
                            <IconButton src={IconDashboard}/>
                        </Link>
                        <Link to={'/incidents'}>
                            <IconButton src={IconIncidents}/>
                        </Link>
                    </Middle>
                    <Bottom>
                        <IconButton src={IconLogout} onClick={() => Logout()}/>
                    </Bottom>
                </Sidebar>
                <Main>
                    {children}
                </Main>
            </MainContainer>
        </Container>
    )
}

LayoutV.propTypes = {
    children: PropTypes.node.isRequired,
    Logout: PropTypes.func
}