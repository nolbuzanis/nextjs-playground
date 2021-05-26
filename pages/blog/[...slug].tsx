import { useRouter } from 'next/router';

const BlogPosts = (): JSX.Element => {
  const { query } = useRouter();
  console.log(query);
  return <div>Blog posts</div>;
};

export default BlogPosts;
