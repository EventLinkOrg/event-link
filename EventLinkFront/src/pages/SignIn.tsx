import { Field, Form } from "react-final-form";
import { useToken } from "../redux/token/useToken";
import { useEffect } from "react";
import { useSelf } from "../redux/self/useSelf";
import { useNavigate } from "react-router-dom";

export type SignInForm = {
  email: string;
  password: string;
};

const required = (value: string | undefined) =>
  value ? undefined : "Required field";

const SignIn = () => {
  const { get_token, state: tokenState, response } = useToken();
  const { state, get_self } = useSelf();
  const navigate = useNavigate();

  useEffect(() => {
    if (tokenState === "success" && response?.token) {
      get_self(response?.token);
      navigate("/profile");
    }
  }, [tokenState]);

  const submit = ({ email, password }: SignInForm) => {
    console.log("Submit");
    get_token({ email, password });
  };

  return (
    <div className="card-body ">
      <div className="navbar rounded-md">
        <div className="mx-auto flex w-full max-w-sm flex-col gap-6">
          <div className="flex flex-col items-center">
            <h1 className="text-3xl font-semibold">Sign In</h1>
            <p className="text-sm">Sign in to access your account</p>
          </div>
          <Form onSubmit={submit}>
            {({ handleSubmit }) => (
              <div className="form-group">
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
                      <div className="form-control">
                        <input
                          placeholder="Type here"
                          type="password"
                          className="input max-w-full"
                          {...input}
                        />
                      </div>
                    </div>
                  )}
                </Field>
                <div className="form-field pt-5">
                  <div className="form-control justify-between">
                    <button
                      type="submit"
                      className="btn btn-primary w-full"
                      onClick={handleSubmit}
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

export { SignIn };
