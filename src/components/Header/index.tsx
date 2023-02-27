import { HeaderContainer, HeaderContent, NewTransactionButton } from "./styles";
import * as Dialog from '@radix-ui/react-dialog'

import logoImg from "../../assets/logo.svg"
import { NewTransactionModal } from "../NewTransactionModal";

{/* Propriedade asChild é para que o trigger nao gere um novo botão, e sim aproveite o botão que esta dentro da tag*/}

export function Header(){
  return (
    <div>
      <HeaderContainer>
        <HeaderContent>
          <img src={logoImg} alt="" />

          <Dialog.Root>
            <Dialog.Trigger asChild>
              <NewTransactionButton>Nova transação</NewTransactionButton>
            </Dialog.Trigger>

            <NewTransactionModal />
          </Dialog.Root>
        </HeaderContent>
      </HeaderContainer>
    </div>
  )
}