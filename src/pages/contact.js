import Header from "../components/Header";
import { Form, Formik } from "formik";
import { useState } from "react";
import { InputOrTextArea } from "../components/InputOrTextArea";

import * as Yup from "yup";

const ContactSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  subject: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  message: Yup.string()
    .min(2, "Too Short!")
    .max(1000, "Too Long!")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
});
function contact() {
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  return (
    <div>
      <Header isActive="Contact" />
      <div className="mt-20 lg:max-w-6xl mx-auto md:ml-40">
        <div className="md:ml-20 mx-auto">
          <h2 className="font-semiBold text-5xl mb-5 ">Contact Me</h2>
          <p className="text-2xl break-all ">
            If you’d like to chat about a project then please fill in the form
            <br />
            below and I'll get back within 1-2 days.
          </p>

          <Formik
            validationSchema={ContactSchema}
            initialValues={{
              name: " ",
              email: " ",
              subject: " ",
              message: " ",
            }}
            onSubmit={async (values) => {
              // send to Api
              console.log("values", values);
            }}
          >
            {({ isSubmitting }) => (
              <Form className="w-full mt-20  max-w-3xl  flex flex-wrap -mx-3 mb-6">
                <InputOrTextArea
                  layout="half"
                  name="name"
                  type="text"
                  label="Name"
                  required
                />

                <InputOrTextArea
                  layout="half"
                  name="email"
                  label="email"
                  type="email"
                  required
                />
                <InputOrTextArea
                  name="subject"
                  label="subject"
                  type="subject"
                  required
                />
                <InputOrTextArea
                  name="message"
                  label="message"
                  type="text"
                  textarea
                  required
                />

                <button
                  type="submit"
                  className="py-2 px-2 bg-purple-500 text-md 
                  uppercase font-bold 
                  text-white rounded-lg 
                  ml-4
                  mt-4
                  "
                >
                  Send Message
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
}

export default contact;
