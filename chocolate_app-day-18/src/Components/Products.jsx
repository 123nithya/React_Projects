import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import choco1 from '../Images/i9.png';
import choco2 from '../Images/i14.jpeg';
import choco3 from '../Images/i16.jpeg';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function Product() {
  return (
    <div className='product-section-container'>
        <div className="product-section-text-container">
            <p className="product-primary-subheading">Our Delights</p>
        </div>
        <Box sx={{ width: '100%' }} className="product-section-grid-container">
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} className="product-grid">
                <Grid item xs={3.5} style={{marginLeft:'7.5%'}}>
                    <img src={choco1} alt="cocolate-1" style={{width:'330px', height:'600px',borderRadius:'20px 20px 0px 0px',marginTop:'5%'}}/>
                    <p className="product-primary-text">Almond Chocolate</p>
                </Grid>
                <Grid item xs={3.5}>
                    <img src={choco2} alt="cocolate-1" style={{width:'330px', height:'600px',borderRadius:'20px 20px 0px 0px',marginTop:'5%'}}/>
                    <p className="product-primary-text">Dark Chocolate</p>
                </Grid>
                <Grid item>
                    <img src={choco3} alt="cocolate-1" style={{width:'330px', height:'600px',borderRadius:'20px 20px 0px 0px',marginTop:'5%'}}/>
                    <p className="product-primary-text">Milk Chocolate</p>
                </Grid>
            </Grid>
        </Box>
    </div>
  );
}

