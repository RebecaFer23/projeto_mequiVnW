import * as S from "./styled"
import iconeMequi from '../assets/iconeMequi.png'
import googlePlay from '../assets/googlePlay.png'
import appStore from '../assets/appStore.png'

export default function Footer() {
  return (
    <S.Footer>
      <S.Mc>
      <img src={iconeMequi} alt="" />
      <p>© McDonald’s 2024</p>
      </S.Mc>
      <S.App>
        <img src={googlePlay} alt="Icone do Gloogle Play Store" />
        <img src={appStore} alt="Icone do App Store" />
      </S.App>
    </S.Footer>
  )
}
