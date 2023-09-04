import classNames from "classnames"
import { useRef } from "react"
import { InputCheckboxComponent } from "./types"

export const InputCheckbox: InputCheckboxComponent = ({ id, checked = false, disabled, onChange }) => {
  const { current: inputId } = useRef(`RampInputCheckbox-${id}`)

  return (
    <div className="RampInputCheckbox--container" data-testid={inputId}>
      <label />
      <input
        id={inputId}
        type="checkbox"
        className={classNames("RampInputCheckbox--input RampInputCheckbox--label", {
          "RampInputCheckbox--label-checked": checked,
          "RampInputCheckbox--label-disabled": disabled,
        })}
        checked={checked}
        disabled={disabled}
        onChange={() => onChange(!checked)}
      />
    </div>
  )
}
