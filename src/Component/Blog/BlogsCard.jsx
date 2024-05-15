import { Link } from "react-router-dom";

 

const BlogsCard = ({dataBlogs}) => {
    // console.log('blogsCard ', dataBlogs?.bannerImage);
    return (
        <Link to={`/blogdetails/${dataBlogs?._id}`}>
        <div>
            <div className="max-w-2xl overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
           <img className="min-h-[300px]" src={dataBlogs?.bannerImage} alt="" />

    <div className="p-6">
        <div className="h-[100px]">

            <span className="text-xs font-medium text-blue-600 uppercase dark:text-blue-400">Product</span>
            <a href="#" className="block mt-2 text-xl font-semibold text-gray-800 transition-colors duration-300 transform dark:text-white hover:text-gray-600 hover:underline" tabIndex="0" role="link">{dataBlogs?.title}</a>
            {/* <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Molestie parturient et sem ipsum volutpat vel. Natoque sem et aliquam mauris egestas quam volutpat viverra. In pretium nec senectus erat. Et malesuada lobortis.</p> */}
        </div>

        <div className="mt-4">
            <div className="flex items-center">
                <div className="flex items-center">
                    <img className="object-cover h-10 rounded-full" src="https://images.unsplash.com/photo-1586287011575-a23134f797f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=48&q=60" alt="Avatar" />
                    <a href="#" className="mx-2 font-semibold text-gray-700 dark:text-gray-200" tabIndex="0" role="link">{dataBlogs?.author}</a>
                </div>
                <span className="mx-1 text-xs text-gray-600 dark:text-gray-300">{dataBlogs?.date}</span>
            </div>
        </div>
    </div>
</div>

        </div>
        </Link>
    );
};

export default BlogsCard;