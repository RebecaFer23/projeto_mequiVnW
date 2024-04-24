import * as S from "./styled"
import iconeMequi from '../assets/iconeMequi.png'
import app from '../assets/app.png'
import order from '../assets/order.png'

export default function Header() {
  return (

    <header>
      <S.Nav>
        <img src={iconeMequi} alt="icone 'M' do Méqui" />
        <div>
          <img src={app} alt="" />
          <p>Baixe o app</p>
          <S.Pedido>
          <p>Peça seu Méqui</p>
          <img src={order} alt="" />
          </S.Pedido>
        </div>
      </S.Nav>

    </header>

  )
}
