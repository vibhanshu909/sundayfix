import ArrowRight from 'assets/ArrowRight.svg'
import { motion } from 'framer-motion'
import React, { FC } from 'react'
import styled from 'styled-components'
import { FlagMap } from '../utils/FlagMap'
import Anchor from './Anchor'
import SVGIcon from './SVGIcon'

interface ISidebarCardProps {
  country: string
  company: string
  date: string
  address: string
  id: string
}
const SidebarCard: FC<ISidebarCardProps> = ({ country, company, date, address, id }) => {
  return (
    <TripRowStyles animate={{ opacity: [0, 1], transition: { duration: 1.2 } }}>
      <FlagColumn>
        <SVGIcon
          icon={FlagMap[country as keyof typeof FlagMap].icon}
          width={40}
          height={40}
          style={{ marginLeft: 0 }}
        />
        <MobileCountry>{FlagMap[country as keyof typeof FlagMap].name}</MobileCountry>
      </FlagColumn>

      <TripColumn>
        <TripRowInline>
          <TripDate>
            <MobileLabel>Date</MobileLabel>
            <strong>{date}</strong>
          </TripDate>
        </TripRowInline>

        <TripRowInline>
          <Company>
            <MobileLabel>Company</MobileLabel>
            {company}
          </Company>

          <Address>{address}</Address>
        </TripRowInline>
      </TripColumn>

      <ActionButtons>
        <Anchor href={`/viewTrip/${id}`}>
          <ViewButton
            whileHover={{
              scale: 1.05,
              translateY: -10,
              boxShadow: '3px 3px 5px rgba(0,0,0,0.3)',
            }}
          >
            <MobileLabel>View Trip</MobileLabel>
            <SVGIcon icon={ArrowRight} width={16} height={10} />
          </ViewButton>
        </Anchor>
      </ActionButtons>
    </TripRowStyles>
  )
}

export default SidebarCard

const TripRowStyles = styled(motion.div)`
  background: #f9f9fa;
  padding: 2rem;
  display: block;
  align-items: center;
  font-size: 1.6rem;
  width: 100%;
  border-radius: 10px;
  margin-bottom: 2rem;
`

const TripColumn = styled.div`
  margin-right: 2rem;
  display: flex;
  flex-direction: column-reverse;
`

const TripRowInline = styled.div`
  display: flex;

  &:last-child {
    margin: 0;
  }

  margin-bottom: 0.5rem;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`

const FlagColumn = styled.div`
  display: block;
  margin-right: 2rem;

  display: flex;
  align-items: center;

  > div {
    margin-left: 2rem;
    font-weight: 600;
  }
`

const MobileCountry = styled.div`
  display: block;
`

const Company = styled.div`
  font-size: 1.4rem;
  font-weight: 600;
`

const MobileLabel = styled.div`
  display: block;

  margin-top: 2rem;
  font-size: 1.2rem;
  color: #63666a;
  margin-bottom: 1rem;
  font-weight: 400;
`

const TripDate = styled.div`
  font-size: 1.4rem;
  color: #97999b;

  color: black;
  order: 2;
`

const Address = styled.div`
  font-size: 1.4rem;
  color: #97999b;
  overflow: hidden;

  color: black;
  order: 1;
  line-height: 1.5;
  width: 100% !important;
  white-space: inherit;
  text-overflow: inherit;

  width: 120px;
  text-overflow: ellipsis;
  white-space: nowrap;
  flex: 1 1 auto;
`

const ActionButtons = styled.div`
  margin-left: auto;
  align-items: center;
`

const ViewButton = styled(motion.div)`
  background: #f1f1f2;
  padding: 1.6rem 2rem;
  border-radius: 10px;
  margin-left: 2rem;

  display: flex;
  margin: 0;
  width: 100%;
  align-items: center;
  margin-top: 3rem;
  cursor: pointer;

  > div {
    margin: 0;
    font-size: 1.4rem;
    font-weight: 600;
  }

  > svg {
    margin-left: auto;
  }
`
