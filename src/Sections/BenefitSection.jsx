import React from 'react'
import styled from 'styled-components'
import { InnerLayout } from '../styles/Layout'
import questions from '../questions'
import Questions from '../components/Questions'

const BenefitSection = () => {
   return (
      <FaqStyled id='faq'>
         <InnerLayout>
            <div  data-aos='fade-right'>
               <h3 className="small-heading">Benefits <span>of Campus Ambassador</span></h3>
               <p className='c-para'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit reiciendis architecto recusandae officia veritatis impedit amet praesentium at consequuntur vero,
               </p>
            </div>
            <div className="questions-con" >
               {
                  questions.map(q => (
                     <Questions  key={q.id} {...q} />
                  ))
               }
            </div>
         </InnerLayout>
      </FaqStyled>
   )
}
const FaqStyled = styled.section`
   .c-para{
      width: 60%;
      margin: 0 auto;
   }
   .lines{
      position: absolute;
      left: 0;
      top: 360%;
      width: 100%;
      z-index: -1;

      img{
         width: 100%;
      }
   }
   .questions-con{
      padding-top: 2rem;
   }

`

export default BenefitSection
