import React from 'react';
import PropTypes from 'prop-types';

import dataProject from '../data/project';
import { withStyles } from '../tools/withStyles';
import { Link } from '../components/Link';
import { Main } from '../components/Main';
import { Post } from '../components/Post';
import { Secuence } from '../components/Secuence';
import { Text } from '../components/Text';

const styles = (theme) => ({
  root: {},
  seeMore: {
    marginTop: 20,
  },
});

class Project extends React.Component {
  static propTypes = {
    classes: PropTypes.object,
  };

  render() {
    const { classes } = this.props;

    return (
      <Main className={classes.root}>
        <Secuence stagger>
          <header>
            <h1>
              <Text>Portfolio</Text>
            </h1>
          </header>
          {dataProject.map((post, index) => (
            <Post
              key={index}
              audio={{ silent: index > 4 }}
              data={{ ...post, id: 'post' + index }}
            />
          ))}
          <p className={classes.seeMore}>
            <Text>See more at</Text>{' '}
            <Link href='https://github.com/profdayat' target='github'>
              <Text>github.com/profdayat.</Text>
            </Link>
          </p>
        </Secuence>
      </Main>
    );
  }
}

export default withStyles(styles)(Project);
