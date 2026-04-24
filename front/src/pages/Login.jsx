import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router';
import { getConnexion, getConnexionFromToken } from '../hooks/useLogin';
import ic_eye from '../img/ic_eye.svg';
import ic_eye_slash from '../img/ic_eye_slash.svg';

const Login = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        setError,
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
        getConnexion(data.identifiant, data.password)
            .then((data) => {
                if (data.id) {
                    const token = window.btoa(
                        unescape(
                            encodeURIComponent(
                                data.identifiant + ':' + data.password
                            )
                        )
                    );

                    localStorage.setItem('token', token);
                    navigate('/profil', { state: { user: data } });
                } else {
                    setError('authentification', {
                        type: 'custom',
                        message: data.message
                    });
                }
            })
            .catch((error) => {
                console.log(error);
                setError('authentification', {
                    type: 'custom',
                    message: error.message
                });
            });
    };

    useEffect(() => {
        if (localStorage.getItem('token')) {
            getConnexionFromToken(localStorage.getItem('token'))
                .then((data) => {
                    if (data.id) {
                        const token = window.btoa(
                            unescape(
                                encodeURIComponent(
                                    data.identifiant + ':' + data.password
                                )
                            )
                        );

                        localStorage.setItem('token', token);
                        navigate('/profil', { state: { user: data } });
                    } else {
                        setError('authentification', {
                            type: 'custom',
                            message: data.message
                        });
                    }
                })
                .catch((error) => {
                    console.log(error);
                    setError('authentification', {
                        type: 'custom',
                        message: error.message
                    });
                });
        }
    }, []);

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex_column profil_align_start margin5">
                <div className="flex_column margin5">
                    <input
                        type="text"
                        placeholder="Identifiant"
                        {...register('identifiant', {
                            required: true,
                            onChange: () => clearErrors('authentification')
                        })}
                    />
                    <label>
                        {errors.identifiant && <span>Champs requis</span>}
                    </label>
                </div>
                <div className="flex_column margin5">
                    <div className="flex center">
                        <input
                            type={passwordType}
                            placeholder="Password"
                            {...register('password', {
                                required: true,
                                onChange: () => clearErrors('authentification')
                            })}
                        />

                        <button className="image_eye" onClick={showPassword}>
                            {returnIconeEye(passwordType)}
                        </button>
                    </div>
                    <label>
                        {errors.password && <span>Champs requis</span>}
                    </label>
                </div>
                <button type="submit" className="center">
                    Se connecter
                </button>
                <div>
                    <label>
                        {errors.authentification && (
                            <span>{errors.authentification.message}</span>
                        )}
                    </label>
                </div>
            </div>
        </form>
    );
};

export default Login;
