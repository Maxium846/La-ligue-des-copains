import { useLocation, useNavigate } from 'react-router';

const Profil = () => {
    const { state } = useLocation();
    const navigate = useNavigate();
    const { user } = state;
    return (
        <div className="margin5">
            <h1>Profil</h1>

            <div className="flex margin5">
                <div className="flex_column profil_align_start">
                    <div className="margin5">
                        <label>Adresse mail : </label>
                    </div>
                    <div className="margin5">
                        <label>Identifiant : </label>
                    </div>
                    <div className="margin5">
                        <label>Password : </label>
                    </div>
                </div>
                <div className="flex_column profil_align_start">
                    <div className="margin5">
                        <input
                            type="text"
                            disabled={true}
                            value={user.adresseMail}
                        />
                    </div>
                    <div className="margin5">
                        <input
                            type="text"
                            disabled={true}
                            value={user.identifiant}
                        />
                    </div>
                    <div className="margin5">
                        <input
                            type="text"
                            disabled={true}
                            value={user.password}
                        />
                        <button onClick={() => alert('TODO')}>Modifier</button>
                    </div>
                </div>
            </div>

            <h2>Mes ligues</h2>
            <div className="flex margin5">TODO</div>

            <button onClick={() => navigate('/')}>Accueil</button>
            <button
                onClick={() => {
                    localStorage.removeItem('token');
                    navigate('/');
                }}>
                Déconnexion
            </button>
        </div>
    );
};

export default Profil;
