import styled from 'styled-components'
import { useAppContext } from '../context/useAppContext'
import { Link, useLocation } from 'react-router-dom'
import { screenWidth } from '../styles/mediaQueries'

const LogoImage = styled.img``

const LogoLink = styled(Link)`
    display: ${(props) => (props.$isMobile ? 'inline-flex' : 'none')};
    align-items: center;
    gap: 0.5em;
    padding: 0.5em;
    font-weight: 600;
    transition: color 0.3s;
    font-size: 1.6rem;

    &:hover {
        color: var(--color-white);
    }

    @media ${screenWidth.small} {
        font-size: 1.8rem;
    }
    @media ${screenWidth.lg} {
        display: inline-flex;
        font-size: 2.2rem;
        margin-bottom: 4px;
    }
    @media ${screenWidth.xxl} {
        font-size: 2.4rem;
    }
`

function Logo({ isMobile = false }) {
    const { setShowNav } = useAppContext()
    const { pathname } = useLocation()

    const handleClickLink = () => {
        setShowNav(false)
        pathname === '/' && window.scrollTo(0, 0)
    }

    return (
        <LogoLink to="/" onClick={handleClickLink} $isMobile={isMobile}>
            <LogoImage src="/logo.svg" alt="logo"></LogoImage>
            Max
        </LogoLink>
    )
}

export default Logo
