import React from 'react'
import './about.css'
import Img1 from './Group 184leen.svg'
import Img2 from './Group 176harit.svg'
import Ameet from './Group 180Ameet.svg'
import Rs from './Group 181Rs.svg'
import Img3 from './Group 176.svg'
import Rohit from './Group 182Rohit.svg'
import "@styles/base/components/_card.scss"
import Footer from '../../pages/Footer/Footer'
import Button from '../../@core/components/button/Button'
import ButtonsFin from './Group 76 1.svg'
import Prerak from './Group 183prerak.svg'
import Drdk from './Group 183Dr dk.svg'
import Dharmendra from './Group 183dharmendra.svg'

function About() {
  return (
    <>
    <div className='card'>
    <Button/>
      <div className='Alingment-aboutpage-k-liye-div'>
      <div className='text1underline'>
  <p>Our MISION</p>
  </div>
  <div className='text2center'>
    <p>To create a business friendly way of leveraging capital to help
       individuals and institutions amid financial crises</p>
    </div>
    <img className='Buttonfin' src={ButtonsFin} alt="button"></img>
      <div className='headings-aboutus'>
        <p className='text1underline'> Breaking New Ground Every Day </p>
        <p className='text2center'> Listening to the Financial Needs of Businesses and Simplifying Payroll Funding for Digital India.</p>
      </div>
    

        <div className='text3Bold'>
          <p>1 Click Capital is a NBFC verified by the Reserve Bank of India. </p>
        </div>
        <div className='text2center'><p>
        Primary Office Registered: Delhi & Gurugram<br></br>
        Headquarters: Mumbai
 </p></div>

  <div className='text1underline'>
  <p>Our VISION</p>
  </div>
  <div className='text2center'>
    <p>To become one of the top fintech companies with global presence.</p>
    </div>

  <div className='text1underline'>
  <p>Leadership</p>
  </div>
  <div className='text2center'>
    <p>People Behind 1 Click Capital</p>
    </div>
  </div>
    <div className='detail-about'>
    <div className='about-container'>
      <img className='about-image' src={Img3}>
      </img>
      <p className="about-text">I have over 32 years of experience in successful Leadership roles of Managing business, P&L, Sales & Marketing, Training and HR and Board Level Experience in the Financial Services industry spanning across Insurance, Banking (Private & Consumer), Asset Management, Retail Lending, Real Estate and VC funded ventures (Hotel Management Company, Education, Green Energy and Healthcare)..
I have worked with global organization such as Aviva Life Insurance, BNP Paribas, American Express Bank, SARE Group (DUET Private Equity) and Bedrock Ventures and have an excellent track record of building new businesses to a large scale organization and driving them to significant succes
</p>
    </div>
    <div className='about-container right'>
    <img className='about-image' src={Img2}>
      </img>
      <p className="about-text">I am a finance veteran with more than 2 decades of rich experience in the area of credit & underwriting,
P&L, trade finance, vehicle finance, risk management, insurance, investment banking, AMC and securities.

It has always been my dream to create a technology based lending company and then Covid came created
a huge whole in the MSME sector where credit crunch was at its highest. This presented us with an opport-
unity to work with various companies and deal with the realities of payroll funding in the market. It is my
vision to see 1 Click Capital as the globe’s leading Fintech Company.

</p>
    </div>
    </div>
    <div className='detail-about'>
    <div className='about-container'>
      <img className='about-image' src={Img1}>
      </img>
      <p className="about-text">I am an Economics graduate from MDU and have an MBA in HR from
I gained a rich enchaining experience working with Aeroflot Russian Airlines and 2 years of experience
working with Jet Airways. I have been overseeing functioning of Information Technology, Finance, Risk
Management, & Economic Intelligence.

Often while talking to my clients I would hear them complain about how difficult it is at the end of every
month to gather capital to pay their staff especially when cash flow is stuck elsewhere. This made me
ponder and I wanted to come up with such a solution that will help up and coming businesses with their
financial crisis without jumping through a bunch of hoops. I along with my mentor created an idea of
birthing a NBFC that will provide innovative never seen before services in not only India but the globe.
1 Click capital is the product of my, my family and my partners hard work and unyielding perseverance.</p>
    </div>
    <div className='about-container right'>
    <img className='about-image' src={Dharmendra}>
      </img>
      <p className="about-text">20+ years of experience in sales. Excellent leadership and managerial skills, specialization in sales, commercial, marketing and promotion career in the field of BFSI.

</p>
    </div>
    </div>
    {/* <div className='detail-about'>
    <div className='about-container'>
      <img className='about-image' src={Img1}>
      </img>
      <p className="about-text">I am an Economics graduate from MDU and have an MBA in HR from
I gained a rich enchaining experience working with Aeroflot Russian Airlines and 2 years of experience
working with Jet Airways. I have been overseeing functioning of Information Technology, Finance, Risk
Management, & Economic Intelligence.

Often while talking to my clients I would hear them complain about how difficult it is at the end of every
month to gather capital to pay their staff especially when cash flow is stuck elsewhere. This made me
ponder and I wanted to come up with such a solution that will help up and coming businesses with their
financial crisis without jumping through a bunch of hoops. I along with my mentor created an idea of
birthing a NBFC that will provide innovative never seen before services in not only India but the globe.
1 Click capital is the product of my, my family and my partners hard work and unyielding perseverance.</p>
    </div>
    <div className='about-container right'>
    <img className='about-image' src={Img2}>
      </img>
      <p className="about-text">I am a finance veteran with more than 2 decades of rich experience in the area of credit & underwriting,
P&L, trade finance, vehicle finance, risk management, insurance, investment banking, AMC and securities.
It has always been my dream to create a technology based lending company and then Covid came created
a huge whole in the MSME sector where credit crunch was at its highest. This presented us with an opport-
unity to work with various companies and deal with the realities of payroll funding in the market. It is my
vision to see 1 Click Capital as the globe’s leading Fintech Company.
</p>
    </div>
    </div>
    <div className='detail-about'>
    <div className='about-container'>
      <img className='about-image' src={Img1}>
      </img>
      <p className="about-text">I am an Economics graduate from MDU and have an MBA in HR from
I gained a rich enchaining experience working with Aeroflot Russian Airlines and 2 years of experience
working with Jet Airways. I have been overseeing functioning of Information Technology, Finance, Risk
Management, & Economic Intelligence.

Often while talking to my clients I would hear them complain about how difficult it is at the end of every
month to gather capital to pay their staff especially when cash flow is stuck elsewhere. This made me
ponder and I wanted to come up with such a solution that will help up and coming businesses with their
financial crisis without jumping through a bunch of hoops. I along with my mentor created an idea of
birthing a NBFC that will provide innovative never seen before services in not only India but the globe.
1 Click capital is the product of my, my family and my partners hard work and unyielding perseverance.</p>
    </div>
    <div className='about-container right'>
    <img className='about-image' src={Img2}>
      </img>
      <p className="about-text">I am a finance veteran with more than 2 decades of rich experience in the area of credit & underwriting,
P&L, trade finance, vehicle finance, risk management, insurance, investment banking, AMC and securities.
It has always been my dream to create a technology based lending company and then Covid came created
a huge whole in the MSME sector where credit crunch was at its highest. This presented us with an opport-
unity to work with various companies and deal with the realities of payroll funding in the market. It is my
vision to see 1 Click Capital as the globe’s leading Fintech Company.
</p>
    </div>
    </div>
    <div className='detail-about'>
    <div className='about-container'>
      <img className='about-image' src={Img1}>
      </img>
      <p className="about-text">I am an Economics graduate from MDU and have an MBA in HR from
I gained a rich enchaining experience working with Aeroflot Russian Airlines and 2 years of experience
working with Jet Airways. I have been overseeing functioning of Information Technology, Finance, Risk
Management, & Economic Intelligence.

Often while talking to my clients I would hear them complain about how difficult it is at the end of every
month to gather capital to pay their staff especially when cash flow is stuck elsewhere. This made me
ponder and I wanted to come up with such a solution that will help up and coming businesses with their
financial crisis without jumping through a bunch of hoops. I along with my mentor created an idea of
birthing a NBFC that will provide innovative never seen before services in not only India but the globe.
1 Click capital is the product of my, my family and my partners hard work and unyielding perseverance.</p>
    </div>
    <div className='about-container right'>
    <img className='about-image' src={Img2}>
      </img>
      <p className="about-text">I am a finance veteran with more than 2 decades of rich experience in the area of credit & underwriting,
P&L, trade finance, vehicle finance, risk management, insurance, investment banking, AMC and securities.
It has always been my dream to create a technology based lending company and then Covid came created
a huge whole in the MSME sector where credit crunch was at its highest. This presented us with an opport-
unity to work with various companies and deal with the realities of payroll funding in the market. It is my
vision to see 1 Click Capital as the globe’s leading Fintech Company.
</p>
    </div>
    </div> */}
    {/* <div className='about-container'>
    <img className='about-image' src={Img3}>
      </img>
      <p className="about-text">Over 32 years of experience in  successful Leadership roles of Managing business, P&L, Sales & Marketing,
Training and HR and Board Level Experience in the Financial Services industry spanning across Insurance,
Banking (Private & Consumer), Asset Management, Retail Lending, Real Estate and VC funded ventures
(Hotel Management Company, Education, Green Energy and Healthcare)..

I have worked with global organization such as Aviva Life Insurance, BNP Paribas, American Express Bank,
SARE Group (DUET Private Equity) and Bedrock Ventures and have an excellent track record of building new
businesses to a large scale organization and driving them to significant success.</p>
    </div> */}
     <section className='advisor'>
  <h2 className='advisor-heading'>Advisory Board</h2>
 </section>
 <div className='detail-about'>
    <div className='about-container'>
      <img className='about-image' src={Drdk}>
      </img>
      <p className="about-text">served as an officer at a very prestigious Nationalised Bank (Bank of Baroda) from 1982 to 1986. So has deep knowledge and experience of banking, microcredit, capacity building and financial matters. Dr. Bhalla also served the largest Public Sector Unit, Food Corporation of India as Head of Personnel and specializes in dealing with organizational issues like recruitment, training, restructuring for efficiency and labour issues.
</p>
    </div>
    <div className='about-container right'>
    <img className='about-image' src={Rs}>
      </img>
      <p className="about-text">is Chartered Accountant with 40+ years experience in BFSI  Segment. Executive Director and part of senior management in Bank of Baroda in India and overseas centers. Worked with Edelweiss as Advisor and also partner of Edelweiss resolution Advisors LLP.

</p>
    </div>
    </div>
    <div className='detail-about'>
    <div className='about-container'>
      <img className='about-image' src={Rohit}>
      </img>
      <p className="about-text">is an alumnus of IIT, KGP and IIM, Kolkata. He is the CEO of skyllMe, and partner of PACT LLP. He was a career banker for over 2 decades and has worked with leading organizations. He has worked with several reputed BFSI companies on mission critical projects and helped them improve process efficiency and controls while reducing costs and operational risks.
.</p>
    </div>
    <div className='about-container right'>
    <img className='about-image' src={Prerak}>
      </img>
      <p className="about-text">is presently CDO with Reliance Nippon Life Insurance Company. Previously worked with Kotak  Life and Max Life Insurance. 25+ years in General Management &   Sales & Distribution Management, Change management, efficiency enhancement and giving productivity at large scales. Core expertise in BFSI/ FMCG.

</p>
    </div>
    </div>
    <div className='detail-about'>
    <div className='about-container'>
      <img className='about-image' src={Ameet}>
      </img>
      <p className="about-text">is an Author , Serial Entrepreneur, Speaker and International Business success Coach. He has dedicated his life in empowering business owners in building businesses which are massive wealth generating machines and would eventually run without them. He will put you in control of your business with just a few simple proven moves that will empower you to access time and financial freedom for the first time. 
</p>
    </div>
    {/* <div className='about-container right'>
    <img className='about-image' src={Img2}>
      </img>
      <p className="about-text">I am a finance veteran with more than 2 decades of rich experience in the area of credit & underwriting,
P&L, trade finance, vehicle finance, risk management, insurance, investment banking, AMC and securities.
It has always been my dream to create a technology based lending company and then Covid came created
a huge whole in the MSME sector where credit crunch was at its highest. This presented us with an opport-
unity to work with various companies and deal with the realities of payroll funding in the market. It is my
vision to see 1 Click Capital as the globe’s leading Fintech Company.
</p>
    </div> */}
    </div>
 </div>
 <Footer/>
    </>
    
  )
}

export default About
