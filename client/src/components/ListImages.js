import React from 'react';
import Card from 'react-bootstrap/Card';
import CardColumns from 'react-bootstrap/CardColumns';
import Images from '../ImageList';
import Button from 'react-bootstrap/Button';
import MyVerticallyCenteredModal from './Image';
import download from '../imgs/download.png';
import like from '../imgs/like.png';
import Search from './Search';


function ListImages(props) {
  let images=[];
  //add get all images route and replace the Images.map function with the api 
 
   if(props.imageType==="home") {
    Images.map(re=>{    
      if(re.CATEGORY==="home")
      {
         images.push(re)
       }   
     })
  }else if(props.imageType==="outdoor") {
    Images.map(re=>{    
      if(re.CATEGORY==="outdoor")
      {
         images.push(re)
       }   
     })
  }else if(props.imageType==="office") {
    Images.map(re=>{    
      if(re.CATEGORY==="office")
      {
         images.push(re)
       }   
     })
  }else if(props.imageType==="all") {
    Images.map(re=>{    
      
      images.push(re)
     
  })
  }else {

    Images.map(re=>{
      if(re.POSTED_BY===props.imageType)
      {
        images.push(re)
      }
    })
    
  }
  
  const [modalShow, setModalShow] = React.useState(false);
  const [ID, setId] = React.useState('');
  
  function modal(id){
    setModalShow(true)
    setId(id)
  }
  
  return (
    
    <div> 
    <Search/>
     <CardColumns>
    {
        images.map(re=>{
          return(         
          <Card>
            
          <a className=" modalButton" onClick={() => modal(re.ID)} >
            <Card.Img variant="top" src={re.PHOTO_NAME} />
            </a>
            <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        id={ID}      
      
      />
         
            <Card.Footer>
            {/*add download functionality from backend */}
            <a href={re.PHOTO_NAME} target="blank" download="xyz"><img src={download} className="downloadIcon"></img></a>
            {/*add like functionality from backend */}
        <img src={like} className="likeIcon"></img>
              <p className="text-right text-muted">@{re.POSTED_BY}</p>
        </Card.Footer>      
          </Card>
          
        
        )})
        
    }
    
  </CardColumns> 
    </div>
  );}

export default ListImages;