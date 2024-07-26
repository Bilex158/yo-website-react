
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import * as formik from 'formik';
import * as yup from 'yup';
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'react-bootstrap/Image';
import { FacebookLoginButton } from "react-social-login-buttons";
import { GoogleLoginButton } from "react-social-login-buttons";

function FormExample() {
  const { Formik } = formik;

  const schema = yup.object().shape({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    username: yup.string().required(),
    city: yup.string().required(),
    state: yup.string().required(),
    zip: yup.string().required(),
    terms: yup.bool().required().oneOf([true], 'Terms must be accepted'),
  });

  return (
    <Formik
      validationSchema={schema}
      onSubmit={console.log}
      initialValues={{
        firstName: '',
        lastName: '',
        username: '',
        city: '',
        state: '',
        zip: '',
        terms: false,
      }}
    >

      {({ handleSubmit, handleChange, values, touched, errors }) => (
        <div className='w-100 bg-info d-flex mt-5  justify-content-center'>
          <div className='w-50 bg-info d-flex mx-5 mt-5  justify-content-end'>
            <Row className='mb-3 mx-5 pt-2 d-flex justify-content-start w-100'>
              <Image src={require('./assets/images.jpeg')} fluid thumbnail />
            </Row>
            <Form noValidate onSubmit={handleSubmit}>
              <Row className="mb-4 mx-5">
                <Form.Group className='mb-3' as={Col} md="6" controlId="validationFormik01">
                  <Form.Label className='mb-0'>Prénom</Form.Label>
                  <Form.Control
                    type="text"
                    name="firstName"
                    placeholder='Prénom'
                    value={values.firstName}
                    onChange={handleChange}
                    isValid={touched.firstName && !errors.firstName}
                  />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="6" controlId="validationFormik02">
                  <Form.Label className='mb-0'>Nom de famille</Form.Label>
                  <Form.Control
                    type="text"
                    name="lastName"
                    placeholder='Nom'
                    value={values.lastName}
                    onChange={handleChange}
                    isValid={touched.lastName && !errors.lastName}
                  />

                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group className='mb-3' as={Col} md="6" controlId="validationFormikUsername">
                  <Form.Label className='mb-0'>Nom d'utilisateur</Form.Label>
                  <InputGroup hasValidation>
                    <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                    <Form.Control
                      type="text"
                      placeholder="email"
                      aria-describedby="inputGroupPrepend"
                      name="username"
                      value={values.username}
                      onChange={handleChange}
                      isInvalid={!!errors.username}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.username}
                    </Form.Control.Feedback>
                  </InputGroup>
                </Form.Group>
                <Form.Group as={Col} md="6" controlId="validationFormik03">
                  <Form.Label className='mb-0'> Ville</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Ville"
                    name="city"
                    value={values.city}
                    onChange={handleChange}
                    isInvalid={!!errors.city}
                  />

                  <Form.Control.Feedback type="invalid">
                    {errors.city}
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className='mb-3' as={Col} md="6" controlId="validationFormik04">
                  <Form.Label className='mb-0'>Etat</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Etat"
                    name="state"
                    value={values.state}
                    onChange={handleChange}
                    isInvalid={!!errors.state}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.state}
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="6" controlId="validationFormik05">
                  <Form.Label className='mb-0'>mot de passe</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="mot de passe"
                    name="zip"
                    value={values.zip}
                    onChange={handleChange}
                    isInvalid={!!errors.zip}
                  />

                  <Form.Control.Feedback type="invalid">
                    {errors.zip}
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Check as={Col} md="6"
                    required
                    name="terms"
                    label="Accepter les termes et conditions"
                    onChange={handleChange}
                    isInvalid={!!errors.terms}
                    feedback={errors.terms}
                    feedbackType="invalid"
                    id="validationFormik0"
                  />
                </Form.Group>

                <Button className="mx-2 mb-2" as={Col} md="11" type="submit">Soumettre l'inscription</Button>

                <FacebookLoginButton onClick={() => alert("Hello")} />
                <GoogleLoginButton onClick={() => alert("Hello")} />
              </Row>
            </Form>
          </div>
        </div>
      )}
    </Formik>
  );
}

export default FormExample;