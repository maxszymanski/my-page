import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import styled, { css } from 'styled-components'
import { screenWidth } from '../styles/mediaQueries'

export const linkStyles = css`
    border: 1px solid;
    padding: 0.5em 1em;
    display: ${(props) => (props.$isMobile ? 'none' : 'inline-block')};
    background-color: transparent;
    color: var(--color-white);
    transition: background-color 0.3s;
    border-radius: 2px;
    border-color: ${(props) =>
        props.$isPrimary ? 'var(--color-primary)' : 'var(--color-gray)'};

    &:hover {
        background-color: var(--color-primaryLink);
    }

    @media ${screenWidth.md} {
        display: inline-block;
    }
    @media ${screenWidth.xl} {
        font-size: 1.8rem;
    }
    @media ${screenWidth.xxl} {
        font-size: 1.9rem;
    }
`

const PrimaryLink = styled(Link)`
    ${linkStyles}
`

function StyledLink({
    text,
    to,
    isMobile = false,
    isPrimary = true,
    target = '_self',
}) {
    const { t } = useTranslation()
    return (
        <PrimaryLink
            to={to}
            $isMobile={isMobile}
            $isPrimary={isPrimary}
            target={target}
            rel="noopener"
        >
            {t(text)}
        </PrimaryLink>
    )
}

export default StyledLink
