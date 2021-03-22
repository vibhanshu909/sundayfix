import ArrowRight from 'assets/ArrowRight.svg'
import RemoveIcon from 'assets/Remove.svg'
import { TripContext } from 'contexts/TripContext'
import { HTMLMotionProps, motion, useAnimation } from 'framer-motion'
import React, { FC, useContext, useState } from 'react'
import Modal from 'react-modal'
import { api } from 'services/httpService'
import styled from 'styled-components'
import { FlagMap } from 'utils/FlagMap'
import { device } from 'utils/style/responsive'
import Anchor from './Anchor'
import SVGIcon from './SVGIcon'

const customStyles = {
  content: {
    top: '45%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: '500px',
  },
} as const

interface ITripRow extends HTMLMotionProps<'div'> {
  country: string
  company: string
  date: Date | string
  id: string
  address: string
}
const TripRow: FC<ITripRow> = ({ country, company, date, id, address }) => {
  const [modalIsOpen, setIsOpen] = useState(false)
  const dispatch = useContext(TripContext)[1]
  const animation = useAnimation()

  const flag = country.toLowerCase().split(' ').join('-') as keyof typeof FlagMap
  const image = FlagMap[flag].icon

  const removeTrip = async (id: string) => {
    try {
      await api.delete(`/trip/${id}`)
      setIsOpen(false)
      dispatch({ type: 'REMOVE_TRIP', payload: id })
    } catch (error) {
      alert('Something went wrong while deleting trip')
      console.error(error.message) //dlme
    }
  }

  async function sequence() {
    await animation.start({ y: 70, transition: { duration: 0.2 } })
    animation.start({ y: 0, transition: { duration: 0.2 } })
  }

  Modal.setAppElement('div')

  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        style={customStyles}
        ariaHideApp={false}
        onRequestClose={() => setIsOpen(false)}
      >
        <Form
          initial={{ opacity: 0, scale: 0.75 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <Label htmlFor='q'>Are you sure you want to delete this trip?</Label>
          <FormButtonGroup>
            <AcceptDeleteButton
              onClick={() => removeTrip(id)}
              whileHover={{
                scale: 1.15,
                translateY: -10,
                boxShadow: '3px 3px 5px rgba(0,0,0,0.3)',
              }}
            >
              Delete
            </AcceptDeleteButton>
            <AcceptCancelButton
              onClick={() => setIsOpen(false)}
              whileHover={{
                scale: 1.15,
                translateY: -10,
                boxShadow: '3px 3px 5px rgba(0,0,0,0.3)',
              }}
            >
              Cancel
            </AcceptCancelButton>
          </FormButtonGroup>
        </Form>
      </Modal>
      <TripRowStyles
        initial={{ y: -200 }}
        animate={animation}
        onLoad={sequence}
        // ariaHideApp={false}
        whileHover={{ boxShadow: '2px 6px 10px rgba(0,0,0,0.3)' }}
      >
        <FlagColumn>
          <SVGIcon icon={image} width={32} height={32} />
          <MobileCountry>{country}</MobileCountry>
        </FlagColumn>

        <TripColumn>
          <TripRowInline>
            <Anchor href={`/viewTrip/${id}`}>
              <Country style={{ color: 'black' }}>{FlagMap[flag].country}</Country>
            </Anchor>
            <Separator />
            <TripDate>
              <MobileLabel>Date</MobileLabel>
              <strong>
                <div className='innerWrapper'>{date}</div>
              </strong>
            </TripDate>
          </TripRowInline>
          <TripRowInline>
            <Company style={{ color: 'black' }}>
              <MobileLabel>Company</MobileLabel>
              {company}
            </Company>
            <Separator />
            <Address>
              <div className='innerWrapper'>{address}</div>
            </Address>
          </TripRowInline>
        </TripColumn>
        <ActionButtons>
          <RemoveButton
            onClick={() => setIsOpen(true)}
            whileHover={{
              scale: 1.05,
              translateY: -5,
              boxShadow: '1px 1px 3px rgba(0,0,0,0.3)',
            }}
          >
            <SVGIcon icon={RemoveIcon} width={11} height={16} />
          </RemoveButton>
          <Anchor href={`/editTrip/${id}`}>
            <ViewButton
              whileHover={{
                scale: 1.05,
                translateY: -5,
                boxShadow: '1px 1px 3px rgba(0,0,0,0.3)',
              }}
            >
              <MobileLabel>View Trip</MobileLabel>
              <SVGIcon icon={ArrowRight} width={16} height={10} />
            </ViewButton>
          </Anchor>
        </ActionButtons>
      </TripRowStyles>
    </div>
  )
}

export default TripRow

const Label = styled.label`
  display: block;
  font-size: 1.9rem;
  margin-bottom: 2rem;
  color: black;
  display: block;
  text-align: center;
  width: 100%;
`

const Form = styled(motion.form)`
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
  width: 100%;
  align-items: center;
`
const FormButtonGroup = styled.div`
  flex-direction: row;
`

const AcceptDeleteButton = styled(motion.div)`
  background: red;
  font-size: 1.6rem;
  padding: 1.3rem 2rem;
  margin: 1.2rem;
  max-width: 200px;
  border-radius: 10px;
  font-weight: 600;
  text-align: left;
  display: inline-block;
  align-items: center;
  cursor: pointer;
  color: white;

  > svg {
    margin-left: auto;
  }
`

const AcceptCancelButton = styled(motion.div)`
  background: #cccccc;
  font-size: 1.6rem;
  padding: 1.3rem 2rem;
  max-width: 200px;
  margin: 1.2rem;
  border-radius: 10px;
  font-weight: 600;
  text-align: left;
  display: inline-block;
  align-items: center;
  cursor: pointer;
  color: white;

  > svg {
    margin-left: auto;
  }
`

const TripRowStyles = styled(motion.div)`
  background: #f9f9fa;
  padding: 2rem;
  display: flex;
  align-items: center;
  font-size: 1.6rem;
  width: 100%;
  border-radius: 10px;
  margin-bottom: 2rem;

  @media ${device.tablet} {
    display: block;
  }
`

const TripColumn = styled.div`
  margin-right: 2rem;
  min-width: 0;
  width: 100%;

  @media ${device.tablet} {
    display: flex;
    flex-direction: column-reverse;
    margin-right: 0;
  }
`

const TripRowInline = styled.div`
  display: flex;
  margin-bottom: 1rem;
  flex: 1;

  &:last-child {
    margin: 0;
  }

  @media ${device.tablet} {
    margin-bottom: 0.5rem;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
  }
`

const Separator = styled.div`
  width: 1px;
  margin: 0 2rem;
  height: 10px;
  background: #e4e4e5;
  position: relative;
  top: 2px;

  @media ${device.tablet} {
    display: none;
  }
`

const FlagColumn = styled.div`
  display: block;
  margin-right: 2rem;

  @media ${device.tablet} {
    display: flex;
    align-items: center;
    margin: 0;

    > div {
      margin-left: 2rem;
      font-weight: 600;
    }
  }
`

const MobileCountry = styled.div`
  display: none;

  @media ${device.tablet} {
    display: block;
  }
`

const Country = styled.div`
  font-weight: 600;
  white-space: nowrap;

  @media ${device.tablet} {
    display: none;
  }
`

const Company = styled.div`
  font-size: 1.5rem;
  white-space: nowrap;

  @media ${device.tablet} {
    font-weight: 600;
  }
`

const MobileLabel = styled.div`
  display: none;

  @media ${device.tablet} {
    display: block;

    margin-top: 2rem;
    font-size: 1.2rem;
    color: #63666a;
    margin-bottom: 1rem;
    font-weight: 400;
  }
`

const TripDate = styled.div`
  font-size: 1.4rem;
  color: #97999b;

  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  min-width: 0;
  position: relative;
  height: 16px;
  width: 100%;

  > div.innerWrapper {
    display: inline-block;
    position: absolute;
    right: 0;
    left: 0;
    top: 0;
    bottom: 0;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }

  @media ${device.tablet} {
    color: black;
    order: 2;
  }
`

const Address = styled.div`
  font-size: 1.4rem;
  color: #97999b;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  min-width: 0;
  position: relative;
  height: 16px;
  width: 100%;

  > div {
    display: inline-block;
    position: absolute;
    right: 0;
    left: 0;
    top: 0;
    bottom: 0;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }

  @media ${device.tablet} {
    color: black;
    order: 1;
    line-height: 1.5;
    width: 100% !important;
    white-space: inherit;
    text-overflow: inherit;
  }
`

const ActionButtons = styled.div`
  margin-left: auto;
  display: flex;
  align-items: center;
`

const RemoveButton = styled(motion.button)`
  background: #fbebe9;
  padding: 1.6rem 2rem;
  border-radius: 10px;
  margin-left: 2rem;
  cursor: pointer;

  @media ${device.tablet} {
    display: none;
  }
`

const ViewButton = styled(motion.button)`
  background: #f1f1f2;
  padding: 1.6rem 2rem;
  border-radius: 10px;
  margin-left: 2rem;
  cursor: pointer;

  @media ${device.tablet} {
    display: flex;
    margin: 0;
    width: 100%;
    align-items: center;
    margin-top: 3rem;

    > div {
      margin: 0;
      font-size: 1.4rem;
      font-weight: 600;
    }

    > svg {
      margin-left: auto;
    }
  }
`
