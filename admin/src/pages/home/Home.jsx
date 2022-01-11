import Chart from "../../components/chart/Chart";
// import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import "./home.css";
// import { userData } from "../../dummyData";
import WidgetSm from "../../components/widgetSm/WidgetSm";
// import WidgetLg from "../../components/widgetLg/WidgetLg";
import { useMemo, useState } from "react";
import { useEffect } from "react";
import axios from 'axios'


export default function Home() {
    const [userStats, setUserStats] = useState([])

    const MONTHS = useMemo(
        () => [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Agu",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
        ], [])

    useEffect(() => {
        const getStats = async () => {
            try {
                const res = await axios.get(`users/stats`, {
                    headers: {
                        token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZDllZGExNzY5NzJjMWE5ODNlMWY5YiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0MTY3ODQzNSwiZXhwIjoxNjQyMTEwNDM1fQ.Ugk6TE71cDhrsoXlmW3AySdXqnumrZREcDYxlPOz504",
                    }
                })
                const statsList = res.data.sort((a, b) => {
                    return a._id - b._id
                })
                statsList.map((item) =>
                    setUserStats((prev) =>
                        [...prev,
                        { name: MONTHS[item._id - 1], "New User": item.total }]
                    )
                )
            } catch (err) {
                console.log(err);
            }
        }
        getStats()
    }, [MONTHS])

    return (
        <div className="home">
            {/* <FeaturedInfo /> */}
            <Chart data={userStats} title="User Analytics" grid dataKey="New User" />
            <div className="homeWidgets">
                <WidgetSm />
                {/* <WidgetLg /> */}
            </div>
        </div>
    );
}