import './PerkenalanDiri.css';

function PerkenalanDiri (props) {
    return (
        <div className='perkenalan-diri'>
            <h2>My Bio</h2>
            <div className='data-diri'>
                <ul>
                    <li>Nama: {props.nama} </li>
                    <li>Subdiv: {props.subdiv} </li>
                    <li>Jurusan: {props.jurusan} </li>
                </ul>
            </div>
        </div>
    )
}

export default PerkenalanDiri;