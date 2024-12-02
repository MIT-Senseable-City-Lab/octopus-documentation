import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Mobile',
    Svg: require('@site/static/img/move.svg').default,
    description: (
      <>
        Octopus is designed to be a personal urban sensing platform made for
        makers and enthusiasts to collect hyperlocal environmental data.
      </>
    ),
  },
  {
    title: 'Flexible',
    Svg: require('@site/static/img/provision.svg').default,
    description: (
      <>
        The Octopus lets you deploy the platform with different strategies,
        collecting a variety of environmental data.
      </>
    ),
  },
  {
    title: 'Modifiable',
    Svg: require('@site/static/img/pencil.svg').default,
    description: (
      <>
        Extend of costumize your octopus by using the Octopus Library and API.
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx('col col--4')}>
      <div className='text--center'>
        <Svg className={styles.featureSvg} role='img' />
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
