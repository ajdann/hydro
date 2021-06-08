import React, { useEffect, useState } from 'react';
import {useDispatch} from 'react-redux';
import useStyles from './styles';
import {TextField, Button, Typography, Paper} from '@material-ui/core';


import * as api from '../../api/index.js';


import {Container, Grow, Grid} from '@material-ui/core';



function Dashboard(){
    const [currentId, setCurrentId] = useState(null);
    const [latestReading, setLatestReading] = useState({
      "ph": 1, 
      "EC": 3, 
      "temp": 15
    });

    const [postData, setPostData] = useState({
      "pHLow": 0,
      "pHHigh": 0,
      "ECLow": 0, 
      "ECHigh": 0, 
      "tempLow": 0, 
      "tempHigh": 0, 
    });
    const classes = useStyles();

    useEffect(()=>{
      // getLatestReading();
      console.log(latestReading);
    }, [])

    const clear = ()=>{
        setPostData({
          "pHLow": 0,
          "pHHigh": 0,
          "ECLow": 0, 
          "ECHigh": 0, 
          "tempLow": 0, 
          "tempHigh": 0,
        })
  }

    const getLatestReading = async () =>{
      try{
          const response = await api.fetchLatestReading();
          setLatestReading(response.data);
      } catch(error){
          console.log(error);
      }
    }

      const inputParameters = async () =>{
        try{
            const response = await api.postParameters(postData);
            console.log(response);
        } catch(error){
            console.log(error);
        }
  }

      const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(postData)
        inputParameters();
    }
    return(
            <Grow in>
                <Paper className={classes.paper}>
                  <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
                    <Typography variant="h6">Input Desired Parameters</Typography>
                    <TextField name="pHLow" variant="outlined" label="pH Low" fullWidth value={postData.pHLow} onChange={(e) => setPostData({ ...postData, pHLow: e.target.value })} />
                    <TextField name="pHHigh" variant="outlined" label="pH High" fullWidth value={postData.pHHigh} onChange={(e) => setPostData({ ...postData, pHHigh: e.target.value })} />
                    <TextField name="ECLow" variant="outlined" label="EC Low" fullWidth value={postData.ECLow} onChange={(e) => setPostData({ ...postData, ECLow: e.target.value })} />
                    <TextField name="ECHigh" variant="outlined" label="EC High" fullWidth value={postData.ECHigh} onChange={(e) => setPostData({ ...postData, ECHigh: e.target.value })} />
                    <TextField name="tempLow" variant="outlined" label="Temp Low" fullWidth value={postData.tempLow} onChange={(e) => setPostData({ ...postData, tempLow: e.target.value })} />
                    <TextField name="tempHigh" variant="outlined" label="Temp High" fullWidth value={postData.tempHigh} onChange={(e) => setPostData({ ...postData, tempHigh: e.target.value })} />
                    <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
                    <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
                  </form>
               </Paper>
            </Grow>
    );
}


export default Dashboard;