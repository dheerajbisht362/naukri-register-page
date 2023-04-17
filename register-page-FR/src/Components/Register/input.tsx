export default function Input({title, type,  placeholder, onChange, value, error, id }: 
    {title: string, type: string, placeholder: string, onChange: any, value: any, error: string, id:string}){
    
    return <div className="py-4">
        <div className="text-sm font-medium">{title}</div>
        <input className="py-2 px-4 border w-full my-1 border-gray-100" id={id} type={type} placeholder={placeholder} onChange={onChange} value={value} />
        <div className="text-sm">
            <div>{error}</div>
        </div>
    </div>
}