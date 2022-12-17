import { Header } from "../components/Header"
import homeImg from "../assets/SloganHome.png"

export function Inicio() {
    return(
       <div>
        <Header title="Lacre solidário, movimente essa ação!" image={homeImg} />
       </div>
        
    )
}