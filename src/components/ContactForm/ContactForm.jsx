import { Formik, Form, Field, ErrorMessage } from "formik";
import { nanoid } from "nanoid";
import * as Yup from "yup";
import s from "./ContactForm.module.css";

const ContactForm = ({ onAddContact }) => {
  const initialValues = {
    name: "",
    number: "",
  };

  const handleSubmit = (values, { resetForm }) => {
    const newContact = {
      id: nanoid(),
      ...values,
    };
    onAddContact(newContact);
    resetForm();
  };

  const ContactFormSchema = Yup.object({
    name: Yup.string()
      .required("This field is required!")
      .min(3, "Too short!")
      .max(50, "Too long!"),
    number: Yup.string()
      .required("This field is required!")
      .min(3, "Too short!")
      .max(50, "Too long!"),
  });

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={ContactFormSchema}
    >
      <Form className={s.form}>
        <label className={s.fieldTitle}>Name</label>
        <Field
          type="text"
          name="name"
          className={s.formField}
          placeholder="Enter new contact name"
        />
        <ErrorMessage name="name" component="span" className={s.errorMessage} />
        <label className={s.fieldTitle}>Phone</label>
        <Field
          type="text"
          name="number"
          className={s.formField}
          placeholder="Enter new contact phone"
        />
        <ErrorMessage
          name="number"
          component="span"
          className={s.errorMessage}
        />
        <button type="submit" className={s.addBtn}>
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
