import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router';
import { getConnexion } from '../hooks/useLogin';

const Login = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        setError
    } = useForm();

    const navigate = useNavigate();

    const onSubmit = (data) => {
        console.log(data);
        getConnexion(data.adresseMail, data.password)
            .then((data) => {
                if (data) {
                    navigate('/profil');
                }
            })
            .catch((error) =>
                setError('authentification', {
                    type: 'custom',
                    message: error.message
                })
            );
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex_column">
                <input
                    type="text"
                    placeholder="Adresse mail"
                    {...register('adresseMail', { required: true })}
                />
                <label>
                    {errors.adresseMail && <span>Champs requis</span>}
                </label>
            </div>
            <div className="flex_column">
                <input
                    type="password"
                    placeholder="Password"
                    {...register('password', { required: true })}
                />
                <label>{errors.password && <span>Champs requis</span>}</label>
            </div>
            <button type="submit">Se connecter</button>
            <div>
                <label>
                    {errors.authentification && (
                        <span>{errors.authentification.message}</span>
                    )}
                </label>
            </div>
        </form>
    );
};

export default Login;
