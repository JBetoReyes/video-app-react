import React from 'react';
import '../assets/styles/containers/Player.scss';
import { RouteChildrenProps } from 'react-router-dom';
import { connect } from 'react-redux';
import { AppState } from '../reducers';
import { HomeState, CarouselItemState } from '../typings/Containers/Home.d';
import NotFound from './NotFound';

type OwnProps = {};
type Props = OwnProps & RouteChildrenProps<{ id: string }> & HomeState;

const handleClick = (props: Props) => {
  props.history.goBack();
};

const Player = (props: Props) => {
  const { match } = props;
  let source;
  if (match) {
    const { id } = match.params;
    const findItem = (i: CarouselItemState) => i.id === Number(id);
    const state = props;
    const item = state.originals.find(findItem) || state.trends.find(findItem);
    source = item?.source;
  }
  return (
    <>
      {' '}
      {source ? (
        <div className="player">
          <video controls autoPlay>
            <track kind="captions" />
            <source src={source} type="video/mp4" />
          </video>
          <div className="player-back">
            <button type="button" onClick={() => handleClick(props)}>
              Regresar
            </button>
          </div>
        </div>
      ) : (
        <NotFound />
      )}
    </>
  );
};

const mapStateToProps = ({ home }: AppState) => ({
  ...home,
});

type StateToPropsType = ReturnType<typeof mapStateToProps>;

export default connect<StateToPropsType, {}, OwnProps, AppState>(
  mapStateToProps,
  {}
)(Player);
