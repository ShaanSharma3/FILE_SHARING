
import './App.css';
import { useRef , useState , useEffect} from 'react';  //replacement of get element by id
import { uplaodFile } from './services/api';
function App() {

  const [file , setFile] = useState('');  
  const [result , setResult] = useState('');
  const fileInputRef = useRef();
  const onUplaodClick = () => {
    fileInputRef.current.click();
  }


  //basuically here this use effect is used to upload 
  //file in DB

useEffect(()=>{   //use effect cant be async function itself
const getImage = async() =>{
  if(file){
    const data = new FormData();
    data.append("name" , file.name);
    data.append("file" , file);

   let response = await uplaodFile(data); 
   setResult(response.path);
  }
}
getImage();
},[file])






  return (
    <div className="App">




<div className="navbar">
  <div className='left'>
    <p>FILE SHARING APP by Shaan</p>
  </div>

  <div className='right'>
    <h3>Contact</h3>
    <h3>About</h3>
    <h3>Email</h3>
  </div>







</div>
     <div className="container">
     <img src="/img/2.png"/>
      <div className="wrapper">
        <h1>FILE SHARING APPLICATION</h1>
        <p>Upload and share the download link</p>
        <button onClick={()=> onUplaodClick()}>UPLOAD HERE</button>
        <input type="file" 
        ref={fileInputRef}
        style={{display:"none"}}
        onChange={(e) =>setFile(e.target.files[0])}
        />
<a href={result} target="_blank">{result}</a>
      </div>
     </div>



<div className="footer">
  <p className="para"> YOU CAN SHARE TEXTFILE, IMAGES, PDFs, DOCUMENTS....... </p>
  <p>FileSharingApp @All rights reserved</p>
</div>

    </div>
  );

  
}

export default App;
