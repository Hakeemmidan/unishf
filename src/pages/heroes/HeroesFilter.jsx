import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Collapsible from 'react-collapsible';
import { IoMdSearch, IoMdFunnel } from 'react-icons/io';
import { BsToggleOff, BsToggleOn } from 'react-icons/bs';
import { getHeroes } from '../../utils/mock_api';

const HeroesFilterContainer = styled.div`
  border: ${(props) => props.theme.rems.border} solid ${(props) => props.theme.colors.border};
  height: fit-content;
  padding: 0.5rem 1rem;
  @media (max-width: ${(props) => props.theme.mobileBreakpoint}) {
    margin-bottom: 2rem;
    align-self: center;
    width: 90vw;
  }
`;

const ToggleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  &:hover {
    cursor: pointer;
  }
`;

const SearchFieldContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 0 0.4rem;
  border: 0.15rem solid lightgray;
  &:focus-within {
    border: 0.15rem solid ${(props) => props.theme.colors.primary};
  }
`;

const SearchFieldInput = styled.input`
  height: 2rem;
  border: none;
  padding: 0 0.5rem;
  font-size: 1rem;
  outline: none;
`;

const CollapsibleChildrenContainer = styled.div`
  min-height: 9rem;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
`;

const SortContainer = styled.div`
  width: 100%;
  padding: 0.5rem 0;
  display: flex;
  align-items: center;
`;

const SortByPowerTxtContainer = styled.span`
  padding-right: 0.5rem;
`;

const ColoredBsToggleOn = styled(BsToggleOn)`
  fill: ${(props) => props.theme.colors.secondary};
`;

const UpsideDownIoMdFunnel = styled(IoMdFunnel)`
  transform: scaleY(-1);
`;

export const HeroesFilter = ({ setHeroes }) => {
  const [inputVal, setInputVal] = useState('');
  const [collapsibleIsOpen, setCollapsibleIsOpen] = useState(false);
  const [toggleIsOn, setToggleIsOn] = useState(false);

  const handleInputChange = async (e) => {
    setInputVal(e.target.value);
    setHeroes(await getHeroes(e.target.value));
  };

  const handleSortByPowerToggle = async () => {
    const newToggleIsOn = !toggleIsOn;
    if (newToggleIsOn) {
      setHeroes(await getHeroes(inputVal, 'power'));
    } else {
      setHeroes(await getHeroes(inputVal, 'name'));
    }
    setToggleIsOn(newToggleIsOn);
  };

  return (
    <HeroesFilterContainer data-testid="heroes-filter-container">
      <Collapsible
        onOpening={() => setCollapsibleIsOpen(true)}
        onClosing={() => setCollapsibleIsOpen(false)}
        trigger={<Trigger collapsibleIsOpen={collapsibleIsOpen} />}
      >
        <CollapsibleChildrenContainer data-testid="collapsible-children-container">
          <SearchFieldContainer>
            <IoMdSearch size={20} />
            <SearchFieldInput
              type="text"
              placeholder="Search"
              onChange={handleInputChange}
              value={inputVal}
            />
          </SearchFieldContainer>
          <SortContainer>
            <SortByPowerTxtContainer>Sort by Power </SortByPowerTxtContainer>
            {toggleIsOn ? (
              <ColoredBsToggleOn size={30} onClick={handleSortByPowerToggle} />
            ) : (
              <BsToggleOff size={30} onClick={handleSortByPowerToggle} />
            )}
          </SortContainer>
        </CollapsibleChildrenContainer>
      </Collapsible>
    </HeroesFilterContainer>
  );
};

const Trigger = ({ collapsibleIsOpen }) => (
  <ToggleContainer data-testid="toggle-container">
    <>Filters</>
    {collapsibleIsOpen ? <UpsideDownIoMdFunnel /> : <IoMdFunnel />}
  </ToggleContainer>
);

HeroesFilter.propTypes = {
  setHeroes: PropTypes.func.isRequired
};

Trigger.propTypes = {
  collapsibleIsOpen: PropTypes.bool.isRequired
};
