import React, { useState } from 'react';
import { Container, Paper, Typography, Grid, TextField, Button } from '@material-ui/core';
import { SidebarContext } from '../common/sidebar/sidebarContext';
import { useContext } from 'react';
import { makeStyles } from '@material-ui/core';
import Pageheader from '../common/PageHeader/pageheader2';
import Autocomplete from '@material-ui/lab/Autocomplete';


const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    marginTop: '7rem'
  },
  paper: {
    marginBottom: theme.spacing(1),

  },
  table: {
    minWidth: 750,
  },
  visuallyHidden: {
    border: 0,
    clip: 'rect(0 0 0 0)',
    height: 1,
    margin: -1,
    overflow: 'hidden',
    padding: 0,
    position: 'absolute',
    top: 20,
    width: 1,
  },
  gridSpace: {
    margin: 0,
    width: '100%',
    marginBottom: '1rem'
  }
}));


export const data = [
  ["Task", "Hours per Day"],
  ["Work", 11],
  ["Eat", 2],
  ["Commute", 2],
  ["Watch TV", 2],
  ["Sleep", 7],
];

export const options = {
  title: "My Daily Activities",
};

function SimInventory() {
  const classes = useStyles();
  const { isopen } = useContext(SidebarContext);

  const[networkList,setNetworkList] = useState([
    {id:0,name:"BSNL"},
    {id:1,name:"Airtel"},
    {id:2,name:"Jio"}
  ]);

  const [network,setNetwork] = useState("");

 

  const topViewData = { 'title': 'Home ', 'subTitleFirst': '/ Inventory Management ', 'subTitleSecond': '/ Sim Inventory', 'subTitleThird': '', 'buttonIcon': true, "buttonText": ' Add User', 'ButtonClick': "", 'backPath': '/dashboard', 'backPathSecond': '/maps', 'addButtonPath': '/adduser', 'addButton': false, 'addCancelClick': '', 'addClick': '', 'editButton': false, 'editButtonClick': '', 'updatePermission': [], 'updateButton': false, 'goBackEditClick': '', 'updateClick': '', 'addButtonPermission': "" }
  return (
    <div className='dashboard_home' style={{ marginLeft: isopen ? "201px" : "14px" }} >
      <Container style={{ paddingRight: isopen ? '5px' : "13px" }} >


        {/* top page header  */}
        <div style={{ marginLeft: isopen ? "24px" : "12px" }}>
          <Pageheader data={topViewData} />
        </div>


       

        <Paper className={classes.paper} id='left' style={{ width: isopen ? '106%' : '112%', padding: '0.5rem', marginLeft: isopen ? "25px" : "10px" }}>

          <Typography style={{fontWeight:"bold"}}>
            Inventory Management
          </Typography>
          {/* For sim inventory */}


          <Paper style={{marginTop:"10px"}} >
          <Grid xs={12} style={{  padding: "8px", }}>

                <Typography style={{background: "#f4f4f4",padding:"4px", fontWeight: "bold", borderRadius: "4px", color: "#000" }}>
                  Sim Inventory
                </Typography> 

                <Grid container xs={12}>
                 

                <Grid xs={2} style={{padding:"6px"}}>
                <Typography style={{fontSize: "12px", fontWeight: "bold"}}>
                            Select Network Provider
                </Typography> 
                                    <Autocomplete id='header'
                                        getOptionLabel={(deviceList) => deviceList.name}

                                        options={networkList || []}
                                        getOptionSelected={(option, value) => option.name === value.name}
                                        value={network}

                                        onChange={(event, newValue) => setNetwork(newValue)}
                                        renderInput={(params) =>
                                            <TextField
                                              {...params}
                                                variant='outlined'
                                                margin='dense'
                                                color="primary"
                                                size="small"
                                                style={{marginLeft:"2px",marginTop:"2px",background:'#fff'}}
                                                placeholder='Select Network'

                                            />
                                        }
                                    />

                </Grid>

                <Grid xs={5}>

                </Grid>
                
                <Grid container xs={5}>

                  <Grid xs={4}>
                   

                  </Grid>

                </Grid>



                </Grid>  

          </Grid>

          </Paper>
          
        </Paper>
      </Container>
    </div>
  )
}

export default SimInventory;