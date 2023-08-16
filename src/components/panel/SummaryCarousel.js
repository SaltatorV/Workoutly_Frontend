import { Carousel, Container, Row } from "react-bootstrap";
import { Suspense } from "react";
import { useLoaderData, json, defer, Await } from "react-router-dom";
import "./css/SummaryCarousel.css";
import SummaryCarouselItem from "./SummaryCarouselItem";
import { firstRoutineTestData, secondRoutineTestData } from "./TemporaryData";

const SummaryCarousel = () => {
  const { workoutPlans } = useLoaderData();
  const routine1 = Object.values(firstRoutineTestData);
  const routine2 = Object.values(secondRoutineTestData);
  const routines = [routine1, routine2];
  return (
    <Suspense fallback={<p style={{ textAlign: "center" }}>Loading...</p>}>
      <Await resolve={workoutPlans}>
        {(workoutPlans) => (
          <Container className="summary-carousel">
            <Row className="my-5">
              <Carousel fade className="my-5 general-carousel">
                {workoutPlans.length > 0 && (
                  <Carousel.Item className="general-carousel-item">
                    <SummaryCarouselItem
                      routinePlan={Object.values(workoutPlans)[0].exercises}
                      className="general-carousel-item-content"
                      planName={Object.values(workoutPlans)[0].name}
                    />
                    <hr />
                    <Carousel.Caption className="general-carousel-caption">
                      <h3 className="general-carousel-item-caption">
                        Plan Name: {Object.values(workoutPlans)[0].name}
                      </h3>
                      <p className="general-carousel-item-caption">
                        {Object.values(workoutPlans)[0].description}
                      </p>
                    </Carousel.Caption>
                  </Carousel.Item>
                )}
                {workoutPlans.length > 1 && (
                  <Carousel.Item className="general-carousel-item">
                    <SummaryCarouselItem
                      routinePlan={Object.values(workoutPlans)[1].exercises}
                      className="general-carousel-item-content"
                      planName={Object.values(workoutPlans)[1].name}
                    />
                    <hr />
                    <Carousel.Caption className="general-carousel-caption">
                      <h3 className="general-carousel-item-caption">
                        Plan Name: {Object.values(workoutPlans)[1].name}
                      </h3>
                      <p className="general-carousel-item-caption">
                        {Object.values(workoutPlans)[1].description}
                      </p>
                    </Carousel.Caption>
                  </Carousel.Item>
                )}
                {workoutPlans.length > 2 && (
                  <Carousel.Item className="general-carousel-item">
                    <SummaryCarouselItem
                      routinePlan={Object.values(workoutPlans)[2].exercises}
                      className="general-carousel-item-content"
                      planName={Object.values(workoutPlans)[2].name}
                    />
                    <hr />
                    <Carousel.Caption className="general-carousel-caption">
                      <h3 className="general-carousel-item-caption">
                        Plan Name: {Object.values(workoutPlans)[2].name}
                      </h3>
                      <p className="general-carousel-item-caption">
                        {Object.values(workoutPlans)[2].description}
                      </p>
                    </Carousel.Caption>
                  </Carousel.Item>
                )}
                {workoutPlans.length == 0 && (
                  <Carousel.Item className="general-carousel-info">
                    <p>
                      It looks like you don't have training plans yet, add some
                      in the Routines tab to see them here.
                    </p>
                    <hr />
                  </Carousel.Item>
                )}
              </Carousel>
            </Row>
          </Container>
        )}
      </Await>
    </Suspense>
  );
};

export default SummaryCarousel;
