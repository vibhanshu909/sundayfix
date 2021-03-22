import Heading from 'components/Heading'
import Sidebar from 'components/Sidebar'
import SidebarCard from 'components/SidebarCard'
import { TripContext } from 'contexts/TripContext'
import { motion } from 'framer-motion'
import moment from 'moment'
import { GetServerSideProps, NextPage } from 'next'
import { useContext, useEffect } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css'
import Loader from 'react-loader-spinner'
import { api } from 'services/httpService'
import styled from 'styled-components'
import { device } from 'utils/style/responsive'

const ViewTrip: NextPage<{ id: string }> = ({ id }) => {
  const [state, dispatch] = useContext(TripContext)

  const xValues = [5000, -40, 0]

  useEffect(() => {
    const fetchTrip = async () => {
      const { data } = await api.get(`/trip/${id}`)
      dispatch({ type: 'SET_FORM', payload: data })
    }
    fetchTrip()
  }, [id, dispatch])

  let startDate =
    state.form.start_date !== ''
      ? moment(state.form.start_date, 'YYYY-MM-DD').utc(false).toDate()
      : ''

  let endDate =
    state.form.end_date !== '' ? moment(state.form.end_date, 'YYYY-MM-DD').utc(false).toDate() : ''

  return (
    <Container>
      <Main>
        <Heading title='View trip' />
        <Form>
          <FormContent>
            <InnerForm>
              <FormGroup>
                <DPDown animate={{ x: xValues }} transition={{ duration: 1 }}>
                  <Label htmlFor='countries'>Where do you want to go</Label>
                  <Dropdown
                    disabled
                    // required
                    className={`flag-${state.form.address.country}`}
                    // id='country'
                    // name='country'
                    options={state.countries}
                    placeholder={state.form.address.country || 'Select country'}
                    value={state.form.address.country}
                    onChange={(data: { value: string }) => {
                      dispatch({
                        type: 'SET_SELECTED_COUNTRY',
                        payload: data.value,
                      })
                    }}
                  />
                </DPDown>
              </FormGroup>

              <FormGroup>
                <FormInnerGroup
                  animate={{ x: xValues, opacity: [0, 0.3, 1] }}
                  transition={{ duration: 1, delay: 0.1 }}
                >
                  <Label htmlFor='startDate'>Start date</Label>
                  <DatePickerWrap>
                    <DatePicker
                      disabled
                      required
                      selected={typeof startDate === 'string' ? undefined : startDate}
                      onChange={(date) => {
                        dispatch({
                          type: 'SET_StartDate',
                          payload: {
                            start_date: date,
                          },
                        })
                      }}
                      // date={true}
                      id='startDate'
                      name='startDate'
                      placeholderText='dd. mm. year'
                      showPopperArrow={false}
                      selectsStart
                      showMonthYearDropdown
                      dateFormat='dd. MM. yyyy'
                      minDate={moment().toDate()}
                    />
                  </DatePickerWrap>
                </FormInnerGroup>

                <FormInnerGroup animate={{ x: xValues }} transition={{ duration: 1, delay: 0.2 }}>
                  <Label htmlFor='endDate'>End date</Label>
                  <DatePickerWrap>
                    <DatePicker
                      disabled
                      required
                      selected={typeof endDate === 'string' ? undefined : endDate}
                      onChange={(date) => {
                        dispatch({
                          type: 'SET_EndDate',
                          payload: {
                            end_date: date,
                          },
                        })
                      }}
                      id='endDate'
                      name='endDate'
                      placeholderText='dd. mm. year'
                      dateFormat='dd. MM. yyyy'
                      minDate={moment().toDate()}
                      showTwoColumnMonthYearPicker
                      showPopperArrow={false}
                    />
                  </DatePickerWrap>
                </FormInnerGroup>
              </FormGroup>

              <FormGroup>
                <FormInnerGroup animate={{ x: xValues }} transition={{ duration: 1, delay: 0.3 }}>
                  <Label htmlFor='company'>Company name</Label>
                  <Input
                    disabled
                    required
                    id='company'
                    name='company'
                    placeholder={state.form.company_name || 'Type here ...'}
                    onChange={(e) => {
                      dispatch({
                        type: 'SET_CompanyName',
                        payload: {
                          company_name: e.target.value,
                        },
                      })
                    }}
                    value={state.form.company_name}
                  />
                </FormInnerGroup>

                <FormInnerGroup animate={{ x: xValues }} transition={{ duration: 1, delay: 0.4 }}>
                  <Label htmlFor='city'>City</Label>
                  <Input
                    disabled
                    required
                    id='city'
                    name='city'
                    placeholder={state.form.address.city || 'Type here ...'}
                    onChange={(e) => {
                      dispatch({
                        type: 'SET_CITY',
                        payload: {
                          address: {
                            city: e.target.value,
                          },
                        },
                      })
                    }}
                    value={state.form.address.city}
                  />
                </FormInnerGroup>

                <FormInnerGroup animate={{ x: xValues }} transition={{ duration: 1, delay: 0.5 }}>
                  <Label htmlFor='street'>Street</Label>
                  <Input
                    required
                    disabled
                    id='street'
                    name='street'
                    placeholder={state.form.address.street || 'Type here ...'}
                    onChange={(e) => {
                      dispatch({
                        type: 'SET_Street',
                        payload: {
                          address: {
                            street: e.target.value,
                          },
                        },
                      })
                    }}
                    value={state.form.address.street}
                  />
                </FormInnerGroup>

                <FormInnerGroup animate={{ x: xValues }} transition={{ duration: 1, delay: 0.6 }}>
                  <Label htmlFor='streetNumber'>Street Number</Label>
                  <Input
                    disabled
                    required
                    id='streetNumber'
                    name='streetNumber'
                    placeholder={state.form.address.street_num || 'Type here ...'}
                    onChange={(e) => {
                      dispatch({
                        type: 'SET_StreetNumber',
                        payload: {
                          address: {
                            street_num: Number(e.target.value),
                          },
                        },
                      })
                    }}
                    value={state.form.address.street_num}
                  />
                </FormInnerGroup>

                <FormInnerGroup animate={{ x: xValues }} transition={{ duration: 1, delay: 0.7 }}>
                  <Label htmlFor='zipCode'>Zip code</Label>
                  <Input
                    required={true}
                    disabled
                    id='zipCode'
                    name='zipCode'
                    placeholder={state.form.address.zip || 'Type here ...'}
                    onChange={(e) => {
                      dispatch({
                        type: 'SET_ZIP',
                        payload: {
                          address: {
                            zip: e.target.value,
                          },
                        },
                      })
                    }}
                    value={state.form.address.zip}
                  />
                </FormInnerGroup>
              </FormGroup>

              <FormGroup>
                <LabelQuestion>
                  Have you been recently tested for <strong>COVID-19</strong>
                </LabelQuestion>

                <RadioButtonGroup animate={{ x: xValues }} transition={{ duration: 1, delay: 0.8 }}>
                  <RadioButton>
                    <input
                      disabled
                      required
                      type='radio'
                      name='testedCovid'
                      id='yes'
                      value='0'
                      checked={state.form.covid === true}
                      onChange={() => {
                        dispatch({
                          type: 'SET_Covid',
                          payload: {
                            covid: true,
                          },
                        })
                      }}
                    />
                    <div />
                    <span>Yes</span>
                  </RadioButton>

                  <RadioButton>
                    <input
                      required
                      disabled
                      type='radio'
                      name='testedCovid'
                      id='no'
                      value='1'
                      checked={state.form.covid === false}
                      onChange={() => {
                        dispatch({
                          type: 'SET_Covid',
                          payload: {
                            covid: false,
                          },
                        })
                      }}
                    />
                    <div />
                    <span>No</span>
                  </RadioButton>
                </RadioButtonGroup>
              </FormGroup>
            </InnerForm>
          </FormContent>
        </Form>
      </Main>
      <Sidebar sidebarHeading='Trips'>
        {state.trips.length > 0 ? (
          state.trips.map((trip) => (
            <SidebarCard
              key={trip.id}
              country={trip.address.country}
              company={trip.company_name}
              address={`${trip.address.street} ${trip.address.street_num} ${trip.address.zip} ${trip.address.city}`}
              date={`${moment(trip.start_date).format('D MMM')} - ${moment(trip.end_date).format(
                'D MMM, YYYY',
              )}`}
              id={trip.id}
            />
          ))
        ) : (
          <StyledLoader type='BallTriangle' color='var(--accent)' />
        )}
      </Sidebar>
    </Container>
  )
}

