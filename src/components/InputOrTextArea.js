import { useField } from "formik";

export function InputOrTextArea({
  label,
  layout,
  required = false,
  size: _,
  textarea = false,
  ...props
}) {
  const [field, { error }] = useField(props);

  return textarea ? (
    <div
      className={`w-full ${layout === "half" && "md:w-1/2"} px-3 mb-6 md:mb-0`}
    >
      <div className="flex ">
        <label
          className="block uppercase tracking-wide
                     text-gray-700 text-xs 
                     font-bold mb-2 dark:text-white "
          htmlFor={field.name}
        >
          {label}
        </label>
        {required && <span className="text-red-600 ">*</span>}
      </div>
      <textarea
        {...props}
        {...field}
        rows={5}
        className="appearance-none block w-full  bg-gray-200 
text-gray-700 border border-gray-200 rounded py-5 px-4 mb-3 
leading-tight focus:outline-none focus:bg-white focus:border-gray-500 "
      ></textarea>
      {error && <p className="text-red-500 text-xs italic">{error}</p>}
    </div>
  ) : (
    <div
      className={`w-full ${layout === "half" && "md:w-1/2"} px-3 mb-6 md:mb-0`}
    >
      <div className="flex ">
        <label
          className="block uppercase tracking-wide
                     text-gray-700 text-xs 
                     font-bold mb-2 dark:text-white"
          htmlFor={field.name}
        >
          {label}
        </label>
        {required && <span className="text-red-600 ">*</span>}
      </div>

      <input
        {...props}
        {...field}
        className="appearance-none block w-full bg-gray-200 
        text-gray-700 border border-gray-500 rounded py-5 px-4 mb-3
         leading-tight focus:outline-none focus:bg-white"
        id={field.name}
      />
      {error && <p className="text-red-500 text-xs italic">{error}</p>}
    </div>
  );
}
