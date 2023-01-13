import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import { fetchWeather } from '../lib/fetchWeather'
import { GetServerSideProps, GetServerSidePropsContext, PreviewData } from 'next'
import { useState } from 'react'
import { ParsedUrlQuery } from 'querystring'
import { useRouter } from 'next/router'

const inter = Inter({ subsets: ['latin'] })

export default function Home({ data }: any) {
  const [searchValue, setSearchValue] = useState<string>(
    'Search here for weather'
  );
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [results, setResults] = useState<PreviewData[]>([]);
  const router = useRouter();

  // const changeHandler = (e) => {
  //   setSearchValue(e.target.value);
  // }

  // const btnHandler = (e) => {
  //   e.preventDefault();
  //   console.log(`data ${searchValue}`)
  //   // setIsLoading(true);
  //   // fetchWeather(searchValue)
  //   //  .then(results => setResults(results))
  //   //  .catch(err => console.log(err))
  //   //  .finally(() => setIsLoading(false))
  // }

  return (
    <>
      <Head>
        <title>Weather Application</title>
        <meta name="description" content="Weather application" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="TEE-EMM97" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.description}>
          <p className={styles.cityName}>
            City
            <code className={styles.code}> Name</code>
          </p>
          <div>Date/Time</div>
        </div>

        <div className={styles.description}>
          <h3>Search for a city</h3>
          <div className="search">
            <input
              type="search"
              name="weather search"
              id=""
              style={{
                background: 'white',
                borderRadius: '20px',
                color: 'black',
              }}
              // value={searchValue}
              // onChange={changeHandler}
            />
            <button
              // onClick={btnHandler}
              onClick={() => console.log(data)}
              type="submit"
            >
              Search!
            </button>
          </div>
        </div>
      </main>
    </>
  );
}

//REFACTOR ME
export const getServerSideProps: GetServerSideProps = async (context) => {
  // const { params } = context;
  // console.log(defaultLocale);
  const data = await fetchWeather();
  // if (!data) {
  //   return {
  //     notFound: true,
  //   };
  // }

  return {
    props: {
      data,
    },
  };
};