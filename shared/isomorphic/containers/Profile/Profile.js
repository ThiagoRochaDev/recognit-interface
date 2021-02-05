import React, { useState, useEffect, useCallback } from 'react';
import Spin from '@iso/ui/Antd/Spin/Spin';
import Modal from '@iso/ui/Antd/Modal/Modal';
import Container from '@iso/ui/UI/Container/Container';
import AvatarCard from '@iso/components/AvatarCard/AvatarCard';
import Posts from './Posts/Posts';
import Followers from './Followers/Followers';
import Following from './Following/Following';
import Wrapper, { Banner, Navigation, ContentWrapper } from './Profile.styles';
import { useSelector, useDispatch } from 'react-redux';
import profileActions from '@iso/redux/profile/actions';
import '@uppy/core/dist/style.css';
import '@uppy/dashboard/dist/style.css';
import { Dashboard } from '@uppy/react';
import S3FileUpload from 'react-s3';

const MyProfile = () => {
  const data = useSelector(state => state.profile.data);
  const loading = useSelector(state => state.profile.loading);
  const dispatch = useDispatch();
  const getProfile = useCallback(
    () => dispatch(profileActions.fetchProfileDataStart()),
    [dispatch]
  );

  const config = {
    bucketName: 'image-bucket-uploads',
    region: 'us-east-1',
    accessKeyId: '',
    secretAccessKey: '',
    mode: 'no-cors',
  };

  const upload = e => {
    S3FileUpload.uploadFile(e.target.files[0], config)
      .then(data => {
        console.log(data.location);
      })
      .catch(err => {
        alert(err);
      });
  };

  const [active, setActive] = useState('post');
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    getProfile();
  }, [getProfile]);

  const handleMenu = type => {
    if (type === 'post') {
      setActive(type);
    }
    if (type === 'upload_picture') {
      setActive(type);
      setVisible(true);
    }
    if (type === 'following') {
      setActive(type);
      setVisible(true);
    }
  };

  const handleCancel = () => {
    setVisible(false);
    setActive('post');
  };

  return (
    <Wrapper>
      {loading !== true ? (
        <>
          <Banner
            className="profile-banner"
            style={{ backgroundImage: `url(${data.profile_bg})` }}
          >
            <Container className="container">
              <AvatarCard
                avatar={data.avatar}
                name={data.name}
                username={data.username}
              />
            </Container>
          </Banner>

          <Navigation className="navigation">
            <Container className="container">
              <ul className="menu">
                <li
                  className={active === 'post' ? 'active' : ''}
                  onClick={() => handleMenu('post')}
                >
                  <strong>{data.post.length}</strong> Pictures Gallery
                </li>
                <li>
                  <label
                    for="upload"
                    type="file"
                    class="ant-btn ant-btn-primary"
                  >
                    {' '}
                    UPLOAD PICTURES
                    <input
                      id="upload"
                      hidden
                      type="file"
                      onChange={upload}
                    ></input>
                  </label>
                </li>
                <li
                  className={active === 'following' ? 'active' : ''}
                  onClick={() => handleMenu('following')}
                >
                  <strong>{data.following.length}</strong> Client List
                </li>
              </ul>
            </Container>
          </Navigation>

          <ContentWrapper>
            <Container className="container">
              <Posts
                avatar={data.avatar}
                username={data.username}
                data={data.post}
              />
              <Modal
                wrapClassName="follow-modal"
                visible={visible}
                onCancel={handleCancel}
                footer={null}
              >
                {active === 'upload_picture' && (
                  <Dashboard
                    plugins={['GoogleDrive', 'Dropbox', 'Instagram']}
                    uppy={uppy}
                    inline={true}
                    target=".DashboardContainer"
                    replaceTargetContent={true}
                    showProgressDetails={true}
                    note=""
                    height={470}
                    width="100%"
                    metaFields={[
                      { id: 'name', name: 'Name', placeholder: 'file name' },
                      {
                        id: 'caption',
                        name: 'Caption',
                        placeholder: 'describe what the image is about',
                      },
                    ]}
                    browserBackButtonClose={true}
                  />
                )}
                {active === 'following' && <Following data={data.following} />}
              </Modal>
            </Container>
          </ContentWrapper>
        </>
      ) : (
        <div
          style={{
            minHeight: '150px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Spin />
        </div>
      )}
    </Wrapper>
  );
};

export default MyProfile;
