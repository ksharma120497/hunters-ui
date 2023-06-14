import React, {useEffect, useState} from 'react';
import './style';
import './style.css';
import Stack from '@mui/material/Stack';
import HuntersButton from '../common-components/HuntersButton';
import { TextField } from '@mui/material';

const HomeScreen = () => {

    var asset = "hi";
    const[assets, setAssets] = useState("hi");
    const [homeData, setHomeData] = useState("");

    useEffect(()=>{
        fetch('https://pokeapi.co/api/v2/pokemon/pikachu').then(data=>data.json()).then(data=> setHomeData(data.moves[7].move.name));
    },[])

  return (
    <div>
      <h1 className="homescreen-header">
        Student Housing Made Social and Simple
      </h1>
      <p className="homescreen-text">
        {homeData}
      </p>
      <TextField 
      id="outlined-basic" 
      label="Outlined" 
      variant="outlined" 
      style={{backgroundColor: "#FFF"}}
      onChange = { e => { 
        console.log(e.target.value); 
        asset=e.target.value; 
        setAssets(e.target.value);
    }}
      />
      <Stack spacing={20} direction="row">
        <HuntersButton name={'Search Housing'} onClick = {()=>{ setAssets(assets=> assets+"he") }}/>
        <div style={{color: "#FFF"}}>hello {asset} {assets}</div>
        <HuntersButton name={'Post Housing'} />
      </Stack>
    </div>
  );
};

export default HomeScreen;
