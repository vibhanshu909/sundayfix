import Heading from 'components/Heading'
import Sidebar from 'components/Sidebar'
import TripRow from 'components/TripRow'
import { TripContext } from 'contexts/TripContext'
import { motion } from 'framer-motion'
import moment from 'moment'
import { useContext, useState } from 'react'
import styled from 'styled-components'

const Trips = () => {
  const [state] = useContext(TripContext)
  const [tips] = useState([
    `Company was established back in the year 2007 by 3 friends who were fascinated by the web and mobile technologies and product design. Today, Cleevio is lead by its own CEO, David Bezdeka, and is working on projects for clients and companies around the world. With this work he helps with the product itself, starting startups or understanding how to mangage and deliver a large-scale solution. Cleevio's people come from a diverse environment, but they work like a well-coordinated team at work. During development, they use new technologies and libraries, alway striving to uplevel. They work side-by-side with clients as a partner and they are their digital expert. They advise and influence the design and strategy of the project. They are looking for bold clients who are leaders in their field and have innovative, creative ideas. They are attracted to projects which utilize new technologies`,
  ])

  return (
    <Container>
      <Main>
        <svg>
          <motion.path
            animate={{ y: 100 }}
            d='M1659.16,371.41L1659.16,292.05'
            style={{
              fill: 'none',
              fillRule: 'nonzero',
              stroke: 'rgb(165,190,255)',
              strokeWidth: '3px',
            }}
          ></motion.path>
        </svg>
        <Heading title='Your trips' />
        <AllTrips>
          {state?.trips.length === 0
            ? 'No trips registered yet'
            : state?.trips.map((trip: any) => {
                return (
                  <TripRow
                    initial={{ y: -250 }}
                    key={trip.id}
                    country={trip.address.country}
                    company={trip.company_name}
                    id={trip.id}
                    address={`${trip.address.street} ${trip.address.street_num} ${trip.address.zip} ${trip.address.city}`}
                    date={`${moment(trip.start_date).format('D MMM')} - ${moment(
                      trip.end_date,
                    ).format('D MMM, YYYY')}`}
                  />
                )
              })}
          {/* <StyledLoader type="BallTriangle" color="var(--accent)" /> */}
        </AllTrips>
      </Main>

      <Sidebar sidebarHeading='Tips & tricks'>{getRandom(tips)}</Sidebar>
    </Container>
  )
}

export default Trips

const getRandom = (array: any[]) => array[Math.floor(Math.random() * array.length)]

// const StyledLoader = styled(Loader)`
//   display: flex;
//   justify-content: center;
//   margin: 150px;
// `

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

const AllTrips = styled.section`
  width: 100%;
  padding: 2rem;
`
