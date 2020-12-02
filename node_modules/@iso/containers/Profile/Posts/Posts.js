import React, { useState, Fragment, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import {
  IoIosArrowBack,
  IoIosArrowForward,
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle,
} from 'react-icons/io';
import {
  FiHeart,
  FiShare,
  FiBookmark,
  FiMessageCircle,
  FiMoreHorizontal,
} from 'react-icons/fi';
import GlideCarousel, { GlideSlide } from '@iso/ui/GlideCarousel/GlideCarousel';
import Modal from '@iso/ui/Antd/Modal/Modal';
import PostCard from '@iso/components/PostCard';
import AvatarCard from '@iso/components/AvatarCard/AvatarCard';
import Comments from './Comments';
import PostsWrapper, { Button, ContentWrapper } from './Posts.styles';

const galleryOptions = {
  gap: 0,
};

const Posts = ({data }) =>  {
  const [currentPost, setCurrentPost] = useState(0);
  const [visible, setVisible] = useState(false);

  const [items, setItems] = useState([]);

  useEffect(() => {
    async function getItems() {
      try {
        const { data } = await axios.get("https://cors-anywhere.herokuapp.com/https://w8ec7719ij.execute-api.us-east-1.amazonaws.com/dev/download_client_recognized", {
          mode: 'no-cors',
          headers: {'Content-Type': 'application/json'}});
        setItems(data);
        console.log(data, "result  axios")
      } catch (error) {
        console.log(error)
        alert("Ocorreu um erro ao buscar os items");
      }
    }
    getItems();
  }, []);
//console.log(items)
  const showSelectedPost = item => {
    setCurrentPost(item.position);
    setVisible(true);
  };

  const renderHtml = items => {
    return { __html: items };
  };

  const handleCancel = () => {
    setVisible(false);
  };

  const handlePrevPost = () => {
    setCurrentPost(currentPost - 1);
  };

  const handleNextPost = () => {
    setCurrentPost(currentPost + 1);
  };

  let newData = {};

  items.forEach(item => {
    if (item.position === currentPost) {
      newData = item;
    }
  });
  console.log(currentPost, "currentpost modal")
  return (
    
    <PostsWrapper>
      {items.map(item => (
        <PostCard
          key={item.id}
          variant="instagram"
          type={item.type}
          image={item.thumb_url}
          numberOflike=""
          numberOfView=""
          numberOfcomment=""
          onClick={() => showSelectedPost(item)}/>
      ))}
      <Modal
        wrapClassName="instagram-modal"
        visible={visible}
        onCancel={handleCancel}
        footer={null}
      >
        
        {currentPost > 1 && (
          <Button className="prev" onClick={handlePrevPost}>
            <IoIosArrowBack />
          </Button>
        )}
        {currentPost < items.length && (
          <Button className="next" onClick={handleNextPost}>
            <IoIosArrowForward />
          </Button>
        )}

        <ContentWrapper>
          <div className="media">
            {newData.type === 'image' && (
              <img src={newData.thumb_url} alt={'post'} />
            )}

            {newData.type === 'gallery' && (
              <GlideCarousel
                options={galleryOptions}
                bullets={true}
                prevButton={<IoIosArrowDropleftCircle />}
                nextButton={<IoIosArrowDroprightCircle />}
                numberOfBullets={newData.gallery.length}
                carouselSelector={`post-gallery--${newData.id}`}
              >
                <Fragment>
                  {newData.gallery.map((item, index) => (
                    <GlideSlide key={`gallery-key${index}`}>
                      <img src={item} alt={'post'} />
                    </GlideSlide>
                  ))}
                </Fragment>
              </GlideCarousel>
            )}

            {newData.type === 'video' && (
              <div
                className="video-container"
                dangerouslySetInnerHTML={renderHtml(newData.video)}
              ></div>
            )}
          </div>

          <div className="content">
            <header className="header">
              <div className="avatar-wrapper">
                <AvatarCard  username={newData.name} />
                {/* <span>•</span>
                <Link to="/dashboard/my-profile" rel="nofollow">
                  Follow
                </Link> */}
              </div>
              <button type="button">
                <FiMoreHorizontal />
              </button>
            </header>

            <div className="body">
              <div className="comments">
                
              </div>
            </div>

            <footer className="footer">
              <div className="top-bar">
                <button className="like" type="button">
                  <FiHeart />
                </button>
                <button className="comment" type="button">
                  <FiMessageCircle />
                </button>
                <button className="share" type="button">
                  <FiShare />
                </button>
                <button className="bookmark" type="button">
                  <FiBookmark />
                </button>
              </div>
              <div className="activity-info">
                <h5>{newData.numberOflike} likes</h5>
                <time>AUGUST 31</time>
              </div>
            </footer>
          </div>
        
        </ContentWrapper>
       
      </Modal>
    
    
    </PostsWrapper>
    
  );
};

export default Posts;
