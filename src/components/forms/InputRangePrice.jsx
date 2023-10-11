/* eslint-disable react/prop-types */
export function InputRangePrice({value, onChange})
{
    return (
        <div>
            <br/>
            <label ><strong>Filter by Price :</strong> {value}$ </label>
            <input className="form-range" type="range"  min={0} max={5} value={value} onChange= {(e) => onChange(e.target.value)} />
        </div>
    )
}
