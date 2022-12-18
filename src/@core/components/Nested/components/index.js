import React from "react"
import { Link, Outlet, useLocation } from "react-router-dom"
import PayrollIMG from "./Payroll.png"
import SalaryAdv from "./SalaryAdv.png"
import CF from "./CF.png"
import ProjectFun from "./ProjectFun.png"
import InsuranceFun from "./InsuranceFun.png"
import LRD from "./LRD.png"
import WorkingCap from "./WorkingCap.png"
import SCF from "./SCF.png"
import HRm from "./HRm.png"
// import { options } from './Navdd'
import Production from "./production logo-01 1entertainment ptod.png"
import "./Secondpage.css"

function SecondPage() {
    const location = useLocation()
    let pname = location.pathname
    console.log(pname)
    const click = pname
  return (
    <div className="card">
    <ul className="product-nav-menu">
                <li className={click === "/product/payroll" ? "product-nav-item  active-product" : "product-nav-item"}>
                <Link exact to="payroll" 
                  onClick={() => { 
                    pname = location.pathname
                    }}>
                  <img src={PayrollIMG} className="pro-image" />
                    <p className="product-nav-link">Payroll</p>
                  </Link>
                </li>

                <li className={click === "/product/salaryadv" ? "product-nav-item  active-product" : "product-nav-item"}>
                <Link exact to="salaryadv"
                  onClick={() => { 
                    pname = location.pathname 
                    }}>
                  <img src={SalaryAdv} className="pro-image" />
                  <p className="product-nav-link">Salary Advance</p>
                  </Link>
                </li>

                <li className={click === "/product/insurancefun" ? "product-nav-item  active-product" : "product-nav-item"}>
                <Link exact to="insurancefun"
                  onClick={() => { 
                    pname = location.pathname 
                    }}>
                  <img src={InsuranceFun} className="pro-image  " />
                  <p className="product-nav-link">Insurance Funding</p>
                  </Link>
                </li>

                <li className={click === "/product/projectfun" ? "product-nav-item  active-product" : "product-nav-item"}>
                <Link exact to="projectfun"
                  onClick={() => { 
                    pname = location.pathname 
                    }}>
                    <img src={ProjectFun} className="pro-image"/>
                    <p className="product-nav-link">Project Funding</p>
                  </Link>
                </li>

                <li className={click === "/product/lrd" ? "product-nav-item  active-product" : "product-nav-item"}>                  
                <Link exact to="lrd"
                  onClick={() => { 
                    pname = location.pathname
                    }}><img src={LRD} className="pro-image " />                  
                    <p className="product-nav-link">Lease Rental Discount</p>
                  </Link>
                </li>

                <li className={click === "/product/scf" ? "product-nav-item  active-product" : "product-nav-item"}>
                <Link exact to="scf"
                  onClick={() => { 
                    pname = location.pathname
                    }}>
                  <img src={SCF} className="pro-image " />                  
                  <p className="product-nav-link"> Supply Chain Financing</p>
                  </Link>
                </li>

                <li className={click === "/product/workingcap" ? "product-nav-item  active-product" : "product-nav-item"}>
                <Link exact to="workingcap"
                  onClick={() => { 
                    pname = location.pathname 
                    }}>
                  <img src={WorkingCap} className="pro-image " />
                  <p className="product-nav-link">Working Capital</p>
                  </Link>
                </li>

                <li className={click === "/product/cf" ? "product-nav-item  active-product" : "product-nav-item"}>
                <Link exact to="cf"
                  onClick={() => { 
                    pname = location.pathname
                    }}>
                  <img src={CF} className="pro-image " />
                  <p className="product-nav-link">MSME/SME</p>
                  </Link>
                </li>

                <li className={click === "/product/hrm" ? "product-nav-item  active-product" : "product-nav-item"}>
                <Link exact to="hrm"
                  onClick={() => { 
                    pname = location.pathname 
                    }}>
                  <img src={HRm} className="pro-image" />
                  <p className="product-nav-link">HRMS</p>
                  </Link>
                </li>

                <li className={click === "/product/production" ? "product-nav-item  active-product" : "product-nav-item"}>
                <Link to="production"
                  onClick={() => { 
                    pname = location.pathname
                    }}>
                  <img src={Production} className="pro-image " />
                  <p className="product-nav-link">Entmt & Production</p>
                  </Link>
                </li>     
    </ul>
    <Outlet />
  
     </div>
  )
}
export default SecondPage
