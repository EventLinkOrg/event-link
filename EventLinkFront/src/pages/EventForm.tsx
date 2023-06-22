import { useEffect, useState } from "react";
import { Field, Form } from "react-final-form";
import { Button } from "../components/Button";
import { useCategories } from "../redux/categories/useCategories";
import { Image } from "../redux/events/events.slice";
import { useEvents } from "../redux/events/useEvents";
import { useToken } from "../redux/token/useToken";

type EventFormData = {
  title: string;
  category: string;
  textContent: string;
  startDate: string;
  startTime: string;
  endDate: string;
  endTime: string;
  tickets: string;
};

const createFormattedDate = (rawDate: string, rawTime: string) => {
  const date = new Date(`${rawDate}T${rawTime}`);
  const formattedDate = date.toISOString();
  return formattedDate;
};

const required = (value: string | undefined) =>
  value ? undefined : "Required field";

const composeValidators =
  (...validators: any[]) =>
  (value: any) =>
    validators.reduce(
      (error, validator) => error || validator(value),
      undefined
    );

const dateValidation = (value: string) => {
  const today = new Date(); // Get today's date
  const dateToValidate = new Date(value); // Convert the input value to a Date object

  return dateToValidate >= today
    ? undefined
    : "The selected date must be tomorrow or a day in the future";
};

const ticket_number = (value: string | undefined) => {
  if (!value) {
    return "Fill the selected ticket number";
  }
  if (typeof parseInt(value) !== "number") {
    return "The selected ticket number must be a number";
  }
  console.log(typeof value);
  if (parseInt(value) > 500 || parseInt(value) < 0) {
    return "The selected ticket number must be beetween 1 and 500";
  }
  return undefined;
};

const required_select = (value: string | undefined) => {
  value || value === "" ? undefined : "Required field";
};

// const endDateValidation = ({
//   startDate,
//   endDate,
//   startTime,
//   endTime,
// }: EventFormData) => {
//   if (startDate && endDate && startTime && endTime) {
//     const errors: EventFormData = {
//       title: "",
//       category: "",
//       textContent: "",
//       startDate: "",
//       startTime: "",
//       endDate: "",
//       endTime: "",
//     };
//     const startDateTime = new Date(`${startDate} ${startTime}`);
//     const endDateTime = new Date(`${endDate} ${endTime}`);

//     // Compare the start and end dates
//     if (endDateTime >= startDateTime) {
//       // If the end date is greater than or equal to the start date

//       if (endDateTime.getTime() === startDateTime.getTime()) {
//         // If the dates are equal, compare the start and end times
//         const startTimeParts = startTime.split(":");
//         const endTimeParts = endTime.split(":");
//         const startHour = parseInt(startTimeParts[0], 10);
//         const startMinute = parseInt(startTimeParts[1], 10);
//         const endHour = parseInt(endTimeParts[0], 10);
//         const endMinute = parseInt(endTimeParts[1], 10);

//         if (endHour > startHour) {
//           // If the end hour is greater than the start hour
//           errors.endTime =
//             "Change the end time to be later than the start time";
//           return errors;
//         } else if (endHour === startHour && endMinute >= startMinute) {
//           // If the end hour is equal to the start hour, compare the minutes
//           errors.endTime =
//             "Change the end time to be later than the start time";
//           return errors;
//         }
//       } else {
//         return errors;
//       }
//     }
//     errors.endDate = "End date should be greater or equal with start date";
//     return errors;
//   }
//   return undefined;
// };

