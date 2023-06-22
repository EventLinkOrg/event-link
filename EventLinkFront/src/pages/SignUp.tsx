import { Field, Form } from "react-final-form";
import axios from "axios";
import { useState } from "react";
import { Alert } from "../components/Alert";

type SignUpForm = {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
};

const REGISTER_URL = "http://localhost:4000/api/v1/auth/register";

const required = (value: string | undefined) =>
  value ? undefined : "Required field";

type RegisterAttempt = "Success" | "Failure" | "Idle";

const SignUp = () => {
  const [registerAttempt, setRegisterAttempt] =
    useState<RegisterAttempt>("Idle");
  const [message, setMessage] = useState<string>("");
  const submit = async (formData: SignUpForm) => {
    try {
      const res = await axios.post(REGISTER_URL, formData);
      setRegisterAttempt("Success");
    } catch (err: { messages: string[][] } | any) {
      console.error(err);
      setRegisterAttempt("Failure");
      setMessage(err && err.messages && err.messages[1].join(""));
    }
    console.log(formData);
  };

  return (
    <div className="card-body ">
      {registerAttempt === "Success" && (
        <Alert
          title={"Success Registration"}
          content={"Check your email for account confirmation before login"}
          alertType={"success"}
        />
      )}
      {registerAttempt === "Failure" && (
        <Alert title={"Error"} content={message} alertType={"error"} />
      )}
      <div className="navbar rounded-md">
        <div className="mx-auto flex w-full max-w-sm flex-col gap-6">
          <div className="flex flex-col items-center">
            <h1 className="text-3xl font-semibold">Sign Up</h1>
            <p className="text-sm">Sign up to create an account</p>
          </div>
          <Form onSubmit={submit}>
            {({ handleSubmit }) => (
              <div className="form-group">
                <Field name="firstname" validate={required}>
                  {({ input, meta }) => (
                    <div className="form-field">
                      <label className="form-label">First Name</label>

                      <input
                        placeholder="Type here"
                        type="email"
                        className="input max-w-full"
                        {...input}
                      />
                      {meta && meta.error && (
                        <label className="form-label">
                          <span className="form-label-alt">
                            Please enter a valid name.
                          </span>
                        </label>
                      )}
                    </div>
                  )}
                </Field>
                <Field name="lastname" validate={required}>
                  {({ input, meta }) => (
                    <div className="form-field">
                      <label className="form-label">Last Name</label>

                      <input
                        placeholder="Type here"
                        type="email"
                        className="input max-w-full"
                        {...input}
                      />
                      {meta && meta.error && (
                        <label className="form-label">
                          <span className="form-label-alt">
                            Please enter a valid name.
                          </span>
                        </label>
                      )}
                    </div>
                  )}
                </Field>
                <Field name="email" validate={required}>
                  {({ input, meta }) => (
                    <div className="form-field">
                      <label className="form-label">Email address</label>

                      <input
                        placeholder="Type here"
                        type="email"
                        className="input max-w-full"
                        {...input}
                      />
                      {meta && meta.error && (
                        <label className="form-label">
                          <span className="form-label-alt">
                            Please enter a valid name.
                          </span>
                        </label>
                      )}
                    </div>
                  )}
                </Field>
                <Field name="password" validate={required}>
                  {({ input, meta }) => (
                    <div className="form-field">
                      <label className="form-label">Password</label>

                      <input
                        placeholder="Type here"
                        type="password"
                        className="input max-w-full"
                        {...input}
                      />
                      {meta && meta.error && (
                        <label className="form-label">
                          <span className="form-label-alt">
                            Please enter a valid name.
                          </span>
                        </label>
                      )}
                    </div>
                  )}
                </Field>
                {/* <div className="form-field">
                  <div className="form-control justify-between">
                    <div className="flex gap-2">
                      <input type="checkbox" className="checkbox" />
                      <a href="#">Remember me</a>
                    </div>
                    <label className="form-label">
                      <a className="link link-underline-hover link-primary text-sm">
                        Forgot your password?
                      </a>
                    </label>
                  </div>
                </div> */}
                <div className="form-field pt-5">
                  <div className="form-control justify-between">
                    <button
                      onClick={handleSubmit}
                      type="button"
                      className="btn btn-primary w-full"
                    >
                      Sign up
                    </button>
                  </div>
                </div>

                <div className="form-field">
                  <div className="form-control justify-center"></div>
                </div>
              </div>
            )}
          </Form>
        </div>
      </div>
    </div>
  );
};

export { SignUp };
