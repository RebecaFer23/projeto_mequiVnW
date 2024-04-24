import styled, { createGlobalStyle, css } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        margin:0;   
        padding:0;  
        box-sizing: border-box;
        font-family        : Arial, Helvetica, sans-serif;
    }    
`;

const Center = css`
display: flex;
justify-content: center;
align-items: center;
`;

export const Nav = styled.nav`
${Center}
justify-content: space-between;
height: 15vh;
padding: 0 3rem;
    background-color: #fff;
    img {
        width: 4vw;
    }
    div img{
        width: 2vw;
    }
    div{
    display: flex;
    justify-content: center;
    align-items: center;
}
    `;

export const Pedido = styled.div`
background-color: #ffce2c;
border-radius: 6%;
font-weight: bold;
height: 8vh;
width: 12vw;
margin: 15px;
img{
    width: 3vw;
}
`;

export const Box1 = styled.section`
    display: flex;
background-color: #ffce2c;
display: flex;
height:90vh ;
figure img{
    width: 10vw;
}
`
export const Div = styled.div`
${Center}
justify-content: space-around;
flex-direction: column;
width: 70vw;
height: 80vh;

div{
    width: 37vw;
text-transform: uppercase;
font-size: 3rem;
color: #fff;
font-weight: 800;
}
div span{
    color: #d41515;
}`

export const Principal = styled.div`
${Center}
width: 30vw;
height: 70vh;
img{ 
    width: 35vw;
}
`

export const Box2 = styled.section`
${Center}
flex-direction: column;
justify-content: space-around;
height: 110vh;
background-color: #f1bd2b;
h2{
    color: #fff;
    font-size: 2rem;
}
`;

export const BoxImg = styled.div`
${Center}
justify-content: space-evenly;
width: 98vw;
`
export const Card = styled.div`
display: flex;
flex-direction: column;
text-align: center;
align-items: center;
background-color: #fff;
border-radius: 10px;
width: 25vw;
height: 45vh;
img{
    width: 25vw;
    margin-bottom: 10px;
}
button{
    margin-top: 10px;
    background-color: #f1bd2b;
    border: none;
    width: 9vw;
    height: 6vh;
    border-radius: 5px;
    font-size:  1rem;
    cursor: pointer;
}
`

export const Footer = styled.footer`
${Center}
justify-content: space-between;
height: 12vh;
`;
export const Mc = styled.div`
${Center}
justify-content: space-evenly;
width: 15vw;
margin-left: 20px;
img{
    width: 2vw;
}
`
export const App = styled.div`
${Center}
justify-content: space-around;
width: 25vw;
margin-right: 15px;
img{
    width: 9vw;
    cursor: pointer;
}
`