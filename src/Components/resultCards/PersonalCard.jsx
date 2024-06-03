import { useContext } from 'react'
import '../../assets/Css/PersonalCard.css'
import { CompanyDaTaContext } from '../../Context/CompanyData'
const PersonalCard = () => {
    const {CompnyInfo} =useContext(CompanyDaTaContext)
  return (
    <div className=' shadow px-5 py-4 my-4 ' >
		<h2 className='text-center'>Personal Information</h2>
	<div className="my-4">
    <div className="d-flex gap-2 align-items-center my-2">
        <b className='fs-3'>Name:</b>
        <small className='fs-5'>{CompnyInfo.name}</small>
    </div>

	<div className="d-flex gap-2 align-items-center my-2">
        <b className='fs-3'>Phone Number:</b>
        <small className='fs-5'>{CompnyInfo.phone}</small>
    </div>
	<div className="d-flex gap-2 align-items-center my-2">
        <b className='fs-3'>Email:</b>
        <small className='fs-5'>{CompnyInfo.email}</small>
    </div>
    </div>
	
</div>
  )
}

export default PersonalCard
