import React from "react";
import "../../styles/index.css";

//create your first component
function Home (props) {
    let unidad = props.secondscounter%10;
    let decena = Math.floor(props.secondscounter/10)%10; 
    let centena = Math.floor(props.secondscounter/100)%10;
    let unidadmillar = Math.floor(props.secondscounter/1000)%10;
    let decenamillar = Math.floor(props.secondscounter/10000)%10;
    let centenamillar = Math.floor(props.secondscounter/100000)%10;
    return (
		<div className="body">
			<div className="simbolo"><i class="far fa-clock"></i></div>
			<div className="digito">{centenamillar}</div>
			<div className="digito">{decenamillar}</div>
			<div className="digito">{unidadmillar}</div>
			<div className="digito">{centena}</div>
			<div className="digito">{decena}</div>
			<div className="digito">{unidad}</div>	
		</div>
    )
}

export default Home;
