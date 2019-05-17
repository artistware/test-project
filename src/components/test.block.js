// generic post class will iterate through content
// of the post and pass data to the field prop.
// fields are determined by the ContentModel
// and a block is registered with the ContentModel from the CMS
// Blocks are available as an unassigned block from a dropdown
// Once assigned to a content model, a block should be unselectable but visible.
// Retrieve this list based off scanning src for *.block.js at relevant CMS check points
// ... may need gatsby or ssr in this situation ... TODO
// ... or dynamic import ... TODO
// import React from 'react';

// export default class BlockComponentThing extends React.PureComponent {
//   const {x, y, z} = this.props;
//   render() {
//      const {z} = this.props;
//      return (
//          <div>{z.thing}</div>
//      )
//   }
// });

// most blocks should be Pure and derive data w/ memoization from immuatable objects for best perf