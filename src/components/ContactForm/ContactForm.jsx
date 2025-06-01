import { Formik, Field, ErrorMessage, Form } from 'formik';
import { useId } from 'react';
import css from './ContactForm.module.css';
import { ContactFormSchema } from './ContactFormSchema';
import { nanoid } from 'nanoid';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contactsSlice';

export default function ContactForm() {
  const dispatch = useDispatch();
  const fieldId = useId();

  const handleSubmit = (values, helpers) => {
    console.log(values);

    const newContact = {
      id: nanoid(),
      ...values,
    };
    console.log(newContact);

    dispatch(addContact(newContact));
    helpers.resetForm();
  };

  return (
    <Formik
      initialValues={{
        name: '',
        number: '',
      }}
      validationSchema={ContactFormSchema}
      onSubmit={handleSubmit}
    >
      <Form className={css.form}>
        <fieldset className={css.fieldset}>
          <label className={css.label} htmlFor={`${fieldId}-name`}>
            Name
          </label>
          <Field
            type="text"
            name="name"
            className={css.input}
            id={`${fieldId}-name`}
          />
          <ErrorMessage name="name" component="span" className={css.error} />

          <label className={css.label} htmlFor={`${fieldId}-number`}>
            Number
          </label>
          <Field
            type="number"
            name="number"
            className={css.input}
            id={`${fieldId}-number`}
          />
          <ErrorMessage name="number" component="span" className={css.error} />
        </fieldset>

        <button type="submit" className={css.button}>
          Add contact
        </button>
      </Form>
    </Formik>
  );
}
