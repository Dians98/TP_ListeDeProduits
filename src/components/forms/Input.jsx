/* eslint-disable react/prop-types */
/**
 * 
 * @param {string} placeholder
 * @param {string} value
 * @param {string => void} onChange 
 * @returns 
 */

/* On imagine que au début on veut le placeholder, onChange et le value */
export function Input ({placeholder, value,  onChange})
{
    return (
        <div>
            <input className="form-control" type="text" value={value} onChange= {(e) => onChange(e.target.value)} placeholder={placeholder} />
        </div>
    )
}