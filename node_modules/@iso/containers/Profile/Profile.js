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
import axios from 'axios';
import '@uppy/core/dist/style.css';
import '@uppy/dashboard/dist/style.css';
import Uppy from '@uppy/core';
import Tus from '@uppy/tus';
import GoogleDrive from '@uppy/google-drive';
import Dropbox from '@uppy/dropbox';
import Instagram from '@uppy/instagram';
import { Dashboard } from '@uppy/react';

const MyProfile = () => {
  
  const data = useSelector(state => state.profile.data);
  const loading = useSelector(state => state.profile.loading);
  const dispatch = useDispatch();
  const getProfile = useCallback(
    () => dispatch(profileActions.fetchProfileDataStart()),
    [dispatch]
  );

  const uppy = Uppy({
    debug: true,
    autoProceed: false,
    restrictions: {
      maxFileSize: 10000000,
      maxNumberOfFiles: 10,
      minNumberOfFiles: 1,
      allowedFileTypes: ['image/*', 'video/*'],
    },
  });
    uppy.use(GoogleDrive, {
      id: 'GoogleDrive',
      companionUrl: 'https://companion.uppy.io',
    });
    uppy.use(Dropbox, { companionUrl: 'https://companion.uppy.io' });
    uppy.use(Instagram, { companionUrl: 'https://companion.uppy.io' });
    uppy.use(Tus, {uploadUrl: '', endpoint: 'https://master.tus.io/files/' });
    uppy.on('complete', result => {
      console.log('successful files:', result.successful);
      console.log('failed files:', result.failed);
    });

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
                  <strong>{data.post.length}</strong> Gallery
                </li>
                <li
                  className={active === 'upload_picture' ? 'active' : ''}
                  onClick={() => handleMenu('upload_picture')}
                >
                  <strong type="button" class="ant-btn ant-btn-primary"> Upload Pictures</strong>
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
                {active === 'upload_picture' && 
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
                  />}
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
