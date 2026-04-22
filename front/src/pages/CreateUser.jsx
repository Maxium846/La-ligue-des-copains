import { useState } from 'react';
import { createUser} from '../utils/api';

const CreateUser = () => {
    const [user, setUser] = useState({
        identifiant: '',
        password: '',
        adresseMail: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        const userToAdd = {
            identifiant: user.identifiant,
            password: user.password,
            adresseMail: user.adressMail
        };

        setUser(userToAdd);
        createUser(user)
    };
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    placeholder="Uersname"
                    type="text"
                    value={user.identifiant}
                    onChange={(e) =>
                        setUser({
                            ...user,
                            identifiant: e.target.value
                        })
                    }></input>
                <input
                    placeholder="AdresseMail"
                    type="text"
                    value={user.password}
                    onChange={(e) =>
                        setUser({ ...user, password: e.target.value })
                    }></input>
                <input
                    placeholder="Password"
                    type="text"
                    value={user.adressMail}
                    onChange={(e) =>
                        setUser({ ...user, adresseMail: e.target.value })
                    }></input>

                <button type="submit">Valider</button>
            </form>
        </div>
    );
};

export default CreateUser;
