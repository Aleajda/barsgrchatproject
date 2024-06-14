import { Dimmer, Loader, Image, Segment } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';

const Loader = () => {
  <div>
    <Segment>
      <Dimmer active>
        <Loader content='Loading' />
      </Dimmer>

      <Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' />
    </Segment>

    <Segment>
      <Dimmer active inverted>
        <Loader inverted content='Loading' />
      </Dimmer>

      <Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' />
    </Segment>
  </div>
}

export default Loader;