export default ViewTrip

export const getServerSideProps: GetServerSideProps<any, any> = async ({ params: { id } }) => {
  return {
    props: {
      id,
    },
  }
}

const DPDown = styled(motion.div)``

const StyledLoader = styled(Loader)`
  display: flex;
  justify-content: center;
  margin: 50px;
`

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex: 1;
  width: 100%;
  height: 100vh;
`

const Main = styled.main`
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
  width: 100%;
  align-items: center;
`

const FormContent = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
  width: 100%;
  align-items: center;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 10px;
  }

  /* Track */
  &::-webkit-scrollbar-track {
    background: white;
  }

  /* Handle */
  &::-webkit-scrollbar-thumb {
    background: #ccc;
  }

  /* Handle on hover */
  &::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`

const DatePickerWrap = styled.div`
  position: relative;
  flex: 1;
  width: 100%;
`

const InnerForm = styled.div`
  width: 100%;
  flex: 1;
  max-width: 500px;
  padding: 5rem 0;

  @media ${device.tablet} {
    padding: 2rem;
  }
`

const FormGroup = styled.div`
  background-color: var(--grey);
  display: flex;
  flex-direction: column;
  padding: 2rem;
  border-radius: 5px;
  margin-bottom: 1.5rem;

  strong {
    font-weight: bold;
  }
`

