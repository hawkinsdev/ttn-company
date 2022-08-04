import React from 'react'
import PropTypes from 'prop-types'
import {LayoutV} from '../../components/Layout/'

export const LayoutC = ({children}) => {
    const Logout = () => {
        localStorage.removeItem('signin')
        window.location.reload(true);
    }

    const userInfo = JSON.parse(localStorage.getItem('signin'))

    return (
        <LayoutV
            Logout={Logout}
            userInfo={userInfo}
        >
            {children}
        </LayoutV>
    )
}

LayoutC.propTypes = {
    children : PropTypes.node.isRequired
}