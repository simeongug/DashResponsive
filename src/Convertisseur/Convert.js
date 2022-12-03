import { useEffect, useState, useCallback } from "react";
// https://api.coingecko.com/api/v3/exchange_rates

// exchange rate calculator
// 1. As a user, I should be able to type in a number
// 2. As a user I should be able to pick a "from" currency from a dropdown
// 3. I should be able to pick a "to" currency
// 4. I should see the converted result!!
const Convert = () => {

    const [inputValue, setInputValue] = useState(1);
    const [currencyList, setCurrencyList] = useState([]);
    const [result, setResult] = useState(1);
    const [unit, setUnit] = useState("BTC");
    const [toCurrency, setToCurrency] = useState("Bitcoin");
    const [fromCurrency, setFromCurrency] = useState("Bitcoin");

    const fetchData = async () => {
        try {
            const response = await fetch(
                "https://api.coingecko.com/api/v3/exchange_rates"
            );

            if (!response.ok) {
                throw new Error(`HTTP Error! Error: ${response.status}`);
            }

            const responseData = await response.json();
            // responseData = { rates: {usd: {}, php: {}, gbp: {} } }
            // currencyList = [{}, {}, {}]
            const objectValues = Object.values(responseData.rates);
            setCurrencyList(objectValues);
            setFromCurrency(objectValues[0].name);
            setToCurrency(objectValues[0].name);
        } catch (e) {
            console.error(e);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const callback = useCallback(() => {
        const calculate = () => {
            const obj1 = currencyList.find((cur) => cur.name === fromCurrency);
            let xToBTC = obj1.value;
            let BTCtoX = 1 / xToBTC;
            let obj2 = currencyList.find((cur) => cur.name === toCurrency);
            let yToBTC = obj2.value;
            let calc = BTCtoX * yToBTC * inputValue;
            let unit = obj2.unit;
            let result = { calc, unit };
            return result;
        };
        return calculate();
    }, [currencyList, fromCurrency, toCurrency, inputValue]);

    useEffect(() => {
        if (currencyList.length !== 0) {
            const { calc, unit } = callback();
            setUnit(unit);
            setResult(calc);
        }
    }, [callback, currencyList.length]);

    return (
        <div className="Convert">

            <div className="result">
                <p>{`${Number(result.toFixed(2)).toLocaleString("en")} ${unit}`}</p>
            </div>
            <div className="container">
                <label htmlFor="value__input">
                    <input
                        className="input"
                        id="value__input"
                        type="number"
                        onChange={(e) => setInputValue(e.target.value)}
                        value={inputValue}
                    />
                </label>
                <label htmlFor="fromCurrency">
                    From:
                    <select
                        id="fromCurrency"
                        className="input"
                        aria-label="select From Currency"
                        onChange={(e) => setFromCurrency(e.target.value)}
                    >
                        {currencyList &&
                            currencyList.map((currency) => (
                                <option key={currency.name} value={currency.name}>
                                    {currency.name}
                                </option>
                            ))}
                    </select>
                </label>
                <label htmlFor="toCurrency">
                    To:
                    <select
                        id="toCurrency"
                        className="input"
                        aria-label="select To Currency"
                        onChange={(e) => setToCurrency(e.target.value)}
                    >
                        {currencyList &&
                            currencyList.map((currency) => (
                                <option key={currency.name} value={currency.name}>
                                    {currency.name}
                                </option>
                            ))}
                    </select>
                </label>
            </div>
        </div>
    );
}
export default Convert;