const FormInnerGroup = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;

  background: #f9f9fa;
  border-radius: 10px;

  margin-top: 2rem;
  width: 100%;

  &:first-child {
    margin-top: 0;
  }
`

const Label = styled.label`
  display: block;
  font-size: 1.4rem;
  margin-bottom: 2rem;
  color: black;
  display: block;
  width: 100%;
`

const LabelQuestion = styled(motion.label)`
  display: block;
  font-size: 1.4rem;
  color: black;
  display: block;
  width: 100%;

  strong {
    font-weight: 600;
  }

  @media ${device.tablet} {
    font-size: 1.2rem;
  }
`

const Input = styled.input`
  padding: 1.3rem 1.6rem;
  border-radius: 10px;
  border: none;
  font-size: 1.6rem;
  border: 1px solid #f1f1f2;
  outline: 0;
  display: block;
  width: 100%;
  font-size: 1.4rem;
  line-height: 2rem;

  &::placeholder {
    color: #d0d0ce;
  }

  &:focus {
    border: 1px solid #ccc;
  }

  &.react-datepicker-ignore-onclickoutside {
    border-radius: 10px 10px 0 0 !important;
  }
`

const RadioButtonGroup = styled(motion.div)`
  display: flex;
  margin-top: 2rem;
`

const RadioButton = styled.label`
  position: relative;
  padding: 1rem 2rem;
  border-radius: 10px;
  background: #f1f1f2;
  color: #76787b;
  font-weight: 600;
  margin-right: 1rem;
  padding-left: 3.5rem;
  font-size: 1.6rem;
  line-height: 2rem;

  > input {
    opacity: 0;
    visibility: hidden;
    position: absolute;
  }

  > div {
    content: '';
    display: block;
    width: 16px;
    height: 16px;
    border-radius: 16px;
    border: 1px solid #d6d6d3;
    background: white;
    position: absolute;
    left: 10px;
    top: 50%;
    margin-top: -8px;
  }

  > div:before {
    content: '';
    display: block;
    width: 8px;
    height: 8px;
    border-radius: 10px;
    background: black;
    position: absolute;
    left: 3px;
    top: 3px;
    transform: scale(0);
    transition: transform 0.15s;
  }

  > input:checked ~ div:before {
    transform: scale(1);
  }
`
