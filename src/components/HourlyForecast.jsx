import Hour from "./Hour";

function HourlyForecast({ data }) {
  if (!data) return null;

  return (
    <div className="hourlyForecast">
      {/* 
        data.list = array of weather forecasts (every 3 hours)

        slice(1) means:
        - remove the first element (index 0)
        - start from index 1 (skip current weather)
      */}
      {data.list.slice(1).map((item, index) => (

        /* 
          index = position of the item in the new sliced array
          (starts from 0 again after slice)
        */

        <Hour key={index} item={item} />
      ))}
    </div>
  );
}

export default HourlyForecast;