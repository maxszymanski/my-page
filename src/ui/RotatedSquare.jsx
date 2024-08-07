import styled, { css } from 'styled-components'
import { screenWidth } from '../styles/mediaQueries'
import { shadow } from './ContactInfo'

const position = {
    left: css`
        left: 5em;
        bottom: -1em;
        rotate: 45deg;
        height: 80px;
        width: 80px;
        animation-duration: 90s;
        animation-name: rotateSquareLeft;
    `,
    right: css`
        right: -4em;
        bottom: 4em;
        rotate: 10deg;
        height: 120px;
        width: 120px;
        animation-duration: 120s;
        animation-name: rotateSquareRight;
    `,
}

const RotatedSquare = styled.div`
    position: absolute;
    display: none;
    background-color: transparent;
    border: 1px solid var(--color-gray);
    border-radius: 5px;
    animation-iteration-count: infinite;
    ${(props) => position[props.$position] + ';'}
    ${shadow}

    @media ${screenWidth.xl} {
        display: block;
    }
    @keyframes rotateSquareLeft {
        from {
            rotate: 0;
        }
        to {
            rotate: -315deg;
        }
    }
    @keyframes rotateSquareRight {
        from {
            rotate: 0;
        }
        to {
            rotate: 360deg;
        }
    }
`
RotatedSquare.defaultProps = {
    $position: 'right',
}
export default RotatedSquare
