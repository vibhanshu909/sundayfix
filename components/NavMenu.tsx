import ClockIcon from 'assets/Clock.svg'
import Close from 'assets/Close.svg'
import EditIcon from 'assets/Edit.svg'
import GlobeIcon from 'assets/Globe.svg'
import LogoIcon from 'assets/Logo.svg'
import Plus from 'assets/Plus.svg'
import { MenuContext } from 'contexts/MenuContext'
import { motion } from 'framer-motion'
import React, { useContext } from 'react'
import styled from 'styled-components'
import { device } from 'utils/style/responsive'
import Anchor from './Anchor'
import SVGIcon from './SVGIcon'

const NavMenu = () => {
  const menuCtx = useContext<any>(MenuContext)

  return (
    <Nav className={`${menuCtx.isMenuOpen ? 'menu--active' : ''}`}>
      <Container>
        {/* {process.browser && window.matchMedia(device.tablet) && ( */}
        {/* <div className='close-menu'> */}
        <CloseMenu onClick={menuCtx.toggleMenu}>
          <SVGIcon icon={Close} width={12} height={12} style={{ marginLeft: 0 }} />
        </CloseMenu>
        {/* </div> */}
        {/* )} */}
        <Logo>
          <Anchor href='/'>
            <SVGIcon icon={LogoIcon} width={120} />
          </Anchor>
        </Logo>

        <MenuItems>
          <Anchor href='/newTrip' skipATag>
            <StyledNavLink onClick={menuCtx.toggleMenu}>
              <NewTrip
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
                whileHover={{
                  scale: 1.05,
                  boxShadow: '2px 2px 5px rgba(0,0,0,0.5)',
                }}
              >
                New Trip
                <SVGIcon icon={Plus} width={16} height={16} />
              </NewTrip>
            </StyledNavLink>
          </Anchor>

          <MenuItem animate={{ x: [-200, 10, 0], transition: { duration: 1 } }}>
            <Anchor href='/' passHref skipATag>
              <StyledNavLink onClick={() => menuCtx.toggleMenu()}>
                <IconWrap>
                  <SVGIcon icon={ClockIcon} width={16} height={16} />
                </IconWrap>
                Your trips
              </StyledNavLink>
            </Anchor>
          </MenuItem>

          <MenuItem
            animate={{
              x: [-200, 10, 0],
              transition: { duration: 1, delay: 0.2 },
            }}
          >
            <NonClickableLink onClick={menuCtx.toggleMenu}>
              <IconWrap>
                <SVGIcon icon={EditIcon} width={16} height={16} />
              </IconWrap>
              Future feature
            </NonClickableLink>
          </MenuItem>

          <MenuItem
            animate={{
              x: [-200, 10, 0],
              transition: { duration: 1, delay: 0.3 },
            }}
          >
            <NonClickableLink onClick={menuCtx.toggleMenu}>
              <IconWrap>
                <SVGIcon icon={GlobeIcon} width={16} height={16} />
              </IconWrap>
              Future section
            </NonClickableLink>
          </MenuItem>
        </MenuItems>
      </Container>
    </Nav>
  )
}

export default NavMenu

const Nav = styled.nav`
  font-size: 1.6rem;
  min-width: 260px;
  height: 180vh;
  color: black;
  background-color: var(--grey);

  @media ${device.tablet} {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: 99999;
    width: 100%;
    display: none;

    &.menu--active {
      display: block;
    }
  }
`

const CloseMenu = styled.span`
  width: 40px;
  height: 40px;
  background: #f1f1f2;
  border-radius: 10px;
  position: absolute;
  left: 40px;
  top: 40px;
  z-index: 99999;
  align-items: center;
  justify-content: center;
  display: none;

  @media ${device.tablet} {
    display: flex;
  }
`

const Container = styled.div`
  padding: 4rem;
`

const Logo = styled.div`
  margin-bottom: 30px;

  @media ${device.tablet} {
    display: flex;
    justify-content: center;
  }
`

const NewTrip = styled(motion.div)`
  flex: 1;
  display: flex;
  background-color: var(--accent);
  font-weight: 600;
  padding: 1.4rem 2rem;
  border-radius: 10px;
  line-height: 2rem;
  margin-bottom: 3rem;
  cursor: pointer;

  svg {
    margin-left: auto;
  }

  a {
    font-size: 1.4rem;
    color: black;
    font-weight: 600;
  }
`

const IconWrap = styled.div`
  display: flex;
  width: 24px;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
`

const MenuItems = styled.ul``
const MenuItem = styled(motion.li)`
  margin: 20px 0;
  cursor: pointer;
`

const StyledNavLink = styled.a`
  text-decoration: none;
  color: black;
  display: flex;
  align-items: center;
  font-size: 1.6rem;
  flex: 1;
  color: #000000;
`

const NonClickableLink = styled.span`
  text-decoration: none;
  color: black;
  display: flex;
  align-items: center;
  font-size: 1.6rem;
  flex: 1;
  color: #97999b;
  opacity: 0.5;
  cursor: initial;
`
