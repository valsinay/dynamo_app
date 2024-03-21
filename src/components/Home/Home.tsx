import React, { useRef, useState } from "react";
import {
  CardsWrapper,
  StyledDiv,
  H1,
  Loader,
  Wrapper,
  StyledModal,
} from "./Home.styles";
import "../../index.css";
import { DayCard } from "../Card/DayCard";
import { useWeatherContext } from "../../context/weatherContext";
import { CardData, WeatherData } from "../../models/models";
import { HourCard } from "../Card/HourCard";
import { Header } from "../Header/Header";
import { useMappedWeather } from "../../hooks/useMappedWeather";

export const Home = () => {
  const { data, loading, unit, setUnit, showModal, toggleModal } =
    useWeatherContext();
  const [selectedDay, setSelectedDay] = useState({} as CardData);
  const myRef = useRef(null);
  // const weatherGroupedByDays = useMappedWeather(data);

  const mappedWeather = () => {
    const weatherGroupedByDays: CardData[] = [];

    if (data) {
      data.list.map((forecast: WeatherData) => {
        const currDate = new Date(forecast.dt_txt).toLocaleString("en-GB", {
          weekday: "long",
        });

        const existingDate = weatherGroupedByDays.find(
          (day) => day.date.toLocaleString() === currDate.toLocaleString()
        );

        if (existingDate) return existingDate.weather.push(forecast);

        return weatherGroupedByDays.push({
          data: forecast,
          description: forecast.weather[0].description,
          date: currDate,
          overallConditions: forecast.weather[0].main,
          weather: [forecast],
        });
      });
    }
    return weatherGroupedByDays.slice(0, 5);
  };

  return (
    <Wrapper $loading={loading} ref={myRef}>
      {showModal && selectedDay && (
        <StyledModal
          focusTrapped={false}
          container={myRef.current}
          center
          open={showModal}
          onClose={() => toggleModal(false)}
          classNames={{
            modal: "customModal",
          }}
        >
          <StyledDiv $container>
            <H1>{selectedDay.date} forecast</H1>
            <StyledDiv className="hourCardsWrapper">
              {selectedDay.weather.map((el: WeatherData) => {
                return (
                  <HourCard
                    key={el.dt_txt + 1}
                    dt_txt={el.dt_txt}
                    main={el.main}
                    weather={el.weather}
                  />
                );
              })}
            </StyledDiv>
          </StyledDiv>
        </StyledModal>
      )}
      {loading ? (
        <>
          <Loader data-testid="loader" />
          <H1>Loading...</H1>
        </>
      ) : (
        <>
          <Header city={data.city} unit={unit} setUnit={setUnit} />
          <CardsWrapper data-testid="cardsWrapper">
            {mappedWeather().map((day, _index) => {
              return (
                <DayCard
                  key={day.data.dt_txt + _index}
                  onClick={() => {
                    setSelectedDay(day);
                    toggleModal(true);
                  }}
                  forecast={day}
                />
              );
            })}
          </CardsWrapper>
        </>
      )}
    </Wrapper>
  );
};
