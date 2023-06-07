import { stats } from '../constants'
import styles from '../style'
import CountUp from 'react-countup';

const Stats = () => (
    <section className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 mb-6`}>
      {stats.map((stat, index) => (
        <div key={stat.id} className={`flex-1 flex justify-start items-center flex-row m-3`}>
          {index === stats.length - 1 ? <h4 className='font-semibold font-poppins xs:text-[40px] text-[30px] xs:leading-[53px] leading-[43px] text-white'>$<CountUp end={stat.value}/>M+</h4> : <h4 className='font-semibold font-poppins xs:text-[40px] text-[30px] xs:leading-[53px] leading-[43px] text-white'><CountUp end={stat.value}/>+</h4>}
          <p className='font-normal font-poppins xs:text-[20px] text-[15px] xs:leading-[26px] leading-[21px] text-gradient uppercase ml-3'>{stat.title}</p>
        </div>
      ))}
    </section>
  )


export default Stats


/**
 * 
 * <h4 className='font-semibold font-poppins xs:text-[40px] text-[30px] xs:leading-[53px] leading-[43px] text-white'>{index === stats.length - 1 ? `$${<CountUp end={stat.value}/>}+` : `${<CountUp end={stat.value}/>}+`}</h4>
 * 
 * 
 */