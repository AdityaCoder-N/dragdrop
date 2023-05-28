import React, { useEffect, useState } from 'react'
import './ResultPage.css'
import { useLocation ,useNavigate} from 'react-router-dom'

const ResultPage = () => {

    const location = useLocation()
    const navigate = useNavigate();
    const { solution} = location.state 

    const [result,setResult] = useState(false)

    useEffect(() => {
      
        let temp = [...solution];
        temp.sort((a, b) => a - b)

        console.log("temp : ",temp );
        console.log("solution : ",solution)

        let flag=0;
        for(let i=0;i<solution.length;i++){
            if(solution[i]!==temp[i]){
                setResult(false);
                flag=1;
                break;
            }
        }
        if(!flag){
            setResult(true);
        }
        

    },[])

    

  return (
    <div className='result-page'>
        
        {!result?<div className='result-container'>
            <div className='heading'>
                Oops ! You gave the wrong Answer <i className="fa-solid fa-xmark red"></i>
            </div>
            <div className='subtxt'>     
                Note : In an ascending array , The next element is greater to the elements before it.
            </div>
            
            <button className='reset-btn' onClick={()=>navigate('/play')}>Reset</button>
        </div>:

        <div className='result-container'>
            <div className='heading'>
                Congrats ! You gave the Correct Answer <i className="fa-solid fa-check green"></i>
            </div>
            <button className='reset-btn' onClick={()=>navigate('/play')}>Play Again</button>
        </div>
        
        
        }



    </div>
  )
}

export default ResultPage