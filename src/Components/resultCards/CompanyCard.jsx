import  { useContext } from 'react'
import { CompanyDaTaContext } from '../../Context/CompanyData'

const CompanyCard = () => {
    const {CompnyInfo} =useContext(CompanyDaTaContext)
   
  return (
    <div className=' shadow px-5 py-4 my-4 ' >
    <h2 className='text-center'>Company Information</h2>
<div className="my-4">
<div className="d-flex gap-2 align-items-center my-2">
    <b className='fs-4'>Company Name:</b>
    <small className='fs-5'>{CompnyInfo.companyName}</small>
</div>

<div className="d-flex gap-2 align-items-center my-2">
    <b className='fs-4'>Number of Partners:</b>
    <small className='fs-5'>{CompnyInfo.numberOfPartners}</small>
</div>
<div className="d-flex gap-2 align-items-center my-2">
    <b className='fs-4'>Capital:</b>
    <small className='fs-5'>{CompnyInfo.capital}</small>
</div>
<div className="d-flex gap-2 align-items-center my-2">
    <b className='fs-4'>Activity:</b>
    <small className='fs-5'>{CompnyInfo.activity}</small>
</div>
<div className="d-flex gap-2 align-items-center my-2">
    <b className='fs-4'>Is the company already registered in another country?:</b>
    <small className='fs-5'>{CompnyInfo.isRegistered.toString()}</small>
</div>
<div className="d-flex gap-2 align-items-center my-2">
    <b className='fs-4'>Note:</b>
    <small className='fs-5'>{CompnyInfo.note}</small>
</div>
</div>

</div>
  )
}

export default CompanyCard
