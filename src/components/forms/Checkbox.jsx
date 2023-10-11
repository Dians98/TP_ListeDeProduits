/*
 * 
 * @param {boolean} checked
 * @param {string => void} onChange
 * @param {string} label
 */
/* eslint-disable react/prop-types */
/* On imagine que au début on veut le checked, onChange et le label du checkbox c'est pour cela qu'on a mis ces 3 commentaires */

export function Checkbox ({checked, onChange, label})
{
    return (
        <div className="form-check">  
            <input type="checkbox" className="form-check-input" checked={checked} onChange={(e) => onChange(e.target.checked)}/>
            <label className="form-check-label">{label}</label> 
        </div>
        
    )
} 