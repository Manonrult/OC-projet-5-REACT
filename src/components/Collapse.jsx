import React, { useState } from 'react';
import '../sass/Components/Collapse.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';

function Collapse ({title, content}){
    //ouverture-fermeture composant
    const [isCollapsed, setIsCollapsed] = useState(true);

    //inversion de l'état au clic
    const toggleCollapse =() => {
        setIsCollapsed(!isCollapsed);
    };

    //Animation de la flèche en fonction de l'état
    const arrowClass = isCollapsed ? 'collapse__arrow--down' : 'collapse__arrow--up';

    return(
        <div className='collapse'>
            <div className='collapse_header' onClick={toggleCollapse}>
                <h2 className='collapse__title'>{title}</h2>
                <FontAwesomeIcon icon={faChevronUp} className={arrowClass} />
            </div>
                {!isCollapsed && (
                    <div className='collapse__content'>
                        {content}
                    </div>
                    
                )}
        </div>
    );
}

export default Collapse;