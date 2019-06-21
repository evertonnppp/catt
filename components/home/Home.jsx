
import React from'react'
import Main from '../templates/Main'

export default props =>
<Main icon="home" title="Quanto vale meu carro"
        subtitle="Descubra agora mesmo  ">
            
          <nav className="card">
              <div className="fotodecima">
                     <img src="tou.jpg" alt=""/>
              </div>
              <div className="conteudo">
                  <button className="butao">Veja mais Aqui</button>
                   <span className="nome">Fiat</span>
                   <span className="preco">R$50.000</span>
              </div>
          </nav>

            
     </Main>