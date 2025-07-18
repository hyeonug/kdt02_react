export default function TailSelect({ label, options, value, onChange, disabled }) {
  return (
    <div className="flex flex-col mb-4">
      <label className="mb-1 font-bold text-gray-700">{label}</label>
      <select
        className="border rounded px-3 py-2"
        value={value}
        onChange={e => onChange(e.target.value)}
        disabled={disabled}
      >
        <option value="">선택하세요</option>
        {options.map(opt => (
          <option key={opt} value={opt}>{opt}</option>
        ))}
      </select>
    </div>
  )
}

