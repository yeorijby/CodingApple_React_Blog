
import './App.css';
import { useState } from 'react';

function App() {
  let post = '강남 우동 맛집';

  let [글제목, 글제목설정] = useState(['남자 코드 추천','강남 우동 맛집','파이선 독학']);
  //let [logo, setLogo] = useState('ReactBlog');
  let [날짜, 날짜설정] = useState(['2월 17일','3월 2일','5월 6일']);
  let [따봉, 따봉설정] = useState(0);
  

  return (
    <div className="App">
      <div className="black-nav">
        <h4 style={{color:'red', fontSize : '26px'}}>{post}</h4>
      </div> 
      <div className='list'>
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
        <h4>{글제목[2]}</h4>
        <p>{날짜[2]}</p>
      </div>        
    </div>
  );
}

export default App;