const EventForm = () => {
  const [image, setImage] = useState<string>("");

  const [imageData, setImageData] = useState<Image | undefined>(undefined);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      setImage(URL.createObjectURL(e.target.files[0]));
      const imageData: Image = {
        name: file.name,
        data: file,
        contentType: file.type,
      };
      setImageData(imageData);
    }
  };

  const { response, get } = useCategories();
  const { add } = useEvents();
  const { response: token } = useToken();

  useEffect(() => {
    get();
  }, []);

  const submit = ({
    title,
    category,
    textContent,
    startDate,
    startTime,
    endDate,
    endTime,
    tickets,
  }: EventFormData) => {
    if (!category && response) {
      category = response[0]._id;
    }

    token &&
      add({
        token: token?.token,
        title,
        categoryId: category,
        textContent,
        startDate: createFormattedDate(startDate, startTime),
        endDate: createFormattedDate(endDate, endTime),
        tickets,
        image: imageData,
      });
    // console.log(createFormattedDate(startDate, startTime));
    // console.log(title);
    // console.log(category);
    // console.log(textContent);
    // console.log(startDate);
    // console.log(startTime);
    // console.log(endDate);
    // console.log(endTime);
    // console.log(tickets);
    // console.log(imageData);
  };

  return (
    <Form onSubmit={submit}>
      {({ handleSubmit }) => (
        <div className="form-group">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <Field name="title" validate={required}>
              {({ input, meta }) => (
                <div className="form-field">
                  <label className="form-label">Title</label>

                  <input
                    placeholder="Type here"
                    type="email"
                    className="input max-w-full"
                    {...input}
                  />
                  {meta && meta.error && (
                    <label className="form-label">
                      <span className="form-label-alt">
                        Please enter a valid email.
                      </span>
                    </label>
                  )}
                </div>
              )}
            </Field>
            <Field
              name="category"
              component={"select"}
              validate={required_select}
            >
              {({ input, meta }) => (
                <div className="form-field">
                  <label className="form-label">Select category</label>

                  <select className="select" {...input}>
                    {response &&
                      response.map((category) => (
                        <option value={category._id}>{category.title}</option>
                      ))}
                  </select>
                  {meta && meta.error && (
                    <label className="form-label">
                      <span className="form-label-alt">
                        Please select a category
                      </span>
                    </label>
                  )}
                </div>
              )}
            </Field>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {/* <Field name="textContent" validate={required}>
              {({ input, meta }) => ( */}
            <div className="form-field">
              <label className="form-label">Image</label>

              <div
                className="card h-64"
                style={{ backgroundImage: `url(${image})` }}
              >
                <div className="card-body">
                  <input
                    type="file"
                    className="input-file"
                    onChange={handleFileChange}
                  />
                </div>
              </div>
            </div>
            <Field name="textContent" validate={required}>
              {({ input, meta }) => (
                <div className="form-field">
                  <label className="form-label">Description</label>

                  <textarea
                    className="textarea-block textarea"
                    placeholder="Block"
                    {...input}
                  />
                  {meta && meta.error && (
                    <label className="form-label">
                      <span className="form-label-alt">
                        Please enter a description.
                      </span>
                    </label>
                  )}
                </div>
              )}
            </Field>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <Field
              name="startDate"
              validate={composeValidators(required, dateValidation)}
            >
              {({ input, meta }) => (
                <div className="form-field">
                  <label className="form-label">Start Date</label>

                  <input
                    className="textarea-block textarea"
                    placeholder="Block"
                    type="date"
                    {...input}
                  />
                  {meta && meta.error && (
                    <label className="form-label">
                      <span className="form-label-alt">{meta.error}</span>
                    </label>
                  )}
                </div>
              )}
            </Field>
            <Field name="startTime" validate={required}>
              {({ input, meta }) => (
                <div className="form-field">
                  <label className="form-label">Start Time</label>

                  <input
                    className="textarea-block textarea"
                    placeholder="Block"
                    type="time"
                    {...input}
                  />
                  {meta && meta.error && (
                    <label className="form-label">
                      <span className="form-label-alt">
                        Please enter a time
                      </span>
                    </label>
                  )}
                  <label className="form-label">
                    <span className="form-label-alt">
                      To enter a time use the keyboard. To specify AM or PM use{" "}
                      <kbd className="kbd">A</kbd>
                      or <kbd className="kbd">P</kbd> keys
                    </span>
                  </label>
                </div>
              )}
            </Field>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <Field name="endDate" validate={required}>
              {({ input, meta }) => (
                <div className="form-field">
                  <label className="form-label">End Date</label>

                  <input
                    className="textarea-block textarea"
                    placeholder="Block"
                    type="date"
                    {...input}
                  />
                  {meta && meta.error && (
                    <label className="form-label">
                      <span className="form-label-alt">{meta.error}</span>
                    </label>
                  )}
                </div>
              )}
            </Field>
            <Field name="endTime" validate={required}>
              {({ input, meta }) => (
                <div className="form-field">
                  <label className="form-label">End Time</label>

                  <input
                    className="textarea-block textarea"
                    placeholder="Block"
                    type="time"
                    {...input}
                  />
                  {meta && meta.error && (
                    <label className="form-label">
                      <span className="form-label-alt">
                        Please enter a time
                      </span>
                    </label>
                  )}
                  <label className="form-label">
                    <span className="form-label-alt">
                      To enter a time use the keyboard. To specify AM or PM use{" "}
                      <kbd className="kbd">A</kbd>
                      or <kbd className="kbd">P</kbd> keys
                    </span>
                  </label>
                </div>
              )}
            </Field>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <Field name="tickets" validate={ticket_number}>
              {({ input, meta }) => (
                <div className="form-field">
                  <label className="form-label">Number of Tickets</label>

                  <input
                    placeholder="Type here"
                    type="number"
                    className="input max-w-full"
                    {...input}
                  />
                  {meta && meta.error && (
                    <label className="form-label">
                      <span className="form-label-alt">{meta.error}</span>
                    </label>
                  )}
                </div>
              )}
            </Field>
          </div>

          <Button onClick={handleSubmit} text="Submit" />
        </div>
      )}
    </Form>
  );
};

export { EventForm };
