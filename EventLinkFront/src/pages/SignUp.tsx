import { Field, Form } from "react-final-form";

type SignUpForm = {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
};

const required = (value: string | undefined) =>
  value ? undefined : "Required field";

const SignUp = () => {
  const submit = (formData: SignUpForm) => {
    console.log(formData);
  };

  return (
    <div className="card-body ">
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
                      <label className="form-label">
                        <span className="form-label-alt">
                          Please enter a valid name.
                        </span>
                      </label>
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
                      <label className="form-label">
                        <span className="form-label-alt">
                          Please enter a last name.
                        </span>
                      </label>
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
                      <label className="form-label">
                        <span className="form-label-alt">
                          Please enter a valid email.
                        </span>
                      </label>
                    </div>
                  )}
                </Field>
                <Field name="password" validate={required}>
                  {({ input, meta }) => (
                    <div className="form-field">
                      <label className="form-label">Password</label>

                      <input
                        placeholder="Type here"
                        type="email"
                        className="input max-w-full"
                        {...input}
                      />
                      <label className="form-label">
                        <span className="form-label-alt">
                          Please enter a valid password.
                        </span>
                      </label>
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
                      Sign in
                    </button>
                  </div>
                </div>

                <div className="form-field">
                  <div className="form-control justify-center">
                    <a className="link link-underline-hover link-primary text-sm">
                      Don't have an account yet? Sign up.
                    </a>
                  </div>
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
