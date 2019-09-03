import { css } from 'styled-components'

const setColor =
{
    primaryColor: '#af9a7d',
    secondaryColor: '#857daf',
    tertiaryColor: '#a7af7d',
    contrast: '#EDE059',
    mainWhite: '#fff',
    mainBlack: '#222',
    mainGrey: '#EFF3F3',
}


const setFont =
{
    main: "font-family: 'Lato', sans-serif;",
    slanted: "font-family: 'Courgette', cursive;"
}


const setBackground = ({ img , color = 'rgba(0,0,0,0)'} = {}) => 
`
background: linear-gradient(${color}, ${color}), url(${img}) center/ cover fixed no-repeat;
`


const setRem = (number = 16) => 

    `${number / 16}rem`


const setBorder = ({width='2px', style='solid', color='black'} = {}) => 
    
    `border:${width} ${style} ${color}`


const setTransition = ({ property='all', time='0.3s', timing='ease-in-out' } = {}) =>

    `transition: ${property} ${time} ${timing}`


const setFlex = ({ x='center', y='center' } = {}) => 
    `
        display: flex;
        align-items: ${y};
        justify-content: ${x};
    `

const setDirection = direc => 

    `
        ${direc === 'next' ? ' right: 0; span { transform: rotateZ(-90deg); } ' : ''}
        ${direc === 'prev' ? ' left: 0; span { transform: rotateZ(90deg); } ' : ''}
    `

const sizes =
{
    large: 1200,
    desktop: 992,
    tablet: 768,
    phone: 576
}


const media = Object.keys(sizes).reduce((acc, label) => 
{
    acc[label] = (...args) => css`
        @media (max-width: ${sizes[label] / 16}em) {
            ${css(...args)}
        }
    `
    return acc
}, {})

export { media, setRem, setColor, setFont, setDirection, setBorder, setTransition, setFlex, setBackground }