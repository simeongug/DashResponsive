import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
// import Jumbotron from "react-bootstrap/Jumbotron";
import { Area, XAxis, YAxis, Bar, Tooltip, ComposedChart } from "recharts";
import { format, isValid, sub } from "date-fns";

/**
 * Crypto viz
 * @see https://api.coinpaprika.com/#tag/Tickers
 * @see https://recharts.org/en-US/api
 */

const fetchHistory = (ticker, start, interval) =>
    fetch(
        `https://api.coinpaprika.com/v1/tickers/${ticker}/historical?start=${start}&interval=${interval}`
    ).then((r) => r.json());

const SERIES_COMPONENT = {
    area: Area,
    bar: Bar
};
const PERIOD_CONFIG = {
    month: {
        start: sub(new Date(), { months: 1 }).toISOString(),
        interval: "1d",
        format: "dd"
    },
    day: {
        start: sub(new Date(), { hours: 23 }).toISOString(),
        interval: "1h",
        format: "HH"
    }
};

const Crypto = () => {
    const [data, setData] = useState([]);
    const [period, setPeriod] = useState("month");
    const [coin, setCoin] = useState("eth-ethereum");
    const [scale, setScale] = useState("auto");
    const [chart, setChart] = useState("bar");

    useEffect(() => {
        const { start, interval } = PERIOD_CONFIG[period];
        fetchHistory(coin, start, interval).then(setData);
    }, [period, coin]);

    const Series = SERIES_COMPONENT[chart];

    const formatDate = (d) => {
        const date = new Date(d);
        return isValid(date) ? format(date, PERIOD_CONFIG[period].format) : "";
    };

    return (
        <Container className="p-3">
            <div>
                <label>
                    Ticker
                    <select value={coin} onChange={(e) => setCoin(e.target.value)}>
                        <option value="btc-bitcoin">BTC</option>
                        <option value="eth-ethereum">ETH</option>
                    </select>
                </label>
            </div>
            <div>
                <label>
                    Period
                    <select value={period} onChange={(e) => setPeriod(e.target.value)}>
                        <option value="month">Last month</option>
                        <option value="day">Last 24h</option>
                    </select>
                </label>
            </div>
            <div>
                <label>
                    Volume chart
                    <select value={chart} onChange={(e) => setChart(e.target.value)}>
                        <option value="area">Area</option>
                        <option value="bar">Bar</option>
                    </select>
                </label>
            </div>
            <div>
                <label>
                    <input
                        type="checkbox"
                        checked={scale === "log"}
                        onChange={(e) => setScale(e.target.checked ? "log" : "auto")}
                    />
                    Log scale
                </label>
            </div>

            <ComposedChart
                width={800}
                height={400}
                data={data}
                margin={{
                    top: 20,
                    right: 20,
                    bottom: 20,
                    left: 20
                }}
            >
                <Series
                    yAxisId="volume"
                    dataKey="volume_24h"
                    type="monotone"
                    stroke="#8884d8"
                    fill="#8884d8"
                    strokeWidth={2}
                />
                <Area
                    yAxisId="price"
                    dataKey="price"
                    type="monotone"
                    stroke="#d88488"
                    fill="#d88488"
                    strokeWidth={2}
                />
                <XAxis dataKey="timestamp" tickFormatter={formatDate} />
                <YAxis
                    label={{ value: "Price", angle: -90, position: "insideLeft" }}
                    yAxisId="price"
                    scale={scale}
                    domain={["auto", "auto"]}
                    tickFormatter={(n) => n}
                />
                <YAxis
                    label={{ value: "Volume", angle: -90, position: "insideRight" }}
                    yAxisId="volume"
                    orientation="right"
                    scale={scale}
                    domain={["auto", "auto"]}
                    tickFormatter={(n) => `${n / 1000000000}B`}
                />
                <Tooltip />
            </ComposedChart>
        </Container>
    );
}

export default Crypto;
