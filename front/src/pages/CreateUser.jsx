import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router';
import { createUser } from '../hooks/useUser';
import ic_eye from '../img/ic_eye.svg';
import ic_eye_slash from '../img/ic_eye_slash.svg';

const CreateUser = () => {
    const {
        register,
        handleSubmit,
        setError,
        formState: { errors },
        clearErrors
    } = useForm();

    const navigate = useNavigate();

    const [passwordType, setPasswordType] = useState('password');

    const showPassword = (event) => {
        event.preventDefault();
        if (passwordType === 'password') {
            setPasswordType('text');
            return;
        }
        setPasswordType('password');
    };

    const returnIconeEye = (typeInput) => {
        if (typeInput === 'text') {
            return <img src={ic_eye} alt="" />;
        }
        return <img src={ic_eye_slash} alt="" />;
    };

    const onSubmit = (data) => {
        createUser(data.adresseMail, data.password, data.identifiant)
            .then((data) => {
                if (data.id) {
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
                                required: true,
                                onChange: () => clearErrors('createUser')
                            })}
                        />
                        <label>
                            {errors.identifiant && <span>Champ requis</span>}
                        </label>
                    </div>
                    <div className="flex_column margin5">
                        <div className="flex center">
                            <input
                                placeholder="Password"
                                {...register('password', {
                                    required: true,
                                    onChange: () => clearErrors('createUser')
                                })}
                            />
                            <button
                                className="image_eye"
                                onClick={showPassword}>
                                {returnIconeEye(passwordType)}
                            </button>
                        </div>
                        <label>
                            {errors.password && <span>Champ requis</span>}
                        </label>
                    </div>

                    <div className="flex_column margin5">
                        <input
                            placeholder="Adresse Mail"
                            {...register('adresseMail', {
                                required: true,
                                pattern: {
                                    value: /^\S+@\S+\.\S+$/,
                                    message: 'Email invalide'
                                },
                                onChange: () => clearErrors('createUser')
                            })}
                        />
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
