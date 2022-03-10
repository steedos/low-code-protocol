import { BuilderComponent, Builder } from '@builder.io/react'
import Script from 'next/script'
import Head from 'next/head'

import React, { useState, useEffect } from 'react';

// Register amis render 
const Amis = props => {
  const {schema, data} = props;
  
  return (
    <>
      <Head>  
        <title>Amis</title>
        <link rel="stylesheet" href="https://unpkg.com/amis@1.8.0-beta.2/sdk/sdk.css" />
      </Head>
      <div id="amis-root"></div>
      <Script 
        src="https://unpkg.com/amis@1.8.0-beta.2/sdk/sdk.js" 
        onLoad={() => {
          /*global amisRequire */
          let amis = amisRequire('amis/embed');
          amis.embed('#amis-root', schema, data);
        }}/>
    </>
  )
}
 
Builder.registerComponent(Amis, {
  name: 'Amis',
  inputs: [
    { name: 'schema', type: 'object' },
    { name: 'data', type: 'object' },
  ]
})

function AmisPage() {
    const amisSchema = {
        type: 'page',
        title: '表单页面',
        body: {
          type: 'form',
          mode: 'horizontal',
          api: '/saveForm',
          body: [
            {
              label: 'Name',
              type: 'input-text',
              name: 'name'
            },
            {
              label: 'Email',
              type: 'input-email',
              name: 'email'
            }
          ]
        }
      };
    const amisData = {
    }
    const pageSchema={
        "data":{
           "blocks":[
              {
                 "@type":"@builder.io/sdk:Element",
                 "@version":2,
                 "id":"builder-2b290abc4e4042498645863f53ee6815",
                 "component":{
                    "name":"Amis",
                    "options":{
                       "schema": amisSchema,
                       "data": amisData
                    }
                 },
                 "responsiveStyles":{
                    "large":{
                       "display":"flex",
                       "flexDirection":"column",
                       "alignItems":"stretch",
                       "position":"relative",
                       "margin":"20px",
                       "lineHeight":"normal",
                       "height":"auto",
                       "textAlign":"center"
                    }
                 }
              }
           ],
           "inputs":[
              
           ]
        }
    }
    const pageData = {}
    if (process.browser) 
      return <BuilderComponent model="page" content={pageSchema} data={pageData}/>
    else 
      return null
}
  
export default AmisPage