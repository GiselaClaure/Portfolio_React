import styled from "styled-components";

export const MainButton= styled.button`
cursor:pointer;
padding:10px 20px;
border:0.1em solid #FFFFFF;
margin-top:100px;
border-radius:0.12em;
box-sizing: border-box;
text-decoration:none;
font-weight:500;
background-color:transparent;
text-align:center;
transition: all 0.5s;
a{
    font-size:20px;
    text-decoration:none;
    color:white;
}
&:hover{
background-color:#7a2cbfcc;
a{
    font-weight:500;
}
}
`

export const Button= styled.button`
cursor:pointer;
padding:10px 20px;
border:0.1em solid #83c5be;
margin:50px 35px 0;
border-radius:0.52em;
text-decoration:none;
font-weight:550;
font-size:20px;
color: #83c5be;
background-color:transparent;
text-align:center;
transition: all 0.5s;
&:hover{
text-shadow: 0 0 2em rgba(255,255,255,1);
background-color:transparent;
color:white;
border-color:#5c5b5bd8;
background-color:#83c5be;
font-weight:500;
}
`
