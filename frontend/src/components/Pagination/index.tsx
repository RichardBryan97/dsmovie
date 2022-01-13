import { ReactComponent as ArrowLeft } from 'assets/img/ArrowLeft.svg'
import './style.css'
function Pagination() {

    return (
        <div className="dsmovie-pagination-container">
            <div className="dsmovie-pagination-box">
                <button className="dsmovie-pagination-button" disabled={true} >
                    <ArrowLeft />
                </button>
                <p>{`${1} de ${3}`}</p>
                <button className="dsmovie-pagination-button" disabled={false} >
                    <ArrowLeft className="dsmovie-flip-horizontal" />
                </button>
            </div>
        </div>

    );
}

export default Pagination;