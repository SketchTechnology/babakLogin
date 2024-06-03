import React, { useContext } from 'react'
import { CompanyDaTaContext } from '../../Context/CompanyData'
import PersonalCard from '../resultCards/PersonalCard'
import CompanyCard from '../resultCards/CompanyCard'

const StepThree = () => {
  const {CompnyInfo} =useContext(CompanyDaTaContext)
  return (
    <div >
      <PersonalCard/>
      <CompanyCard/>
    </div>
  )
}

export default StepThree
