import React, {useState, useEffect} from 'react';
import Card from 'react-bootstrap/Card';
import CardColumns from 'react-bootstrap/CardColumns';
import Images from '../ImageList';
import Button from 'react-bootstrap/Button';
import MyVerticallyCenteredModal from './Image';
import download from '../imgs/download.png';
import like from '../imgs/like.png';
import Search from './Search';


function ListImages(props) {

  const [imgData, setImgData] = useState([])

  useEffect(() =>{
    fetch('/api/images', {
      accept: 'application/json',
    }).then(res => res.json())
      .then(pic => {
        setImgData(pic)
        console.log('ListImages.js - ')
        console.log(pic)
      })
      .catch(err => console.log(err));
  }, [])


  let images=[];
  //add get all images route and replace the Images.map function with the api 
 
   if(props.imageType==="home") {
    imgData.map(re=>{    
      if(re.category==="home")
      {
         images.push(re)
       }   
     })
  }else if(props.imageType==="outdoor") {
    imgData.map(re=>{    
      if(re.category==="outdoor")
      {
         images.push(re)
       }   
     })
  }else if(props.imageType==="office") {
    imgData.map(re=>{    
      if(re.category==="office")
      {
         images.push(re)
       }   
     })
  }else if(props.imageType==="all") {
    imgData.map(re=>{    
      
      images.push(re)
     
  })
  }else {

    imgData.map(re=>{
      if(re.posted_by===props.imageType)
      {
        images.push(re)
      }
    })
    
  }
  
  const [modalShow, setModalShow] = useState(false);
  const [ID, setId] = useState('');
  
  function modal(id){
    setModalShow(true)
    setId(id)
  }

  const handleDownload = (e, id) => {
    //e.preventDefault();
    console.log(id)
    fetch(`/api/images/${id}/download`, {
      accept: 'application/json',
    }).then(res => res.json())
      .then(pic => {
        //setImgData(pic)
        //console.log('ListImages.js - ')
        console.log(id)
      })
      .catch(err => console.log(err));
  }
  
  return (
    
    <div> 
    <Search/>
     <CardColumns>
    {
        imgData.map(re=>{
          console.log(re)
          return(         
          <Card>
            
          <a className=" modalButton" onClick={() => modal(re._id)} >
            <Card.Img variant="top" src={re.url} />
            </a>
            <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        id={ID}/>
         
            <Card.Footer>
            {/*add download functionality from backend */}
            <a href='' onClick={handleDownload(re._id)}><img src={download} className="downloadIcon"></img></a>
            {/*add like functionality from backend */}
        <img src={like} className="likeIcon"></img>
              {/* <p className="text-right text-muted">@{re.POSTED_BY}</p> */}
        </Card.Footer>      
          </Card>
          
        
        )})
  
    }
 
  </CardColumns> 
    </div>
  );}

export default ListImages;