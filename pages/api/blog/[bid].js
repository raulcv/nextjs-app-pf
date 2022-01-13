import {blogData} from '../../../utilities/blogData';

const blogHandler = ({ query: { bid } }, res) => {
    const filtered = blogData.filter((b) => b.id === bid)

    // User with id exists
    if (filtered.length > 0) {
      res.status(200).json(filtered[0])
    } else {
      res.status(404).json({ message: `User with id: ${bid} not found.` })
    }
  };
  
  export default blogHandler;