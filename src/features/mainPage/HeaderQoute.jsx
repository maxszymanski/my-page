import styled, { css } from 'styled-components'
import { commonStyles } from './HeaderImage'
import { useTranslation } from 'react-i18next'
import { screenWidth } from '../../styles/mediaQueries'
import { shadow } from '../../ui/ContactInfo'
import { useEffect, useState } from 'react'

const QuoteContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
`

const QuoteBox = styled.div`
    ${commonStyles}
    margin-top: 2.5em;
    z-index: 0;
`
const AuthorBox = styled.div`
    ${commonStyles}
    border-top: none;
    flex-grow: 0;
    z-index: 0;
`

const qouteImageStyles = css`
    position: absolute;
    z-index: 1;
    width: 30px;
    background-color: transparent;
`

const QouteTop = styled.img`
    ${qouteImageStyles}
    top: -10px;
    left: 10px;
`
const QouteBottom = styled.img`
    ${qouteImageStyles}
    bottom: -12px;
    right: 10px;
`

const Quote = styled.p`
    color: var(--color-white);
    text-align: center;

    @media ${screenWidth.lg} {
        font-size: 2rem;
        padding: 0.3em;
    }
    @media ${screenWidth.xl} {
        font-size: 2.2rem;
        padding: 0.5em;
    }
`

function HeaderQoute() {
    const [randomNumber, setRandomNumber] = useState(0)
    const { t } = useTranslation()
    const MAX_NUMBER = 12
    const quotes = [
        'one',
        'two',
        'three',
        'four',
        'five',
        'six',
        'seven',
        'eight',
        'nine',
        'ten',
        'eleven',
        'twelve',
    ]
    useEffect(() => {
        setRandomNumber(Math.floor(Math.random() * MAX_NUMBER))
    }, [])

    return (
        <QuoteContainer>
            <QuoteBox>
                <Quote>{t(`quotes.${quotes[randomNumber]}.quote`)}</Quote>
                <QouteTop src="/images/quote.png" alt='"' />
                <QouteBottom src="/images/quote.png" alt='"' />
            </QuoteBox>
            <AuthorBox>
                <Quote>- {t(`quotes.${quotes[randomNumber]}.author`)}</Quote>
            </AuthorBox>
        </QuoteContainer>
    )
}

export default HeaderQoute
