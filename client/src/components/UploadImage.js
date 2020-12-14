import React, {useState} from 'react';
import Images from '../ImageList';

import axios from 'axios'
import firebaseApp from '../firebase/Firebase'
import '../App.css';

const createToken = async () => {
    const user = firebaseApp.auth().currentUser;
    const token = user && (await user.getIdToken());
    const payloadHeader = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    };
    return payloadHeader;
  }

const UploadImage = () => {

    const [imgName, setImgName] = useState('')
    const [descp, setDesc] = useState('')
    const [cate, setCate] = useState('')
    const [urL, setURL] = useState('')
    
    const onChangeImg = (e) => {
        setImgName(e.target.value)
    }
    const onChangeDesc = (e) => {
        setDesc(e.target.value)
    }
    const onChangeCate = (e) => {
        setCate(e.target.value)
    }
    const onChangeURL = (e) => {
        setURL(e.target.value)
    }

    const onUpload = async (e) => {
        e.preventDefault()
        const header = await createToken();

        const newImgObj = {
            image_name: imgName,
            desc: descp,
            category: cate,
            url: urL
        }

        axios.post('/api/images', newImgObj, header)
        .then((res) => {
            console.log(res.data)
        })
        .catch((err) => {
            console.log(err)
        })

        setImgName('')
        setCate('')
        setDesc('')
        setURL('')
    }

    return (
        <div>
            <p>Welcome to Upload Images page</p>
            <form onSubmit={onUpload}>
                <label>
                    Image Name:
                </label>
                <input type='text' name='image_name' value={imgName} onChange={onChangeImg} placeholder='Add Image Name'/>
                <label>
                    Description:
                </label>
                <input type='text' name='desc' value={descp} onChange={onChangeDesc} placeholder='Add Image Description'/>
                <label>
                    Category:
                </label>
                <input type='text' name='category' value={cate} onChange={onChangeCate} placeholder='Add Image Category'/>
                <label>
                    URL:
                </label>
                <input type='text' name='url' value={urL} onChange={onChangeURL} placeholder='Add Image URL'/>
                <button type='submit'>Add Image</button>
            </form>
        </div>
      
    );
};

export default UploadImage;