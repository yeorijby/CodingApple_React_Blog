
import './App.css';
import { useState } from 'react';

function App() {
  let post = '강남 우동 맛집';

  let [글제목, 글제목설정] = useState(['남자 코드 추천','강남 우동 맛집','파이선 독학']);
  //let [logo, setLogo] = useState('ReactBlog');
  let [날짜, 날짜설정] = useState(['2월 17일','3월 2일','5월 6일']);
  let [따봉, 따봉설정] = useState([0, 0, 0]);
  let [modal, setModal] = useState(false);
  let [subjectIndex, setSubjectIndex] = useState(0);
  let [제목입력, 제목입력변경] = useState('');
  let [날짜입력, 날짜입력변경] = useState('');
  
  // ★★★★리액트에서 조건문은 삼항연산자를 사용한다. 

  // ★★★★리액트에서 반복분 쓰는 방법(for 문을 사용할 수 없음!)
  [1,2,3].map(function(a){
    return'123321'
  })

  function add(insert) {
    let copy1 = [...글제목];  // 깊은 복사
    insert === true ? copy1.unshift(제목입력) : copy1.push(제목입력) ;
    글제목설정(copy1);
  
    let copy2 = [...날짜];    // 깊은 복사
    insert === true ? copy2.unshift(날짜입력) : copy2.push(날짜입력);
    날짜설정(copy2);
  }




  return (
    <div className="App">
      <div className="black-nav">
        <h4 style={{color:'red', fontSize : '26px'}}>{post}</h4>
      </div> 
      {/* <div className='list'>
        <h4>{글제목[0]}<span onClick={() => {따봉설정(따봉 + 1)}}>👍</span><span onClick={() => {따봉설정(0)}}>😢</span>  {따봉} </h4>
        <p>{날짜[0]}</p>
        <button onClick={()=>{
          let copy = [...글제목]; // 깊은 복사

          copy[0] = '여자코트추천';
          글제목설정(copy);
          }}>제목 변경</button>

        <button onClick={()=>{
          let copy = [...글제목];   // 깊은 복사      남,강,파

          copy.sort();
          // for (let i = 0 ; i < copy.length ; i++)
          // {
          //   for (let j = 0 ; j < copy.length ; j++)
          //   {
          //     if (copy[i] < copy[j])
          //     {
          //       temp = copy[i];
          //       copy[i] = copy[j];
          //       copy[j] = temp;
          //     }    
          //   }
          // }

          //copy[0] = '여자코트추천';
          글제목설정(copy);
          }}>가나다 순 정렬</button>

      </div>

      <div className='list'>
        <h4>{글제목[1]}</h4>
        <p>{날짜[1]}</p>
      </div>
      <div className='list'>
        <h4 onClick={()=>{modal == true ? setModal(false) : setModal(true)}}>{글제목[2]}</h4>
        <p>{날짜[2]}</p>
      </div>  */}
      
      {
        글제목.map((element, index)=>{
          return (
            <div className='list' key={index}>
              <h4 onClick={()=>{
                setSubjectIndex(index);
                modal === true ? setModal(false) : setModal(true)
              }}>{element}
              <span onClick={(e) => {
                e.stopPropagation();
                let copyDDABONG = [...따봉];
                copyDDABONG[index] = copyDDABONG[index] + 1;
                따봉설정(copyDDABONG);
              }}>👍</span>  {따봉[index]} </h4>
              <p>{날짜[index]}</p>
              <button onClick={()=>{
                  let copy1 = [...글제목];  // 깊은 복사
                  copy1.splice(index, 1);
                  글제목설정(copy1);

                  let copy2 = [...날짜];    // 깊은 복사
                  copy2.splice(index, 1);
                  날짜설정(copy2);

              }}>글 삭제</button>              
            </div>          
          )
        })
      }

      <input type="text" onChange={(e) =>{
        제목입력변경(e.target.value); 
        console.log(제목입력);}}/>
      <input type="date" onChange={(e) =>{
        날짜입력변경(e.target.value); 
        console.log(날짜입력);}}/>

      <button onClick={()=>{
        add(true);
      }}>글 삽입(first)</button>

      <button onClick={()=>{
        add(false);
      }}>글 추가(Last)</button>

      {
        modal == true ? <Modal subjectIndex={subjectIndex} color='orange' 글제목={글제목} 글제목설정={글제목설정}/> : null
      }

    </div>
  );
}


function Modal(props){

  return (
    <div className='modal' style={{background:props.color}}>
      <h4> {props.글제목[props.subjectIndex]} </h4>
      <p> 날짜 </p>
      <p> 상세내용 </p>
      <button onClick={()=>{
          let copy = [...props.글제목]; // 깊은 복사

          copy[props.subjectIndex] = '여자코트추천';
          props.글제목설정(copy);
      }}>제목 변경</button>
    </div>
  )
}


export default App;
