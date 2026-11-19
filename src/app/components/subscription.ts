import {
  required,
  schema,
  email,
  minLength,
  min,
  max,
  validate,
} from '@angular/forms/signals';

export interface Subscription {
  email: string;
  firstName: string;
  lastName: string;
  age: number;
  rating: number;
}
export const initialData: Subscription = {
  email: '',
  firstName: '',
  lastName: '',
  age: NaN,
  rating: 0,
};
export const subcriptionSchema = schema<Subscription>((rootPath) => {
  required(rootPath.email, {
    message: 'El correo es obligatorio para subscribirte',
  });

  email(rootPath.email, { message: 'Por favor agrega un correo valido' });

  minLength(rootPath.email, 6, {
    message: 'El correo debe tener al menos 6 caracteres',
  });

  min(rootPath.age, 0, { message: 'La edad no puede ser negativa' });

  max(rootPath.age, 120, { message: 'Por favor ingesa una edad valida' });

  min(rootPath.rating, 1, { message: 'Por favor califica nuestra comunidad' });
  max(rootPath.rating, 5);

  nameValidator(rootPath.firstName, {
    message: 'Por favor ingresa un nombre valido',
  });

  nameValidator(rootPath.lastName, {
    message: 'Por favor ingresa un apellido valido',
  });
});

function nameValidator(field: any, options?: { message?: string }) {
  validate(field, ({ value }) => {
    const nameRegex = /^[A-Za-zÁÉÍÓÚáéíóúÑñ]+(?: [A-Za-zÁÉÍÓÚáéíóúÑñ]+)*$/;

    if (!nameRegex.test(value() as string)) {
      return {
        kind: 'name',
        message: options?.message || 'Name must be in format: Juan Perez',
      };
    }

    return null;
  });
}
