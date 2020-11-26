import { Helmet } from 'react-helmet';
import { FaMapMarker } from 'react-icons/fa';
import styles from 'styles/App.module.scss';

import useSite from 'hooks/use-site';

import Layout from 'components/Layout';
import Section from 'components/Section';
import Container from 'components/Container';
import Button from 'components/Button';

import products from '../../data/products.json';
import externalProducts from '../../data/external-products.json';
import cosmoInTheWild from '../../data/cosmo-in-the-wild.json';

export default function Home() {
  const { metadata } = useSite();
  const { siteName } = metadata;

  return (
    <Layout>

      <Helmet>
        <title>{ siteName }</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://app.snipcart.com" />
        <link rel="preconnect" href="https://cdn.snipcart.com" />
        <link rel="stylesheet" href="https://cdn.snipcart.com/themes/v3.0.21/default/snipcart.css" />
      </Helmet>

      <Section>
        <Container>
          <h2 className="sr-only">Available Products</h2>
          <ul className={styles.products}>
            {products.map(product => {
              const { id, title, images, price } = product;
              return (
                <li className={styles.product} key={id}>
                  <ul>
                    { images.map((image, index) => {
                      return (
                        <li key={image}>
                          <img src={image} alt={`Preview ${index + 1} of ${title}`} />
                        </li>
                      )
                    }) }
                  </ul>
                  <h3 className={styles.productTitle}>{ title }</h3>
                  <p className={styles.productPrice}>${ price }</p>
                  <Button
                    className={`${styles.productButton} snipcart-add-item`}
                    data-item-id={id}
                    data-item-image={images[0]}
                    data-item-name={title}
                    data-item-url="/"
                    data-item-price={price}
                  >
                    Add to Cart
                  </Button>
                </li>
              )
            })}
          </ul>
        </Container>
      </Section>

      <Section className={styles.homeInTheWild}>
        <Container>
          <div className={styles.homeInTheWildHeader}>
            <h2>Cosmo in the Wild</h2>
            <p>
              Share yours with <a href="https://twitter.com/hashtag/cosmointhewild">#cosmointhewild</a> and tag <a href="https://twitter.com/colbyfayock">@colbyfayock</a>!
            </p>
          </div>
          <ul className={styles.cosmoWild}>
            {cosmoInTheWild.map(({ id, username, image, country }) => {
              return (
                <li key={id} className={styles.cosmoWildItem} style={{
                  backgroundImage: `url(${image})`
                }}>
                  <a href={`https://twitter.com/${username}/status/${id}`} target="_blank" rel="noopener">
                    <span className="sr-only">Cosmo in {country}</span>
                    <span className={styles.cosmoWildCountry}>
                      <FaMapMarker /> { country }
                    </span>
                  </a>
                </li>
              )
            })}
          </ul>
        </Container>
      </Section>

      <Section className={styles.sectionOther}>
        <Container>
          <h2>More stuff with Cosmo!</h2>
          <ul className={styles.products}>
            {externalProducts.map(product => {
              const { id, title, images, price, link, description } = product;
              return (
                <li className={styles.product} key={id}>
                  <a href={link}>
                    <ul>
                      { images.map((image, index) => {
                        return (
                          <li key={image}>
                            <img src={image} alt={`Preview ${index + 1} of ${title}`} />
                          </li>
                        )
                      }) }
                    </ul>
                    <h3 className={styles.productTitle}>{ title }</h3>
                    <p className={styles.productPrice}>{ description }</p>
                    <p className={styles.productPrice}>${ price }</p>
                    <Button className={styles.productButton}>
                      Check It Out
                    </Button>
                  </a>
                </li>
              )
            })}
          </ul>
        </Container>
      </Section>

      <Section>
        <Container>
          <p className={styles.poweredBy}>
            <a href="https://snipcart.com/">
              Powered by
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 134.5 29.3">
                <path fill="#f6e767" d="M24.7 6.1L14.7.3c-.9-.5-2.3-.5-3.2 0l-10 5.8C.7 6.7 0 7.9 0 8.9v11.5c0 1 .7 2.2 1.6 2.7l10 5.8c.9.5 2.3.5 3.2 0l10-5.8c.9-.5 1.6-1.7 1.6-2.7V8.9c-.1-1-.8-2.2-1.7-2.8zM22 12.4h-1v-1.8c0-1.3-1-1.8-3-1.8h-.1c-4.8 0-4.4-1.8-4.5-2.5h-.1c-.1.7.3 2.5-4.5 2.5h-.1c-2 0-3 .4-3 1.8V12L22 16.7v2c0 1.9-.9 3-4.1 3h-.2c-2.4 0-4 .5-4 2.5h-1c0-1.9-1.5-2.5-4-2.5-3.1 0-4.1-1.1-4.1-3V17h1v1.8c0 1.3 1 1.8 3 1.8h.1c4.8 0 4.4 1.8 4.5 2.5h.1c.1-.7-.3-2.5 4.5-2.5h.2c2 0 3-.4 3-1.8v-1L4.6 13v-2.3c0-1.9.9-3 4.1-3h.2c2.5 0 4-.5 4-2.5h1c0 1.9 1.5 2.5 4 2.5h.1c3.1 0 4.1 1.1 4.1 3l-.1 1.7z" />
                <path fill="#2c2e31" d="M38.1 11.9c0-1.4 1.5-2 2.7-2 1.2 0 2.5.4 2.6 1.8h1.1c-.3-2.3-2.3-2.8-3.8-2.8-1.9 0-3.7 1.1-3.7 3.2 0 2.5 2.9 3.1 4.8 3.8 1 .3 1.8.9 1.8 2 0 1.5-1.5 2.3-2.8 2.3-1.6 0-2.9-.5-2.9-2.3h-1.1c0 1.9 1.6 3.3 3.5 3.3 2.4 0 4.6-.8 4.6-3.3-.2-4.2-6.8-2.7-6.8-6zm20.6 7.5L52.2 9.1H51v11.7h1.1V10.7l6.3 10.1h1.3V9.1h-1.1l.1 10.3zm8.2 1.5H68V9.1h-1.1v11.8zM78.2 9.1h-2.9v11.7h1.1v-5.1h1.9c2.3 0 4.8-.5 4.8-3.3-.1-2.8-2.7-3.3-4.9-3.3zm.7 5.7h-2.6v-4.7h2.6c1.6 0 3 .5 3 2.3-.1 1.9-1.5 2.4-3 2.4zm13.6 5.3c-3 0-3.9-2.7-3.9-5.1 0-2.4.9-5.1 3.9-5.1 1.3 0 2.6.6 2.8 2h1.1c-.2-2.1-2-3-3.9-3-3.5 0-5.1 2.9-5.1 6.1 0 3.3 1.5 6.1 5.1 6.1 1.9 0 3.7-1.1 4-3.1h-1.1c-.3 1.5-1.6 2.1-2.9 2.1zm11.9-11l-4.7 11.7h1.1l1.2-3.2h5.8l1.3 3.2h1.2l-4.7-11.7h-1.2zm-2 7.6l2.6-6.6 2.5 6.6h-5.1zm17.4-2c1.4-.4 2.3-1.3 2.3-2.6 0-1.1-.4-2-1.2-2.5-.9-.6-1.7-.6-2.8-.6h-3.8v11.7h1.1v-5.6h2.9c2.1 0 2.3.5 2.5 3.2.1.8.1 1.7.4 2.4h1.2c-.5-.7-.4-1.6-.6-3.5-.2-1.2-.5-2.2-2-2.5zm-2.3-.4h-2.3v-4.2h2.4c1.1 0 3.2-.2 3.2 2.1.1 2-1.8 2.1-3.3 2.1zm8.4-5.2v1h3.8v10.8h1V10.1h3.7v-1h-8.5z" />
              </svg>
            </a>
          </p>
        </Container>
      </Section>

      <Section className={styles.homeNotes}>
        <Container>
          <h2>Notes</h2>
          <ul>
            <li>
              <h3>How much is shipping?</h3>
              <p>
                Flat rate of $2.00 USD.
              </p>
            </li>
            <li>
              <h3>Where can I ship to?</h3>
              <p>
                Wherever a <a href="https://www.usps.com/international/first-class-mail-international.htm">USPS Global Stamp</a> lets me!
              </p>
            </li>
          </ul>
        </Container>
      </Section>

      <script async src="https://cdn.snipcart.com/themes/v3.0.21/default/snipcart.js" />
      <div hidden id="snipcart" data-api-key={process.env.NEXT_PUBLIC_SNIPCART_API_KEY} />
    </Layout>
  )
}
