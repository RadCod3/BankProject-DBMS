import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Button } from 'antd';
import { addFD } from '../api/fd';
import * as Yup from 'yup';
// Use this instead https://github.com/jannikbuschke/formik-antd
export default function FixedDepositReg() {
  const FixedDepositRegSchema = Yup.object().shape({
    savings: Yup.string().required(),
    myRadioGroup: Yup.string().required(),
    amount: Yup.number().required(),
  });

  const handleSubmit = (values, { setSubmitting }) => {
    setSubmitting(true);
    const fd = {
      savings: values.savings,
      type: values.myRadioGroup,
      amount: values.amount,
    };
    //console.log(fd);
    addFD({ fd }).then(() => setSubmitting(false));
  };
  return (
    <div>
      <Formik
        initialValues={{
          savings: '',
          myRadioGroup: '',
          amount: '',
        }}
        validationSchema={FixedDepositRegSchema}
        onSubmit={handleSubmit}
      >
        {(props) => {
          const errorInputStyle = {
            borderColor: 'red',
          };
          return (
            <Form className='customer--reg--form'>
              <span>
                <Field
                  type='text'
                  name='savings'
                  placeholder='Savings Account'
                  style={
                    props.touched.name && props.errors.name
                      ? errorInputStyle
                      : null
                  }
                />
              </span>

              <span>
                <Field type='text' name='amount' placeholder='Amount' />
              </span>
              <div name='type'>
                <Field
                  type='radio'
                  id='radioOne'
                  name='myRadioGroup'
                  value='6'
                />
                <label htmlFor='radioOne'>6 Months</label>

                <Field
                  type='radio'
                  id='radioTwo'
                  name='myRadioGroup'
                  value='12'
                />
                <label htmlFor='radioTwo'>1 Year</label>

                <Field
                  type='radio'
                  id='radioThree'
                  name='myRadioGroup'
                  value='36'
                />
                <label htmlFor='radioThree'>3 Years</label>
              </div>
              <Button
                className='customer--reg--form--submit'
                type='primary'
                onClick={props.handleSubmit}
                disabled={props.isSubmitting}
              >
                Submit
              </Button>
              {Object.values(props.touched).includes(true) &&
                Object.values(props.errors).length !== 0 && (
                  <div className='customer--reg--form--errors'>
                    <ErrorMessage name='savings' component='div' />
                    <ErrorMessage name='myRadioGroup' component='div' />
                    <ErrorMessage name='amount' component='div' />
                  </div>
                )}
            </Form>
          );
        }}
      </Formik>
    </div>
  );
}