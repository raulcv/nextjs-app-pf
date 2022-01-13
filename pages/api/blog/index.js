import {blogData} from '../../../utilities/blogData';
export default (req, res) => {
  res.status(200).json(blogData);
};
