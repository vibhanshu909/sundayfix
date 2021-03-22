import Arrow from 'assets/Arrow.svg'
import { createGlobalStyle, DefaultTheme, GlobalStyleComponent } from 'styled-components'
import { device } from './responsive'

interface IGlobalStyleProps {
  leftArrow: any
  rightArrow: any
  flags: any
}

const GlobalStyle: GlobalStyleComponent<IGlobalStyleProps, DefaultTheme> = createGlobalStyle`
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed, 
  figure, figcaption, footer, header, hgroup, 
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure, 
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  body {
    line-height: 1;
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  *{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  :root {
      --accent: #FED949;
      --dark-grey: #97999B;
      --grey: #F9F9FA;
      --light-grey: #D0D0CE;
      font-family: 'Open Sans', -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
      font-size: 62.5%;
  }

  ::placeholder {
    color:var(--light-grey)
  }

  a {
    text-decoration:none;
  }

  button {
    border: none;
  }

  li {
    list-style: none;
  }

  .Dropdown-control {
    font-size: 1.4rem;
    border: 1px solid #eee;
    padding: 1.3rem 1.6rem;
    border-radius: 10px;
    line-height: 2rem;

    &:hover {
      box-shadow: none;
    }
  }

  .is-open .Dropdown-control {
    border: 1px solid #ccc;
    border-radius: 10px 10px 0 0;
  }

  .Dropdown-arrow {
    top: 18px;
  }

  .Dropdown-placeholder {
    opacity: 0.5;
  }

  .Dropdown-placeholder.is-selected {
    opacity: 1;
  }

  .Dropdown-menu {
    border-radius: 10px;
    border: 1px solid #e4e4e5;
    box-shadow: none;
  }

  .is-open .Dropdown-menu {
    border-radius: 0 0 10px 10px;
  }

  /* width */
  .Dropdown-menu::-webkit-scrollbar {
    width: 10px;
  }

  /* Track */
  .Dropdown-menu::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  /* Handle */
  .Dropdown-menu::-webkit-scrollbar-thumb {
    background: #ccc;
  }

  /* Handle on hover */
  .Dropdown-menu::-webkit-scrollbar-thumb:hover {
    background: #555;
  }

  .react-datepicker-wrapper {
    width: 100%;
    display: block;
  }

  .Dropdown-option.is-selected {
    background: var(--grey);
  }

  .react-datepicker__input-container input {
    font-size: 1.4rem;
    border: 1px solid #eee;
    padding: 1.3rem 1.6rem;
    border-radius: 10px;
    line-height: 2rem;
    border-radius: 10px;
    border: none;
    border: 1px solid #eee;
    outline: 0;
    width: 100%;
    display: block;

    &:focus {
      border: 1px solid #ccc;
    }
  }

  .Dropdown-option {
    font-size: 1.4rem;
    line-height: 2rem;
    padding: 1.3rem 1.4rem;

    + .Dropdown-option {
      border-top: 1px solid #e4e4e5;
    }

    &:hover {
      background: var(--grey)
    }
  }

  .Dropdown-arrow {
    border: 0 !important;
    width: 12px; height: 7px;
    background: url(${Arrow}) no-repeat center;
  }

  .react-datepicker-popper {
    margin: -1px 0 0 0 !important;
    
    * {
      font-family: 'Open Sans' !important
    }
  }

  .react-datepicker {
    font-size: 1.4rem;
    border: 1px solid #E4E4E5 !important;
    border-radius: 0 0 10px 10px;
  }

  .react-datepicker__header {
    background: white !important;
    border: 0 !important;
    color: #A7A8AA;
    text-transform: uppercase;
    font-size: 1.4rem !important;
  }

  .react-datepicker__header .react-datepicker__day-name {
    font-size: 1.2rem !important;
    text-transform: capitalize;
    margin-bottom: 0 !important;
    color: #A7A8AA;
    font-weight: 400;
  }

  .react-datepicker__current-month {
    color: #76787B;
    text-transform: none !important;
    font-weight: inherit;
  }

  .react-datepicker__day-name, .react-datepicker__day, .react-datepicker__time-name {
    width: 3rem !important;
    height: 3rem !important;
    margin: 1rem !important;
    font-size: 1.4rem !important;
    line-height: 3rem;
    border-radius: 10px;
    color: #76787B;
    font-weight: 600;

    @media ${device.mobileL} {
      margin: 0.75rem !important;
    }
  }

  .react-datepicker__day--weekend {
    color: #A7A8AA;
  }

  .react-datepicker__day:hover, .react-datepicker__month-text:hover, .react-datepicker__quarter-text:hover,
  .react-datepicker__year-text:hover {
    border-radius: 10px;
  }

  .react-datepicker__day--keyboard-selected, .react-datepicker__month-text--keyboard-selected,
  .react-datepicker__quarter-text--keyboard-selected, .react-datepicker__year-text--keyboard-selected {
    background: black !important;
    border-radius: 10px;
    color: white;

    &:hover {
      border-radius: 10px;
    }
  }

  .react-datepicker__day--selected, .react-datepicker__day--in-selecting-range, .react-datepicker__day--in-range, .react-datepicker__month-text--selected, .react-datepicker__month-text--in-selecting-range, .react-datepicker__month-text--in-range, .react-datepicker__quarter-text--selected, .react-datepicker__quarter-text--in-selecting-range, .react-datepicker__quarter-text--in-range, .react-datepicker__year-text--selected, .react-datepicker__year-text--in-selecting-range, .react-datepicker__year-text--in-range {
    background: black !important;
    border-radius: 10px;
    color: white;
    outline: 0 !important;
  }

  .react-datepicker__day--outside-month {
    opacity: 0.5;
  }

  .react-datepicker__day--disabled {
    opacity: 0.5;
  }

  input.react-datepicker-ignore-onclickoutside {
    border-radius: 10px 10px 10px 0 !important;
  }

  .react-datepicker__current-month {
    font-size: 1.4rem;
    padding: 1.6rem 2rem;
  }

  .react-datepicker__navigation {
    width: 4rem;
    height: 4rem;
    border-radius: 10px;
    background: var(--grey);
    border: 0 !important;
    outline: 0 !important;

    &:hover {
      background-color: var(--grey);
    }

    @media ${device.mobileL} {
      width: 3rem !important;
      height: 3rem !important;
    }
  }

  .react-datepicker__navigation--previous {
    background: var(--grey) url(${(props) => props.leftArrow}) no-repeat center;
    background-size: 12px
  }

  .react-datepicker__navigation--next {
    background: var(--grey) url(${(props) => props.rightArrow}) no-repeat center;
    background-size: 12px
  }

  .react-datepicker__month--selecting-range .react-datepicker__day--in-range, .react-datepicker__month--selecting-range .react-datepicker__month-text--in-range, .react-datepicker__month--selecting-range .react-datepicker__quarter-text--in-range, .react-datepicker__month--selecting-range .react-datepicker__year-text--in-range {
    color: white !important;
  }

  .Dropdown-root .Dropdown-control {
    background: url(${(props) => props.flags.globe}) no-repeat;
    background-color: white !important;

    &:hover {
      background-color: white !important;
    }
  }

  .Dropdown-root .Dropdown-control, .Dropdown-option {
    padding-left: 5rem !important;
    background-position: 16px 12px !important;
    background-size: 20px !important;

    &:hover {
      background-color: #fafafa !important;
    }
  }

  .Dropdown-root.flag-at .Dropdown-control, .Dropdown-option.flag-at {
    background: url(${(props) => props.flags.at}) no-repeat;
  }
  .Dropdown-root.flag-cn .Dropdown-control, .Dropdown-option.flag-cn {
    background: url(${(props) => props.flags.cn}) no-repeat;
  }
  .Dropdown-root.flag-fr .Dropdown-control, .Dropdown-option.flag-fr {
    background: url(${(props) => props.flags.fr}) no-repeat;
  }
  .Dropdown-root.flag-gr .Dropdown-control, .Dropdown-option.flag-gr {
    background: url(${(props) => props.flags.gr}) no-repeat;
  }
  .Dropdown-root.flag-it .Dropdown-control, .Dropdown-option.flag-it {
    background: url(${(props) => props.flags.it}) no-repeat;
  }
  .Dropdown-root.flag-aw .Dropdown-control, .Dropdown-option.flag-aw {
    background: url(${(props) => props.flags.aw}) no-repeat;
  }
  .Dropdown-root.flag-pt .Dropdown-control, .Dropdown-option.flag-pt {
    background: url(${(props) => props.flags.pt}) no-repeat;
  }
  .Dropdown-root.flag-sk .Dropdown-control, .Dropdown-option.flag-sk {
    background: url(${(props) => props.flags.sk}) no-repeat;
  }
  .Dropdown-root.flag-es .Dropdown-control, .Dropdown-option.flag-es {
    background: url(${(props) => props.flags.es}) no-repeat;
  }
  .Dropdown-root.flag-se .Dropdown-control, .Dropdown-option.flag-se {
    background: url(${(props) => props.flags.se}) no-repeat;
  }
  .Dropdown-root.flag-uk .Dropdown-control, .Dropdown-option.flag-uk {
    background: url(${(props) => props.flags.uk}) no-repeat;
  }

  .Dropdown-root .Dropdown-control {
    background-position: 16px 14px !important;

    &:hover {
      background-color: white !important;
    }
  }
`
export default GlobalStyle
