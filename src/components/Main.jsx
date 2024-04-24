import { useState } from "react"
import * as S from "./styled"
import Card from './Card'

import hamburger from '../assets/hamburger.png'
import fries from '../assets/fries.png'
import iceCream from '../assets/iceCream.png'

import card1 from '../assets/card1.png'
import card2 from '../assets/card2.jpeg'
import card3 from '../assets/card3.jpeg'


export default function Main() {


  const [item, setItem] = useState(hamburger)

function bigMac(){
  setItem(hamburger)
}
function fritas(){
  setItem(fries)
}
function sorvete(){
  setItem(iceCream)
}


  return (
    <main>
      <S.Box1>
        <S.Principal>
          <img src={item} alt="Imagem principal" />
        </S.Principal>
        <S.Div>
        <div>Bateu aquela <span>#fome</span> de <span>méqui</span>?</div>
        <figure>
          <img onClick={bigMac} src={hamburger} alt="Imagem de BigMac" />
          <img onClick={fritas} src={fries} alt="Imagem de batatas fritas" />
          <img onClick={sorvete} src={iceCream} alt="Imagem de sorvete de casquinha" />
        </figure>
        </S.Div>
      </S.Box1>

      <S.Box2>
        <h2>Promoção</h2>
        <S.BoxImg>
        <Card imagem={card1} texto={"Que tal um #MéquiNoSofá?"} />
        <Card imagem={card2} texto={"Venha conhecer nossa loja"} />
        <Card imagem={card3} texto={"Escolha as medidas que o Méqui adotou!"} />
        </S.BoxImg>
      </S.Box2>
    </main>
  )
}