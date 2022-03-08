import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import PropTypes from "prop-types";
import "./style.css";

const schema = Yup.object().shape({
  firstname: Yup.string().required(),
  age: Yup.number().min(10).required()
});
export default function form() {
  return (
    <div className="form">
      <h1>Formik</h1>
      <Formik
        validationSchema={schema}
        initialValues={{
          firstname: "",
          age: ""
        }}
      >
        {({ errors }) => (
          <Form>
            <div className="form-control">
              <label htmlFor="firstname">Primeiro nome</label>
              <Field id="firstname" name="firstname" type="text" />
              {errors.firstname && <div>{errors.firstname}</div>}
            </div>
            <div className="form-control">
              <label htmlFor="age">Idade</label>
              <Field id="age" name="firsagename" type="number" />
              {errors.age && <div>{errors.age}</div>}
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}

form.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  Field: PropTypes.string.isRequired
};
