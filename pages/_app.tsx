import DatePickerLeft from 'assets/DatePickerLeft.svg'
import DatePickerRight from 'assets/DatePickerRight.svg'
import GlobeIcon from 'assets/DropdownGlobe.svg'
import AustriaFlag from 'assets/flags/austria.svg'
import ChinaFlag from 'assets/flags/china.svg'
import FranceFlag from 'assets/flags/france.svg'
import GreeceFlag from 'assets/flags/greece.svg'
import ItalyFlag from 'assets/flags/italy.svg'
import NetherlandsFlag from 'assets/flags/netherlands.svg'
import PortgualFlag from 'assets/flags/portugal.svg'
import SlovakiaFlag from 'assets/flags/slovakia.svg'
import SpainFlag from 'assets/flags/spain.svg'
import SweedenFlag from 'assets/flags/sweden.svg'
import UnitedKingdomFlag from 'assets/flags/united-kingdom.svg'
import NavMenu from 'components/NavMenu'
import MenuProvider from 'contexts/MenuContext'
import TripProvider from 'contexts/TripContext'
import type { NextPage } from 'next'
import Head from 'next/head'
import React from 'react'
import styled from 'styled-components'
import GlobalStyle from 'utils/style/global'
import { device } from 'utils/style/responsive'

const flags = {
  globe: GlobeIcon,
  at: AustriaFlag,
  cn: ChinaFlag,
  fr: FranceFlag,
  gr: GreeceFlag,
  it: ItalyFlag,
  aw: NetherlandsFlag,
  pt: PortgualFlag,
  sk: SlovakiaFlag,
  es: SpainFlag,
  se: SweedenFlag,
  uk: UnitedKingdomFlag,
} as const

const App: NextPage<any, any> = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <link rel='icon' href='/cleevio.svg' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta name='theme-color' content='#000000' />
        <meta name='Cleevio trips MVP' content='Keep track of your trips' />
        <link rel='apple-touch-icon' href='/cleevio.svg' />

        <link rel='manifest' href='/manifest.json' />
        <link rel='preconnect' href='https://fonts.gstatic.com'></link>
        <link
          href='https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600&display=optional'
          rel='stylesheet'
        />
      </Head>
      <GlobalStyle leftArrow={DatePickerLeft} rightArrow={DatePickerRight} flags={flags} />
      <MenuProvider>
        <Container className='App'>
          <TripProvider>
            <NavMenu />
            <Main>
              <Component {...pageProps} />
            </Main>
          </TripProvider>
        </Container>
      </MenuProvider>
    </>
  )
}

export default App

const Container = styled.div`
  display: flex;
  grid-template-columns: 240px 1fr;
`

const Main = styled.main`
  width: 100%;
  display: flex;
  justify-content: center;

  @media ${device.mobileL} {
    padding: 0;
  }
`
