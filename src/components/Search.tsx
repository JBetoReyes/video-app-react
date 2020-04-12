import React, {
  KeyboardEvent,
  ChangeEvent,
  useState,
  Dispatch,
  SetStateAction,
} from 'react';
import { connect } from 'react-redux';
import { filterItems } from '../actions/Home.action';
import { AppState } from '../reducers';
import '../assets/styles/components/Search.scss';

const mapDispatchToProps = {
  filterItems,
};

type DispatchToPropsType = typeof mapDispatchToProps;
type OwnProps = {};
type Props = OwnProps & DispatchToPropsType;
type SetFilterType = Dispatch<SetStateAction<string>>;

const handleChange = (
  event: ChangeEvent<HTMLInputElement>,
  props: Props,
  setFilter: SetFilterType
) => {
  setFilter(event.target.value);
};

const handleKePress = (
  event: KeyboardEvent<HTMLInputElement>,
  props: Props,
  filter: string
) => {
  if (event?.key === 'Enter') {
    props.filterItems(filter);
  }
};

const Search = (props: Props) => {
  const [filter, setFilter] = useState<string>('');
  return (
    <section className="main">
      <h2 className="main__title">¿Qué quieres ver hoy?</h2>
      <input
        type="text"
        className="input"
        placeholder="Search..."
        onChange={(event) => handleChange(event, props, setFilter)}
        onKeyPress={(event) => handleKePress(event, props, filter)}
      />
    </section>
  );
};

export default connect<{}, DispatchToPropsType, OwnProps, AppState>(
  null,
  mapDispatchToProps
)(Search);
