import './Nav.css';
import React from 'react';
import {Link} from 'react-router-dom'

export default props=>
    <aside className="menu-area">
        <nav className="menu">
            {/* O "link (a)" em sí, poderia ser um componente React, já que ele possui um certo padrão
        
                Porém, já que este menu especificamente possui apenas dois itens,
                 não existe necessidade de fazer isso*/}
            <Link to="/">
                <i className="fa fa-home">Início</i>
            </Link>
            <Link to="/users">
                <i className="fa fa-users">Usuários</i>
            </Link>
        </nav>
    </aside>