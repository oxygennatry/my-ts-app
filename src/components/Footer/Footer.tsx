import { FooterStyle } from "./FooterStyle.style"
import { Image } from "../../Image/Image"






export const Footer = ()=>{
    return(
        <FooterStyle>
        <div className="footerContainer">
            <div className="social">
                <h2>НАШИ СОЦСЕТИ</h2>
                <div className="socialDiv">
                <a href="https://web.telegram.org/k/#@Oxygennatry"><img src="https://img.icons8.com/?size=64&id=103888&format=png" alt="tg" /></a>
                    <a href="https://web.telegram.org/k/#@Oxygennatry">Telegram</a>
                </div>
                <div className="socialDiv">
                <a href="https://www.instagram.com/oxygennatry/"><img src="https://img.icons8.com/?size=64&id=Ns8Oze9tK1Y7&format=png " alt="inst" /></a>
                    <a href="https://www.instagram.com/oxygennatry/">Instagram</a>
                </div>
                <div className="socialDiv">
                <a href="https://github.com/oxygennatry"><img src="https://img.icons8.com/?size=64&id=j6tO4jtQBisT&format=png" alt="git" /></a>
                    <a href="https://github.com/oxygennatry">GitHub</a>
                </div>
            </div>

            <div className="contact">
                <h2>КОНТАКТЫ</h2>
                <a href="">+998885442310</a>
                <a href="">+998943602310</a>
                <a href="">+998936189265</a>
            </div>

            
        </div>
        </FooterStyle>
    )

}