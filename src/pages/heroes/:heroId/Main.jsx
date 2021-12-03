import React from 'react';
import { useLocation } from 'react-router-dom';
import styled, { createGlobalStyle } from 'styled-components';

const HeroProfileContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  min-height: 88vh;
`;

const Card = styled.div`
  padding: 1rem 1rem 4rem 1rem;
  background-color: white;
  border: ${(props) => props.theme.rems.border} solid ${(props) => props.theme.colors.border};
`;

const Row = styled.div`
  padding: 0.3rem 1.5rem;
`;

const LeftAlignedRow = styled(Row)`
  text-align: left;
`;

const Img = styled.img`
  border-radius: 50%;
  height: 5rem;
  width: 5rem;
  object-fit: cover;
`;

const StyledHtmlRoot = createGlobalStyle`
  html {
    height: -webkit-fill-available;
    background-color: #f0f4f7;
  }
`;

export const HeroProfile = () => {
  const { state } = useLocation();
  const hero = state?.hero;

  return (
    <HeroProfileContainer>
      <StyledHtmlRoot />
      <Card>
        <Row />
        <Row />
        <Row>
          <Img
            alt={`${hero.name}`}
            src={
              hero.image ||
              'https://media.istockphoto.com/vectors/missing-image-of-a-person-placeholder-vector-id1288129985?k=20&m=1288129985&s=612x612&w=0&h=OHfZHfKj0oqIDMl5f_oRqH13MHiB63nUmySYILbWbjE='
            }
          />
        </Row>
        <LeftAlignedRow>
          <b>Hero Name:</b> &nbsp; &nbsp; &nbsp; {hero.name}
        </LeftAlignedRow>
        <LeftAlignedRow>
          <b>Description:</b> &nbsp; &nbsp; &nbsp; {hero.description}
        </LeftAlignedRow>
        <Row />
        <Row />
        <Row />
        <LeftAlignedRow>
          <b>Powers</b>
        </LeftAlignedRow>
        <LeftAlignedRow>{hero.power}</LeftAlignedRow>
      </Card>
    </HeroProfileContainer>
  );
};
