import { useForm } from 'react-hook-form';
import { createUser } from '../hooks/useUser';
import { useNavigate } from 'react-router';

const CreateUser = () => {
    const {
        register,
        handleSubmit,
        setError,
        formState: { errors }
    } = useForm();

    const navigate = useNavigate();
    const onSubmit = (data) => {
        createUser(data.adresseMail, data.password, data.identifiant)
            .then((data) => {
                if (data) {
                    navigate('/profil', { state: { user: data } });
                } else {
                    setError('createUser', {
                        type: 'custom',
                        message: data.message
                    });
                }
            })
            .catch((error) => {
                console.log(error);
                setError('createUser', {
                    type: 'custom',
                    message: error.message
                });
            });
    };

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="flex_column profil_align_start margin5">
                    <div className="flex_column margin5">
                        <input
                            placeholder="Identifiant"
                            {...register('identifiant', {
                                required: true
                            })}></input>
                        <label>
                            {errors.identifiant && <span>Champ requis</span>}
                        </label>
                    </div>
                    <div className="flex_column profil_align_start margin5">
                        <input
                            placeholder="Password"
                            {...register('password', {
                                required: true
                            })}></input>
                        <label>
                            {errors.password && <span>Champ requis</span>}
                        </label>
                    </div>

                    <div className="flex_column profil_align_start margin5">
                        <input
                            placeholder="Adresse Mail"
                            {...register('adresseMail', {
                                required: true,
                                pattern: {
                                    value: /^\S+@\S+\.\S+$/,
                                    message: 'Email invalide'
                                }
                            })}></input>
                    </div>
                    <label>
                        {errors.adresseMail && (
                            <span>{errors.adresseMail.message}</span>
                        )}
                    </label>

                    <button type="submit">Valider</button>
                    <label>
                        {errors.createUser && (
                            <span> {errors.createUser.message}</span>
                        )}
                    </label>
                </div>
            </form>
        </div>
    );
};

export default CreateUser;
