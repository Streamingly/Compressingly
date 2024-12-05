import React from 'react';
import { useParams } from 'react-router-dom';
import { User, Calendar, BookOpen, ArrowLeft, Tag } from 'lucide-react';
import { Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';

const H265Compression = () => {
  const { slug } = useParams();

  const post = {
    title: "H.265/HEVC: Advanced Video Compression Explained",
    author: "Dr. Michael Zhang",
    date: "2024-03-15",
    readTime: "10 min read",
    category: "Video Compression",
    imageUrl: "/api/placeholder/1200/400",
    tags: ["H.265", "HEVC", "Video Compression", "4K", "Streaming"],
    content: {
      introduction: `As video content continues to evolve with higher resolutions like 4K and 8K, efficient compression technologies become increasingly crucial. H.265, also known as High Efficiency Video Coding (HEVC), is the successor to H.264/AVC and offers up to 50% better data compression at the same level of video quality. This means smoother streaming, reduced storage requirements, and enhanced viewing experiences across devices.`,

      sections: [
        {
          title: "What is H.265/HEVC?",
          content: `H.265/HEVC is a video compression standard developed by the Joint Collaborative Team on Video Coding (JCT-VC), a collaboration between the ISO/IEC Moving Picture Experts Group (MPEG) and the ITU-T Video Coding Experts Group (VCEG). The primary goal of H.265 is to improve compression efficiency, allowing for higher resolutions and better quality without proportional increases in bandwidth or storage.

Key advancements in H.265 include support for higher resolutions up to 8K UHD, improved parallel processing capabilities, and enhanced motion compensation and prediction algorithms. These improvements make H.265 ideal for modern video applications, from streaming services to broadcasting and video conferencing.`
        },
        {
          title: "Key Features and Improvements",
          content: `H.265 introduces several significant enhancements over its predecessor:

- **Larger Coding Tree Units (CTUs):** H.265 uses CTUs up to 64x64 pixels, compared to H.264's macroblocks of up to 16x16 pixels. This allows for more efficient encoding of large areas with little change.
- **Flexible Partitioning:** CTUs can be recursively partitioned into smaller units, down to 4x4 pixels, providing greater adaptability to complex image areas.
- **Advanced Motion Prediction:** Improved prediction techniques, including advanced motion vector prediction and merge modes, enhance compression efficiency.
- **Parallel Processing Tools:** Features like Tiles and Wavefront Parallel Processing (WPP) enable better utilization of multi-core processors, speeding up encoding and decoding.
- **Enhanced Intra Prediction Modes:** H.265 offers 35 intra prediction modes versus H.264's 9, allowing for more accurate prediction of pixel values within a frame.
- **Improved Deblocking and SAO Filters:** Enhanced filtering techniques reduce blocking artifacts and improve visual quality.`
        },
        {
          title: "Compression Efficiency Explained",
          content: `The superior compression efficiency of H.265 stems from its ability to more accurately model and remove redundancies in video data:

- **Increased Precision:** By supporting higher bit depths (up to 12 bits per sample), H.265 can represent subtle gradations in color and brightness more precisely.
- **Better Motion Compensation:** Enhanced algorithms for motion estimation and compensation allow for more efficient handling of moving objects.
- **Advanced Entropy Coding:** Techniques like Context-Adaptive Binary Arithmetic Coding (CABAC) are optimized in H.265 for better performance.
- **Improved Prediction Models:** Both intra-frame and inter-frame predictions are more sophisticated, reducing the amount of data needed to represent video content.`
        },
        {
          title: "Benefits of Adopting H.265",
          content: `Implementing H.265 offers numerous advantages:

- **Bandwidth Savings:** Reduced file sizes mean lower bandwidth usage for streaming services, enabling smoother playback even on slower connections.
- **Higher Quality Video:** Improved compression allows for higher quality video at the same bitrates used for lower quality H.264 content.
- **Future-Proofing:** Support for resolutions up to 8K ensures compatibility with future display technologies.
- **Cost Efficiency:** Lower storage and transmission costs due to smaller file sizes.
- **Enhanced Mobile Experience:** Better compression leads to less data consumption and longer battery life on mobile devices during video playback.`
        },
        {
          title: "Implementation Considerations",
          content: `When transitioning to H.265, consider the following best practices:

- **Hardware Support:** Ensure that encoding and decoding hardware supports H.265 to leverage performance benefits.
- **Licensing Fees:** Be aware of potential licensing costs associated with H.265 patents.
- **Encoding Parameters:** Optimize encoder settings based on the target audience and content type to balance quality and performance.
- **Compatibility:** Provide fallback options for devices and browsers that do not support H.265, such as using H.264 streams.
- **Adaptive Bitrate Streaming:** Implement technologies like HTTP Live Streaming (HLS) or Dynamic Adaptive Streaming over HTTP (DASH) to adjust video quality in real-time based on network conditions.`
        },
        {
          title: "Future of Video Compression",
          content: `While H.265 significantly advances video compression, emerging standards like AV1 and VVC (H.266) promise even greater efficiencies. However, H.265 currently offers the best balance between compression efficiency and widespread support, making it the optimal choice for many applications today. Staying informed about developments in video codecs will help you make strategic decisions for future-proofing your video content delivery.`
        }
      ],

      conclusion: `H.265/HEVC stands as a pivotal technology in the landscape of digital video, enabling the delivery of high-quality content in an efficient and cost-effective manner. By adopting H.265, content providers can offer superior viewing experiences, reduce operational costs, and meet the growing demand for high-resolution video. As the industry continues to evolve, embracing advanced codecs like H.265 will be essential for staying competitive and satisfying audience expectations.`
    }
  };

  return (
    <div className="w-full px-6 py-12">
      <Link 
        to="/blog" 
        className="inline-flex items-center text-indigo-600 hover:text-indigo-700 mb-8 group"
      >
        <ArrowLeft className="w-5 h-5 mr-2 transform group-hover:-translate-x-1 transition-transform duration-200" />
        Back to Blog
      </Link>

      <article className="bg-white rounded-2xl shadow-lg overflow-hidden">
        <header className="p-8 border-b border-gray-100">
          <div className="flex items-center gap-2 mb-4">
            <Tag className="w-4 h-4 text-indigo-600" />
            <span className="bg-indigo-50 text-indigo-700 px-3 py-1 rounded-full text-sm font-medium">
              {post.category}
            </span>
          </div>

          <h1 className="text-4xl font-bold mb-4 text-gray-900">
            {post.title}
          </h1>
          
          <div className="flex flex-wrap items-center gap-4 text-gray-600 mb-4">
            <div className="flex items-center">
              <User className="w-5 h-5 mr-2" />
              {post.author}
            </div>
            <div className="flex items-center">
              <Calendar className="w-5 h-5 mr-2" />
              {post.date}
            </div>
            <div className="flex items-center">
              <BookOpen className="w-5 h-5 mr-2" />
              {post.readTime}
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            {post.tags.map(tag => (
              <span key={tag} className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm">
                {tag}
              </span>
            ))}
          </div>
        </header>

        <div className="p-8">
          <div className="prose prose-lg max-w-none">
            <div className="mb-8">
              <img 
                src={post.imageUrl} 
                alt={post.title}
                className="w-full h-64 object-cover rounded-xl"
              />
            </div>
            
            <div className="text-gray-700">
              <ReactMarkdown className="text-lg leading-relaxed mb-8">
                {post.content.introduction}
              </ReactMarkdown>

              {post.content.sections.map((section, index) => (
                <section key={index} className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    {section.title}
                  </h2>
                  <ReactMarkdown className="prose prose-lg">
                    {section.content}
                  </ReactMarkdown>
                </section>
              ))}

              <ReactMarkdown className="text-lg leading-relaxed mt-8">
                {post.content.conclusion}
              </ReactMarkdown>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};

export default H265Compression;
