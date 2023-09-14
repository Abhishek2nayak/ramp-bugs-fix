import classNames from "classnames"
import { useRef, useState } from "react"
import { InputCheckboxComponent } from "./types"
import { useSelect } from "downshift"

export const InputCheckbox: InputCheckboxComponent = ({ id, checked = false, disabled, onChange }) => {
  const { current: inputId } = useRef(`RampInputCheckbox-${id}`)
  const [c,setC] = useState(false)
   function handleChange() {
    setC(!c)
   }
  return (
    <div className="RampInputCheckbox--container" data-testid={inputId}>
      <label
        className={classNames("RampInputCheckbox--label", {
          "RampInputCheckbox--label-checked": checked,
          "RampInputCheckbox--label-disabled": disabled,
        })}
      />
    
      <input
        id={inputId}
        type="checkbox"
        className="RampInputCheckbox--input"
        checked={checked}
        
        onChange={() => onChange(!checked)}

      />
    </div>
  )
}
