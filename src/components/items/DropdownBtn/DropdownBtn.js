import { BrowserRouter as Router, Link } from 'react-router-dom';
import './DropdownBtn.css';

function DropdownBtn(props){

    const data = props.btnData;

    return(
        <div className="dropdown-btn__wrapper">
            <Link to={data.primaryLink}>
                {data.element} 
            </Link>
            <ul className="dropdown-btn__list">
                {data.list.map(el => {
                    return <li className="dropdown-btn__item"><Link to={el.link}>{el.name}</Link></li>;
                })}
            </ul>
        </div>
    );
}

export default DropdownBtn;