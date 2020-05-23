import Head from 'next/head'
import React from 'react'
import PhotoGrid from '../components/PhotoGrid'

function IndexPage () {
  return (
      <div>
          <Head>
              <title>Asik Fit!</title>
          </Head>
          <PhotoGrid />
      </div>
  )
}

export default IndexPage
