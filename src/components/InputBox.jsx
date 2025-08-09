import React,{useId} from "react"
function InputBox({
    className = "",
    label ,
    amount ,
    onAmountChange,
    onCurrencyChange,
    currencyOptions = [],
    selectCurrency = "usd"
}
    
) {
    const amountInputId = useId()

    return (
        <div className={`bg-white rounded-lg text-sm p-3 flex ${className} my-3`}>

            <div className="left w-1/2 pl-2 flex flex-col justify-around">
                <label htmlFor={amountInputId} className="text-black/40">
                {label}
                </label>
                <input 
                id={amountInputId}
                type="number"
                className="outline-none w-full py-1.5 "
                value={amount}
                // placeholder={amount}
                placeholder="Amount"
                onChange={(e)=> onAmountChange && onAmountChange(Number(e.target.value))}
                />
                
            </div>

            <div className="w-1/2 flex flex-wrap items-end justify-around pr-2 flex-col">
                <p className="text-black/40 mb-2 ">Currency Type</p>
                <select
                    name=""
                    id=""
                    className="rounded-lg px-1 bg-gray-100 cursor-pointer outline-none"
                    value={selectCurrency}
                    onChange={(e)=> onCurrencyChange && onCurrencyChange(e.target.value)}
                >
                    
                   {currencyOptions.map((currency)=> (
                    <option key={currency} value={currency}>{currency}</option>
                    ))} 

                </select>
            </div>

        </div>
    )

}

export default InputBox