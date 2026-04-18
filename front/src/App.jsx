import { useNavigate } from 'react-router';

const App = () => {
    const navigate = useNavigate();

    return (
        <div className="flex_column">
            <p>Bienvenue sur la Ligue des Copains</p>

            <button onClick={() => navigate('/login')}>Se connecter</button>

            <button onClick={() => navigate('/createUser')}>
                Se créer un compte
            </button>

            <button onClick={() => navigate('/guesstheplayer')}>
                Jouer à "Guess the player"
            </button>
        </div>
    );
};

export default App;
