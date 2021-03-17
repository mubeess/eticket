import React from 'react'
import styled from 'styled-components'
import Button from '@material-ui/core/Button';

const StyledHeader=styled.div`
display:flex;
flex-direction:column;
width:100%auto;
height:80vh;
background-color:rgba(0,0,0,0.3);
border-bottom-left-radius:20px;
border-bottom-right-radius:20px;
position:relative;
.wrap{
    position:absolute;
    top:0;
    left:0;
    right:0;
    bottom:0;
    background:linear-gradient(rgba(0,0,0,0.3),black);
    justify-content:center;
    align-items:flex-end;
    display:flex;
}
`;


export default function Header() {
    return (
<StyledHeader>
 <video src='/Videos/ticket.mp4' style={{
     width:"100%",
    height:"100%",
    objectFit:'cover'
 }}  autoPlay loop/> 
 <div className='wrap'>
 <Button style={{
     marginBottom:'50px',
     width:'50%'
 }} variant="contained" color='primary'  disableElevation>
      Proceed To Booking⇢
</Button>
    
</div>


</StyledHeader>
    )
}
