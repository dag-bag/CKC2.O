import React, { Fragment, ChangeEvent } from "react";
import { BiChevronDown } from "react-icons/bi";
interface SelectProps {
  label?: string;
  placeholder?: string;
  classLabel?: string;
  className?: string;
  classGroup?: string;
  register?: any; // Replace with appropriate type
  name?: string;
  readonly?: boolean;
  value?: string;
  error?: { message: string };
  icon?: string;
  disabled?: boolean;
  id?: string;
  horizontal?: boolean;
  validate?: string;
  msgTooltip?: boolean;
  description?: string;
  onChange?: (event: ChangeEvent<HTMLSelectElement>) => void;
  options?: Array<string | { value: string; label: string }>;
  defaultValue?: string;

  size?: number;
  [key: string]: any;
}

const Select: React.FC<SelectProps> = ({
  label,
  placeholder = "Select Option",
  classLabel = "form-label",
  className = "",
  classGroup = "",
  register,
  name,
  readonly,
  value,
  error,
  icon,
  disabled,
  id,
  horizontal,
  validate,
  msgTooltip,
  description,
  onChange,
  options,
  defaultValue,

  size,
  ...rest
}) => {
  options = options || Array(3).fill("option");
  return (
    <div
      className={`fromGroup  ${error ? "has-error" : ""}  ${
        horizontal ? "flex" : ""
      }  ${validate ? "is-valid" : ""} `}
    >
      {label && (
        <label
          htmlFor={id}
          className={`block capitalize ${classLabel}  ${
            horizontal ? "flex-0 mr-6 md:w-[100px] w-[60px] break-words" : ""
          }`}
        >
          {label}
        </label>
      )}
      <div className={`relative ${horizontal ? "flex-1" : ""}`}>
        {name && (
          <select
            onChange={onChange}
            {...register(name)}
            {...rest}
            className={`${
              error ? " has-error" : " "
            } form-control py-2  appearance-none ${className}  `}
            placeholder={placeholder}
            readOnly={readonly}
            disabled={disabled}
            id={id}
            value={value}
            size={size}
            defaultValue={defaultValue}
          >
            <option value="" disabled>
              {placeholder}
            </option>
            {options.map((option, i) => (
              <Fragment key={i}>
                {typeof option === "object" ? (
                  <option key={i} value={option.value}>
                    {option.label}
                  </option>
                ) : (
                  <option key={i} value={option}>
                    {option}
                  </option>
                )}
              </Fragment>
            ))}
          </select>
        )}
        {!name && (
          <select
            onChange={onChange}
            className={`${
              error ? " has-error" : " "
            } form-control py-2 appearance-none ${className}  `}
            placeholder={placeholder}
            disabled={disabled}
            id={id}
            value={value}
            size={size}
            defaultValue={defaultValue}
          >
            <option value="" disabled>
              {placeholder}
            </option>
            {options.map((option, i) => (
              <Fragment key={i}>
                {typeof option === "object" ? (
                  <option key={i} value={option.value}>
                    {option.label}
                  </option>
                ) : (
                  <option key={i} value={option}>
                    {option}
                  </option>
                )}
              </Fragment>
            ))}
          </select>
        )}

        {/* icon */}
        <div className="flex text-xl absolute right-[14px] top-1/2 -translate-y-1/2  space-x-1 rtl:space-x-reverse">
          <span className=" relative  pr-2 inline-block text-gray-500  pointer-events-none">
            <BiChevronDown />
          </span>
          {error && (
            <span className="text-danger-500">
              <p>Icon2</p>{" "}
            </span>
          )}
          {validate && (
            <span className="text-success-500">
              <p>Icon3</p>{" "}
            </span>
          )}
        </div>
      </div>
      {/* error and success message*/}
      {error && (
        <div
          className={` mt-2 ${
            msgTooltip
              ? " inline-block bg-danger-500 text-white text-[10px] px-2 py-1 rounded"
              : " text-danger-500 block text-sm"
          }`}
        >
          {error.message}
        </div>
      )}
      {/* validated and success message*/}
      {validate && (
        <div
          className={` mt-2 ${
            msgTooltip
              ? " inline-block bg-success-500 text-white text-[10px] px-2 py-1 rounded"
              : " text-success-500 block text-sm"
          }`}
        >
          {validate}
        </div>
      )}
      {/* only description */}
      {description && <span className="input-description">{description}</span>}
    </div>
  );
};

export default Select;
