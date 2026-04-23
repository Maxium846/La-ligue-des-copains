import { useForm } from 'react-hook-form';
import { createUser } from '../hooks/useUser';

const CreateUser = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm();

    const onSubmit = (data) => {
        createUser(data.adresseMail, data.password, data.identifiant);
        reset();
    };

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input
                    placeholder="Identifiant"
                    {...register('identifiant', { required: true })}></input>
                <label>
                    {errors.identifiant && <span>Champ obligatoire</span>}
                </label>
                <input
                    placeholder="Password"
                    {...register('password', { required: true })}></input>
                <label>
                    {errors.password && <span>Champ obligatoire</span>}
                </label>
                <input
                    placeholder="Adresse Mail"
                    {...register('adresseMail', { required: true })}></input>
                <label>
                    {errors.adresseMail && <span>Champ obligatoire</span>}
                </label>

                <button type="submit">Valider</button>
            </form>
        </div>
    );
};

export default CreateUser;
