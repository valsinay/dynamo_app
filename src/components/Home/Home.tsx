import React, { useRef, useState } from "react";
import {
  CardsWrapper,
  StyledDiv,
  Wrapper,
  StyledModal,
} from "./Home.styles";
import "../../index.css";
import { DayCard } from "../Card/DayCard";
import { useWeatherContext } from "../../context/weatherContext";
import { CardData, WeatherData } from "../../interfaces/index";
import { HourCard } from "../Card/HourCard";
import { Header } from "../Header/Header";
import { useMappedWeather } from "../../hooks/useMappedWeather";
import { H1 } from "../shared/SharedStyles.styles";
import { theme } from "../../theme/theme";
import { Loader } from "../Loader/Loader";

export const Home = () => {
  const { data, loading, unit, setUnit, showModal, toggleModal } =
    useWeatherContext();
  const [selectedDay, setSelectedDay] = useState({} as CardData);
  const myRef = useRef(null);
  const weatherGroupedByDays = useMappedWeather();

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
            <H1 $color={theme.main.darkGray}>{selectedDay.date} forecast</H1>
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
          <Loader />
        </>
      ) : (
        <>
          <Header city={data.city} unit={unit} setUnit={setUnit} />
          <CardsWrapper data-testid="cardsWrapper">
            {weatherGroupedByDays.map((day, _index) => {
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
