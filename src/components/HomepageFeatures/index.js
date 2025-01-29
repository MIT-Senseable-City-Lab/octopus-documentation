import React from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import { useColorMode } from '@docusaurus/theme-common'; // Import the theme context
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Flexible',
    Svg: require('@site/static/img/svg-icons/provision.svg').default,
    description: (
      <>
        Extreme modularity and compatibility with Arduino boards simplifies
        building a variety of projects: from heat and air quality monitoring to
        detection of biodiversity markers.
      </>
    ),
  },
  {
    title: 'Deploy anywhere',
    Svg: require('@site/static/img/svg-icons/move.svg').default,
    description: (
      <>
        Multiple tentacle attachments allow Octopus to be deployed everywhere as
        a stationary, wearable, or vehicular sensing node.
      </>
    ),
  },
  {
    title: 'Simple feedback',
    Svg: require('@site/static/img/svg-icons/circle.svg').default,
    description: (
      <>
        Octopus can display environmental data via simple feedback and, based on
        configuration, connect to other devices.
      </>
    ),
  },
  {
    title: 'Simple fabrication',
    Svg: require('@site/static/img/svg-icons/3d-printing.svg').default,
    description: (
      <>
        A step-by-step fabrication process guide the user through 3D-printing
        the outer shell, hand-soldering electronics and starting to code
        following provided examples.
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  const { colorMode } = useColorMode();
  const svgColor = colorMode === 'dark' ? '#ffffff' : '#000000'; // Adjust colors as needed

  return (
    <div className={clsx('col col--3')}>
      <div className='text--center'>
        <Svg className={styles.featureSvg} role='img' fill={svgColor} />{' '}
        {/* Set fill color */}
      </div>
      <div className='text--center padding-horiz--md'>
        <Heading as='h3'>{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className='container'>
        <div className='row'>
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
