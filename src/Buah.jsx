function Buah (props) {
    return (
        <div>
            <h2>My Favorite Fruit</h2>
            <ul>
                <li>Nama: {props.nama} </li>
                <li>Warna: {props.warna} </li>
                <li>Rasa: {props.rasa} </li>
            </ul>
        </div>
    )
}

export default Buah;