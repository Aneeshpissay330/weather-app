import { Button, TextInput } from "@Aneeshpissay330/components-ui";
import { useWeather } from "../../../contexts/WeatherContext";
import { useActionState } from "react";

const WeatherSearch = () => {
  const { searchWeather } = useWeather();

  // form action handler
  const searchAction = async (_: unknown, formData: FormData) => {
    const city = formData.get("city") as string;
    if (city) {
      await searchWeather(city);
    }
    return city; // return value becomes new `state`
  };

  const [lastCity, formAction, isPending] = useActionState(searchAction, "");

  return (
    <section id="search-section" className="mb-8">
      <div className="text-center mb-6">
        <h1 className="text-3xl font-bold mb-2">Weather Dashboard</h1>
        <p className="text-gray-600">
          Search for any city to view current weather and forecast
        </p>
      </div>

      <div className="max-w-md mx-auto relative">
        <form action={formAction} className="relative flex gap-5">
          <TextInput
            type="text"
            name="city"
            placeholder="Enter city name"
            defaultValue={lastCity}
            disabled={isPending}
          />
          <Button
            type="submit"
            leftIcon={
              <span className="material-symbols-outlined text-gray-400">
                search
              </span>
            }
            disabled={isPending}
          >
            {isPending ? "Searching..." : "Search"}
          </Button>
        </form>
      </div>
    </section>
  );
};

export default WeatherSearch;
