import React from 'react'
import "@styles/base/components/_card.scss"
import Footer from "../../pages/Footer/Footer"
import Button from "../../@core/components/button/Button"
import './career.css'
import Job from "./Job.json"
import Swal from 'sweetalert2'
function Career() {
    const newalert = (getid) => {
      const data =  Job.filter(inpData => {
            return inpData.id === getid 
        })
        console.log(data)
        data.map(inpd => {
            Swal.fire({
                title:"Qualities",
                text:inpd.qualities,
                confirmButtonText: "<a href='mailto:deepanshi.shukla@1clickcapital.com'>Apply</a>",
                confirmButtonColor: '#FFA500',
                showCloseButton:true
            })
        })
    }
    return (
        <div>
            <Button/>
            <div className="career card">
                <h3 className="career-title">Job Opportunities in 1 Click Capital</h3>
                <div className="row-job">
                    {
                        Job.map(inputData => {
                            return (
                            <div className="job column-job" key={inputData.id}>
                                <h5>Job title : {inputData.job_title}</h5>
                                <h5>Work Location: {inputData.work_location}</h5>
                                <h5>Experience: {inputData.experience}</h5>
                                <button className="job-view" onClick={() => newalert(inputData.id) }>View Job</button>
                            </div>
                            )
                        })
                    }
                </div>
            </div>
            <Footer/>
        </div>
    )
}
export default  Career