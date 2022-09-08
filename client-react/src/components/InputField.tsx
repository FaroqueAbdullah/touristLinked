interface InputFieldProps {
  type: string,
  placeholder: string,
  error: string,
  additionalProps?: any
}

function InputField({type, placeholder, error, additionalProps} : InputFieldProps):React.ReactElement {
  return (
    <label className="mt-2 items-center">
      <input className="h-8 p-2 w-full bg-slate-50" placeholder={placeholder} type={type} { ...additionalProps }/>
      { error ? <p className="text-xs mt-1 text-red-primary"> { error } </p> : '' }
    </label>
  )
}

export default InputField;