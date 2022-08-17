interface InputFieldProps {
  type: string,
  label: string,
  value: string,
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
  placeholder: string,
  error: string,
}

function InputField({type, label, value, onChange, placeholder, error} : InputFieldProps):React.ReactElement {
  return (
    <label className="flex mt-5 items-center">
      <span className="w-20 text-sm">{ label }</span>
      <input className="h-8 p-2 w-60 bg-slate-50" placeholder={placeholder} type={type} />
    </label>
  )
}

export default InputField;