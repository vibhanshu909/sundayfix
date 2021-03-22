import AustriaFlag from 'assets/flags/austria.svg'
import ChinaFlag from 'assets/flags/china.svg'
import FranceFlag from 'assets/flags/france.svg'
import GreeceFlag from 'assets/flags/greece.svg'
import ItalyFlag from 'assets/flags/italy.svg'
import NetherlandsFlag from 'assets/flags/netherlands.svg'
import PortugalFlag from 'assets/flags/portugal.svg'
import SlovakiaFlag from 'assets/flags/slovakia.svg'
import SpainFlag from 'assets/flags/spain.svg'
import SwedenFlag from 'assets/flags/sweden.svg'
import UnitedKingdomFlag from 'assets/flags/united-kingdom.svg'

export const FlagMap = {
  at: { icon: AustriaFlag, name: 'Austria', country: 'austria' },
  cn: { icon: ChinaFlag, name: 'China', country: 'china' },
  fr: { icon: FranceFlag, name: 'France', country: 'france' },
  gr: { icon: GreeceFlag, name: 'Greece', country: 'greece' },
  it: { icon: ItalyFlag, name: 'Italy', country: 'italy' },
  aw: { icon: NetherlandsFlag, name: 'Netherlands', country: 'netherlands' },
  pt: { icon: PortugalFlag, name: 'Portugal', country: 'portugal' },
  sk: { icon: SlovakiaFlag, name: 'Slovakia', country: 'slovakia' },
  es: { icon: SpainFlag, name: 'Spain', country: 'spain' },
  se: { icon: SwedenFlag, name: 'Sweden', country: 'sweden' },
  uk: { icon: UnitedKingdomFlag, name: 'United Kingdom', country: 'united-kingdom' },
} as const
