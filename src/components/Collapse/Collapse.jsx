import React, { forwardRef, useRef, useEffect, useState } from 'react';
import '../../sass/Components/Collapse.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';

const Collapse = forwardRef(
  ({ title, content, isOpen, onToggle, syncHeight }, ref) => {
    const innerRef = useRef(null);
    const [currentHeight, setCurrentHeight] = useState('0px');

    //Suite à un clique sur un collapse
    useEffect(() => {
      if (isOpen) {
        setCurrentHeight(syncHeight);
      } else {
        setCurrentHeight('0px');
      }
    }, [isOpen, syncHeight]);

    return (
      <div className="collapse">
        <div className="collapse_header" onClick={onToggle}>
          <h2 className="collapse__title">{title}</h2>
          <FontAwesomeIcon
            icon={faChevronUp}
            className={`collapse__arrow ${isOpen ? 'rotate' : ''}`}
          />
        </div>
        <div
          className={`collapse__content ${isOpen ? 'open' : ''}`}
          style={{
            '--max-height': currentHeight,
          }}
          ref={ref}
        >
          <div className="collapse__inner" ref={innerRef}>
            {Array.isArray(content) ? (
              <ul>
                {content.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            ) : (
              <p>{content}</p>
            )}
          </div>
        </div>
      </div>
    );
  }
);

export default Collapse;
