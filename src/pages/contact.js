import Header from "../components/Header";
import { Form, Formik } from "formik";
import { useState } from "react";
import { InputOrTextArea } from "../components/InputOrTextArea";

import * as Yup from "yup";
import axios from "axios";
import { getUserData } from "../utils/getUserData";

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
function contact({ user }) {
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  return (
    <div className="h-full p-4 bg-white dark:bg-black md:p-2">
      <Header isActive="Contact" user={user} />
      <div className="mx-auto mt-20 lg:max-w-6xl md:ml-40 dark:text-white">
        <div className="mx-auto md:ml-20">
          <h2 className="mb-5 text-5xl font-semiBold ">Contact Me</h2>
          <p className="text-2xl break-all ">
            If you’d like to chat about a project then please fill in the form
            <br />
            below and I'll get back within 1-2 days.
          </p>

          <Formik
            initialValues={{
              name: "",
              email: "",
              subject: "",
              message: "",
            }}
            validationSchema={ContactSchema}
            onSubmit={async (values) => {
              // send to Api
              try {
                /*                  const contactData = {
                  'youremail': values.email,
                  'yourname': values.name,
                  'subject': values.subject,
                  'message': values.message,
                }; */
                const contactData = new FormData();
                contactData.append("your-email", values.email);
                contactData.append("your-name", values.name);
                contactData.append("your-subject", values.subject);
                contactData.append("your-message", values.message);

                const res = await axios.post(
                  process.env.PROTOCOL + process.env.HOSTAPI + "/wp-json/contact-form-7/v1/contact-forms/50/feedback",
                  contactData
                );
                if (res.status === "200") {
                  alert("it is wrking ");
                }
              } catch (error) {
                console.log("Network Error : ", error.message);
              }
            }}
          >
            {({ isSubmitting }) => (
              <Form className="flex flex-wrap w-full max-w-3xl mt-20 mb-6 -mx-3">
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
                  type="text"
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
                  className="px-2 py-2 mt-4 mb-4 ml-4 font-bold text-white uppercase bg-purple-500 rounded-lg text-md "
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending  Message..." : "Send Message"}
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

export async function getServerSideProps(context) {
  try {
    const user = await getUserData();
    return {
      props: {
        user,
      },
    };
  } catch (error) {
    return {
      redirect: {
        permanent: false,
        destination: "/500",
      },
      props: {},
    };
  }
}
