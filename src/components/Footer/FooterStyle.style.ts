import styled from "styled-components";


export const FooterStyle = styled.div`
background-color:#4D4D4D;


img{
width:44px;
height:44px;
filter: invert(100%);
}


h2{
color:#ECECEC;
}

a {
            color:#ECECEC;
            text-decoration: none;
            font-size:1.1rem;
            
        }

        a:hover {
            text-decoration: underline;
            cursor: pointer;

        }
            

        .socialDiv{
        display:flex;
        gap:15px;
        align-items: center;
        }




        .social{
        display:flex;
            padding: 50px;
            gap:20px;
            flex-direction: column;
        }


        .footerContainer{
        display:flex;
        align-items: center;
        justify-content: center;
        gap:40px;
        }

        .contact{
        display:flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        gap:45px;
        padding: 50px;
        
        }

        .contact a{
        line-height: 25px;
        }
`