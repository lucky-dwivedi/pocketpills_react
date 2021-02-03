import React, { useState, useEffect}  from 'react'
import axios from 'axios';
import API_URL from '../../config';

export default function ServicesEven4(props) {

    const [data, setData] = useState([]);
    useEffect(() => {
        if(sessionStorage.getItem("lang")==="french"){
            axios
              .get(`${API_URL}/service-even-4-frenches`)
              .then(res => {
                //console.log(res)
                setData(res.data)
              })
              .catch(err => {
                console.log(err)
              })
          }
          else{
            axios
              .get(`${API_URL}/service-even-4-s`)
              .then(res => {
                //console.log(res)
                setData(res.data)
              })
              .catch(err => {
                console.log(err)
              })
          } 
      },[sessionStorage.getItem("lang")])

    const mystyle = {
        paddingLeft:"10%",
        paddingTop:"8%",
        paddingBottom:"10%"
      };

    return (
        <> 
           {data.map((item) => (
           <div className="container-fluid bg-white">
                <div className="row" style={mystyle}>
                    <div className="col-sm-12">
                    <h1 >{props.number}.{item.heading}</h1>
                    </div>
                    <div className="col-sm-12">
                    <div className="row p-5">
                        <div className="col-sm-4" >
                            <img src={item.img1.name} className="img-fluid" /><br/><br/><br/>
                            {item.txt1}
                        </div>
                        <div className="col-sm-4" >
                            <img src={item.img2.name} className="img-fluid" /> <br/><br/>  
                            {item.txt2}
                        </div>
                        <div className="col-sm-4" >
                            <img src={item.img3.name} className="img-fluid" /><br/><br/>
                            {item.txt3}
                        </div>
                    </div>
                    </div>
                </div>  
            </div> 
            ))}
        </>
    )
}
