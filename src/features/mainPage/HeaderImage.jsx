import styled from 'styled-components'
import { useTranslation } from 'react-i18next'
import { screenWidth } from '../../styles/mediaQueries'
import { Link } from 'react-router-dom'
import { useAppContext } from '../../context/useAppContext'

export const commonStyles = `
position: relative;
    border: 1px solid var(--color-gray);
    border-radius: 2px;
    padding: 0.8em 0.5em;
`

const WorkingBox = styled.div`
    ${commonStyles}
    display: flex;
    align-items: center;
    gap: 1em;
    width: 100%;
    max-width: 500px;
`
const Square = styled.div`
    height: 16px;
    width: 16px;
    background-color: var(--color-primary);
    flex-shrink: 0;
`

const HeaderImageBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 3em;
    margin-bottom: 0.5em;

    @media ${screenWidth.lg} {
        margin-top: 0;
        flex-basis: 40%;
    }
`
const HeaderImgSmall = styled.img`
    width: 100%;
    max-width: 450px;
    margin-bottom: -0.1em;

    @media ${screenWidth.lg} {
        display: none;
    }
`
const HeaderImgBig = styled.img`
    display: none;
    width: 100%;
    @media ${screenWidth.lg} {
        display: block;
    }
`
export const TitleInfo = styled.p`
    display: flex;
    flex-direction: column;
    color: var(--color-gray);

    @media ${screenWidth.sm} {
        flex-direction: row;
        gap: 0.6em;
        align-items: center;
    }
`

export const TitleLink = styled(Link)`
    color: var(--color-white);
    font-weight: 800;
    transition: color 0.3s;
    position: relative;

    @media ${screenWidth.lg} {
        &:hover::after {
            width: 100%;
        }

        &::after {
            content: '';
            position: absolute;
            width: 0;
            height: 1px;
            bottom: 3px;
            left: 0;
            background-color: var(--color-white);
            transition: width 0.3s;
        }
    }
`

function HeaderImage() {
    const { isDesktop } = useAppContext()
    const { t } = useTranslation()
    return (
        <HeaderImageBox>
            <HeaderImgSmall
                src="./images/header-image.webp"
                alt={t('header.alt')}
                fetchpriority={isDesktop ? 'low' : 'high'}
                loading={isDesktop ? 'lazy' : 'eager'}
            />
            <HeaderImgBig
                src="./images/header-image-big.webp"
                alt={t('header.alt')}
                fetchpriority={isDesktop ? 'high' : 'low'}
                loading={isDesktop ? 'eager' : 'lazy'}
            />
            <WorkingBox>
                <Square />
                <TitleInfo>
                    {t('header.workingon')}{' '}
                    <TitleLink
                        target="_blank"
                        rel="noopener"
                        to="https://academigo.pl/"
                    >
                        Academigo
                    </TitleLink>{' '}
                </TitleInfo>
            </WorkingBox>
        </HeaderImageBox>
    )
}

export default HeaderImage
