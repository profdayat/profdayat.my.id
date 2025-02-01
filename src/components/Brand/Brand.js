import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import anime from "animejs";

import { Link } from "../Link";

class Component extends React.Component {
  static displayName = "Brand";

  static propTypes = {
    theme: PropTypes.object.isRequired,
    classes: PropTypes.object.isRequired,
    energy: PropTypes.object.isRequired,
    audio: PropTypes.object.isRequired,
    sounds: PropTypes.object.isRequired,
    className: PropTypes.any,
    link: PropTypes.string,
    hover: PropTypes.bool,
    stableTime: PropTypes.bool,
    onEnter: PropTypes.func,
    onExit: PropTypes.func,
    onLinkStart: PropTypes.func,
    onLinkEnd: PropTypes.func,
  };

  static defaultProps = {
    link: "/",
  };

  constructor() {
    super(...arguments);

    const { energy, stableTime } = this.props;

    if (!stableTime) {
      energy.updateDuration({ enter: 820 });
    }
  }

  componentWillUnmount() {
    const paths = this.svgElement.querySelectorAll("path");
    anime.remove(paths);
  }

  enter() {
    const { energy, sounds, stableTime, onEnter } = this.props;
    const paths = this.svgElement.querySelectorAll("path");

    anime.set(this.svgElement, { opacity: 1 });

    sounds.logo.play();

    anime({
      targets: paths,
      strokeDashoffset: [anime.setDashoffset, 0],
      easing: "linear",
      delay: (path, index) => stableTime ? 0 : index * energy.duration.stagger,
      duration: (path) => stableTime ? energy.duration.enter : path.getTotalLength(),
      complete: () => {
        onEnter && onEnter();
      },
    });
  }

  exit() {
    const { energy, sounds, onExit } = this.props;
    const paths = this.svgElement.querySelectorAll("path");

    sounds.fade.play();

    anime({
      targets: this.svgElement,
      easing: "easeInCubic",
      duration: energy.duration.exit,
      opacity: 0,
    });
    anime({
      targets: paths,
      strokeDashoffset: [anime.setDashoffset, 0],
      easing: "linear",
      direction: "reverse",
      duration: energy.duration.exit,
      complete: () => {
        anime.set(this.svgElement, { opacity: 0 });
        onExit && onExit();
      },
    });
  }

  render() {
    const {
      theme,
      classes,
      energy,
      audio,
      sounds,
      className,
      link,
      hover,
      stableTime,
      onEnter,
      onExit,
      onLinkStart,
      onLinkEnd,
      ...etc
    } = this.props;

    return (
      <h1
        className={cx(classes.root, hover && classes.hover, className)}
        {...etc}
      >
        <Link
          className={classes.link}
          href={link}
          title="Prof Dayat"
          onLinkStart={onLinkStart}
          onLinkEnd={onLinkEnd}
        >
          <span className={classes.title}>ProfDayat</span>
          <svg
            ref={(ref) => (this.svgElement = ref)}
            className={classes.svg}
            onMouseEnter={() => sounds.hover.play()}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 249 45"
          >
            <path
            className={classes.path}
            d="M 192.75 37.25 L 192.75 35 L 182.5 35 L 177.25 30.25 L 177.25 10 L 184 10 L 184 27.75 L 185.75 29.25 L 192.75 29.25 L 192.75 10 L 199.5 10 L 199.5 39.75 L 193.75 45 L 179.5 45 L 179.5 39.25 L 190.5 39.25 L 192.75 37.25 Z M 136.5 35 L 114 35 L 114 0 L 136.5 0 L 143 6 L 143 29 L 136.5 35 Z M 28.25 19 L 22.25 24.5 L 7 24.5 L 7 35 L 0 35 L 0 0 L 22.25 0 L 28.25 5.5 L 28.25 19 Z M 85 17 L 81.5 17 L 81.5 11.25 L 85 11.25 L 85 5.25 L 90.75 0 L 100.75 0 L 100.75 5.75 L 94 5.75 L 91.75 7.75 L 91.75 11.25 L 98 11.25 L 98 17 L 91.75 17 L 91.75 35 L 85 35 L 85 17 Z M 164.75 35 L 164.25 32.75 L 161.75 35 L 153 35 L 148.25 30.75 L 148.25 23.75 L 153 19.5 L 163.75 19.5 L 163.75 17 L 162.25 15.75 L 151.25 15.75 L 151.25 10 L 165.5 10 L 170.5 14.5 L 170.5 35 L 164.75 35 Z M 221.25 35 L 220.75 32.75 L 218.25 35 L 209.5 35 L 204.75 30.75 L 204.75 23.75 L 209.5 19.5 L 220.25 19.5 L 220.25 17 L 218.75 15.75 L 207.75 15.75 L 207.75 10 L 222 10 L 227 14.5 L 227 35 L 221.25 35 Z M 234.75 15.75 L 231.25 15.75 L 231.25 10 L 234.75 10 L 234.75 3.5 L 241.5 3.5 L 241.5 10 L 247.75 10 L 247.75 15.75 L 241.5 15.75 L 241.5 27.25 L 243.75 29.25 L 248.75 29.25 L 248.75 35 L 240.5 35 L 234.75 29.75 L 234.75 15.75 Z M 34 10 L 39.75 10 L 40.25 12.25 L 42.75 10 L 51 10 L 51 15.75 L 42.5 15.75 L 40.75 17.25 L 40.75 35 L 34 35 L 34 10 Z M 54.75 30.25 L 54.75 14.75 L 60.5 9.5 L 72 9.5 L 77.75 14.75 L 77.75 30.25 L 72 35.5 L 60.5 35.5 L 54.75 30.25 Z M 121 6 L 121 29 L 133.25 29 L 136 26.5 L 136 8.5 L 133.25 6 L 121 6 Z M 21.25 16.5 L 21.25 8 L 19 6 L 7 6 L 7 18.5 L 19 18.5 L 21.25 16.5 Z M 71 27.75 L 71 17.25 L 68.75 15.25 L 63.75 15.25 L 61.5 17.25 L 61.5 27.75 L 63.75 29.75 L 68.75 29.75 L 71 27.75 Z M 162 29.25 L 163.75 27.75 L 163.75 25.25 L 156.25 25.25 L 155 26.25 L 155 28.25 L 156.25 29.25 L 162 29.25 Z M 218.5 29.25 L 220.25 27.75 L 220.25 25.25 L 212.75 25.25 L 211.5 26.25 L 211.5 28.25 L 212.75 29.25 L 218.5 29.25 Z"
            />
            
          </svg>
        </Link>
      </h1>
    );
  }
}

export { Component };
