function PerkenalanDiri (props) {
    return (
        <div>
            <h2>My Bio</h2>
            <ul>
                <li>Nama: {props.nama} </li>
                <li>Subdiv: {props.subdiv} </li>
                <li>Jurusan: {props.jurusan} </li>
            </ul>
        </div>
    )
}

export default PerkenalanDiri;