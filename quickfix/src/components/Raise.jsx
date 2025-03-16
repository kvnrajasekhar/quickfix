import React from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Card from 'react-bootstrap/Card';
import * as formik from 'formik';
import * as yup from 'yup';


function Raise() {
    const { Formik } = formik;

    const schema = yup.object().shape({
        phoneNumber: yup.string().required('Phone number is required'),
        complaint: yup.string().required('Complaint is required'),
        address: yup.string().required('Address is required'),
    });

    return (
        <div className="d-flex justify-content-center align-items-center min-vh-100">
            <Card className="form-container p-4 rounded shadow" bg='tertiary'>
                <Card.Header className="text-center bg-transparent">
                    <h3>Raise a Complaint</h3>
                </Card.Header>
                <Card.Body>
                    <Formik
                        validationSchema={schema}
                        onSubmit={console.log(schema._nodes.complaint)}
                        initialValues={{
                            phoneNumber: '',
                            complaint: '',
                            address: '',
                        }}
                    >
                        {({ handleSubmit, handleChange, values, touched, errors }) => (
                            <Form noValidate onSubmit={handleSubmit}>
                                <Row className="mb-3">
                                    <Form.Group as={Col} md="6" controlId="validationFormikPhoneNumber">
                                        <FloatingLabel controlId="floatingPhoneNumber" label="Phone number">
                                            <Form.Control
                                                type="text"
                                                name="phoneNumber"
                                                value={values.phoneNumber}
                                                onChange={handleChange}
                                                isInvalid={!!errors.phoneNumber}
                                                className="custom-input"
                                            />
                                            <Form.Control.Feedback type="invalid">
                                                {errors.phoneNumber}
                                            </Form.Control.Feedback>
                                        </FloatingLabel>
                                    </Form.Group>
                                    <Form.Group as={Col} md="6" controlId="validationFormikComplaint">
                                        <FloatingLabel controlId="floatingComplaint" label="Complaint">
                                            <Form.Control
                                                as="textarea"
                                                name="complaint"
                                                value={values.complaint}
                                                onChange={handleChange}
                                                isInvalid={!!errors.complaint}
                                                className="custom-input"
                                                style={{ height: '100px' }}
                                            />
                                            <Form.Control.Feedback type="invalid">
                                                {errors.complaint}
                                            </Form.Control.Feedback>
                                        </FloatingLabel>
                                    </Form.Group>
                                </Row>
                                <Row className="mb-3">
                                    <Form.Group as={Col} md="12" controlId="validationFormikAddress">
                                        <FloatingLabel controlId="floatingAddress" label="Address">
                                            <Form.Control
                                                type="text"
                                                name="address"
                                                value={values.address}
                                                onChange={handleChange}
                                                isInvalid={!!errors.address}
                                                className="custom-input"
                                            />
                                            <Form.Control.Feedback type="invalid">
                                                {errors.address}
                                            </Form.Control.Feedback>
                                        </FloatingLabel>
                                    </Form.Group>
                                </Row>
                                <Button type="submit" className="w-100 custom-button mt-3">Raise Complaint</Button>
                            </Form>
                        )}
                    </Formik>
                </Card.Body>
            </Card>
        </div>
    );
}

export default Raise;
