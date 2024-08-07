import { useTranslation } from 'react-i18next'
import styled from 'styled-components'
import { screenWidth } from '../../styles/mediaQueries'
import { PiHandWavingLight } from 'react-icons/pi'

import StyledLink from '../../ui/StyledLink'
import TypingText from '../../ui/TypingText'

const TitleBox = styled.div`
    margin-top: 0.5em;
    text-align: center;

    @media ${screenWidth.md} {
        padding: 0 5em;
    }
    @media ${screenWidth.lg} {
        padding: 0 3em 0 0;
        margin-top: 0;
        text-align: left;
        flex-basis: 60%;
    }
    @media ${screenWidth.xl} {
        padding: 0 8em 0 5em;
    }
`

const Title = styled.h1`
    position: relative;
    font-size: 3.2rem;
    font-weight: 700;
    margin-bottom: 1em;
    min-height: 157px;

    @media ${screenWidth.small} {
        padding: 0 0.5em;
    }

    @media ${screenWidth.lg} {
        padding: 0;
    }
    @media ${screenWidth.xl} {
        font-size: 3.5rem;
        min-height: 173px;
    }
    @media ${screenWidth.xxl} {
        font-size: 4rem;
        min-height: 197px;
    }
`
export const TitleSpan = styled.span`
    color: var(--color-primary);
    font-weight: 800;
    display: inline-block;

    @media ${screenWidth.sm} {
        display: none;
    }
`

const TitleText = styled.p`
    color: var(--color-gray);
    line-height: 2.6rem;

    @media ${screenWidth.md} {
        margin-bottom: 3em;
    }
    @media ${screenWidth.xl} {
        font-size: 1.8rem;
    }
`

const Hand = styled(PiHandWavingLight)`
    color: var(--color-primary);
    margin-bottom: -0.15em;
    height: 39px;
    width: 39px;

    @media ${screenWidth.xl} {
        height: 38px;
        width: 38px;
    }
    @media ${screenWidth.xl} {
        height: 44px;
        width: 44px;
    }
`

function HeaderTitle() {
    const { t } = useTranslation()
    return (
        <TitleBox>
            <Title>
                {t('header.hi')} <Hand />
                <br />
                {t('header.welcome')} <br />{' '}
                <TitleSpan>Front-end Developer</TitleSpan>
                <TypingText />
            </Title>
            <TitleText>{t('header.introduction')}</TitleText>
            <StyledLink isMobile text="header.contactme" to="/contact" />
        </TitleBox>
    )
}

export default HeaderTitle
