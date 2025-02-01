import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '../tools/withStyles';
import { Link } from '../components/Link';
import { Main } from '../components/Main';
import { Text } from '../components/Text';
import { Fader } from '../components/Fader';
import { Secuence } from '../components/Secuence';

const styles = (theme) => ({
  root: {},
});

class About extends React.Component {
  static propTypes = {
    classes: PropTypes.object,
  };

  render() {
    const { classes } = this.props;

    return (
      <Main className={classes.root}>
        <article>
          <Secuence stagger>
            <header>              
              <h1>
                <Text>About Me</Text>
              </h1>              
            </header>
            <center>
              <Fader>
                <img width="250px" src='https://lh3.googleusercontent.com/d/1OfhgmzckJHLAjrw2a_y_5-Yw4TqlVj1H' alt='Prof Dayat' />
              </Fader>
            </center>
              <div class="profile">
                <h2>Hi, I'm Dayat! 👋</h2>
                
                <p>A passionate <strong>Informatics Engineering graduate</strong> from <strong>STMIK Yadika Bangil</strong> (East Java) who thrives on <em>transforming data into actionable insights</em> and <em>building efficient web systems</em>. With <strong>4 years of experience</strong> in the manufacturing industry, I've successfully blended <strong>technical expertise</strong> (web development, data analysis) with <strong>operational management</strong> to deliver measurable impact, such as:</p>

                <ul class="achievements">
                    <li>🚀 Saving <strong>10 hours/week</strong> in reporting time through <em>real-time data dashboards</em></li>
                    <li>💡 Leading a <strong>paperless transition</strong> that slashed operational costs by <strong>30%</strong></li>
                    <li>📊 Boosting inventory accuracy by <strong>20%</strong> via structured data analysis & control procedures</li>
                </ul>

                <h3>Specializations:</h3>
                <ul class="specializations">
                    <li>Front-End Web Development <em>(Certified by Dicoding)</em></li>
                    <li>Database Programming <em>(BNSP Certified)</em></li>
                    <li><strong>Tools & Tech:</strong> JavaScript, PHP, Node.js, .Net, SQL, HTML/CSS, Google Spreedsheet, Google BigQuery</li>
                </ul>

                <p>Beyond technical skills, I've mentored aspiring developers as a <em>Learning Facilitator</em> at Dicoding Indonesia and honed end-to-end solution-building during my internship at <strong>PT Meiji Indonesia</strong>.</p>

                <h3>Currently:</h3>
                <p>Focused on crafting <em>data-driven solutions</em> and scalable web systems. With a mix of <strong>discipline, rapid adaptability</strong>, and a problem-solving mindset, I'm ready to contribute to innovative IT projects!</p>

                <h3>Let’s Collaborate On:</h3>
                <ul class="collaborate">
                    <li>📱 Web Application Development <em>(Custom Systems, Performance Optimization)</em></li>
                    <li>📈 Data Analysis & Visualization <em>(Dashboards, Predictive Modeling)</em></li>
                    <li>🔧 System Optimization & Database Management <em>(ETL, Query Tuning)</em></li>
                </ul>

                <blockquote>💬 "Technology isn’t just code — it’s the language we use to solve human challenges."</blockquote>

                <p><strong>Explore my portfolio on</strong> <a href="https://linkedin.com/in/profdayat">LinkedIn</a> <strong>or reach out via</strong> <a href="mailto:akundayat97@gmail.com">email</a> <strong>to discuss opportunities!</strong></p>
              </div>
            
          </Secuence>
        </article>
      </Main>
    );
  }
}

export default withStyles(styles)(About);
