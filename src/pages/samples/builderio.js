import { BuilderComponent, Builder } from '@builder.io/react'
 
// Register our heading component for use in
// the visual editor
const Heading = props => (
  <h1 className="my-heading">{props.title}</h1>
)
 
Builder.registerComponent(Heading, {
  name: 'Heading',
  inputs: [{ name: 'title', type: 'text' }]
})

function BuiderPage() {
    const pageJson={
        "data":{
           "blocks":[
              {
                 "@type":"@builder.io/sdk:Element",
                 "@version":2,
                 "id":"builder-2b290abc4e4042498645863f53ee6815",
                 "component":{
                    "name":"Heading",
                    "options":{
                       "title":"Hello World 2!"
                    }
                 },
                 "responsiveStyles":{
                    "large":{
                       "display":"flex",
                       "flexDirection":"column",
                       "alignItems":"stretch",
                       "position":"relative",
                       "marginTop":"20px",
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
    return <BuilderComponent model="page" content={pageJson} />
}
  
export default BuiderPage