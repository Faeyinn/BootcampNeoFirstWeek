import './Buah.css'

function Buah (props) {
    return (
        <div className = "buah">
            <h2>My Favorite Fruit</h2>
            <div className = "data-buah">
                <ul>
                    <li>Nama: {props.nama} </li>
                    <li>Warna: {props.warna} </li>
                    <li>Rasa: {props.rasa} </li>
                </ul>
            </div>
        </div>
    )
}

export default Buah;