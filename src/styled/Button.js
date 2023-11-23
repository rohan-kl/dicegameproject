import styled from 'styled-components'

export const Button=styled.button`
color:white;
padding:  10px 18px;
background-color: #000000;
border-radius:5px;
min-width:220px;
border:none;
font-size: 16px;
border:1px solid transparent;
transition: 0.4s background ease-in;
cursor:pointer;
font-weight: bold;

&:hover{
  background-color: white;
  border: 1px solid black;
  color:black;
  transition: 0.3s background ease-in;
}
`
export const OutlineButton=styled(Button)`
border:1px solid black;
background-color: white;
color:black;
&:hover{
    background-color: black;
    border: 1px solid <transparent></transparent>;
    color:white;
  
  }
`