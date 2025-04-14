import { Formik } from "formik";
import * as Yup from "yup";
import { useSend } from "../../utils/sendEmail";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaPhoneVolume } from "react-icons/fa";
import { Link } from "react-router-dom";

export type ContactFromType = {
    fullName: string;
    email: string;
    phone: string;
    reason?: string;
};

const ContactFormSchema = Yup.object().shape({
    fullName: Yup.string().required("Full Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    phone: Yup.string().required("Phone number is required"),
    reason: Yup.string().optional(),
});

const initialValues: ContactFromType = {
    fullName: "",
    email: "",
    phone: "",
    reason: "",
};

function Footer() {
    const { sendEmail } = useSend();
    return (
        <section id='footer'>
            <div className="footerSocials-container">
                <h3>Socials</h3>
                <div className="socialsLink-container">
                    <Link to="https://www.linkedin.com/in/carl-verrier/" target="_blank">
                        <FaLinkedin size={30} />
                    </Link>
                    <Link to="https://github.com/Carlito-prog?tab=repositories" target="_blank">
                        <FaGithub size={30} />
                    </Link>
                    <div onClick={() => alert('My number is: +1 (689) 282-8057')}>
                        <FaPhoneVolume size={30} color="white" />
                    </div>
                </div>
            </div>
            <div className="footerForm-container">
                <Formik
                    initialValues={initialValues}
                    validationSchema={ContactFormSchema}
                    onSubmit={async (
                        values,
                        { resetForm }) => {
                        await sendEmail(values).then(() => {
                            localStorage.setItem('sentContact', "true");
                            alert("Thank you for contacting me!")
                            resetForm({
                                values: {
                                    fullName: "",
                                    email: "",
                                    phone: "",
                                    reason: "",
                                },
                            });
                        }).catch(() => {
                            alert("An error occurred")
                        })
                    }}
                >
                    {({
                        values,
                        errors,
                        touched,
                        handleChange,
                        handleBlur,
                        handleSubmit,
                        isSubmitting,
                        dirty,
                        isValid,
                    }) => (
                        <form id="contact-form" onSubmit={handleSubmit}>
                            <div>
                                <input
                                    id="fullName"
                                    name="fullName"
                                    placeholder="Full Name"
                                    type="text"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.fullName}
                                />
                                {errors.fullName && touched.fullName ? (
                                    <span className="error">{errors.fullName}</span>
                                ) : null}
                            </div>
                            <div>
                                <input
                                    id="email"
                                    name="email"
                                    placeholder="example@mail.com"
                                    type="email"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.email}
                                />
                                {errors.email && touched.email ? (
                                    <span className="error">{errors.email}</span>
                                ) : null}
                            </div>
                            <div>
                                <input
                                    id="phone"
                                    name="phone"
                                    placeholder="Phone number"
                                    type="number"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.phone}
                                />
                                {errors.phone && touched.phone ? (
                                    <span className="error">{errors.phone}</span>
                                ) : null}
                            </div>
                            <div>
                                <textarea
                                    cols={40}
                                    rows={8}
                                    id="reason"
                                    name="reason"
                                    placeholder="Reason for inquiry..."
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.reason}
                                />
                                {errors.reason && touched.reason ? (
                                    <span className="error">{errors.reason}</span>
                                ) : null}
                            </div>
                            <button
                                type="submit"
                                disabled={!dirty && isValid && isSubmitting}
                            >
                                Submit
                            </button>
                        </form>
                    )}
                </Formik>
            </div>
        </section>
    )
}

export default Footer 