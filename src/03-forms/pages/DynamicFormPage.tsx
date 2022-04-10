import { Formik, Form } from 'formik';
import formJson from '../data/custom-form.json';
import { MyTextInput } from '../components/MyTextInput';
import { MySelect } from '../components/MySelect';
import * as Yup from 'yup';

const initialValues: { [key: string]: any } = {};
const requiredFields: { [key: string]: any } = {};

for (const input of formJson) {
  initialValues[input.name] = input.value;

  if (!input.validations) continue;

  let schema = Yup.string();

  for (const rule of input.validations) {
    if (rule.type === 'required') {
      schema = schema.required('Este campo es olbigatorio');
    }

    if (rule.type === 'minLength') {
      schema = schema.min((rule as any).value || 1, `Este campo debe tener al menos ${(rule as any).value || 1} caracteres`);
    }

    if (rule.type === 'email') {
      schema = schema.email('Este campo debe ser un email valido');
    }
    // ... other rules
  }

  requiredFields[input.name] = schema;
};

const validationSchema = Yup.object({ ...requiredFields })

export const DynamicFormPage = () => {
  return (
    <div>
      <h1>DynamicForm Page</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values) => { console.log(values) }}
      >
        {
          (formik) => (
            <Form>
              {formJson.map(({ type, name, placeholder, label, options }) => {
                if (type === 'input' || type === 'password' || type === 'email') {
                  return (
                    <MyTextInput
                      key={name}
                      type={(type as any)}
                      name={name}
                      placeholder={placeholder}
                      label={label}
                    />
                  )
                } else if (type === 'select') {
                  return (
                    <MySelect
                      key={name}
                      label={label}
                      name={name}
                    >
                      <option value="">Select One</option>
                      {options!.map(({ id, label }) => (
                        <option key={id} value={id}>{label}</option>
                      ))}
                    </MySelect>
                  )
                } else {
                  return <></>;
                }
              })}
              <button type="submit">Submit</button>
            </Form>
          )
        }
      </Formik>
    </div>
  );
};
