import { createContext, FC, useState } from 'react'

type MenuContextPayload = {
  isMenuOpen: boolean
  toggleMenu: () => void
  stateChangeHandler: (menuOpen: boolean) => void
}

export const MenuContext = createContext<MenuContextPayload>(undefined as any)

const MenuProvider: FC = ({ children }) => {
  const [menuOpenState, setMenuOpenState] = useState(false)

  return (
    <MenuContext.Provider
      value={{
        isMenuOpen: menuOpenState,
        toggleMenu: () => setMenuOpenState(!menuOpenState),
        stateChangeHandler: (menuOpen) => setMenuOpenState(menuOpen),
      }}
    >
      {children}
    </MenuContext.Provider>
  )
}

export default MenuProvider
