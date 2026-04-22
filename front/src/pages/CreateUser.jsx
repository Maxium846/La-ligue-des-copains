import { createUser } from '../utils/api';
import { useForm } from 'react-hook-form';

const CreateUser = () => {
    
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm();

    const onSubmit = (data) => {
        console.log(data)
        createUser(data);
        reset();
    };

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input
                    placeholder="Identifiant"
                    {...register('identifiant', { required: true })}></input>
                <label>{errors.identifiant && <span>Champ obligatoire</span>}</label>
                <input
                    placeholder="Adresse Mail"
                    {...register('adresseMail', { required: true })}></input>
                <label>{errors.adresseMail && <span>Champ obligatoire</span>}</label>
                <input
                    placeholder="Password"
                    {...register('password', {required: true})}></input>
                <label>{errors.password && <span>Champ obligatoire</span>}</label>

                <button type="submit">Valider</button>
            </form>
        </div>
    );
};

export default CreateUser;
