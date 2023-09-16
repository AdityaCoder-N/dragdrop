import React, { useEffect, useState } from 'react'
import './ResultPage.css'
import { useLocation ,useNavigate} from 'react-router-dom'

const ResultPage = () => {

    const location = useLocation()
    const navigate = useNavigate();
    const { solution,level} = location.state 

    const [result,setResult] = useState(false)

    useEffect(() => {
      
        let temp = [...solution];
        if(level==="1")
            temp.sort((a, b) => a - b);
        else
            temp.sort((a,b)=>b-a);

        // console.log("temp : ",temp );
        // console.log("solution : ",solution)

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
        

    },[level,solution])

    

  return (
    <div className='result-page'>
        
        {!result?<div className='result-container'>
            <div className='heading'>
                Oops ! You gave the wrong Answer <i className="fa-solid fa-xmark red"></i>
            </div>
            <div className='subtxt'>     
                Note : In an ascending array , The next element is greater to the elements before it.
            </div>
            
            {
                level==="1"?
                <button className='reset-btn' onClick={()=>navigate('/level1')}>Reset</button>
                :
                <button className='reset-btn' onClick={()=>navigate('/level12')}>Reset</button>
            }
        </div>:

        <div className='result-container'>
            <div className='heading'>
                Congrats ! You gave the Correct Answer <i className="fa-solid fa-check green"></i>
            </div>

            {
                level==="1"?
                <button className='reset-btn' onClick={()=>navigate('/level2')}>Next Level</button>
                :
                <button className='reset-btn' onClick={()=>navigate('/level1')}>Play Again</button>

            }
        </div>
        
        
        }



    </div>
  )
}

export default ResultPage